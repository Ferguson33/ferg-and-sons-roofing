import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { company, displayPhone } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request an inspection. Call ${company.owner} at ${displayPhone()}. ${company.serviceArea}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_18rem]">
      <div>
        <p className="font-display text-xs uppercase tracking-[0.28em] text-red">Contact</p>
        <h1 className="mt-3 text-5xl text-charcoal">How can we help.</h1>
        <p className="mt-4 max-w-xl text-lg text-steel">
          One-time inspection and report, yearly membership, or a replacement
          bid. Name, phone, and address. We’ll call back.
        </p>
        <div className="mt-10 rounded-sm border border-steel-light bg-white p-6 sm:p-8">
          <Suspense fallback={<p className="text-steel">Loading…</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
      <aside className="h-fit bg-charcoal p-6 text-white">
        <h2 className="text-xl">{company.owner}</h2>
        <a className="mt-3 block font-display text-3xl text-white" href={`tel:${company.tel}`}>
          {displayPhone()}
        </a>
        <p className="mt-4 text-sm text-steel-light">
          <a className="hover:text-white" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </p>
        <p className="mt-6 text-sm text-steel-light">{company.serviceArea}</p>
      </aside>
    </div>
  );
}
