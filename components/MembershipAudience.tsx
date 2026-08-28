import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { membershipAudience } from "@/lib/company";

export function MembershipAudience({
  heading = "h2",
  withImage = false,
  cta = true,
}: {
  heading?: "h1" | "h2";
  withImage?: boolean;
  cta?: boolean;
}) {
  const Heading = heading;

  const copy = (
    <div>
      <p className="font-display text-xs uppercase tracking-[0.28em] text-red">
        {membershipAudience.kicker}
      </p>
      <Heading className="mt-3 max-w-3xl text-3xl text-charcoal sm:text-4xl">
        {membershipAudience.headline}
      </Heading>
      <div className="mt-5 max-w-xl space-y-4 text-lg leading-relaxed text-steel">
        {membershipAudience.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      {cta && (
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/plans" className="btn-primary">
            See memberships
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact?need=inspection" className="btn-ghost">
            Request an inspection
          </Link>
        </div>
      )}
    </div>
  );

  if (!withImage) {
    return copy;
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      {copy}
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
        <Image
          src="/images/truck.jpg"
          alt="Work truck at a house in Sublette County"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </div>
  );
}
