import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  crumb: string;
  title: string;
  intro?: string;
  meta?: readonly string[];
  tone?: "paper" | "dark";
  children?: ReactNode;
};

/**
 * The first block on every interior page: a breadcrumb, a large page title with a ribbon edge, and a short intro.
 * Paper by default; dark for corporate and wedding pages.
 */
export function PageHero({ crumb, title, intro, meta, tone = "paper", children }: Props) {
  const dark = tone === "dark";
  return (
    <section className={dark ? "bg-bg-deep text-fg" : "bg-paper text-ink"}>
      <div className="gutter page pb-12 pt-10 lg:pb-16 lg:pt-14">
        <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] ${dark ? "text-fg/55" : "text-ink-soft"}`}>
          <Link href="/" className="transition-colors hover:text-current">
            Packed
          </Link>
          <span aria-hidden="true">/</span>
          <span className={dark ? "text-fg/80" : "text-ink"}>{crumb}</span>
        </nav>

        <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="flex items-start gap-4">
              <span aria-hidden="true" className="mt-1 h-[clamp(2.4rem,5vw,4.6rem)] w-[5px] shrink-0 bg-vermilion" />
              <h1 className="max-w-[13ch] font-display text-[clamp(2.5rem,5.8vw,5.2rem)] leading-[0.98] tracking-[-0.028em]">
                {title}
              </h1>
            </div>
            {intro ? (
              <p className={`mt-6 max-w-[34rem] text-[1.02rem] leading-relaxed ${dark ? "text-fg/70" : "text-ink-soft"}`}>{intro}</p>
            ) : null}
            {children ? <div className="mt-7 flex flex-wrap items-center gap-3">{children}</div> : null}
          </div>

          {meta?.length ? (
            <div className={`flex flex-wrap gap-2 lg:col-span-4 lg:col-start-9 lg:justify-end lg:self-end ${dark ? "text-fg/65" : "text-ink-soft"}`}>
              {meta.map((item) => (
                <span key={item} className={`inline-flex min-h-9 items-center border px-3 text-[0.78rem] font-medium ${dark ? "border-fg/20" : "border-line-ink-strong"}`}>
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className={`h-px ${dark ? "bg-line" : "bg-line-ink"}`} />
    </section>
  );
}
