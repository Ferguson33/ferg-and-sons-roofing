export const company = {
  legalName: "Ferg & Sons Roofing, LLC",
  shortName: "Ferg & Sons Roofing",
  tagline:
    "Inspections, repairs, and yearly memberships in Sublette County — second homes, cabins, rentals, and year-round houses.",
  email: "FergandSonsRoofingLLC@gmail.com",
  formspree: "https://formspree.io/f/mrpgejjo",
  phone: "307-231-6026",
  tel: "+13072316026",
  owner: "Josh Ferguson",
  serviceArea: "Pinedale and other communities in Sublette County",
  yearsHere: "20+",
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
    price: 99,
    allowance: 0,
    per: "visit",
    blurb: "House and attached garage. We inspect the roof and send a dated report with photos. No repairs included. If we have the materials, we can do the work that day. If we don't, we quote it and put you on the schedule. If you hire us for a new roof, the $99 comes off that job.",
    features: [
      "House roof plus attached garage",
      "Inspection and dated report with photos",
      "No repairs included. Same-day work if we have the materials, billed separately.",
      "If we don't have the materials, we quote it and put you on the schedule",
      "If we install a new roof, the $99 comes off that job",
    ],
  },
  essential: {
    slug: "essential",
    name: "Essential",
    price: 199,
    allowance: 100,
    per: "year",
    blurb: "Yearly inspection, written report, and up to $100 in labor and materials. House and attached garage.",
    features: [
      "Yearly inspection and dated report with photos",
      "House roof plus attached garage",
      "Up to $100 in labor and materials",
      "If we install a new roof, the $99 inspection comes off that job",
    ],
  },
  preferred: {
    slug: "preferred",
    name: "Preferred",
    price: 299,
    allowance: 200,
    per: "year",
    blurb: "Yearly inspection, written report, and up to $200 in labor and materials. House, attached garage, and one extra building. Debris clean if the roof is safe, and 10% off extra labor after the $200.",
    features: [
      "Everything in Essential",
      "House, attached garage, plus one additional building (detached garage, shop, or similar)",
      "Up to $200 in labor and materials",
      "Debris clean if the roof is safe",
      "10% off extra labor after the $200",
      "If we install a new roof, the $99 inspection comes off that job",
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
    body: "Needs repair on this visit, if it fits the included amount.",
  },
  {
    title: "Monitor",
    body: "Not urgent. Recheck next year.",
  },
  {
    title: "Replacement recommended",
    body: "The roof needs to be replaced. We quote it and we install it.",
  },
] as const;

export const basicRepairs = [
  {
    title: "Resealing a pipe boot",
    note: "Caulk cracks and leaks. Resealed as needed.",
  },
  {
    title: "Tightening and replacing loose fasteners on metal roofs",
    note: "Wind backs screws out. They get tightened or replaced.",
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
    body: "Screws around pipes and flashing work out the same way metal-roof fasteners do. They get tightened or replaced on the visit.",
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
    body: "Ice dams come from weather. Clogged drainage and weak spots at the eave make them worse. We cannot heat the attic. We can catch the damage ice does to the roof.",
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
    body: "Loose screws are maintenance. Panels that have failed are a new roof.",
  },
  {
    title: "Storm damage past a patch",
    body: "A few shingles are maintenance. Whole slopes or broken structure is replacement work.",
  },
  {
    title: "The roof is at the end of its service life",
    body: "Age plus condition. The report will say so. We will not sell another year of repairs on a roof that should come off.",
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

export const membershipAudience = {
  kicker: "Who it’s for",
  headline: "Second homes, cabins, rentals, and the house you live in.",
  paragraphs: [
    "Sublette County is a place people come to and a place people live. A lot of the roofs here are second homes, cabins, rentals, and Airbnbs. They take snow and wind whether anyone is in them or not.",
    "If you are not here, you will not see a loose screw or a failed pipe boot. We will. Each year we inspect, send a dated report, and do the small repairs in the plan.",
    `If this is your year-round house, it is the same membership. The hard part up here is getting a contractor to actually show up. That is what the ${money(plans.inspection.price)} inspection is for. We show up.`,
  ],
} as const;
