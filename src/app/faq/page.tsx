import type { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { faqGroups } from "@/content/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Questions",
  description:
    "Lead times, delivery, allergens, corporate minimums, GST, wedding orders and what happens when something is out of stock.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqGroups.flatMap((group) =>
              group.items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            ),
          }),
        }}
      />

      <PageHero
        crumb="Questions"
        title="Questions, answered."
        intro="The things people ask before a box is packed: dates, delivery, allergens, invoices and what happens when something runs out."
        meta={["Ordering", "Delivery", "Allergens", "Corporate"]}
      />

      <PhotoBand
        src="/media/editorial/gift-red.jpg"
        alt="A cream parcel tied with a red ribbon on a dark wooden table."
        caption="Questions are welcome, especially the awkward ones."
        height="h-[clamp(12rem,24vw,18rem)]"
        objectPosition="center 55%"
      />

      <section className="bg-paper pb-16 pt-8 text-ink lg:pb-24">
        <div className="gutter page">
          <div className="mb-10 max-w-[44rem] border border-line-ink bg-paper-2 p-4 text-[0.85rem] leading-relaxed text-ink-soft">
            Packed is a concept gifting house. The answers describe how the studio would work; a real client&apos;s lead times,
            prices and allergen records are confirmed in writing before a launch.
          </div>
          <FaqList groups={faqGroups} />
        </div>
      </section>

      <CtaBand
        tone="kraft"
        title="Still not sure? Ask a person."
        body="The quickest answer is usually a message. Tell us the date and the person; we will tell you what is possible."
        primary={{ label: "Build a hamper", href: "/build" }}
        secondary={{ label: "Visit the shop", href: "/visit" }}
      />
    </main>
  );
}
