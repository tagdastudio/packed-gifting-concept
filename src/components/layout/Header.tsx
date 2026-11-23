import Link from "next/link";
import { site } from "@/content/site";
import { waLink } from "@/lib/links";
import { Logo } from "@/components/ui/Logo";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="gutter page flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink("Hi Packed, I'd like help with a gift.")}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center gap-2.5 border border-line px-4 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-fg transition-colors duration-300 hover:border-fg sm:inline-flex"
          >
            WhatsApp
            <Arrow />
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M3 13 13 3M5.5 3H13v7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
