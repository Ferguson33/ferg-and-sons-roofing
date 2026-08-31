"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { company, plans } from "@/lib/company";

const roofTypes = ["Metal", "Asphalt", "Other"] as const;
const propertyKinds = [
  "Year-round home",
  "Second home or cabin",
  "Rental or Airbnb",
  "Not sure",
] as const;
const planChoices = [
  "Not sure",
  plans.inspection.name,
  plans.essential.name,
  plans.preferred.name,
] as const;
const needs = [
  "Inspection / Bid",
  "Membership",
  "New roof",
  "Christmas lights",
  "Other",
] as const;

export function ContactForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");
  const needParam = searchParams.get("need");
  const defaultPlan =
    planParam === "preferred"
      ? plans.preferred.name
      : planParam === "essential"
        ? plans.essential.name
        : planParam === "inspection" || needParam === "inspection"
          ? plans.inspection.name
          : "Not sure";
  const defaultNeed: (typeof needs)[number] =
    needParam === "bid"
      ? "New roof"
      : needParam === "membership" || planParam === "essential" || planParam === "preferred"
        ? "Membership"
        : needParam === "lights"
          ? "Christmas lights"
          : "Inspection / Bid";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [roof, setRoof] = useState<(typeof roofTypes)[number]>("Metal");
  const [propertyKind, setPropertyKind] = useState<(typeof propertyKinds)[number]>("Not sure");
  const [plan, setPlan] = useState<(typeof planChoices)[number]>(defaultPlan);
  const [need, setNeed] = useState<(typeof needs)[number]>(defaultNeed);
  const [message, setMessage] = useState("");
  const [gotcha, setGotcha] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "copied">("idle");

  const body = useMemo(() => {
    return [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "—"}`,
      `Address: ${address || "—"}`,
      `Property: ${propertyKind}`,
      `Roof type: ${roof}`,
      `Need: ${need}`,
      `Membership: ${plan}`,
      "",
      "Message:",
      message || "—",
    ].join("\n");
  }, [name, phone, email, address, propertyKind, roof, plan, need, message]);

  function requireBasics() {
    if (!name.trim() || !phone.trim()) {
      alert("A name and a phone number are needed so we can call you back.");
      return false;
    }
    return true;
  }

  function resetForm() {
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setRoof("Metal");
    setPropertyKind("Not sure");
    setPlan(defaultPlan);
    setNeed(defaultNeed);
    setMessage("");
    setGotcha("");
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!requireBasics()) return;
    setStatus("sending");

    const payload: Record<string, string> = {
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim() || "—",
      property: propertyKind,
      roof,
      need,
      membership: plan,
      message: message.trim() || "—",
      _subject: `${company.legalName} — ${need}`,
      _gotcha: gotcha,
    };
    if (email.trim()) {
      payload.email = email.trim();
    }

    try {
      const res = await fetch(company.formspree, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("send-failed");
      resetForm();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  async function onCopy() {
    if (!requireBasics()) return;
    await navigator.clipboard.writeText(body);
    setStatus("copied");
  }

  return (
    <form action={company.formspree} method="POST" onSubmit={onSubmit} className="grid gap-5">
      <input type="hidden" name="_subject" value={`${company.legalName} — ${need}`} />
      <input
        type="text"
        name="_gotcha"
        value={gotcha}
        onChange={(e) => setGotcha(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span>Name</span>
          <input name="name" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
        </label>
        <label className="field">
          <span>Phone</span>
          <input name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required autoComplete="tel" />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </label>
        <label className="field">
          <span>Roof type</span>
          <select name="roof" value={roof} onChange={(e) => setRoof(e.target.value as typeof roof)}>
            {roofTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="field sm:col-span-2">
          <span>Address</span>
          <input
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            autoComplete="street-address"
          />
        </label>
        <label className="field sm:col-span-2">
          <span>What kind of place</span>
          <select
            name="property"
            value={propertyKind}
            onChange={(e) => setPropertyKind(e.target.value as typeof propertyKind)}
          >
            {propertyKinds.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </label>
        <label className="field sm:col-span-2">
          <span>What do you need</span>
          <select name="need" value={need} onChange={(e) => setNeed(e.target.value as typeof need)}>
            {needs.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="field sm:col-span-2">
          <span>Membership</span>
          <select name="membership" value={plan} onChange={(e) => setPlan(e.target.value as typeof plan)}>
            {planChoices.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <label className="field sm:col-span-2">
          <span>Message</span>
          <textarea
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Roof type, leaks, about how old it is…"
          />
        </label>
      </div>
      <div className="flex flex-wrap gap-3">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send request"}
        </button>
        <button type="button" className="btn-ghost" onClick={onCopy} disabled={status === "sending"}>
          Copy to send later
        </button>
      </div>
      {status === "copied" && (
        <p className="text-sm text-steel">Copied. Paste it into a text or an email.</p>
      )}
      {status === "sent" && (
        <p className="text-sm text-steel">Sent. We’ll call you back.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-steel">
          Could not send. Call {company.owner} or email{" "}
          <a className="underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
