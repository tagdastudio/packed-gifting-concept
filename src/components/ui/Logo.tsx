import Link from "next/link";
import { site } from "@/content/site";

type Props = {
  className?: string;
  /** The mark alone, for tight spots. The link text is still read by assistive technology. */
  markOnly?: boolean;
};

/**
 * The demo wordmark is a chest mark plus type. A client logo replaces the mark; the link keeps the same box.
 * The mark is decorative; the link carries the accessible name.
 */
export function Logo({ className = "", markOnly = false }: Props) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 no-underline ${className}`} aria-label={`${site.name} home`}>
      <ChestMark />
      <span
        className={`font-display text-[1.35rem] font-semibold leading-none tracking-[-0.03em] ${markOnly ? "sr-only" : ""}`}
      >
        {site.wordmark}
      </span>
    </Link>
  );
}

export function ChestMark({ size = 26 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className="shrink-0 text-current transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-0.5"
    >
      <path d="M4.5 10.25 14 5.75l9.5 4.5v11.5L14 26.25 4.5 21.75z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M4.5 10.25 14 14.75l9.5-4.5M14 14.75v11.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M11.25 17.1v2.05a2.75 2.75 0 0 0 5.5 0V17.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
