import Link from "next/link";
import { Logo } from "./Logo";
import { company, displayPhone } from "@/lib/company";

export function Footer() {
  return (
    <footer className="mt-auto bg-charcoal-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo invert variant="stacked" markClassName="h-14 w-14" className="items-start" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel-light">
            Yearly maintenance, repairs, and new roofs. Christmas lights too.
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm uppercase tracking-[0.22em] text-red">Pages</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-red" href="/plans">Memberships</Link></li>
            <li><Link className="hover:text-red" href="/contact?need=inspection">Repairs &amp; inspections</Link></li>
            <li><Link className="hover:text-red" href="/contact?need=bid">New roofs</Link></li>
            <li><Link className="hover:text-red" href="/plans#christmas-lights">Christmas lights</Link></li>
            <li><Link className="hover:text-red" href="/problems">Common problems</Link></li>
            <li><Link className="hover:text-red" href="/about">About</Link></li>
            <li><Link className="hover:text-red" href="/sample-report">Sample roof report</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm uppercase tracking-[0.22em] text-red">Call</h2>
          <ul className="mt-4 space-y-2 text-sm text-steel-light">
            <li>
              Josh Ferguson
              <br />
              <a className="text-lg text-white hover:text-red" href={`tel:${company.tel}`}>
                {displayPhone()}
              </a>
            </li>
            <li>
              <a className="hover:text-red" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
            <li className="pt-2">{company.serviceArea}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-steel sm:px-6">
          © {new Date().getFullYear()} {company.legalName}
        </p>
      </div>
    </footer>
  );
}
