import { Arrow } from "@/components/ui/Arrow";

/** The concept notice, kept thin and honest. It sits above the header so the hero still owns the screen. */
export function ConceptBanner() {
  return (
    <div className="relative z-50 bg-saffron text-ink">
      <div className="gutter page flex flex-wrap items-center justify-between gap-x-5 gap-y-1 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em]">
        <span className="flex items-center gap-2">
          <span className="rounded-full bg-ink px-2 py-0.5 text-[0.52rem] tracking-[0.14em] text-paper">Concept</span>
          <span className="hidden sm:inline">A concept gifting house — not a live shop.</span>
          <span className="sm:hidden">Concept, not a live shop.</span>
        </span>
        <a
          href="https://tagda.studio"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 font-semibold"
        >
          A concept by Tagda Studio
          <Arrow className="size-3 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={12} />
        </a>
      </div>
    </div>
  );
}
