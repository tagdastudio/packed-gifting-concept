import Link from "next/link";
import { formatRupees } from "@/lib/links";
import type { Hamper } from "@/content/hampers";
import { HamperPlate } from "./HamperPlate";

export function HamperCard({ hamper }: { hamper: Hamper }) {
  return (
    <Link
      href={`/hampers/${hamper.slug}`}
      className="group block border-t border-line-ink pt-4 no-underline"
      aria-label={`${hamper.name}, ${formatRupees(hamper.price)}`}
    >
      <div className="overflow-hidden">
        <HamperPlate
          hamper={hamper}
          uid={`${hamper.slug}-card`}
          className="w-full origin-bottom transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1 group-hover:rotate-[-0.5deg]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-[1.45rem] leading-tight tracking-[-0.015em]">{hamper.name}</h3>
        <p className="shrink-0 text-[0.9rem] tabular-nums text-ink-soft">{formatRupees(hamper.price)}</p>
      </div>
      <p className="mt-1.5 max-w-[34ch] text-[0.94rem] leading-relaxed text-ink-soft">{hamper.blurb}</p>
      <p className="label mt-3 text-ink-soft">{hamper.occasions.join(" / ")}</p>
    </Link>
  );
}
