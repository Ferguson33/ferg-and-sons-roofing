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
              Yearly maintenance, repairs, and new roofs.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-steel-light">
              We inspect. We repair. We put a new roof on when it’s time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/plans" className="btn-primary">
                Memberships
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact?need=inspection" className="btn-ghost bg-transparent text-white border-white/25">
                Repairs &amp; inspections
              </Link>
              <Link href="/contact?need=bid" className="btn-ghost bg-transparent text-white border-white/25">
                New roofs
              </Link>
            </div>
            <p className="mt-5">
              <Link href="#christmas-lights" className="text-sm text-steel-light hover:text-white">
                Christmas lights — yearly hang and take-down →
              </Link>
            </p>
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

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-red">What we do</p>
          <h2 className="mt-3 max-w-3xl text-4xl text-charcoal">
            Three things, same company.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <ServiceCard
              image="/images/fasteners.jpg"
              alt="Metal roof fasteners"
              kicker="Yearly maintenance"
              title="Memberships"
              body={`One visit a year. Inspection, report, and labor and materials that fit the cap. Essential ${money(plans.essential.price)}. Preferred ${money(plans.preferred.price)} — house, attached garage, and one extra building.`}
              href="/plans"
              cta="See memberships"
            />
            <ServiceCard
              image="/images/ridge.jpg"
              alt="Ridge on an asphalt shingle roof"
              kicker="Repairs & inspections"
              title="Look at it. Fix what’s small."
              body={`One-time inspection and Professional Roof Report, ${money(plans.inspection.price)}. No work on that visit. Memberships include small repairs the same day.`}
              href="/contact?need=inspection"
              cta="Request an inspection"
            />
            <ServiceCard
              image="/images/hero.jpg"
              alt="Ranch house with a roof on sagebrush ground"
              kicker="New roofs"
              title="When the roof is done."
              body={`We quote the replacement and we install it. ${money(plans.inspection.price)} inspection credited if you hire us for the new roof.`}
              href="/contact?need=bid"
              cta="Ask about a new roof"
            />
          </div>
        </div>
      </section>

      <section id="christmas-lights" className="scroll-mt-24 border-y border-steel-light bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="max-w-2xl">
            <p className="font-display text-xs uppercase tracking-[0.28em] text-red">Extra, not a membership</p>
            <h2 className="mt-2 text-3xl text-charcoal">Christmas lights</h2>
            <p className="mt-3 leading-relaxed text-steel">
              Yearly hang and take-down. Quoted by the house and how many
              strands. Your lights or ours. Members get preferred pricing or a
              credit.
            </p>
          </div>
          <Link href="/contact?need=lights" className="btn-ghost shrink-0">
            Quote Christmas lights
          </Link>
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
            <Link href="/sample-report" className="inline-flex items-center gap-2 font-medium text-red">
              See a sample report <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/problems" className="inline-flex items-center gap-2 font-medium text-red">
              Common problems <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src="/images/garage.jpg"
            alt="Detached garage roof"
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
            <h2 className="text-3xl">Need the roof looked at — or a new one?</h2>
            <p className="mt-2 text-steel-light">
              {company.owner} · {displayPhone()} · {company.serviceArea}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?need=inspection" className="btn-primary">Request an inspection</Link>
            <Link href="/contact?need=bid" className="btn-ghost bg-transparent text-white border-white/25">
              New roof
            </Link>
            <Link href="/plans" className="btn-ghost bg-transparent text-white border-white/25">
              Memberships
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  image,
  alt,
  kicker,
  title,
  body,
  href,
  cta,
}: {
  image: string;
  alt: string;
  kicker: string;
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <article className="flex flex-col border border-steel-light bg-white">
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-red">{kicker}</p>
        <h3 className="mt-2 text-2xl text-charcoal">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{body}</p>
        <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-red">
          {cta} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
