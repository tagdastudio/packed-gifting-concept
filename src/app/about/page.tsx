import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "A small gifting house in Mysuru. How Packed chooses contents, packs a box and writes the note — and the things we will not do.",
  path: "/about",
});

const packing = [
  {
    step: "01",
    title: "Choose",
    body: "We buy in small quantities from makers we can ring. If a jar is not right this month, we change the box rather than the standard.",
  },
  {
    step: "02",
    title: "Pack",
    body: "Tissue, a tin, a card, a ribbon. The box is packed by hand and checked twice: once against the order, once against the note.",
  },
  {
    step: "03",
    title: "Send",
    body: "Local delivery, courier or collection. We confirm the date before we pack and tell you when it leaves the counter.",
  },
];

const refusals = [
  "We do not promise a nut-free kitchen. We handle nuts, milk and wheat.",
  "We do not substitute an item silently. If something is unavailable, we ask.",
  "We do not print a logo on a box and call it thoughtful. The note does that work.",
  "We do not use a countdown timer to hurry a decision that deserves a day.",
  "We do not publish a review we cannot point to. This is a concept, and the proof is the work.",
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        crumb="About"
        title="A small house, packed by hand."
        intro="Packed is a gifting house in Mysuru. We choose the contents, pack the box and print the note. The point is not to send more; it is to send the right thing, once."
        meta={["Mysuru", "Since 2025", "One packing table"]}
      />

      <section className="bg-paper pb-16 pt-8 text-ink lg:pb-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="label text-ink-soft">The house</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className="max-w-[40rem] font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.14] tracking-[-0.018em]">
              We started with a table, a roll of ribbon and a list of people we had been buying bad gifts for.
            </p>
            <div className="mt-6 grid max-w-[42rem] gap-4 text-[1rem] leading-relaxed text-ink-soft">
              <p>
                The first boxes were for friends: a new flat, a baby, a week that needed a thank-you. We noticed that the
                useful things were the ones people mentioned again. The decorative things disappeared quietly. So the house
                became a place for useful things, packed properly.
              </p>
              <p>
                We are small on purpose. The person who answers the message is the person who packs the box. That is not a
                promise every gifting company can make, and it is the reason we keep the range short.
              </p>
              <p>
                The shop is in Mysuru. The courier goes across India on request. The prices on this site are illustrative,
                because this is a concept built by Tagda Studio; a real house would put its own numbers here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <figure className="relative">
        <div className="relative h-[clamp(18rem,46vw,36rem)] w-full overflow-hidden">
          <Image
            src="/media/hero/dry-fruit-tray.jpg"
            alt="A still life of dates, apricots, figs and walnuts on a wooden table."
            fill
            sizes="100vw"
            className="object-cover object-[52%_55%] brightness-[0.62] contrast-[1.05] saturate-[0.95]"
          />
          <div className="absolute inset-0 bg-[#0a1510]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1510]/80 via-transparent to-transparent" />
          <div className="gutter page absolute inset-x-0 bottom-0 pb-8">
            <p className="max-w-[20ch] font-display text-[clamp(1.8rem,3.5vw,3.4rem)] leading-[1.04] tracking-[-0.022em] text-fg">
              The contents are the argument. The wrapping is the tone.
            </p>
          </div>
        </div>
        <figcaption className="gutter page mt-3 text-[0.78rem] text-ink-soft">
          Photograph: Antoni Shkraba / Pexels. A placeholder for the house&apos;s own still life.
        </figcaption>
      </figure>

      <section className="bg-paper py-16 text-ink lg:py-24">
        <SectionHeading
          label="How we pack"
          title="Three decisions, repeated until the box is right."
          intro="The method is short. Most of the work is in refusing to skip a step."
        />
        <div className="gutter page mt-10 grid border-t border-line-ink lg:grid-cols-3">
          {packing.map((item) => (
            <div key={item.step} className="border-b border-line-ink py-6 lg:border-b-0 lg:border-r lg:px-7 lg:py-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <p className="label text-ink-soft">{item.step}</p>
              <h3 className="mt-2 font-display text-[1.55rem]">{item.title}</h3>
              <p className="mt-2 max-w-[27rem] text-[0.95rem] leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <PhotoBand
        src="/media/editorial/wrapping-gold.jpg"
        alt="A kraft paper gift tied with gold ribbon, with a blank card, scissors and confetti."
        quote="Paper, ribbon, a card. The box is the only part of the brand a client can hold."
        caption="We buy the paper in small runs and cut it on the same table every week."
        height="h-[clamp(16rem,34vw,28rem)]"
        objectPosition="center 55%"
      />

      <section className="bg-paper-2 py-16 text-ink lg:py-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="label text-ink-soft">What we will not do</p>
            <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2rem,3.4vw,3.2rem)] leading-[1.03] tracking-[-0.022em]">
              The limits are part of the service.
            </h2>
            <p className="mt-4 max-w-[28rem] text-[0.96rem] leading-relaxed text-ink-soft">
              A gifting house is trusted for what it says it cannot do as much as for what it can.
            </p>
          </div>
          <ul className="grid gap-0 border-t border-line-ink lg:col-span-7 lg:col-start-6">
            {refusals.map((item) => (
              <li key={item} className="flex gap-3 border-b border-line-ink py-4 text-[0.95rem] leading-relaxed">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-vermilion" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg-deep py-16 text-fg lg:py-24">
        <div className="gutter page grid gap-8 lg:grid-cols-12">
          <p className="label text-fg/55 lg:col-span-3">A note from the table</p>
          <blockquote className="lg:col-span-8 lg:col-start-5">
            <p className="max-w-[24ch] font-display text-[clamp(2rem,4vw,3.8rem)] leading-[1.04] tracking-[-0.024em]">
              We would rather send one box that is right than five that are nearly right.
            </p>
            <footer className="mt-5 text-[0.92rem] text-fg/55">The Packed studio, Mysuru</footer>
          </blockquote>
        </div>
      </section>

      <CtaBand
        tone="paper"
        title="Start with a person. We will start with the box."
        body="If you already know the occasion and the budget, build a box. If you only know the person, send a note."
        primary={{ label: "Build a hamper", href: "/build" }}
        secondary={{ label: "Ask a question", href: "/faq" }}
      />
    </main>
  );
}
