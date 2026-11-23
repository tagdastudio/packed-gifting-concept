import Link from "next/link";
import { Arrow } from "./Arrow";

type Action = { label: string; href: string };
type Props = {
  title: string;
  body?: string;
  primary: Action;
  secondary?: Action;
  tone?: "paper" | "dark" | "kraft";
};

export function CtaBand({ title, body, primary, secondary, tone = "dark" }: Props) {
  const dark = tone === "dark";
  const kraft = tone === "kraft";
  const surface = dark ? "bg-bg-deep text-fg" : kraft ? "bg-paper-2 text-ink" : "bg-paper text-ink";
  const muted = dark ? "text-fg/65" : "text-ink-soft";

  return (
    <section className={surface}>
      <div className="gutter page grid gap-8 py-14 lg:grid-cols-12 lg:items-end lg:py-20">
        <div className="lg:col-span-7">
          <h2 className="max-w-[15ch] font-display text-[clamp(2rem,4vw,3.8rem)] leading-[1.02] tracking-[-0.022em]">{title}</h2>
          {body ? <p className={`mt-5 max-w-[34rem] text-[1rem] leading-relaxed ${muted}`}>{body}</p> : null}
        </div>
        <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
          <Link href={primary.href} className={dark ? "btn btn-primary" : "btn btn-ink"}>
            {primary.label}
            <Arrow />
          </Link>
          {secondary ? (
            <Link href={secondary.href} className={dark ? "btn btn-outline" : "btn btn-ink-outline"}>
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
