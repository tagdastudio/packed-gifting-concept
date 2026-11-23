import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { notes } from "@/content/journal";

export function JournalTeaser() {
  return (
    <section className="bg-paper-2 py-16 text-ink lg:py-24">
      <SectionHeading
        label="Notes"
        title="The part before the box."
        intro="Three short pieces on choosing, writing and knowing when a gift is enough."
      />
      <div className="gutter page mt-10 border-t border-line-ink">
        {notes.map((note, index) => (
          <Link
            key={note.slug}
            href={`/journal/${note.slug}`}
            className="group grid gap-3 border-b border-line-ink py-6 no-underline transition-colors duration-300 hover:bg-paper/60 lg:grid-cols-12 lg:gap-8 lg:px-4"
          >
            <div className="flex items-baseline gap-4 lg:col-span-2">
              <span className="label text-ink-soft">{`0${index + 1}`}</span>
              <span className="text-[0.78rem] text-ink-soft">{note.reading}</span>
            </div>
            <div className="lg:col-span-7">
              <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] leading-[1.06] tracking-[-0.018em]">{note.title}</h3>
              <p className="mt-1.5 max-w-[46rem] text-[0.92rem] leading-relaxed text-ink-soft">{note.standfirst}</p>
            </div>
            <div className="flex items-end justify-end lg:col-span-3">
              <span className="inline-flex size-10 items-center justify-center border border-line-ink-strong transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                <Arrow />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="gutter page mt-6 flex justify-end">
        <Link href="/journal" className="link-line inline-flex min-h-11 items-center text-[0.9rem] font-medium">
          All notes
          <Arrow className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
