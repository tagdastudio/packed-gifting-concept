import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

type LegalSlug = "privacy" | "terms";

const pages: Record<
  LegalSlug,
  { title: string; intro: string; sections: { heading: string; body: string[] }[] }
> = {
  privacy: {
    title: "Privacy",
    intro:
      "This is a concept site. It has no accounts, no payments and no analytics, and the forms do not send anything from the page.",
    sections: [
      {
        heading: "What the site collects",
        body: [
          "Nothing is sent to a server when you fill in a form. The hamper builder and the enquiry forms compose a message in your browser; you choose whether to send it by WhatsApp or email.",
          "The site does not set advertising cookies and does not load third-party analytics, fonts or tracking scripts. The fonts and images are served by the site itself.",
          "The hosting provider may keep standard request logs (IP address, browser, time) for security and operations. Those logs are not used to build a profile.",
        ],
      },
      {
        heading: "When you message us",
        body: [
          "If you send a brief by WhatsApp or email, the message contains what you wrote: your name, contact details and the gift details. We use it to answer the enquiry and to pack the order.",
          "We do not sell contact details or add them to a marketing list. If you ask us to keep a note for a future order, we keep it until you ask us to remove it.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can ask us to delete a message or a note at any time by writing to the address below. Because this is a concept, there is no live database to delete from; a real client's policy would be written into this page before launch.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about this page: ${site.email}. The studio is in ${site.city}, ${site.region}.`],
      },
    ],
  },
  terms: {
    title: "Terms",
    intro:
      "These are the terms for a concept gifting house. They describe how the studio would work, not a live contract.",
    sections: [
      {
        heading: "The site",
        body: [
          "Packed is a fictional gifting house built by Tagda Studio as a design concept. The address, hours, prices, lead times, allergen records and delivery windows are illustrative and are not an offer to sell.",
          "The site does not take payment. No order exists until a real studio confirms contents, price, date and delivery in writing.",
        ],
      },
      {
        heading: "Orders and contents",
        body: [
          "A real order would be confirmed by a written quote or message. Contents may change with the season and with what makers have available; a substitution is offered, never made silently.",
          "Food is packed in a kitchen that handles nuts, milk and wheat. A severe allergy should be discussed with the studio before an order; the site does not promise a nut-free or allergen-free environment.",
        ],
      },
      {
        heading: "Delivery",
        body: [
          "Lead times and courier windows are estimates. Festive weeks and weather can move them. The studio would confirm the date before packing and share tracking where the courier provides it.",
        ],
      },
      {
        heading: "Intellectual property and photography",
        body: [
          "The name, copy, layout and drawn illustrations on this concept site belong to Tagda Studio. The hero photograph is by Antoni Shkraba, used under the Pexels licence and credited in CREDITS.md.",
          "A real client's logo, photography and product names would replace the placeholders before launch, with permission.",
        ],
      },
      {
        heading: "Liability and law",
        body: [
          "This concept site is provided as a design demonstration, without warranties of availability, price or fitness for a particular occasion. A live store's terms would set out liability, cancellations and returns.",
          "Any real agreement would be governed by the laws of India, with the courts of Mysuru, Karnataka, having jurisdiction.",
        ],
      },
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return (Object.keys(pages) as LegalSlug[]).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as LegalSlug];
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.intro, path: `/legal/${slug}` });
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug as LegalSlug];
  if (!page) notFound();

  return (
    <main id="main">
      <PageHero crumb={page.title} title={page.title} intro={page.intro} />
      <section className="bg-paper pb-16 pt-8 text-ink lg:pb-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="label text-ink-soft">Last reviewed</p>
            <p className="mt-2 text-[0.85rem] text-ink-soft">November 2026</p>
          </div>
          <div className="max-w-[46rem] lg:col-span-8 lg:col-start-5">
            {page.sections.map((section) => (
              <section key={section.heading} className="mt-8 first:mt-0">
                <h2 className="font-display text-[clamp(1.4rem,2.2vw,1.9rem)] leading-tight">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-[0.98rem] leading-[1.7] text-ink/80">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
            <p className="mt-10 border-t border-line-ink pt-4 text-[0.8rem] leading-relaxed text-ink-soft">
              This text is a template for a concept site, not legal advice. A real client&apos;s policy would be reviewed before
              launch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
