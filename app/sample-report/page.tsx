import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { company, displayPhone, mailingLine } from "@/lib/company";

export const metadata: Metadata = {
  title: "Sample roof report",
  description: `Example of the dated roof report ${company.legalName} gives the owner after an inspection.`,
};

const photos = [
  {
    src: "/images/hero.jpg",
    caption: "Photo 1 — House, south elevation. Overall context.",
  },
  {
    src: "/images/winter.jpg",
    caption: "Photo 2 — North slope. Snow load typical for this county.",
  },
  {
    src: "/images/ridge.jpg",
    caption: "Photo 3 — Ridge. Covering intact on this run.",
  },
  {
    src: "/images/garage.jpg",
    caption: "Photo 4 — Detached garage, west. Separate roof, same visit.",
  },
  {
    src: "/images/fasteners.jpg",
    caption: "Photo 5 — Finding 2. Fasteners backing out on metal panel.",
  },
  {
    src: "/images/truck.jpg",
    caption: "Photo 6 — East eave. Drainage and ice line.",
  },
] as const;

export default function SampleReportPage() {
  return (
    <div className="bg-paper">
      <div className="border-b border-red bg-red px-4 py-2 text-center text-sm font-medium text-white">
        Example only — not a real property. A full report has a photo for every finding.
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <article className="paper">
          <header className="flex items-start justify-between gap-6 border-b-2 border-charcoal pb-5">
            <div>
              <Logo className="h-16 w-auto" />
              <p className="mt-3 text-xs leading-relaxed text-steel">
                {mailingLine}
                <br />
                {company.owner} · {displayPhone()}
                <br />
                {company.email}
              </p>
            </div>
            <div className="text-right">
              <p className="font-display text-3xl uppercase tracking-[0.14em] text-charcoal">
                Roof report
              </p>
              <p className="mt-2 font-medium">RPT-SAMPLE</p>
              <p className="text-sm text-steel">June 12, 2026</p>
            </div>
          </header>

          <section className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-[0.65rem] uppercase tracking-[0.22em] text-red">
                Property / owner
              </h2>
              <p className="mt-1 font-medium">Sample property</p>
              <p className="text-sm text-steel">
                100 Sagebrush Lane
                <br />
                Pinedale, WY 82941
              </p>
            </div>
            <div>
              <h2 className="font-display text-[0.65rem] uppercase tracking-[0.22em] text-red">Roof</h2>
              <p className="mt-1 text-sm">
                Type: Asphalt shingle (house) · Metal (garage)
                <br />
                Age: ~18 years · Pitch: 6/12 · Layers: 1 (visible)
              </p>
              <p className="mt-2 font-medium">Needs maintenance</p>
            </div>
          </section>

          <table className="mt-8 w-full text-sm">
            <thead>
              <tr className="border-b border-steel-light text-left">
                <th className="py-2 font-display text-[0.65rem] uppercase tracking-[0.16em] text-steel">
                  Location
                </th>
                <th className="py-2 font-display text-[0.65rem] uppercase tracking-[0.16em] text-steel">
                  Finding
                </th>
                <th className="py-2 font-display text-[0.65rem] uppercase tracking-[0.16em] text-steel">
                  Severity
                </th>
                <th className="py-2 font-display text-[0.65rem] uppercase tracking-[0.16em] text-steel">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-steel-light/70 align-top">
                <td className="py-2.5">South slope</td>
                <td className="py-2.5">Covering intact. Granules holding.</td>
                <td className="py-2.5">—</td>
                <td className="py-2.5">Satisfactory</td>
              </tr>
              <tr className="border-b border-steel-light/70 align-top">
                <td className="py-2.5">West pipe boot (kitchen)</td>
                <td className="py-2.5">Caulk cracked and pulled from the boot. Path for water.</td>
                <td className="py-2.5">Moderate</td>
                <td className="py-2.5">Maintenance required — reseal</td>
              </tr>
              <tr className="border-b border-steel-light/70 align-top">
                <td className="py-2.5">Garage, metal panels</td>
                <td className="py-2.5">Fasteners backing out on the west run.</td>
                <td className="py-2.5">Minor</td>
                <td className="py-2.5">Maintenance required — tighten / replace screws</td>
              </tr>
              <tr className="border-b border-steel-light/70 align-top">
                <td className="py-2.5">North eave</td>
                <td className="py-2.5">Ice line. No rot visible from this visit.</td>
                <td className="py-2.5">Minor</td>
                <td className="py-2.5">Monitor</td>
              </tr>
              <tr className="border-b border-steel-light/70 align-top">
                <td className="py-2.5">House field shingles</td>
                <td className="py-2.5">Age-typical wear. Not at end of life this year.</td>
                <td className="py-2.5">—</td>
                <td className="py-2.5">Monitor</td>
              </tr>
            </tbody>
          </table>

          <section className="mt-8">
            <h2 className="font-display text-[0.65rem] uppercase tracking-[0.22em] text-red">
              Recommended work
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-steel">
              Maintenance required: reseal the west pipe boot; snug or replace
              backed-out garage fasteners. Monitor the north eave through next
              winter. No replacement recommended on this date.
            </p>
          </section>

          <section className="mt-8 grid gap-4 sm:grid-cols-2">
            {photos.map((photo) => (
              <figure key={photo.src}>
                <div className="relative aspect-[4/3] overflow-hidden border border-steel-light">
                  <Image src={photo.src} alt={photo.caption} fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
                </div>
                <figcaption className="mt-1 text-xs text-steel">{photo.caption}</figcaption>
              </figure>
            ))}
          </section>

          <p className="mt-10 text-center text-[0.7rem] uppercase tracking-[0.16em] text-steel">
            Example. A working report matches each finding to a photo and names the
            house. This report documents condition on the date of inspection. It is
            not a warranty.
          </p>
        </article>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">Request an inspection</Link>
          <Link href="/plans" className="btn-ghost">Memberships</Link>
        </div>
      </div>
    </div>
  );
}
