export const company = {
  legalName: "Ferg and Sons Roofing, LLC",
  shortName: "Ferg and Sons Roofing",
  tagline: "Yearly roof maintenance in Sublette County.",
  email: "josh.fergusonsublette@gmail.com",
  phone: "307-231-6026",
  tel: "+13072316026",
  owner: "Josh Ferguson",
  serviceArea: "Pinedale and other communities in Sublette County",
  yearsHere: "13",
  mailing: {
    line1: "PO Box 103",
    city: "Big Piney",
    state: "WY",
    zip: "83113",
  },
} as const;

export const mailingLine = `${company.mailing.line1}, ${company.mailing.city}, ${company.mailing.state} ${company.mailing.zip}`;

export const plans = {
  inspection: {
    slug: "inspection",
    name: "Inspection",
    price: 199,
    allowance: 0,
    per: "visit",
    blurb: "One visit. House and attached garage. Inspection and Professional Roof Report. No repairs. If you hire us for a new roof, the $199 inspection is credited.",
    features: [
      "One visit",
      "House roof plus attached garage",
      "Full inspection and dated report with photos",
      "No work completed",
      "$199 inspection credited if we install a new roof",
    ],
  },
  essential: {
    slug: "essential",
    name: "Essential",
    price: 349,
    allowance: 175,
    per: "year",
    blurb: "One visit a year. House and attached garage. Inspection, report, and up to $175 in repairs that day.",
    features: [
      "One visit per year",
      "House roof plus attached garage",
      "Full inspection and dated report with photos",
      "Small repairs on that visit, up to $175",
      "$199 inspection credited if we install a new roof",
    ],
  },
  preferred: {
    slug: "preferred",
    name: "Preferred",
    price: 499,
    allowance: 350,
    per: "year",
    blurb: "Same visit and report. Up to $350 in repairs, debris clean if the roof is safe, and 10% off extra labor after that.",
    features: [
      "Everything in Essential",
      "Small repairs on that visit, up to $350",
      "Spring clean / debris off if the roof is safe that day",
      "10% off extra small-repair labor after the $350",
      "$199 inspection credited if we install a new roof",
    ],
  },
} as const;

export const reportSections = [
  {
    title: "Satisfactory",
    body: "No work needed.",
  },
  {
    title: "Maintenance required",
    body: "Repairs this visit, under the allowance if they fit.",
  },
  {
    title: "Monitor",
    body: "Not urgent. Recheck next year.",
  },
  {
    title: "Replacement recommended",
    body: "Beyond maintenance. Bid separately. You still call us.",
  },
] as const;

export const basicRepairs = [
  {
    title: "Resealing a pipe boot",
    note: "Caulk cracks and leaks. Resealed as needed.",
  },
  {
    title: "Tightening and replacing loose fasteners on metal roofs",
    note: "Wind backs screws out. They get snugged down or replaced.",
  },
  {
    title: "Replacing a few pipe-jack or flashing screws",
    note: "Screws working loose around a pipe or flashing.",
  },
  {
    title: "Small flashing reseal",
    note: "A short run of failed sealant. Not a chimney rebuild.",
  },
  {
    title: "A handful of loose or missing shingles",
    note: "A few that came off, if the rest of the roof is in good shape.",
  },
] as const;

export const inspectionChecklist = [
  "Shingles or metal panels",
  "Screws on metal roofs",
  "Flashing at walls, chimneys, and roof-to-roof joins",
  "Pipe boots and sealant",
  "Valleys and eaves",
  "Ridge and vents",
  "Stains or leaks visible from below",
  "Debris that holds water or snow",
  "Ice along the eaves and snow load",
] as const;

export const maintenanceIssues = [
  {
    title: "Failed pipe-boot sealant",
    body: "Caulk cracks, pulls away, and water follows the pipe. Resealing it is one of the more common fixes, and it stops a leak before it hits the ceiling.",
  },
  {
    title: "Loose screws on metal roofs",
    body: "Wind backs fasteners out. Tightening or replacing them keeps the panel from working loose and leaking.",
  },
  {
    title: "A few missing or lifted shingles",
    body: "One wind event can peel a handful. Replacing them protects the underlayment while the rest of the roof is still sound.",
  },
  {
    title: "Failed sealant on flashing",
    body: "A short run of cracked caulk at a wall, chimney, or roof join. Resealing it is maintenance. Rebuilding the flashing is not.",
  },
  {
    title: "Loose pipe-jack or flashing screws",
    body: "Screws around penetrations work out the same way metal-roof fasteners do. They get snugged or replaced on the visit.",
  },
  {
    title: "Debris in valleys and at the eaves",
    body: "Needles, leaves, and dirt hold water and snow. Clearing it (Preferred, when the roof is safe) keeps ice and rot from starting there.",
  },
  {
    title: "Exposed or backing nails",
    body: "A nail popping through a shingle is a small hole. Sealed or reset early, it is not a leak yet.",
  },
  {
    title: "Early ice at the eaves",
    body: "Ice dams are a weather problem, but plugged drainage and weak spots at the eave make them worse. Maintenance will not heat the attic; it will catch the roof damage they cause.",
  },
] as const;

export const replacementIssues = [
  {
    title: "The shingles are worn out across the roof",
    body: "Curling, bald spots, widespread granule loss. Patching a roof that is done wastes money. It needs to come off.",
  },
  {
    title: "The deck is rotten, or there are already too many layers",
    body: "Soft sheathing or stacked roofs are not a caulk job. That is a tear-off.",
  },
  {
    title: "The roof is sagging",
    body: "Structure, not surface. That is beyond a membership visit.",
  },
  {
    title: "Leaks in several places, not one boot",
    body: "Isolated leaks can often be maintained. A roof that is leaking as a system is at the end.",
  },
  {
    title: "Metal panels rusted through or the coating is gone",
    body: "Loose screws are maintenance. Panels that have failed are a new roof, bid out.",
  },
  {
    title: "Storm damage past a patch",
    body: "A few shingles is maintenance. Whole slopes or broken structure is replacement work.",
  },
  {
    title: "The roof is at the end of its service life",
    body: "Age plus condition. The report will say so instead of selling another year of repairs on a roof that should come off.",
  },
] as const;

export function displayPhone(phone: string = company.phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return phone;
}

export function money(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}
