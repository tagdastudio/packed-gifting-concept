import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { corporate } from "@/content/corporate";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Corporate gifting",
  description:
    "Welcome kits, client boxes, festival hampers and leadership gifts from 25 boxes. A written quote, a per-unit price and delivery across India.",
  path: "/corporate",
});

export default function CorporatePage() {
  return (
    <main id="main">
      <PageHero
        tone="dark"
        crumb="Corporate"
        title="Gifting, at the scale of a company."
        intro="Welcome kits, client boxes, festival hampers and the gifts that mark a working relationship. From 25 boxes, quoted in writing, with a GST invoice and delivery to one office or many."
        meta={["From 25 boxes", "GST invoice", "Pan-India delivery"]}
      >
        <a href="#brief" className="btn btn-primary">
          Start a corporate brief
        </a>
        <a href="#how" className="btn btn-outline">
          How it works
        </a>
      </PageHero>

      <section className="bg-paper py-16 text-ink lg:py-24">
        <SectionHeading
          label="What we make"
          title="Five kinds of company gift."
          intro="The same standard as the single boxes: contents we can name, a note we print exactly, and a date we can hold."
        />
        <div className="gutter page mt-10 border-t border-line-ink">
          {corporate.services.map((service, index) => (
            <div key={service.title} className="grid gap-3 border-b border-line-ink py-6 lg:grid-cols-12 lg:gap-8">
              <p className="label pt-1 text-ink-soft lg:col-span-2">{`0${index + 1}`}</p>
              <h3 className="font-display text-[1.45rem] leading-snug lg:col-span-4">{service.title}</h3>
              <p className="max-w-[36rem] text-[0.98rem] leading-relaxed text-ink-soft lg:col-span-6">{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      <PhotoBand
        src="/media/editorial/wrapping-gold.jpg"
        alt="A kraft paper gift box tied with gold ribbon, with a blank card and scissors."
        quote="A hundred boxes, packed like one."
        caption="The same paper, ribbon and card on every unit. The only thing that changes is the name inside."
        height="h-[clamp(16rem,34vw,28rem)]"
        objectPosition="center 55%"
      />

      <section id="how" className="scroll-mt-24 bg-paper-2 py-16 text-ink lg:py-24">
        <SectionHeading
          label="How it works"
          title="A short, written process."
          intro="No quote form that disappears. Every step ends with something you can forward to the person who signs off."
        />
        <ol className="gutter page mt-10 grid gap-0 border-t border-line-ink lg:grid-cols-5">
          {corporate.process.map((step, index) => (
            <li key={step.title} className="border-b border-line-ink py-6 lg:border-b-0 lg:border-r lg:px-5 lg:py-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <p className="label text-ink-soft">{`0${index + 1}`}</p>
              <h3 className="mt-2 font-display text-[1.3rem]">{step.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper py-16 text-ink lg:py-24">
        <SectionHeading label="The details" title="What is agreed before we pack." />
        <div className="gutter page mt-8 grid gap-8 lg:grid-cols-12">
          <ul className="grid gap-3 border-t border-line-ink pt-5 lg:col-span-7 lg:col-start-5">
            {corporate.terms.map((term) => (
              <li key={term} className="flex gap-3 border-b border-line-ink pb-3 text-[0.95rem] leading-relaxed">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-vermilion" />
                {term}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper pb-16 pt-4 text-ink lg:pb-24">
        <div className="gutter page">
          <FaqList groups={[{ title: "Corporate questions", items: corporate.faqs }]} />
        </div>
      </section>

      <section id="brief" className="scroll-mt-24 bg-paper-2 py-16 text-ink lg:py-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label text-ink-soft">The brief</p>
            <h2 className="mt-4 max-w-[13ch] font-display text-[clamp(2rem,3.8vw,3.6rem)] leading-[1.02] tracking-[-0.022em]">
              Tell us who it is for.
            </h2>
            <p className="mt-5 max-w-[30rem] text-[0.98rem] leading-relaxed text-ink-soft">
              Quantity, budget per box, the occasion and where it needs to go. We come back with two or three boxes, a per-unit
              price and the full contents, in writing.
            </p>
            <p className="mt-6 text-[0.85rem] leading-relaxed text-ink-soft">
              Nothing is charged here. The brief is composed on your device and sent by you.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <EnquiryForm variant="corporate" submitLabel="Prepare the corporate brief" />
          </div>
        </div>
      </section>

      <CtaBand
        title="One box, or five hundred."
        body="If you are not sure where to start, send a note. We will tell you what is possible for your date and budget, even if the answer is a smaller order."
        primary={{ label: "Talk to us", href: "/visit" }}
        secondary={{ label: "See the boxes", href: "/hampers" }}
      />
    </main>
  );
}
