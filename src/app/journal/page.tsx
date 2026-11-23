import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { notes } from "@/content/journal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Notes on giving",
  description:
    "Three short notes on gifting: the person who has everything, what to write on the card, and the case for the useful gift.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Journal"
        title="Notes on giving."
        intro="Three short pieces on the part of gifting that happens before the box: choosing, writing and knowing when to stop."
        meta={["3 notes", "No sign-up", "Read slowly"]}
      />

      <PhotoBand
        src="/media/editorial/wrapping-gold.jpg"
        alt="A kraft paper gift tied with gold ribbon, with a blank card and scissors."
        quote="A note is the part people keep."
        caption="Three short pieces on the part of gifting that happens before the box."
        height="h-[clamp(16rem,34vw,28rem)]"
        objectPosition="center 55%"
      />

      <section className="bg-paper pb-16 pt-8 text-ink lg:pb-24">
        <div className="gutter page">
          <div className="border-t border-line-ink">
            {notes.map((note, index) => (
              <Link
                key={note.slug}
                href={`/journal/${note.slug}`}
                className="group grid gap-4 border-b border-line-ink py-7 no-underline transition-colors duration-300 hover:bg-paper-2/60 lg:grid-cols-12 lg:gap-8 lg:px-4"
              >
                <div className="flex items-baseline gap-4 lg:col-span-2">
                  <span className="label text-ink-soft">{`0${index + 1}`}</span>
                  <span className="text-[0.78rem] text-ink-soft">{note.date}</span>
                </div>
                <div className="lg:col-span-6">
                  <h2 className="max-w-[22ch] font-display text-[clamp(1.6rem,2.8vw,2.5rem)] leading-[1.06] tracking-[-0.02em]">
                    {note.title}
                  </h2>
                  <p className="mt-2 max-w-[46rem] text-[0.95rem] leading-relaxed text-ink-soft">{note.standfirst}</p>
                </div>
                <div className="flex items-end justify-between gap-4 lg:col-span-4 lg:justify-end">
                  <span className="text-[0.78rem] text-ink-soft">{note.reading}</span>
                  <span className="inline-flex size-10 items-center justify-center border border-line-ink-strong transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                    <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 max-w-[34rem] text-[0.9rem] leading-relaxed text-ink-soft">
            We write when there is something to say, not on a schedule. There is no newsletter and no pop-up.
          </p>
        </div>
      </section>
    </main>
  );
}
