import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { weddings } from "@/content/weddings";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Weddings",
  description:
    "Welcome boxes, return gifts, bridal-party boxes and trousseau packing, matched to your palette and delivered to the venue.",
  path: "/weddings",
});

export default function WeddingsPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Weddings"
        title="The boxes around the wedding."
        intro="The welcome box, the return gift, the bridal-party box, the trousseau. We work from your palette, your date and a budget per box, and we deliver to the venue with names on every box."
        meta={["From 25 boxes", "Palette matched", "Venue delivery"]}
      >
        <a href="#brief" className="btn btn-ink">
          Start a wedding brief
        </a>
        <Link href="/hampers" className="btn btn-ink-outline">
          See the boxes
        </Link>
      </PageHero>

      <PhotoBand
        src="/media/editorial/wedding-table.jpg"
        alt="A long wedding table set with white flowers, glassware and a kraft gift box tied with a pale ribbon."
        quote="A small box at every place."
        caption="Welcome boxes, return gifts and bridal-party boxes, set on the table before the first guest arrives."
        height="h-[clamp(18rem,40vw,34rem)]"
        objectPosition="center 58%"
      />

      <section className="bg-paper py-16 text-ink lg:py-24">
        <SectionHeading
          label="What we make"
          title="Useful things, dressed for the day."
          intro="A wedding favour is still a gift. It should survive the night, the journey home and the week after."
        />
        <div className="gutter page mt-10 border-t border-line-ink">
          {weddings.services.map((service, index) => (
            <div key={service.title} className="grid gap-3 border-b border-line-ink py-6 lg:grid-cols-12 lg:gap-8">
              <p className="label pt-1 text-ink-soft lg:col-span-2">{`0${index + 1}`}</p>
              <h3 className="font-display text-[1.45rem] leading-snug lg:col-span-4">{service.title}</h3>
              <p className="max-w-[36rem] text-[0.98rem] leading-relaxed text-ink-soft lg:col-span-6">{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-deep py-16 text-fg lg:py-24">
        <div className="gutter page grid gap-8 lg:grid-cols-12">
          <p className="label text-fg/55 lg:col-span-3">The favour</p>
          <blockquote className="lg:col-span-8 lg:col-start-5">
            <p className="max-w-[18ch] font-display text-[clamp(2rem,4.4vw,4.2rem)] leading-[1.02] tracking-[-0.025em]">
              The favour people keep is the one they use.
            </p>
            <footer className="mt-5 text-[0.95rem] text-fg/60">A note from the packing table</footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-paper-2 py-16 text-ink lg:py-24">
        <SectionHeading
          label="How it works"
          title="From the invitation to the last box."
          intro="We work backwards from the date. The earlier the palette and the count are fixed, the calmer the last week is."
        />
        <ol className="gutter page mt-10 grid gap-0 border-t border-line-ink lg:grid-cols-5">
          {weddings.process.map((step, index) => (
            <li key={step.title} className="border-b border-line-ink py-6 lg:border-b-0 lg:border-r lg:px-5 lg:py-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <p className="label text-ink-soft">{`0${index + 1}`}</p>
              <h3 className="mt-2 font-display text-[1.3rem]">{step.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper py-16 text-ink lg:py-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="label text-ink-soft">Questions</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <FaqList groups={[{ title: "Wedding questions", items: weddings.faqs }]} />
          </div>
        </div>
      </section>

      <section id="brief" className="scroll-mt-24 bg-paper-2 py-16 text-ink lg:py-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label text-ink-soft">The brief</p>
            <h2 className="mt-4 max-w-[13ch] font-display text-[clamp(2rem,3.8vw,3.6rem)] leading-[1.02] tracking-[-0.022em]">
              Tell us about the day.
            </h2>
            <p className="mt-5 max-w-[30rem] text-[0.98rem] leading-relaxed text-ink-soft">
              The date, the guest count, the palette and the budget per box. If you have the invitation, send a photograph; it
              tells us more than a paragraph.
            </p>
            <p className="mt-6 text-[0.85rem] leading-relaxed text-ink-soft">
              Nothing is charged here. The brief is composed on your device and sent by you.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <EnquiryForm variant="wedding" submitLabel="Prepare the wedding brief" />
          </div>
        </div>
      </section>

      <CtaBand
        title="A box for every table, a name on every one."
        body="If the wedding is close, message us before filling the form. We will tell you honestly what can be made in the time."
        primary={{ label: "Visit the shop", href: "/visit" }}
        secondary={{ label: "Read the questions", href: "/faq" }}
      />
    </main>
  );
}
