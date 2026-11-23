import type { ReactNode } from "react";
import { RevealLines } from "@/motion/RevealLines";

type Props = {
  label: string;
  title: ReactNode;
  intro?: string;
  tone?: "ink" | "light";
  className?: string;
};

/** A side label and a heading that carries its own weight. No eyebrow above the heading. */
export function SectionHeading({ label, title, intro, tone = "ink", className = "" }: Props) {
  const light = tone === "light";
  return (
    <div className={`gutter page grid gap-6 lg:grid-cols-12 lg:gap-8 ${className}`}>
      <p className={`label lg:col-span-3 ${light ? "text-fg/55" : "text-ink-soft"}`}>{label}</p>
      <div className="lg:col-span-8 lg:col-start-5">
        <RevealLines
          as="h2"
          className={`font-display text-[clamp(2rem,3.9vw,3.9rem)] leading-[1.04] tracking-[-0.022em] ${
            light ? "text-fg" : "text-ink"
          }`}
        >
          {title}
        </RevealLines>
        {intro ? (
          <p className={`mt-5 max-w-[38rem] text-[1rem] leading-relaxed ${light ? "text-fg/65" : "text-ink-soft"}`}>
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}
