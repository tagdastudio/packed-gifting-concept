import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HamperCard } from "@/components/hampers/HamperCard";
import { HamperPlate } from "@/components/hampers/HamperPlate";
import { Arrow } from "@/components/ui/Arrow";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { getHamper, hampers } from "@/content/hampers";
import { site } from "@/content/site";
import { formatRupees, waLink } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return hampers.map((hamper) => ({ slug: hamper.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hamper = getHamper(slug);
  if (!hamper) return {};
  return pageMetadata({
    title: hamper.name,
    description: `${hamper.blurb} ${formatRupees(hamper.price)}. Packed by hand in ${site.city}.`,
    path: `/hampers/${hamper.slug}`,
  });
}

export default async function HamperPage({ params }: Props) {
  const { slug } = await params;
  const hamper = getHamper(slug);
  if (!hamper) notFound();

  const related = hampers.filter((entry) => entry.slug !== hamper.slug).slice(0, 3);
  const message = `Hi Packed, I'd like to ask about ${hamper.name} (${formatRupees(hamper.price)}). My date is ____ and it is for ____.`;

  return (
    <main id="main" className="pb-24 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: hamper.name,
            description: hamper.description,
            brand: { "@type": "Brand", name: site.name },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: hamper.price,
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <PageHero
        crumb="Hampers"
        title={hamper.name}
        intro={hamper.description}
        meta={[formatRupees(hamper.price), hamper.leadTime, hamper.serves]}
      >
        <a href={waLink(message)} target="_blank" rel="noreferrer" className="btn btn-ink">
          Reserve on WhatsApp
          <Arrow />
        </a>
        <Link href="/build" className="btn btn-ink-outline">
          Build something like this
        </Link>
      </PageHero>

      <section className="bg-paper pb-16 pt-8 text-ink lg:pb-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <HamperPlate hamper={hamper} uid={`${hamper.slug}-detail`} className="w-full" />
            <p className="mt-3 max-w-[34rem] text-[0.78rem] leading-relaxed text-ink-soft">
              A drawn plate of the contents. The box you receive may differ slightly with the season and the maker; we will tell
              you before we pack if anything changes.
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border-t border-line-ink pt-5">
              <p className="label text-ink-soft">What is inside</p>
              <ul className="mt-4 grid gap-4">
                {hamper.contents.map((item) => (
                  <li key={item.name} className="border-b border-line-ink pb-3">
                    <p className="font-display text-[1.12rem] leading-snug">{item.name}</p>
                    <p className="mt-0.5 text-[0.88rem] leading-relaxed text-ink-soft">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-7 grid gap-0 border-t border-line-ink text-[0.88rem]">
              {[
                ["For", hamper.forWho],
                ["Allergens", hamper.allergens],
                ["Shelf life", hamper.shelfLife],
                ["Lead time", hamper.leadTime],
                ["Serves", hamper.serves],
              ].map(([term, value]) => (
                <div key={term} className="grid gap-1 border-b border-line-ink py-3 sm:grid-cols-[6rem_1fr] sm:gap-4">
                  <dt className="label pt-0.5 text-ink-soft">{term}</dt>
                  <dd className="leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 border border-line-ink p-4">
              <p className="label text-ink-soft">The note</p>
              <p className="mt-2 text-[0.92rem] leading-relaxed">
                We print your message in ink on cream card and tuck it inside the box. Tell us what to write; we do not edit it.
                If you would rather write it yourself, say so and we will leave the card blank.
              </p>
            </div>

            <a href={waLink(message)} target="_blank" rel="noreferrer" className="btn btn-ink mt-5 w-full">
              Reserve on WhatsApp
              <Arrow />
            </a>
            <p className="mt-2 text-center text-[0.75rem] text-ink-soft">No payment is taken here. We confirm stock, date and delivery first.</p>
          </div>
        </div>
      </section>

      <PhotoBand
        src="/media/editorial/tying-ribbon.jpg"
        alt="Hands tying a black ribbon around a kraft paper box."
        caption="Every box is checked twice: once against the order, once against the note."
        height="h-[clamp(14rem,28vw,22rem)]"
        objectPosition="center 45%"
      />

      <section className="bg-paper-2 pb-16 pt-12 text-ink lg:pb-24">
        <div className="gutter page">
          <div className="flex items-end justify-between gap-6 border-t border-line-ink pt-6">
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-tight">A few more boxes.</h2>
            <Link href="/hampers" className="link-line hidden min-h-11 items-center text-sm font-medium sm:inline-flex">
              All hampers
            </Link>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {related.map((entry) => (
              <HamperCard key={entry.slug} hamper={entry} />
            ))}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg-deep px-4 pb-[calc(0.7rem+env(safe-area-inset-bottom))] pt-3 lg:hidden">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.8rem] text-fg/60">{hamper.name}</p>
            <p className="text-[0.95rem] font-semibold tabular-nums text-fg">{formatRupees(hamper.price)}</p>
          </div>
          <a href={waLink(message)} target="_blank" rel="noreferrer" className="btn btn-primary shrink-0">
            Reserve
            <Arrow />
          </a>
        </div>
      </div>
    </main>
  );
}
