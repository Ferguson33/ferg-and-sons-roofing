import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { company, displayPhone, mailingLine } from "@/lib/company";

export const metadata: Metadata = {
  title: "Sample roof report",
  description: `Example of the dated roof report ${company.legalName} gives the owner after an inspection. Photos from the roof, findings, and the repair list.`,
};

const photos = [
  { n: 1, src: "/images/sample-report/01.jpg", caption: "Garage corner. Metal does not meet. Wood in the hole." },
  { n: 2, src: "/images/sample-report/02.jpg", caption: "Roof run to the white wall. No step flashing. No wall trim." },
  { n: 3, src: "/images/sample-report/03.jpg", caption: "One of three vents. Asphalt sheet and mastic. Peeling. Needles under the edge." },
  { n: 4, src: "/images/sample-report/04.jpg", caption: "Chimney jack. Old mastic cracked and pulled back." },
  { n: 5, src: "/images/sample-report/05.jpg", caption: "Screw in the pan. This is how this panel is fastened." },
  { n: 6, src: "/images/sample-report/06.jpg", caption: "Screw standing up near the eave. Threads showing. Washer not tight." },
  { n: 7, src: "/images/sample-report/07.jpg", caption: "Empty hole next to a screw, and another hole at the rib." },
  { n: 8, src: "/images/sample-report/08.jpg", caption: "Screw standing off the trim / ridge area." },
  { n: 9, src: "/images/sample-report/09.jpg", caption: "Two screws standing up at the end of the trim. Trim is creased." },
  { n: 10, src: "/images/sample-report/10.jpg", caption: "Gap down the rake. Water can get behind the metal onto the fascia." },
  { n: 11, src: "/images/sample-report/11.jpg", caption: "Corner of the trim. Pieces do not meet. Empty screw hole." },
  { n: 12, src: "/images/sample-report/12.jpg", caption: "Valley. Poor cut. Needles, cones, and sticks in the waterway." },
  { n: 13, src: "/images/sample-report/13.jpg", caption: "Second valley. Same thing. Third valley not photographed." },
  { n: 14, src: "/images/sample-report/14.jpg", caption: "No cap. Soot on the rim." },
  { n: 15, src: "/images/sample-report/15.jpg", caption: "Mast through a patch. Cables across the ribs into a dirty valley." },
] as const;

type Mark = "repair-now" | "repair" | "replace-part" | "maintenance" | "monitor" | "satisfactory";

const markLabel: Record<Mark, string> = {
  "repair-now": "Repair now",
  repair: "Repair",
  "replace-part": "Replace part",
  maintenance: "Needs maintenance",
  monitor: "Monitor",
  satisfactory: "Satisfactory",
};

const markClass: Record<Mark, string> = {
  "repair-now": "bg-red text-white",
  repair: "bg-charcoal text-white",
  "replace-part": "bg-red text-white",
  maintenance: "bg-[#8a5a2b] text-white",
  monitor: "bg-steel text-white",
  satisfactory: "bg-[#2f6b3a] text-white",
};

const findings: {
  mark: Mark;
  title: string;
  photos: number[];
  body: string[];
}[] = [
  {
    mark: "repair-now",
    title: "Wood showing at the garage corner",
    photos: [1],
    body: [
      "The metal was cut short at the inside corner. There is a hole and you can see the wood. Water goes straight in. That is a leak path into the garage.",
      "Close that corner with metal flashing, fasten it, and seal it. Look at the garage ceiling and wall when we do it.",
    ],
  },
  {
    mark: "repair-now",
    title: "No flashing where the roof meets the wall",
    photos: [2],
    body: [
      "The metal runs to the white siding and stops. No step flashing. No trim on the wall. They put this metal over the old shingles and counted on the old job to keep water out.",
      "Put proper sidewall flashing on so water kicks out onto the panel, not under it.",
    ],
  },
  {
    mark: "repair",
    title: "Wrong boots on three vents",
    photos: [3],
    body: [
      "Photo 3 is one vent. Asphalt sheet and mastic. Peeling. Needles under the edge. It does not follow the ribs. That is a shingle product on a metal roof. Two more vents are the same. No separate photo of vents 2 and 3.",
      "Pull the old boots. Put on three metal-roof boots that sit on the ribs. Fasten them and seal them. Do not just add more tar on what is there.",
    ],
  },
  {
    mark: "repair",
    title: "Screws backed out, missing, and over-tightened — including the ridge",
    photos: [5, 6, 7, 8, 9],
    body: [
      "Screws standing up with the threads showing. Empty holes next to a screw that missed the rib. Other ribs smashed flat from being cranked down too hard. About 10 to 15 proud screws plus holes with nothing in them. There will be more once we go rib by rib.",
      "The ridge itself is good. It is missing a couple screws. Those are in photos 8 and 9. Same screw pass.",
      "New gasketed screws in every backed-out hole and every empty hole. Replace the ones that crushed the rib. Snug the washer. Do not bury the screw.",
    ],
  },
  {
    mark: "repair",
    title: "Gable trim — tree hit, missing screws, gap behind the metal",
    photos: [8, 9, 10, 11],
    body: [
      "One run was hit by a tree and needs to come off. Other runs are missing screws. Along the rake the trim sits off the panel — you can see the gap the whole way down. At the corner the two pieces do not meet and there is an empty screw hole in the face. Water and snow get behind that metal and onto the fascia.",
      "Replace the damaged piece. Set the rest so the gap is closed. Screw it down. Close that corner joint.",
    ],
  },
  {
    mark: "repair",
    title: "Three valleys cut poorly",
    photos: [12, 13, 15],
    body: [
      "Two valleys are in the photos. There are three on this roof. The cuts are rough. Debris is packed in the gaps.",
      "Clean first. Then fix the cuts and treat the raw edges. Do not leave a valley that holds water against a bad cut.",
    ],
  },
  {
    mark: "repair",
    title: "Chimney jack seal has failed",
    photos: [4],
    body: [
      "Old mastic around the collar is cracked and pulled back. Even after we cap the pipe, this base will take water if we leave it.",
      "Scrape the old mastic. Reset or replace the jack and seal it right.",
    ],
  },
  {
    mark: "repair",
    title: "Mast and loose cables",
    photos: [15],
    body: [
      "A mast comes through a patched base. Cables are laid across the ribs and drop into the valley junk. Those wires hold needles and chew on the paint.",
      "Reflash the mast. Get the cables off the pans or clip them so they are not lying in the water.",
    ],
  },
  {
    mark: "maintenance",
    title: "Valleys full of needles, cones, and sticks",
    photos: [12, 13, 15],
    body: [
      "Trees sit on two sides of this house. That pile dams water in the valley. On metal that matters.",
      "Clean the valleys. Plan on doing it again after the trees drop.",
    ],
  },
  {
    mark: "maintenance",
    title: "Gutters",
    photos: [],
    body: [
      "They need a clean. This roof sheds fast. Full gutters dump onto the fascia and into that rake gap.",
      "Clean the gutters and check the outlets.",
    ],
  },
  {
    mark: "monitor",
    title: "Scratching on the panels",
    photos: [],
    body: [
      "A lot of the paint is scratched — foot traffic, branches, and the original install. I am not calling the panels failed. Watch the deep ones when we are up there for screws. Touch-up where the coating is through if we see bare metal.",
    ],
  },
  {
    mark: "replace-part",
    title: "Chimney cap missing",
    photos: [14],
    body: [
      "Open flue. Thick soot on the rim. No cap. Matches soot coming down the chimney.",
      "Put a cap on it. Have the flue swept. The jack at the roof is a separate repair (photo 4).",
    ],
  },
  {
    mark: "satisfactory",
    title: "Ridge",
    photos: [8, 9],
    body: [
      "Ridge is good. Missing a couple screws only. Those get picked up on the screw pass. Photos 8 and 9.",
    ],
  },
  {
    mark: "satisfactory",
    title: "The metal panels",
    photos: [],
    body: [
      "The covering can stay. Scratches and a few creased ribs, but this is not a tear-off. Fix the openings and the fasteners and this roof keeps working.",
    ],
  },
];

const bidList = [
  "Close the garage corner over that wood. First thing we do. Check the garage ceiling.",
  "Sidewall flashing where the metal meets the white siding.",
  "Three metal-roof pipe boots, put on and sealed to the ribs.",
  "Full screw pass — backed out, missing, ridge screws, and the ones that smashed the ribs.",
  "Replace and reset the gable trim. Close the gap and the open corner.",
  "Clean all three valleys and the gutters. Fix valley cuts once we can see them.",
  "Cap the chimney. Redo the jack. Recommend a sweep.",
  "Reflash the mast. Move the cables.",
  "Sealant at laps, trim ends, and penetrations. Metal-roof sealant only. Touch-up bare metal if we find it under the scratches.",
];

function PhotoLink({ n }: { n: number }) {
  return (
    <a href={`#photo-${n}`} className="font-medium text-red hover:underline">
      {n}
    </a>
  );
}

function PhotoLinks({ nums }: { nums: number[] }) {
  if (nums.length === 0) return null;
  return (
    <p className="mt-2 text-xs text-steel">
      Photo{nums.length > 1 ? "s" : ""}{" "}
      {nums.map((n, i) => (
        <span key={n}>
          {i > 0 ? ", " : ""}
          <PhotoLink n={n} />
        </span>
      ))}
    </p>
  );
}

export default function SampleReportPage() {
  return (
    <div className="w-full min-w-0 max-w-[100vw] overflow-x-clip bg-paper">
      <div className="no-print w-full min-w-0 border-b border-red bg-red px-3 py-2 text-center text-sm font-medium leading-snug break-words text-white">
        Example only. Address withheld.
      </div>
      <div className="mx-auto w-full min-w-0 max-w-3xl px-4 py-12 sm:px-6">
        <article className="paper min-w-0 break-words">
          <header className="flex flex-col items-start justify-between gap-6 border-b-2 border-charcoal pb-5 sm:flex-row">
            <div>
              <Logo className="h-14 w-auto sm:h-16" />
              <p className="mt-3 break-words text-xs leading-relaxed text-steel">
                {mailingLine}
                <br />
                {company.owner} · {displayPhone()}
                <br />
                {company.email}
              </p>
            </div>
            <div className="sm:text-right">
              <p className="font-display text-2xl uppercase tracking-[0.14em] text-charcoal sm:text-3xl">
                Roof inspection / bid
              </p>
              <p className="mt-2 font-medium">FERG-2026-001</p>
              <p className="text-sm text-steel">September 1, 2026</p>
            </div>
          </header>

          <p className="mt-4 min-w-0 space-y-1 text-sm leading-relaxed text-red">
            <span className="block">Written report from the visit.</span>
            <span className="block">Photos from the roof.</span>
            <span className="block">Bid is a separate price.</span>
          </p>

          <dl className="mt-6 border border-steel-light">
            <Fact label="Date" value="September 1, 2026" />
            <Fact label="Property" value="Residence, Sublette County, WY" />
            <Fact label="Service" value="Inspection / Bid" />
            <Fact label="Inspected by" value={company.owner} />
            <Fact label="Weather" value="60s. Sun, some high cloud. Dry." />
            <Fact label="Access" value="Walked the roof" />
            <Fact label="Roof size" value="About 28 squares (estimated). Not taped." />
            <Fact label="Pitch" value="Not over 4/12" />
            <Fact label="Covering" value="Keep the metal. Repair the details." />
            <Fact label="Next step" value="Quote the repair list. Tape the roof on the job." />
          </dl>

          <section className="mt-8">
            <h2 className="font-display text-xs uppercase tracking-[0.22em] text-red">
              What I found
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-charcoal">
              <p>
                I walked this roof on September 1, 2026. Temperature in the 60s. Sun with some
                high cloud. Dry enough to get around on the metal.
              </p>
              <p>
                It is rust-red exposed-fastener metal, put on over the old asphalt shingles. Pitch
                is not over 4/12. Three valleys. Trees on two sides of the house, which is why the
                valleys are full of needles and cones. The panels have a lot of scratching. The
                ridge is in good shape except for a couple of missing / standing screws already in
                the photos.
              </p>
              <p className="font-medium">The panels can stay. The way it was put on is the problem.</p>
              <p>
                Where the metal meets the white wall, there is no step flashing and no wall trim.
                They ran the panel to the siding and left it. Photo <PhotoLink n={2} />. At the
                corner where the garage meets the house, the metal does not close. You can see wood
                in the hole. Photo <PhotoLink n={1} />. That will leak into the garage.
              </p>
              <p>
                I counted 10 to 15 screws standing up, and some holes with no screw at all. Photos{" "}
                <PhotoLink n={5} /> through <PhotoLink n={9} />. A lot of ribs were cranked down so
                hard the metal is smashed. One piece of gable trim took a tree hit and is missing
                screws. Other gable trim was not set right — there is a gap behind it so snow and
                water can get on the wood fascia. Photos <PhotoLink n={8} />, <PhotoLink n={9} />,{" "}
                <PhotoLink n={10} />, and <PhotoLink n={11} />.
              </p>
              <p>
                Three vents have the wrong boots. They used asphalt-shingle style boots on a metal
                roof. Those boots do not sit on the ribs. Photo <PhotoLink n={3} /> is one of them —
                asphalt sheet and mastic, already peeling, needles under the edge. The other two
                vents are the same condition. I did not take a separate picture of each.
              </p>
              <p>
                Valleys were cut sloppy and they are full of pine needles, cones, and sticks. Photos{" "}
                <PhotoLink n={12} />, <PhotoLink n={13} />, and <PhotoLink n={15} />. Gutters need to
                be cleaned. The chimney has no cap. Photo <PhotoLink n={14} />. Soot is sitting on
                the rim and coming down the flue. The seal at the base of that pipe is old mastic
                and it has failed. Photo <PhotoLink n={4} />.
              </p>
              <p>
                There is a mast through the roof with a messy patch, and loose cables laid across
                the panels into a dirty valley. Photo <PhotoLink n={15} />.
              </p>
              <p>
                I have been in the attic. There is leak staining in the attic and in a couple other
                places in the house. That lines up with the open corner, the sidewall, the bad
                boots, and the chimney jack. This visit was visual. I did not run a hose on the
                roof.
              </p>
              <p>
                This roof does not need to come off. It needs a lot of new screws, the right boots,
                the valleys and gutters cleaned, the gable trim fixed, the chimney capped, and those
                two openings closed.
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xs uppercase tracking-[0.22em] text-red">
              How each item is marked
            </h2>
            <p className="mt-2 text-sm text-steel">
              Same marks we use on every visit: satisfactory, monitor, needs maintenance, or
              replace. This job also splits “replace the roof” from “repair this part now.”
            </p>
            <ul className="mt-3 grid gap-2 text-xs sm:grid-cols-2">
              <li className="border border-steel-light p-3">
                <span className={`inline-block px-2 py-0.5 font-display uppercase tracking-wider ${markClass["repair-now"]}`}>
                  Repair now
                </span>
                <p className="mt-1 text-steel">Garage corner and sidewall. Open paths for water.</p>
              </li>
              <li className="border border-steel-light p-3">
                <span className={`inline-block px-2 py-0.5 font-display uppercase tracking-wider ${markClass.repair}`}>
                  Repair
                </span>
                <p className="mt-1 text-steel">Screws, boots, trim, chimney jack, mast and cables.</p>
              </li>
              <li className="border border-steel-light p-3">
                <span className={`inline-block px-2 py-0.5 font-display uppercase tracking-wider ${markClass.maintenance}`}>
                  Needs maintenance
                </span>
                <p className="mt-1 text-steel">Valleys, gutters, trees, scratches.</p>
              </li>
              <li className="border border-steel-light p-3">
                <span className={`inline-block px-2 py-0.5 font-display uppercase tracking-wider ${markClass.satisfactory}`}>
                  Satisfactory
                </span>
                <p className="mt-1 text-steel">Ridge and the metal panels. They can stay.</p>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xs uppercase tracking-[0.22em] text-red">
              Items
            </h2>
            <div className="mt-4 space-y-4">
              {findings.map((item) => (
                <article key={item.title} className="border border-steel-light bg-white p-4 sm:p-5">
                  <p className="flex flex-wrap items-center gap-2">
                    <span className={`inline-block px-2 py-0.5 text-xs font-display uppercase tracking-wider ${markClass[item.mark]}`}>
                      {markLabel[item.mark]}
                    </span>
                    <span className="font-medium text-charcoal">{item.title}</span>
                  </p>
                  {item.body.map((p) => (
                    <p key={p.slice(0, 40)} className="mt-2 text-sm leading-relaxed text-steel">
                      {p}
                    </p>
                  ))}
                  <PhotoLinks nums={item.photos} />
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xs uppercase tracking-[0.22em] text-red">
              Work to bid
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-steel">
              This is the repair list. We price it from this visit. Square count is estimated at
              about 28. Final screw count and the taped measurement get confirmed when we are on
              the roof.
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-charcoal">
              {bidList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xs uppercase tracking-[0.22em] text-red">
              Limitations
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-steel">
              This is a visual report from walking the roof on September 1, 2026. I did not pull
              panels, I did not moisture-meter the rooms, and I did not water-test. Square count is
              estimated from a 2,300 square-foot house and a 4/12 pitch, not taped. I am not giving
              a remaining-life number on the metal. The bid is a separate price. What I can stand on
              is what I saw and photographed that day, plus the attic staining already noted.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xs uppercase tracking-[0.22em] text-red">
              Photos
            </h2>
            <p className="mt-2 text-sm text-steel">
              Taken on the roof, September 1, 2026. Numbers match the write-up.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {photos.map((photo) => (
                <figure key={photo.n} id={`photo-${photo.n}`} className="scroll-mt-28">
                  <div className="relative aspect-[3/4] overflow-hidden border border-steel-light bg-white">
                    <Image
                      src={photo.src}
                      alt={`Photo ${photo.n} — ${photo.caption}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <figcaption className="mt-1 text-xs text-steel">
                    <span className="font-medium text-red">{photo.n}</span> {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <p className="mt-10 text-sm leading-relaxed text-charcoal">
            {company.owner}
            <br />
            {company.legalName}
            <br />
            {company.serviceArea}
            <br />
            {displayPhone()}
          </p>

          <p className="mt-8 text-center text-xs uppercase tracking-[0.16em] text-steel">
            Example. Address withheld. This report documents condition on the date of inspection.
            It is not a warranty. The bid is separate.
          </p>
        </article>

        <div className="no-print mt-10 flex flex-wrap gap-3">
          <Link href="/contact?need=inspection" className="btn-primary">
            Request an inspection
          </Link>
          <a href="/sample-report.pdf" className="btn-ghost" download>
            Download this report (PDF)
          </a>
          <Link href="/plans" className="btn-ghost">
            Memberships
          </Link>
        </div>
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid border-b border-steel-light last:border-b-0 sm:grid-cols-[11rem_1fr]">
      <dt className="bg-charcoal px-3 py-2 text-xs font-display uppercase tracking-[0.12em] text-white">
        {label}
      </dt>
      <dd className="px-3 py-2 text-sm break-words text-charcoal">{value}</dd>
    </div>
  );
}
