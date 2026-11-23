import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "This box is empty",
  description: "The page you asked for is not here. Start with the hampers or build a box.",
};

export default function NotFound() {
  return (
    <main id="main" className="bg-paper text-ink">
      <div className="gutter page grid min-h-[calc(100svh-4.5rem)] items-center gap-10 py-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="label text-ink-soft">404</p>
          <h1 className="mt-4 max-w-[10ch] font-display text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.98] tracking-[-0.028em]">
            This box is empty.
          </h1>
          <p className="mt-5 max-w-[30rem] text-[1rem] leading-relaxed text-ink-soft">
            The page you asked for is not here. It may have moved, or it may never have been packed. Start with the hampers, or
            build something of your own.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/hampers" className="btn btn-ink">
              See the hampers
              <Arrow />
            </Link>
            <Link href="/build" className="btn btn-ink-outline">
              Build a hamper
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <svg viewBox="0 0 600 500" role="img" aria-label="An open, empty gift box with a loose ribbon." className="w-full">
            <rect width="600" height="500" fill="#e8dac1" />
            <ellipse cx="300" cy="404" rx="190" ry="20" fill="#1b2a20" opacity="0.18" />
            <path d="M150 276 190 226h220l40 50H150Z" fill="#d5bea0" stroke="#1b2a20" strokeOpacity="0.35" />
            <path d="M410 276h40v118l-40 34V276Z" fill="#d5bea0" stroke="#1b2a20" strokeOpacity="0.35" />
            <path d="M150 276h260v152H150V276Z" fill="#f4ead8" stroke="#1b2a20" strokeOpacity="0.4" />
            <path d="M150 276 190 226h220l40 50H150Z" fill="#1b2a20" opacity="0.14" />
            <path d="M284 226h16v202h-16V226Z" fill="#c8452d" />
            <path d="M152 340h256v16H152v-16Z" fill="#c8452d" opacity="0.92" />
            <path d="M414 320h92l10 16-10 46h-92l-8-30 8-32Z" fill="#f4ead8" stroke="#1b2a20" strokeOpacity="0.3" />
            <circle cx="418" cy="342" r="3.2" fill="none" stroke="#1b2a20" strokeOpacity="0.45" />
            <text x="462" y="348" textAnchor="middle" fill="#1b2a20" fontSize="9" letterSpacing="2" fontFamily="var(--font-body)">
              EMPTY
            </text>
            <text x="462" y="362" textAnchor="middle" fill="#1b2a20" opacity="0.6" fontSize="8" letterSpacing="1.6" fontFamily="var(--font-body)">
              TRY AGAIN
            </text>
            <path d="M300 226c-34-30-62-8-28 10 12 6 22-1 28-10Z" fill="#c8452d" opacity="0.8" />
            <path d="M300 226c34-30 62-8 28 10-12 6-22-1-28-10Z" fill="#c8452d" opacity="0.6" />
            <text x="30" y="476" fill="#1b2a20" fontSize="8" letterSpacing="2.4" opacity="0.55" fontFamily="var(--font-body)">
              PACKED · MYSURU
            </text>
          </svg>
        </div>
      </div>
    </main>
  );
}
