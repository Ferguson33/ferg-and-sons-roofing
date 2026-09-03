import { company } from "@/lib/company";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["RoofingContractor", "LocalBusiness"],
  name: company.legalName,
  url: company.siteUrl,
  telephone: company.tel,
  email: company.email,
  image: new URL("/brand/logo.png", company.siteUrl).href,
  logo: new URL("/brand/logo.png", company.siteUrl).href,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.mailing.line1,
    addressLocality: company.mailing.city,
    addressRegion: company.mailing.state,
    postalCode: company.mailing.zip,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Pinedale" },
    { "@type": "AdministrativeArea", name: "Sublette County" },
    { "@type": "State", name: "Wyoming" },
  ],
};

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
