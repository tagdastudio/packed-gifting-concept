"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap, MQ, useGSAP } from "@/motion/gsap";
import { site } from "@/content/site";

const lines = [
  { text: "Some things", rotate: -2.1, offset: "0" },
  { text: "are worth", rotate: 1.1, offset: "1.15rem" },
  { text: "packing", rotate: -0.8, offset: "0.35rem" },
  { text: "properly.", rotate: 1.65, offset: "1.7rem", italic: true },
];

const tags = [
  {
    id: "dates",
    label: "the dates",
    note: "Medjool dates, soft and dark, from a shop we trust.",
    x: 67,
    y: 30,
  },
  {
    id: "walnuts",
    label: "the walnuts",
    note: "Kashmiri walnuts, cracked the week they are packed.",
    x: 57,
    y: 56,
  },
];

/**
 * The packing table. A still life is lit by a torch that follows the pointer; the headline is a stack of paper
 * labels tied with a ribbon, and the contents are pinned with kraft tags. The photograph is a placeholder,
 * credited in CREDITS.md, and is the first thing a client replaces.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const light = useRef<HTMLDivElement>(null);
  const moveSpot = useRef<(x: number, y: number) => void>(() => {});
  const lastPoint = useRef({ x: 67, y: 42 });
  const hoveringTag = useRef(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const active = tags.find((tag) => tag.id === activeTag);
  const caption = active ? active.note : "Inside: dates, apricots, walnuts, figs and pineapple.";

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        const entrance = gsap.timeline({ defaults: { ease: "power3.out" } });
        entrance
          .from(q("[data-hero-photo]"), { scale: 1.07, duration: 1.8 }, 0)
          .from(q("[data-hero-line]"), { y: 26, autoAlpha: 0, duration: 0.85, stagger: 0.085 }, 0.12)
          .from(q("[data-ribbon]"), { scaleY: 0, transformOrigin: "top center", duration: 1.05 }, 0.35)
          .from(q("[data-hero-meta]"), { y: 14, autoAlpha: 0, duration: 0.8, stagger: 0.08 }, 0.68)
          .from(q("[data-photo-tag]"), { autoAlpha: 0, y: -10, duration: 0.75, stagger: 0.1 }, 0.95);

        const parallax = gsap.to(q("[data-hero-photo]"), {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          entrance.kill();
          parallax.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  useEffect(() => {
    const element = light.current;
    const section = root.current;
    if (!element || !section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const spot = { x: fine ? 67 : 62, y: fine ? 42 : 36 };

    const apply = () => {
      element.style.setProperty("--x", `${spot.x}%`);
      element.style.setProperty("--y", `${spot.y}%`);
    };
    apply();

    if (!fine || reduced) {
      moveSpot.current = (x, y) => {
        spot.x = x;
        spot.y = y;
        apply();
      };
      return;
    }

    const xTo = gsap.quickTo(spot, "x", { duration: 0.7, ease: "power3", onUpdate: apply });
    const yTo = gsap.quickTo(spot, "y", { duration: 0.7, ease: "power3", onUpdate: apply });

    moveSpot.current = (x, y) => {
      xTo(x);
      yTo(y);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (hoveringTag.current) return;
      const rect = section.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      lastPoint.current = { x, y };
      xTo(x);
      yTo(y);
    };

    section.addEventListener("pointermove", onPointerMove);
    return () => section.removeEventListener("pointermove", onPointerMove);
  }, []);

  function focusTag(tag: (typeof tags)[number]) {
    hoveringTag.current = true;
    setActiveTag(tag.id);
    moveSpot.current(tag.x, tag.y);
  }

  function releaseTag() {
    hoveringTag.current = false;
    setActiveTag(null);
    moveSpot.current(lastPoint.current.x, lastPoint.current.y);
  }

  return (
    <section
      ref={root}
      aria-labelledby="hero-title"
      className="relative -mt-[4.5rem] min-h-[calc(100svh-var(--concept-h))] overflow-hidden bg-bg-deep"
    >
      <div className="absolute inset-0">
        <div data-hero-photo className="absolute inset-0">
          <Image
            src="/media/hero/dry-fruit-tray.jpg"
            alt="Dates, apricots, figs, walnuts and other dried fruit arranged on a wooden table."
            fill
            priority
            sizes="100vw"
            className="object-cover object-[52%_55%] brightness-[0.45] contrast-[1.1] saturate-[0.82]"
          />
        </div>

        <div aria-hidden="true" className="absolute inset-0 bg-[#0a1510]/58" />

        <div ref={light} aria-hidden="true" className="hero-light absolute inset-0">
          <Image
            src="/media/hero/dry-fruit-tray.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[52%_55%] brightness-[0.98] contrast-[1.06] saturate-[0.94]"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(9,17,12,0.97) 0%, rgba(9,17,12,0.9) 30%, rgba(9,17,12,0.46) 58%, rgba(9,17,12,0.1) 82%, rgba(9,17,12,0.3) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(9,17,12,0.96) 0%, rgba(9,17,12,0.55) 28%, rgba(9,17,12,0.04) 62%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(9,17,12,0.68) 0%, rgba(9,17,12,0.1) 20%, transparent 36%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 62% 46%, transparent 24%, rgba(9,17,12,0.24) 56%, rgba(9,17,12,0.66) 100%)",
          }}
        />
      </div>

      <div className="relative z-20 gutter page flex min-h-[calc(100svh-var(--concept-h))] flex-col justify-end pb-10 pt-[6.75rem] lg:justify-center lg:pb-16">
        <div data-hero-copy className="relative max-w-[37rem]">
          <div className="relative">
            <span data-ribbon aria-hidden="true" className="hero-ribbon" />

            <h1
              id="hero-title"
              aria-label="Some things are worth packing properly."
              className="relative z-10 flex flex-col items-start gap-2"
            >
              {lines.map((line) => (
                <span
                  key={line.text}
                  data-hero-line
                  aria-hidden="true"
                  className="hero-strip"
                  style={{ rotate: `${line.rotate}deg`, marginLeft: line.offset }}
                >
                  {line.italic ? <em className="font-[inherit] font-medium">{line.text}</em> : line.text}
                </span>
              ))}
            </h1>
          </div>

          <div data-hero-meta className="hero-slip mt-5 lg:ml-7">
            <p className="max-w-[26rem] text-[0.93rem] leading-[1.55]">
              Hampers, dry fruits, snacks and small luxuries, packed by hand in {site.city} for festivals, weddings, teams
              and the everyday thank-you.
            </p>
            <p className="hand mt-2 text-right text-[0.98rem] leading-none text-ink/70">packed by hand, one box at a time</p>
          </div>

          <div data-hero-meta className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href="/build" className="hero-cta-tag">
              Build a hamper
              <Arrow />
            </Link>
            <Link href="/hampers" className="link-line inline-flex min-h-11 items-center text-[0.95rem] font-medium text-fg">
              See the hampers
            </Link>
          </div>

          <p
            data-hero-meta
            className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-fg/65"
          >
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-saffron" />
              {site.city}
            </span>
            <span aria-hidden="true" className="h-px w-6 bg-fg/30" />
            <span>{site.deliveryShort}</span>
          </p>

          <div className="mt-6 flex flex-wrap gap-2 lg:hidden">
            {tags.map((tag) => (
              <button
                key={tag.id}
                type="button"
                onClick={() => focusTag(tag)}
                onFocus={() => focusTag(tag)}
                className={`inline-flex min-h-10 items-center gap-2 border px-3 font-hand text-[0.95rem] transition-colors duration-300 ${
                  activeTag === tag.id
                    ? "border-paper bg-paper text-ink"
                    : "border-fg/35 bg-bg-deep/40 text-fg hover:border-paper hover:bg-paper hover:text-ink"
                }`}
              >
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brass" />
                {tag.label}
              </button>
            ))}
          </div>
          <p className="mt-3 max-w-[22rem] text-[0.8rem] leading-relaxed text-fg/65 lg:hidden" aria-live="polite">
            {caption}
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-30 hidden lg:block">
        {tags.map((tag) => (
          <button
            key={tag.id}
            type="button"
            data-photo-tag
            onMouseEnter={() => focusTag(tag)}
            onMouseLeave={releaseTag}
            onFocus={() => focusTag(tag)}
            onBlur={releaseTag}
            className="photo-tag pointer-events-auto"
            style={{ left: `${tag.x}%`, top: `${tag.y}%` }}
            aria-describedby="hero-caption"
          >
            <span aria-hidden="true" className="photo-tag-pin" />
            <span aria-hidden="true" className="photo-tag-string" />
            <span className="photo-tag-label">{tag.label}</span>
          </button>
        ))}

        <div aria-hidden="true" className="hero-stamp absolute bottom-[20%] right-[6%]">
          Packed
          <br />
          Mysuru
        </div>

        <p
          id="hero-caption"
          className="absolute bottom-7 right-8 max-w-[19rem] text-right text-[0.8rem] leading-relaxed text-fg/70"
          aria-live="polite"
        >
          {caption}
        </p>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M3 13 13 3M5.5 3H13v7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
