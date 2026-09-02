"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { company, displayPhone } from "@/lib/company";

const links = [
  { href: "/plans", label: "Memberships" },
  { href: "/problems", label: "Common problems" },
  { href: "/plans#christmas-lights", label: "Christmas lights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-steel-light/80 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 xl:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="min-w-0 justify-self-start"
          aria-label={`${company.legalName} home`}
          onClick={() => setOpen(false)}
        >
          <Logo className="h-11 w-auto sm:h-14" priority />
        </Link>

        <nav className="hidden items-center justify-center gap-6 whitespace-nowrap xl:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium tracking-wide text-steel hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-self-end gap-4 whitespace-nowrap xl:flex">
          <a
            href={`tel:${company.tel}`}
            className="inline-flex items-center gap-2 text-base font-medium text-charcoal"
          >
            <Phone className="h-4 w-4 shrink-0 text-red" />
            {displayPhone()}
          </a>
          <Link href="/contact?need=inspection" className="btn-primary shrink-0">
            Request an inspection
          </Link>
        </div>

        <div className="flex items-center justify-self-end gap-2 xl:hidden">
          <a
            href={`tel:${company.tel}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-steel-light text-charcoal"
            aria-label={`Call ${displayPhone()}`}
          >
            <Phone className="h-5 w-5 text-red" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-steel-light text-charcoal"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-steel-light bg-white px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-base font-medium text-charcoal"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact?need=inspection"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              Request an inspection
            </Link>
            <a href={`tel:${company.tel}`} className="mt-2 inline-flex items-center gap-2 px-2 py-2 text-charcoal">
              <Phone className="h-4 w-4 text-red" />
              {displayPhone()}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
