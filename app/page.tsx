import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company, displayPhone, money, plans } from "@/lib/company";

export default function HomePage() {
  return (
    <>
      <section className="bg-charcoal text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-red">
              {company.legalName} · {company.serviceArea}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">
              Maintenance, inspections, and new roofs.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-steel-light">
              One-time inspections, reports, and bids too.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/plans" className="btn-primary">
                Memberships
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact?need=inspection" className="btn-ghost bg-transparent text-white border-white/25">
                Inspection / report
              </Link>
              <Link href="/contact?need=bid" className="btn-ghost bg-transparent text-white border-white/25">
                Get a bid
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/winter.jpg"
              alt="Snow on residential roofs in the mountains"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-steel-light bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
          <Step n="1" title="Inspect and repair" body="One visit. Small work gets done while we’re there." />
          <Step n="2" title="Stop leaks early" body="Failed caulk, loose screws, a few shingles." />
          <Step n="3" title="You get a report" body="Photos and findings. Bigger jobs are bid out." />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.28em] text-red">Memberships</p>
              <h2 className="mt-3 text-4xl text-charcoal">Inspection, or a yearly membership.</h2>
            </div>
            <Link href="/plans" className="text-sm font-medium text-red">
              Full details →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <HomeMembership
              name={plans.inspection.name}
              price={plans.inspection.price}
              per={plans.inspection.per}
              line="Inspection and report. No repairs. $199 credited if we install a new roof."
              featured={false}
            />
            <HomeMembership
              name={plans.essential.name}
              price={plans.essential.price}
              per={plans.essential.per}
              line={`Inspection, report, and up to ${money(plans.essential.allowance)} in repairs.`}
              featured={false}
            />
            <HomeMembership
              name={plans.preferred.name}
              price={plans.preferred.price}
              per={plans.preferred.per}
              line={`Inspection, report, and up to ${money(plans.preferred.allowance)} in repairs.`}
              featured
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.28em] text-red">The report</p>
          <h2 className="mt-3 text-4xl text-charcoal">A Professional Roof Report.</h2>
          <p className="mt-4 text-lg leading-relaxed text-steel">
            After the visit you keep dated photos and findings: satisfactory,
            maintenance required, monitor, or replacement recommended.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/plans" className="inline-flex items-center gap-2 font-medium text-red">
              What’s in a membership <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/problems" className="inline-flex items-center gap-2 font-medium text-red">
              Common problems <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src="/images/hero.jpg"
            alt="Ranch house with a roof on sagebrush ground"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-red">Job photos</p>
        <h2 className="mt-3 text-3xl text-charcoal">Job photos will go here.</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="placeholder-frame">Completed work</div>
          <div className="placeholder-frame">Before and after</div>
        </div>
      </section>

      <section className="bg-charcoal text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-3xl">Need the roof looked at?</h2>
            <p className="mt-2 text-steel-light">
              {company.owner} · {displayPhone()} · {company.serviceArea}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?need=inspection" className="btn-primary">Request an inspection</Link>
            <Link href="/plans" className="btn-ghost bg-transparent text-white border-white/25">
              See memberships
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div>
      <p className="font-display text-xs uppercase tracking-[0.22em] text-red">{n}</p>
      <h2 className="mt-2 text-xl text-charcoal">{title}</h2>
      <p className="mt-1 text-sm leading-relaxed text-steel">{body}</p>
    </div>
  );
}

function HomeMembership({
  name,
  price,
  per,
  line,
  featured,
}: {
  name: string;
  price: number;
  per: string;
  line: string;
  featured: boolean;
}) {
  return (
    <Link
      href="/plans"
      className={`block rounded-sm border p-6 transition-colors hover:border-red ${
        featured ? "border-red bg-paper" : "border-steel-light"
      }`}
    >
      <p className="font-display text-xs uppercase tracking-[0.22em] text-red">{name}</p>
      <p className="mt-2 font-display text-5xl text-charcoal">
        {money(price)}
        <span className="text-lg text-steel"> / {per}</span>
      </p>
      <p className="mt-3 text-sm text-steel">{line}</p>
      <p className="mt-6 text-sm font-medium text-red">See what’s included →</p>
    </Link>
  );
}
