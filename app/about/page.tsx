import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company, displayPhone } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description: `Josh Ferguson, ${company.legalName}. Thirteen years in Sublette County. Roofing here, in Florida, and in Michigan.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.28em] text-red">About</p>
      <h1 className="mt-3 max-w-3xl text-5xl text-charcoal">
        Thirteen years in Sublette County.
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="space-y-5 text-lg leading-relaxed text-steel">
          <p>
            Josh Ferguson has lived here 13 years. He has also roofed in Florida
            and Michigan, alongside other full-time work.
          </p>
          <p>
            {company.legalName} does inspections, small repairs, yearly
            memberships, and new roofs. We inspect, do the small work, and leave
            a written report. If the roof needs to be replaced, we quote it and
            we install it.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact?need=inspection" className="btn-primary">Request an inspection</Link>
            <Link href="/contact?need=bid" className="btn-ghost">New roof</Link>
            <a href={`tel:${company.tel}`} className="btn-ghost">
              Call {displayPhone()}
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src="/images/hero.jpg"
            alt="Ranch house on sagebrush ground in front of the Wind River Range"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
