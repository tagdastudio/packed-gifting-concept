"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { waLink } from "@/lib/links";
import { ChestMark } from "@/components/ui/Logo";
import { NavLinks } from "./NavLinks";

export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    if (dialog.open) dialog.close();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="inline-flex min-h-11 items-center gap-2.5 border border-line px-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-fg transition-colors duration-300 hover:border-fg lg:hidden"
      >
        <span>Menu</span>
        <span aria-hidden="true" className="flex w-4 flex-col gap-1">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-full bg-current" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        aria-label="Menu"
        className="fixed inset-0 m-0 h-[100svh] max-h-none w-full max-w-none border-0 bg-bg p-0 text-fg backdrop:bg-bg-deep"
      >
        <div className="flex h-full flex-col">
          <div className="gutter flex h-[4.5rem] shrink-0 items-center justify-between border-b border-line">
            <Link href="/" onClick={() => setOpen(false)} className="inline-flex items-center gap-2.5" aria-label={`${site.name} home`}>
              <ChestMark size={24} />
              <span className="font-display text-[1.3rem] font-semibold leading-none tracking-[-0.03em]">{site.wordmark}</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 items-center gap-2.5 border border-line px-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 hover:border-fg"
            >
              Close
              <span aria-hidden="true" className="relative h-4 w-4">
                <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav className="gutter flex flex-1 flex-col justify-center py-10" aria-label="Mobile">
            <ul className="flex flex-col">
              {site.nav.map((item, index) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between gap-4 py-4 font-display text-[clamp(2rem,9vw,3.4rem)] leading-none tracking-[-0.025em] transition-colors duration-300 hover:text-saffron"
                  >
                    {item.label}
                    <span aria-hidden="true" className="label text-fg-soft">
                      0{index + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="gutter grid shrink-0 gap-6 border-t border-line py-7">
            <div className="flex flex-wrap items-center gap-3">
              <a href={waLink("Hi Packed, I'd like help with a gift.")} className="btn btn-primary" target="_blank" rel="noreferrer">
                WhatsApp us
                <Arrow />
              </a>
              <Link href="/build" onClick={() => setOpen(false)} className="btn btn-outline">
                Build a hamper
              </Link>
            </div>
            <div className="grid gap-1 text-sm text-fg-soft">
              <a className="link-line w-fit" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <p>
                {site.city} · {site.deliveryShort}
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M3 13 13 3M5.5 3H13v7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
