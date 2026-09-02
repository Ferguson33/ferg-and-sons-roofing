import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { maintenanceIssues, replacementIssues } from "@/lib/company";

export const metadata: Metadata = {
  title: "Common problems",
  description:
    "Roof issues that yearly maintenance can address, and issues that mean the roof needs to come off.",
};

const replacementWithPhoto = replacementIssues.filter(
  (item): item is (typeof replacementIssues)[number] & { photo: { src: string; alt: string } } =>
    "photo" in item && item.photo != null,
);
const replacementText = replacementIssues.filter((item) => !("photo" in item));

export default function ProblemsPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-6xl overflow-x-hidden px-4 py-16 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.28em] text-red">Common problems</p>
      <h1 className="mt-3 max-w-3xl text-balance text-3xl text-charcoal sm:text-4xl md:text-5xl">
        Some of this is maintenance. Some of it is a new roof.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-steel">
        Membership covers the first list. The second list means the roof needs
        to be replaced. We will say so in the report and quote the new roof. A
        yearly visit catches this on cabins and rentals you are not in all year,
        and on the house you live in.
      </p>

      <section className="mt-14">
        <h2 className="text-3xl text-charcoal">Addressed with maintenance</h2>
        <p className="mt-3 max-w-2xl text-steel">
          Left alone, these get worse and the roof wears out faster. A yearly
          visit catches them.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {maintenanceIssues.map((item) => (
            <li key={item.title} className="flex min-w-0 flex-col border border-steel-light bg-white">
              <div className="relative aspect-[3/4] overflow-hidden bg-paper">
                <Image
                  src={item.photo.src}
                  alt={item.photo.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl text-charcoal">Needs a new roof</h2>
        <p className="mt-3 max-w-2xl text-steel">
          Patching these wastes money. We won’t sell another year of repairs on a
          roof that should come off.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {replacementWithPhoto.map((item) => (
            <li key={item.title} className="flex min-w-0 flex-col border border-steel-light bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <Image
                  src={item.photo.src}
                  alt={item.photo.alt}
                  fill
                  className="object-cover object-bottom"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="mt-8 grid gap-6 lg:grid-cols-2">
          {replacementText.map((item) => (
            <li key={item.title} className="border-l-2 border-charcoal pl-4">
              <h3 className="text-xl text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/plans" className="btn-primary">See memberships</Link>
        <Link href="/contact?need=inspection" className="btn-ghost">Request an inspection</Link>
        <Link href="/contact?need=bid" className="btn-ghost">New roof</Link>
      </div>
    </div>
  );
}
