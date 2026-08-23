import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Oswald, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PwaRegister } from "@/components/PwaRegister";
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
    default: `${company.legalName} · Inspections, repairs, and new roofs`,
    template: `%s · ${company.legalName}`,
  },
  description: `${company.legalName}. Yearly memberships, roof repairs and inspections, and new roofs in ${company.serviceArea}.`,
  applicationName: company.legalName,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: company.legalName,
  },
  icons: {
    icon: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: company.legalName,
    description: company.tagline,
    type: "website",
    locale: "en_US",
    images: [{ url: "/brand/logo.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1f2124",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${source.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <PwaRegister />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
