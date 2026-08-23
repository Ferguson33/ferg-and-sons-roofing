import type { Metadata } from "next";
import Link from "next/link";
import { maintenanceIssues, replacementIssues } from "@/lib/company";

export const metadata: Metadata = {
  title: "Common problems",
  description:
    "Roof issues that yearly maintenance can address, and issues that mean the roof needs to come off.",
};

export default function ProblemsPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-6xl overflow-x-hidden px-4 py-16 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.28em] text-red">Common problems</p>
      <h1 className="mt-3 max-w-3xl text-balance text-3xl text-charcoal sm:text-4xl md:text-5xl">
        Some of this is maintenance. Some of it is a new roof.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-steel">
        Membership covers the first list. The second list means the roof needs
        to be replaced. We will say so in the report and quote the new roof.
      </p>

      <section className="mt-14">
        <h2 className="text-3xl text-charcoal">Addressed with maintenance</h2>
        <p className="mt-3 max-w-2xl text-steel">
          Left alone, these get worse and the roof wears out faster. A yearly
          visit catches them.
        </p>
        <ul className="mt-8 grid gap-6 lg:grid-cols-2">
          {maintenanceIssues.map((item) => (
            <li key={item.title} className="border-l-2 border-red pl-4">
              <h3 className="text-xl text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="placeholder-frame">Maintenance photo</div>
          <div className="placeholder-frame">Maintenance photo</div>
          <div className="placeholder-frame">Maintenance photo</div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl text-charcoal">Needs a new roof</h2>
        <p className="mt-3 max-w-2xl text-steel">
          Patching these wastes money. We won’t sell another year of repairs on a
          roof that should come off.
        </p>
        <ul className="mt-8 grid gap-6 lg:grid-cols-2">
          {replacementIssues.map((item) => (
            <li key={item.title} className="border-l-2 border-charcoal pl-4">
              <h3 className="text-xl text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="placeholder-frame">Replacement photo</div>
          <div className="placeholder-frame">Replacement photo</div>
          <div className="placeholder-frame">Replacement photo</div>
        </div>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/plans" className="btn-primary">See memberships</Link>
        <Link href="/contact?need=inspection" className="btn-ghost">Request an inspection</Link>
        <Link href="/contact?need=bid" className="btn-ghost">New roof</Link>
      </div>
    </div>
  );
}
