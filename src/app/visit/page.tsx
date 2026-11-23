import type { Metadata } from "next";
import { Arrow } from "@/components/ui/Arrow";
import { CtaBand } from "@/components/ui/CtaBand";
import { MapPlate } from "@/components/ui/MapPlate";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { site } from "@/content/site";
import { waLink } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Visit the shop",
  description:
    "Find Packed in Mysuru: opening hours, local delivery, pickup and what is on the shelves. Message before a late visit or a festive week.",
  path: "/visit",
});

const shelves = [
  "Packed hampers, ready to take",
  "Dry fruits, nuts and dates by weight",
  "Chocolate, biscuits and small sweets",
  "Pantry jars, honey and cold-pressed oil",
  "Home things: cups, linen, candles, brass",
  "Wedding and corporate boxes, by appointment",
];

export default function VisitPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: site.name,
            description: site.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address[0],
              addressLocality: site.city,
              addressRegion: site.region,
              postalCode: "570005",
              addressCountry: "IN",
            },
            telephone: site.phone,
            openingHours: ["Mo-Sa 10:00-20:00", "Su 11:00-17:00"],
            url: `${site.mapUrl}`,
          }),
        }}
      />
      <PageHero
        crumb="The shop"
        title="Come to the counter."
        intro="The boxes are packed at the back; the shelves are at the front. Come in, pick something up, or tell us who the gift is for and we will build it while you wait."
        meta={["Mysuru", "Mon–Sat 10–8", "Sun 11–5"]}
      >
        <a href={waLink("Hi Packed, I'd like to visit the shop. Are you open?")} target="_blank" rel="noreferrer" className="btn btn-ink">
          Message before you visit
          <Arrow />
        </a>
        <a href={site.mapUrl} target="_blank" rel="noreferrer" className="btn btn-ink-outline">
          Open in Maps
        </a>
      </PageHero>

      <PhotoBand
        src="/media/editorial/shop.jpg"
        alt="A warm, crowded gift shop interior with wooden cabinets, glass cases and shelves of small objects."
        caption="The shop, on an ordinary Tuesday. The shelves change with the season and with what the makers bring."
        height="h-[clamp(17rem,36vw,30rem)]"
        objectPosition="center 45%"
      />

      <section className="bg-paper pb-16 pt-8 text-ink lg:pb-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="border-t border-line-ink pt-5">
              <p className="label text-ink-soft">The address</p>
              <address className="mt-4 font-display text-[clamp(1.7rem,2.6vw,2.4rem)] not-italic leading-[1.12] tracking-[-0.02em]">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-ink-soft">{site.addressNote}</p>
              <a href={site.mapUrl} target="_blank" rel="noreferrer" className="link-line mt-4 inline-flex min-h-11 items-center text-sm font-medium">
                {site.directionsLabel}
                <Arrow className="ml-2" />
              </a>
            </div>

            <div className="mt-8 border-t border-line-ink pt-5">
              <p className="label text-ink-soft">Hours</p>
              <OpenStatus className="mt-3" />
              <dl className="mt-4 grid gap-2 text-[0.92rem]">
                {site.hours.map((entry) => (
                  <div key={entry.day} className="flex justify-between gap-4 border-b border-line-ink pb-2">
                    <dt className="text-ink-soft">{entry.day}</dt>
                    <dd className="tabular-nums">{entry.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-[0.8rem] leading-relaxed text-ink-soft">{site.hoursNote}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-line-ink pt-5 text-[0.92rem]">
              <a href={site.phoneHref} className="link-line">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="link-line">
                {site.email}
              </a>
              <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="link-line">
                Instagram
              </a>
            </div>
          </div>

          <figure className="lg:col-span-7">
            <MapPlate className="w-full border border-line-ink" />
            <figcaption className="mt-3 text-[0.8rem] leading-relaxed text-ink-soft">
              The shop is a short walk from the main road. If the map is not enough, call and we will talk you in.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-paper-2 py-16 text-ink lg:py-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="label text-ink-soft">On the shelves</p>
            <h2 className="mt-4 max-w-[12ch] font-display text-[clamp(2rem,3.4vw,3.2rem)] leading-[1.03] tracking-[-0.022em]">
              The shop is the short version of the site.
            </h2>
            <p className="mt-4 max-w-[28rem] text-[0.96rem] leading-relaxed text-ink-soft">
              Not everything is online. The shelves change with the season and with what the makers bring.
            </p>
          </div>
          <ul className="grid gap-0 border-t border-line-ink lg:col-span-7 lg:col-start-6 lg:grid-cols-2 lg:gap-x-8">
            {shelves.map((item) => (
              <li key={item} className="flex gap-3 border-b border-line-ink py-4 text-[0.95rem] leading-relaxed">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-vermilion" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink lg:py-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="label text-ink-soft">Delivery & pickup</p>
          </div>
          <div className="grid gap-8 lg:col-span-8 lg:col-start-5 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-[1.6rem]">Collect from the counter</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                Free. We keep the box behind the counter for a week with your name on it. If someone else is collecting, send
                their name with the order.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[1.6rem]">Local delivery</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                Within Mysuru, quoted by address. Same-day is possible before 11 am if the box is already packed. Courier across
                India is arranged on request.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[1.6rem]">Festive weeks</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                We close the order book earlier than we would like. The cut-off is posted at the counter and on WhatsApp, not
                hidden on a banner.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[1.6rem]">A note about the address</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                This is a concept site; the address, hours and map are illustrative. A real shop&apos;s details are confirmed
                before a launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure what to bring home?"
        body="Tell us the person and the occasion. We will show you two or three things from the shelf and pack one while you wait."
        primary={{ label: "Build a hamper", href: "/build" }}
        secondary={{ label: "See the boxes", href: "/hampers" }}
      />
    </main>
  );
}
