import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Oswald, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/lib/company";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ferg-and-sons-roofing.vercel.app"),
  title: {
    default: `${company.legalName} · Maintenance, repairs, and new roofs`,
    template: `%s · ${company.shortName}`,
  },
  description: `${company.legalName}. Yearly memberships, roof repairs and inspections, and new roofs in ${company.serviceArea}.`,
  openGraph: {
    title: company.legalName,
    description: company.tagline,
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/fasteners.jpg" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${source.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
