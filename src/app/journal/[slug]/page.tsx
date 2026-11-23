import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/ui/Arrow";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { getNote, notes } from "@/content/journal";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return pageMetadata({ title: note.title, description: note.standfirst, path: `/journal/${note.slug}` });
}

export default async function JournalNotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const more = notes.filter((entry) => entry.slug !== note.slug).slice(0, 2);

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: note.title,
            description: note.standfirst,
            datePublished: note.date,
            author: { "@type": "Organization", name: site.name },
            publisher: { "@type": "Organization", name: site.name },
          }),
        }}
      />

      <PageHero crumb="Journal" title={note.title} intro={note.standfirst} meta={[note.date, note.reading]} />

      <PhotoBand
        src={note.image}
        alt={note.imageAlt}
        height="h-[clamp(16rem,34vw,28rem)]"
        objectPosition="center 55%"
        caption={`From the packing table. ${note.reading}.`}
      />

      <article className="bg-paper pb-16 pt-8 text-ink lg:pb-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-2">
            <Link href="/journal" className="link-line inline-flex min-h-11 items-center text-[0.82rem] font-medium">
              All notes
            </Link>
          </aside>
          <div className="max-w-[44rem] lg:col-span-7 lg:col-start-4">
            {note.blocks.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2 key={index} className="mt-10 font-display text-[clamp(1.5rem,2.3vw,2rem)] leading-[1.12] tracking-[-0.018em]">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote key={index} className="my-9 border-l-2 border-vermilion bg-paper-2 px-5 py-4">
                    <p className="font-display text-[clamp(1.35rem,2vw,1.8rem)] leading-[1.2] tracking-[-0.015em]">{block.text}</p>
                  </blockquote>
                );
              }
              return (
                <p key={index} className="mt-4 text-[1.04rem] leading-[1.75] text-ink/85 first:mt-0">
                  {block.text}
                </p>
              );
            })}

            <p className="hand mt-10 text-[1.2rem] text-ink/70">The Packed studio, Mysuru</p>
            <Link href="/journal" className="link-line mt-6 inline-flex min-h-11 items-center text-[0.9rem] font-medium">
              Back to the notes
              <Arrow className="ml-2" />
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-paper-2 py-12 text-ink lg:py-16">
        <div className="gutter page">
          <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)]">Two more notes.</h2>
          <div className="mt-6 border-t border-line-ink">
            {more.map((entry) => (
              <Link
                key={entry.slug}
                href={`/journal/${entry.slug}`}
                className="group flex items-center justify-between gap-6 border-b border-line-ink py-5 no-underline"
              >
                <div>
                  <p className="text-[0.78rem] text-ink-soft">{entry.date}</p>
                  <p className="mt-1 font-display text-[1.35rem] leading-snug">{entry.title}</p>
                </div>
                <span className="inline-flex size-10 shrink-0 items-center justify-center border border-line-ink-strong transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
