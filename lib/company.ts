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
    name: "Inspection / Bid",
    price: 99,
    allowance: 0,
    per: "visit",
    blurb: "House and attached garage. We inspect the roof and send a dated report with photos. No repairs included. If we have the materials, we can do the work that day. If we don't, we quote it and put you on the schedule. If the roof needs to be replaced, we quote it. If you hire us for a new roof, the $99 comes off that job.",
    features: [
      "House roof plus attached garage",
      "Dated report with photos. A bid when the roof needs to come off.",
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
    blurb: "Yearly inspection, written report, and up to $100 in labor and materials. House and attached garage. Debris clean if the roof is safe.",
    features: [
      "Yearly inspection and dated report with photos",
      "House roof plus attached garage",
      "Up to $100 in labor and materials",
      "Debris clean if the roof is safe",
      "If we install a new roof, the $99 Inspection / Bid comes off that job",
    ],
  },
  preferred: {
    slug: "preferred",
    name: "Preferred",
    price: 299,
    allowance: 200,
    per: "year",
    blurb: "For owners with more than one building, or a commercial property. Yearly inspection, written report, and up to $200 in labor and materials. Debris clean if the roof is safe, and 10% off extra labor after the $200.",
    features: [
      "Everything in Essential",
      "Multi-building or commercial property (several roofs, or a commercial building)",
      "Up to $200 in labor and materials",
      "10% off extra labor after the $200",
      "If we install a new roof, the $99 Inspection / Bid comes off that job",
    ],
  },
} as const;

export const reportSections = [
  {
    title: "Satisfactory",
    body: "No work needed.",
    outline: "border-[#2f6b3a] text-[#2f6b3a]",
  },
  {
    title: "Maintenance required",
    body: "Needs repair on this visit, if it fits the included amount.",
    outline: "border-[#c45e12] text-[#c45e12]",
  },
  {
    title: "Monitor",
    body: "Not urgent. Recheck next year.",
    outline: "border-[#ca8a04] text-[#a16207]",
  },
  {
    title: "Replacement recommended",
    body: "The roof needs to be replaced. We quote it and we install it.",
    outline: "border-red text-red",
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
    body: "Caulk cracks, pulls away, and water follows the pipe. On metal, a shingle-style boot does not sit on the ribs. Resealing or replacing the boot stops a leak before it hits the ceiling.",
    photo: {
      src: "/images/sample-report/03.jpg",
      alt: "Vent boot with peeling asphalt sheet and mastic, needles under the edge",
    },
  },
  {
    title: "Loose screws on metal roofs",
    body: "Wind backs fasteners out. Some stand up with the threads showing. Some holes are empty. Tightening or replacing them keeps the panel from working loose and leaking.",
    photo: {
      src: "/images/sample-report/06.jpg",
      alt: "Screw standing up near the eave, threads showing, washer not tight",
    },
  },
  {
    title: "Failed sealant on flashing",
    body: "Old mastic around a chimney jack or flashing collar cracks and pulls back. Resealing or resetting it is maintenance. Rebuilding the flashing is not.",
    photo: {
      src: "/images/sample-report/04.jpg",
      alt: "Chimney jack with old mastic cracked and pulled back",
    },
  },
  {
    title: "Missing flashing at a wall or corner",
    body: "The metal runs to the siding and stops, or a corner does not close and you can see wood. Water goes straight in. Proper flashing kicks it out onto the panel, not under it.",
    photo: {
      src: "/images/sample-report/01.jpg",
      alt: "Garage corner where the metal does not meet and wood shows in the hole",
    },
  },
  {
    title: "Debris in valleys and at the eaves",
    body: "Needles, cones, and dirt hold water and snow. Clearing it (Essential and Preferred, when the roof is safe) keeps ice and rot from starting there.",
    photo: {
      src: "/images/sample-report/12.jpg",
      alt: "Valley with a poor cut and needles, cones, and sticks in the waterway",
    },
  },
  {
    title: "Gap behind gable trim",
    body: "If the rake trim sits off the panel, snow and water get on the wood fascia. Fasten it so the gap is closed. A tree-hit piece gets replaced.",
    photo: {
      src: "/images/sample-report/10.jpg",
      alt: "Gap down the rake where water can get behind the metal onto the fascia",
    },
  },
  {
    title: "A few missing or lifted shingles",
    body: "One wind event can peel a handful. Replacing them protects the underlayment while the rest of the roof is still sound.",
    photo: {
      src: "/images/problems/lifted-shingles.jpg",
      alt: "Gray asphalt shingles lifted and slipping out of course",
    },
  },
] as const;

export const replacementIssues = [
  {
    title: "The shingles are worn out across the roof",
    body: "Cracks through the tabs, curling, bald spots. Patching a roof that is done wastes money. It needs to come off.",
    photo: {
      src: "/images/problems/worn-shingle-field.jpg",
      alt: "Brown asphalt shingles cracked across the field",
    },
  },
  {
    title: "Storm damage past a patch",
    body: "A few shingles are maintenance. A panel gone, or a whole slope blown off, is replacement work.",
    photo: {
      src: "/images/problems/storm-missing-panel.jpg",
      alt: "Metal roof with a panel torn off and plywood showing",
    },
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
    `If this is your year-round house, it is the same membership. The hard part up here is getting a contractor to actually show up. That is what the ${money(plans.inspection.price)} ${plans.inspection.name} is for. We show up.`,
  ],
} as const;
