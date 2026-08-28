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
  "One-time inspection / report",
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
        : planParam === "inspection"
          ? plans.inspection.name
          : "Not sure";
  const defaultNeed: (typeof needs)[number] =
    needParam === "bid"
      ? "New roof"
      : needParam === "membership" || planParam === "essential" || planParam === "preferred"
        ? "Membership"
        : needParam === "lights"
          ? "Christmas lights"
          : "One-time inspection / report";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [roof, setRoof] = useState<(typeof roofTypes)[number]>("Metal");
  const [propertyKind, setPropertyKind] = useState<(typeof propertyKinds)[number]>("Not sure");
  const [plan, setPlan] = useState<(typeof planChoices)[number]>(defaultPlan);
  const [need, setNeed] = useState<(typeof needs)[number]>(defaultNeed);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "copied" | "mailed">("idle");

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

  const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
    `${company.legalName} — ${need}`
  )}&body=${encodeURIComponent(body)}`;

  function requireBasics() {
    if (!name.trim() || !phone.trim()) {
      alert("A name and a phone number are needed so we can call you back.");
      return false;
    }
    return true;
  }

  function onMail(e: FormEvent) {
    e.preventDefault();
    if (!requireBasics()) return;
    window.location.href = mailto;
    setStatus("mailed");
  }

  async function onCopy() {
    if (!requireBasics()) return;
    await navigator.clipboard.writeText(body);
    setStatus("copied");
  }

  return (
    <form onSubmit={onMail} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span>Name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
        </label>
        <label className="field">
          <span>Phone</span>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} required autoComplete="tel" />
        </label>
        <label className="field">
          <span>Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </label>
        <label className="field">
          <span>Roof type</span>
          <select value={roof} onChange={(e) => setRoof(e.target.value as typeof roof)}>
            {roofTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="field sm:col-span-2">
          <span>Address</span>
          <input value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="street-address" />
        </label>
        <label className="field sm:col-span-2">
          <span>What kind of place</span>
          <select
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
          <select value={need} onChange={(e) => setNeed(e.target.value as typeof need)}>
            {needs.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="field sm:col-span-2">
          <span>Membership</span>
          <select value={plan} onChange={(e) => setPlan(e.target.value as typeof plan)}>
            {planChoices.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <label className="field sm:col-span-2">
          <span>Message</span>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Roof type, leaks, about how old it is…"
          />
        </label>
      </div>
      <div className="flex flex-wrap gap-3">
        <button type="submit" className="btn-primary">
          Send request
        </button>
        <button type="button" className="btn-ghost" onClick={onCopy}>
          Copy to send later
        </button>
      </div>
      {status === "copied" && (
        <p className="text-sm text-steel">Copied. Paste it into a text or an email.</p>
      )}
      {status === "mailed" && (
        <p className="text-sm text-steel">
          Your email app should open. If it doesn’t, send it to{" "}
          <a className="underline" href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      )}
    </form>
  );
}
