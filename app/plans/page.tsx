import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  basicRepairs,
  inspectionChecklist,
  money,
  plans,
  reportSections,
} from "@/lib/company";

export const metadata: Metadata = {
  title: "Memberships",
  description: `Inspection ${money(plans.inspection.price)}, Essential ${money(plans.essential.price)} / year, or Preferred ${money(plans.preferred.price)} / year.`,
};

export default function PlansPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.28em] text-red">Memberships</p>
      <h1 className="mt-3 max-w-3xl text-5xl text-charcoal">
        A one-time inspection, or a yearly membership.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-steel">
        Inspection and Essential cover the house and attached garage. Preferred
        also includes one extra building — a detached garage, shop, or similar.
        Unused repair money does not roll over. It is not refunded.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <MembershipCard
          name={plans.inspection.name}
          price={plans.inspection.price}
          per={plans.inspection.per}
          blurb={plans.inspection.blurb}
          features={plans.inspection.features}
          href="/contact?plan=inspection"
          featured={false}
          kicker="No repairs"
        />
        <MembershipCard
          name={plans.essential.name}
          price={plans.essential.price}
          per={plans.essential.per}
          blurb={plans.essential.blurb}
          features={plans.essential.features}
          href="/contact?plan=essential"
          featured={false}
        />
        <MembershipCard
          name={plans.preferred.name}
          price={plans.preferred.price}
          per={plans.preferred.per}
          blurb={plans.preferred.blurb}
          features={plans.preferred.features}
          href="/contact?plan=preferred"
          featured
          kicker="House plus one extra building"
        />
      </div>

      <section className="mt-16 overflow-x-auto">
        <h2 className="text-3xl text-charcoal">Side by side</h2>
        <table className="mt-6 w-full min-w-[40rem] text-left text-sm">
          <thead>
            <tr className="border-b border-steel-light">
              <th className="py-3 pr-4 font-display text-[0.65rem] uppercase tracking-[0.16em] text-steel">
                Included
              </th>
              <th className="py-3 pr-4 font-display text-[0.65rem] uppercase tracking-[0.16em] text-steel">
                Inspection {money(plans.inspection.price)}
              </th>
              <th className="py-3 pr-4 font-display text-[0.65rem] uppercase tracking-[0.16em] text-steel">
                Essential {money(plans.essential.price)}
              </th>
              <th className="py-3 font-display text-[0.65rem] uppercase tracking-[0.16em] text-steel">
                Preferred {money(plans.preferred.price)}
              </th>
            </tr>
          </thead>
          <tbody className="text-charcoal">
            <Row label="House roof" a="Yes" b="Yes" c="Yes" />
            <Row label="Attached / connected garage" a="Yes" b="Yes" c="Yes" />
            <Row label="Detached garage, shop, or similar" a="Quoted" b="Quoted" c="One included" />
            <Row label="Inspection" a="Yes" b="Yes" c="Yes" />
            <Row label="Dated report with photos" a="Yes" b="Yes" c="Yes" />
            <Row label="Labor and materials" a="None" b={`Up to ${money(plans.essential.allowance)}`} c={`Up to ${money(plans.preferred.allowance)}`} />
            <Row label="Unused repair money" a="—" b="Does not roll over" c="Does not roll over" />
            <Row label="Debris clean if the roof is safe" a="No" b="No" c="Yes" />
            <Row label="Work past the included amount" a="—" b="Priced before work" c="10% off that labor" />
            <Row label="Tear-off or new roof" a="Quoted separately" b="Quoted separately" c="Quoted separately" />
            <Row
              label={`$${plans.inspection.price} inspection comes off a new roof we install`}
              a="Yes"
              b="Yes"
              c="Yes"
            />
            <Row label="Christmas lights (hang + take-down)" a="Quoted" b="Member price or credit" c="Member price or credit" />
          </tbody>
        </table>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl text-charcoal">The visit</h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-steel">
          Inspection is look-and-report only. We do not repair anything on that
          visit. Essential and Preferred include labor and materials up to the
          plan amount. Preferred adds a debris clean if the roof is safe.
        </p>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="text-3xl text-charcoal">What is inspected</h2>
          <p className="mt-3 text-steel">
            If something needs work, it is photographed and listed in the report.
          </p>
          <ul className="mt-6 grid gap-2">
            {inspectionChecklist.map((item) => (
              <li key={item} className="border-l-2 border-red pl-4 py-1.5 text-charcoal">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src="/images/ridge.jpg"
            alt="Ridge on an asphalt shingle roof"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl text-charcoal">Professional Roof Report</h2>
        <p className="mt-3 max-w-2xl text-steel">
          Same report on all three options. Dated photos and findings for this
          house.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {reportSections.map((section) => (
            <article key={section.title} className="border border-steel-light bg-white p-6">
              <h3 className="text-xl text-charcoal">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{section.body}</p>
            </article>
          ))}
        </div>
        <Link href="/sample-report" className="mt-6 inline-block font-medium text-red">
          See a sample report →
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl text-charcoal">Small repairs included</h2>
        <p className="mt-3 max-w-2xl text-steel">
          Inspection includes none. Essential up to {money(plans.essential.allowance)}{" "}
          in labor and materials. Preferred up to {money(plans.preferred.allowance)}{" "}
          in labor and materials. Past that amount, we price the extra work first.
          Preferred is 10% off that extra labor. Unused amount does not roll over.
        </p>
        <ol className="mt-8 space-y-4">
          {basicRepairs.map((item, i) => (
            <li key={item.title} className="border-l-2 border-steel-light pl-4 py-2">
              <p className="font-medium text-charcoal">
                {i + 1}. {item.title}
              </p>
              <p className="mt-1 text-sm text-steel">{item.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="border border-steel-light bg-white p-6 sm:p-8">
          <h2 className="text-2xl text-charcoal">If you need a new roof</h2>
          <p className="mt-3 leading-relaxed text-steel">
            A new roof is quoted separately. We install it. If you hire us for
            that job, the {money(plans.inspection.price)} inspection comes off
            the new roof price. Membership work already done is not refunded.
          </p>
        </div>
        <div id="christmas-lights" className="scroll-mt-24 border border-steel-light bg-white p-6 sm:p-8">
          <h2 className="text-2xl text-charcoal">Christmas lights</h2>
          <p className="mt-3 leading-relaxed text-steel">
            Yearly hang and take-down. Extra, not in the membership. Price
            depends on the house and how many strands. Your lights or ours.
            Members get preferred pricing or a credit. Call for a quote.
          </p>
        </div>
      </section>

      <section className="mt-16 border border-steel-light bg-white p-6 sm:p-8">
        <h2 className="text-3xl text-charcoal">Not in the yearly price</h2>
        <ul className="mt-4 space-y-2 text-steel">
          <li>Extra buildings past what’s included — quoted. Preferred includes one additional building.</li>
          <li>Unused repair money — no rollover, no refund.</li>
          <li>A new roof or tear-off — quoted separately. If we install it, the {money(plans.inspection.price)} inspection comes off that job.</li>
          <li>Christmas lights — extra. Yearly hang and take-down. Members get preferred pricing or a credit.</li>
        </ul>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/contact" className="btn-primary">Request an inspection</Link>
        <Link href="/contact?need=bid" className="btn-ghost">New roof</Link>
        <Link href="/contact?need=lights" className="btn-ghost">Christmas lights</Link>
      </div>
    </div>
  );
}

function Row({ label, a, b, c }: { label: string; a: string; b: string; c: string }) {
  return (
    <tr className="border-b border-steel-light/80">
      <td className="py-3 pr-4 text-steel">{label}</td>
      <td className="py-3 pr-4">{a}</td>
      <td className="py-3 pr-4">{b}</td>
      <td className="py-3">{c}</td>
    </tr>
  );
}

function MembershipCard({
  name,
  price,
  per,
  blurb,
  features,
  href,
  featured,
  kicker,
}: {
  name: string;
  price: number;
  per: string;
  blurb: string;
  features: readonly string[];
  href: string;
  featured: boolean;
  kicker?: string;
}) {
  return (
    <article
      className={`flex flex-col rounded-sm border p-8 ${
        featured ? "border-red shadow-[0_0_0_1px_#c44536]" : "border-steel-light bg-white"
      }`}
    >
      {kicker && (
        <p className="font-display text-xs uppercase tracking-[0.22em] text-red">
          {kicker}
        </p>
      )}
      <h2 className="mt-2 text-3xl text-charcoal">{name}</h2>
      <p className="mt-2 font-display text-5xl text-charcoal">
        {money(price)}
        <span className="text-lg text-steel"> / {per}</span>
      </p>
      <p className="mt-3 text-steel">{blurb}</p>
      <ul className="mt-6 flex-1 space-y-3 text-charcoal">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
            {f}
          </li>
        ))}
      </ul>
      <Link href={href} className="btn-primary mt-8 justify-center">
        Request {name}
      </Link>
    </article>
  );
}
