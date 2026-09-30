import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Home, MapPin, Phone, ShieldCheck } from "lucide-react";
import { MembershipAudience } from "@/components/MembershipAudience";
import { company, displayPhone, money, plans } from "@/lib/company";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const callLabel = `Call ${company.owner.split(" ")[0]} ${displayPhone()}`;

  return (
    <>
      <section className="min-w-0 bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 lg:py-20">
          <div className="min-w-0">
            <p className="font-display text-base font-bold uppercase leading-snug tracking-[0.08em] text-charcoal sm:text-xl sm:tracking-[0.1em]">
              {company.legalName}
            </p>
            <h1 className="mt-3 text-balance text-4xl leading-[1.08] text-charcoal sm:mt-5 sm:text-5xl lg:text-6xl">
              Pinedale roofer: inspections, repairs, new roofs
            </h1>
            <p className="mt-3 max-w-xl text-lg leading-snug text-steel sm:mt-5 sm:leading-relaxed">
              {`Cabins, second homes, and rentals: we check the roof when you can't.`}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link href="/contact?need=inspection" className="btn-primary">
                {money(plans.inspection.price)} Inspection / Bid
              </Link>
              <a href={`tel:${company.tel}`} className="btn-ghost">
                <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                {callLabel}
              </a>
            </div>
            <p className="mt-4">
              <Link
                href="/plans"
                className="inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-red hover:text-red-dark"
              >
                Yearly memberships from {money(plans.essential.price)}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </p>
            <p className="mt-3 max-w-xl text-sm leading-snug text-steel">
              {company.insured} · {company.yearsHere} years roofing · Serving Pinedale,
              Marbleton, Big Piney, Daniel, and Sublette County
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:aspect-[5/4]">
            {/* TODO: swap for a real finished-roof photo from Josh when available. */}
            <Image
              src="/images/sample-report/08.jpg"
              alt="Rust-red metal roof trim and ridge on a Sublette County home"
              fill
              priority
              className="object-cover object-[center_40%]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-steel-light bg-white" aria-labelledby="why-ferg">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <h2 id="why-ferg" className="text-2xl text-charcoal sm:text-3xl">
            Why Ferg & Sons
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:mt-10 lg:grid-cols-4 lg:gap-8">
            <li className="min-w-0">
              <MapPin className="h-6 w-6 text-red" aria-hidden="true" />
              <h3 className="mt-3 text-lg leading-snug text-charcoal">Local</h3>
              <p className="mt-2 text-sm leading-snug text-steel">
                Based in Pinedale. We serve Marbleton, Big Piney, Daniel, and all of
                Sublette County.
              </p>
            </li>
            <li className="min-w-0">
              <ShieldCheck className="h-6 w-6 text-red" aria-hidden="true" />
              <h3 className="mt-3 text-lg leading-snug text-charcoal">Fully insured</h3>
              <p className="mt-2 text-sm leading-snug text-steel">{company.insured} for roof work.</p>
            </li>
            <li className="min-w-0">
              <Home className="h-6 w-6 text-red" aria-hidden="true" />
              <h3 className="mt-3 text-lg leading-snug text-charcoal">Remote-owner friendly</h3>
              <p className="mt-2 text-sm leading-snug text-steel">
                Not in town? We check the roof and tell you what we found.
              </p>
            </li>
            <li className="min-w-0">
              <Camera className="h-6 w-6 text-red" aria-hidden="true" />
              <h3 className="mt-3 text-lg leading-snug text-charcoal">Photo reports</h3>
              <p className="mt-2 text-sm leading-snug text-steel">
                A dated written report with photos after every inspection.
              </p>
              <Link
                href="/sample-report"
                className="mt-2 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-red hover:text-red-dark"
              >
                See a sample
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-red">What we do</p>
          <h2 className="mt-3 max-w-3xl text-3xl text-charcoal sm:text-4xl">
            Memberships, inspections, and new roofs.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <ServiceCard
              image="/images/sample-report/06.jpg"
              alt="Screw standing up on a metal roof, threads showing"
              kicker="Yearly"
              title="Memberships"
              body={`Second homes, cabins, rentals, and year-round houses. Each year we inspect, send a written report, and do small repairs up to the plan amount. Essential ${money(plans.essential.price)}. Preferred ${money(plans.preferred.price)}, for multi-building and commercial.`}
              href="/plans"
              cta="See memberships"
            />
            <ServiceCard
              image="/images/sample-report/03.jpg"
              alt="Vent boot with peeling mastic, photographed on an inspection"
              kicker={`${money(plans.inspection.price)} / visit`}
              title="Inspection / Bid"
              body={`The ${money(plans.inspection.price)} Inspection / Bid: we look at the roof and send a written report. No repairs included. If we have the materials, we can do the work that day. If we don't, we quote it and put you on the schedule. If the roof needs to come off, we bid it.`}
              href="/contact?need=inspection"
              cta="Request Inspection / Bid"
            />
            <ServiceCard
              image="/images/jobs/new-osb-deck.jpg"
              alt="New OSB roof deck on a replacement job"
              kicker="Replacement"
              title="New roofs"
              body={`If the roof needs to be replaced, we quote the job and we install it. Hire us for the new roof and the ${money(plans.inspection.price)} Inspection / Bid comes off that price.`}
              href="/contact?need=bid"
              cta="Ask about a new roof"
            />
          </div>
        </div>
      </section>

      <section id="who-its-for" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <MembershipAudience />
      </section>

      <section id="christmas-lights" className="scroll-mt-24 border-y border-steel-light bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="max-w-2xl">
            <p className="font-display text-xs uppercase tracking-[0.28em] text-red">Not part of a membership</p>
            <h2 className="mt-2 text-3xl text-charcoal">Christmas lights</h2>
            <p className="mt-3 leading-relaxed text-steel">
              We hang them and take them down each year. Price depends on the
              house and how many strands. Your lights or ours. Members get
              preferred pricing or a credit.
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
          <h2 className="mt-3 text-3xl text-charcoal sm:text-4xl">A written roof report after every inspection.</h2>
          <p className="mt-4 text-lg leading-relaxed text-steel">
            You keep dated photos and findings. Each item is marked
            satisfactory, monitor, needs maintenance, or replace.
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
            src="/images/sample-report/01.jpg"
            alt="Sample report photo — garage corner, metal does not meet, wood in the hole"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-red">On the job</p>
        <h2 className="mt-3 text-3xl text-charcoal">Two different houses.</h2>

        <div className="mt-10">
          <h3 className="text-xl text-charcoal">Wind damage — patched, then two new panels</h3>
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-steel">
            Wind lifted metal. We patched it, came back, and replaced two panels.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <figure className="min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/jobs/metal-underlayment.jpg"
                  alt="Green metal roof patched with underlayment after wind damage"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="mt-2 text-sm text-steel">The patch.</figcaption>
            </figure>
            <figure className="min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/jobs/metal-panels-in.jpg"
                  alt="Two replacement panels on a green metal roof"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="mt-2 text-sm text-steel">Two panels replaced.</figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl text-charcoal">A new roof</h3>
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-steel">
            Fix a small problem before it becomes a big one. This deck had to
            come off with the old roof.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <figure className="min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/jobs/tearoff-deck.jpg"
                  alt="Tear-off: open rafters, insulation, and deck"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="mt-2 text-sm text-steel">Tear-off.</figcaption>
            </figure>
            <figure className="min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/jobs/new-osb-deck.jpg"
                  alt="New OSB roof deck"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="mt-2 text-sm text-steel">New deck.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-3xl">Call for an inspection / bid, a membership, or a new roof.</h2>
            <p className="mt-2 text-steel-light">
              {company.owner} · {displayPhone()} · {company.insured} · {company.serviceArea}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?need=inspection" className="btn-primary">Request Inspection / Bid</Link>
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
        <p className="mt-3 flex-1 text-base leading-relaxed text-steel">{body}</p>
        <Link href={href} className="mt-6 inline-flex items-center gap-2 text-base font-medium text-red">
          {cta} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
