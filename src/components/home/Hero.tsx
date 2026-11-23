"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { gsap, MQ, useGSAP } from "@/motion/gsap";
import { RevealLines } from "@/motion/RevealLines";
import { site } from "@/content/site";

/**
 * The packing-room hero. The chest is drawn, not photographed: a 3/4 box in petrol paper, saffron ribbon,
 * a wax seal and a kraft tag. The seal is a real button; activating it plays the unwrap timeline. Scrolling
 * is never required to reach the rest of the page, and with reduced motion the open state is immediate.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [opened, setOpened] = useState(false);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        const entrance = gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(q("[data-lamp]"), { autoAlpha: 0, duration: 1.4 }, 0.05)
          .from(q("[data-scene]"), { y: 26, autoAlpha: 0, duration: 1.2 }, 0.1)
          .from(q("[data-hero-fade]"), { y: 16, autoAlpha: 0, duration: 0.9, stagger: 0.08 }, 0.55);

        const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

        tl.to(q("[data-shard]"), {
          x: (index) => [-38, 26, 12][index] ?? 0,
          y: (index) => [52, 68, 38][index] ?? 40,
          rotation: (index) => [-48, 36, 18][index] ?? 0,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.035,
          ease: "power2.in",
        }, 0)
          .to(q("[data-seal-base], [data-seal-detail]"), { autoAlpha: 0, duration: 0.16 }, 0)
          .to(q("[data-seal-mark]"), { autoAlpha: 0, duration: 0.2 }, 0)
          .to(q("[data-bow]"), { y: 66, rotation: 16, autoAlpha: 0, duration: 0.7, ease: "power2.in" }, 0.12)
          .to(q("[data-ribbon]"), { y: 76, rotation: 3, autoAlpha: 0, duration: 0.75, stagger: 0.06, ease: "power2.in" }, 0.18)
          .to(q("[data-tag]"), { y: 34, rotation: 16, autoAlpha: 0, duration: 0.6, ease: "power2.in" }, 0.2)
          .to(q("[data-lid]"), { y: -92, scaleY: 0.34, rotation: -3, duration: 1.15, ease: "power3.inOut" }, 0.5)
          .to(q("[data-tissue]"), {
            x: (index) => (index % 2 === 0 ? -54 : 46),
            y: -14,
            rotation: (index) => (index % 2 === 0 ? -13 : 11),
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.05,
            ease: "power2.inOut",
          }, 0.92)
          .fromTo(q("[data-content]"), { y: 92, autoAlpha: 0 }, {
            y: 0,
            autoAlpha: 1,
            duration: 0.95,
            stagger: 0.09,
            ease: "power2.out",
          }, 1.05);

        timeline.current = tl;

        const parallax = gsap.to(q("[data-scene]"), {
          y: 26,
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
          tl.kill();
          parallax.kill();
          timeline.current = null;
        };
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  function openChest() {
    setOpened(true);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      const q = gsap.utils.selector(root);
      gsap.set(q("[data-shard]"), { autoAlpha: 0 });
      gsap.set(q("[data-seal-base], [data-seal-detail]"), { autoAlpha: 0 });
      gsap.set(q("[data-seal-mark]"), { autoAlpha: 0 });
      gsap.set(q("[data-bow]"), { autoAlpha: 0 });
      gsap.set(q("[data-ribbon]"), { autoAlpha: 0 });
      gsap.set(q("[data-tag]"), { autoAlpha: 0 });
      gsap.set(q("[data-lid]"), { y: -92, scaleY: 0.34, rotation: -3, transformOrigin: "50% 100%" });
      gsap.set(q("[data-tissue]"), { autoAlpha: 0 });
      gsap.set(q("[data-content]"), { y: 0, autoAlpha: 1 });
      return;
    }

    if (!timeline.current) return;
    if (opened) timeline.current.restart();
    else timeline.current.play();
  }

  return (
    <section ref={root} className="relative overflow-hidden bg-bg-deep" aria-labelledby="hero-title">
      <div className="gutter page grid min-h-[calc(100svh-4.5rem)] items-center gap-7 py-8 lg:grid-cols-12 lg:gap-6 lg:py-10">
        <div className="relative z-10 order-1 lg:col-span-5">
          <RevealLines as="h1" id="hero-title" trigger="load" className="display max-w-[10ch] text-fg">
            Some things are worth packing properly.
          </RevealLines>

          <p data-hero-fade className="lead mt-6 max-w-[30rem]">
            Hampers, dry fruits, snacks and small luxuries, packed by hand in {site.city} for festivals, weddings, teams and the
            everyday thank-you.
          </p>

          <div data-hero-fade className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/build" className="btn btn-primary">
              Build a hamper
              <Arrow />
            </Link>
            <Link href="/hampers" className="btn btn-outline">
              See the hampers
            </Link>
          </div>

          <p data-hero-fade className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.78rem] font-medium uppercase tracking-[0.13em] text-fg-soft">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-saffron" />
              {site.city}
            </span>
            <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
            <span>{site.deliveryShort}</span>
          </p>
        </div>

        <div className="relative order-2 lg:col-span-7">
          <div className="relative mx-auto w-full max-w-[42rem]">
            <svg
              viewBox="0 170 1000 590"
              role="presentation"
              aria-hidden="true"
              className="h-auto w-full select-none"
              data-scene
            >
              <defs>
                <radialGradient id="lamp-pool" cx="60%" cy="40%" r="55%">
                  <stop offset="0" stopColor="#f6d99b" stopOpacity="0.34" />
                  <stop offset="0.55" stopColor="#f6d99b" stopOpacity="0.1" />
                  <stop offset="1" stopColor="#f6d99b" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="counter-top" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#d6b58a" />
                  <stop offset="1" stopColor="#bfa075" />
                </linearGradient>
                <linearGradient id="counter-front" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#ad8c63" />
                  <stop offset="1" stopColor="#8f704d" />
                </linearGradient>
                <linearGradient id="inner" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#0f1913" />
                  <stop offset="1" stopColor="#263a2d" />
                </linearGradient>
                <linearGradient id="lid-shade" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#f4ead8" stopOpacity="0.16" />
                  <stop offset="1" stopColor="#0b120d" stopOpacity="0.18" />
                </linearGradient>
                <pattern id="pinstripe" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#2e4a52" />
                  <rect width="1.1" height="20" fill="#f4ead8" opacity="0.2" />
                </pattern>
                <pattern id="pinstripe-dark" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#223a41" />
                  <rect width="1.1" height="20" fill="#f4ead8" opacity="0.12" />
                </pattern>
                <pattern id="counter-grain" width="18" height="6" patternUnits="userSpaceOnUse">
                  <rect width="18" height="6" fill="none" />
                  <path d="M0 3h18" stroke="#6e5438" strokeOpacity="0.18" strokeWidth="0.8" />
                </pattern>
                <filter id="chest-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="16" />
                </filter>
                <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
                <clipPath id="seal-clip">
                  <path d="M560 414c20-2 36 12 36 34 0 24-16 38-38 38s-36-14-36-36 12-34 38-36Z" />
                </clipPath>
              </defs>

              {/* The room: one warm lamp and a quiet wall, kept low so the chest leads. */}
              <g data-lamp>
                <ellipse cx="600" cy="390" rx="450" ry="330" fill="url(#lamp-pool)" />
                <path d="M648 176v40" stroke="#b08a4f" strokeWidth="2" strokeOpacity="0.7" />
                <path d="M616 216h64l20 40h-104l20-40Z" fill="#b08a4f" />
                <ellipse cx="648" cy="258" rx="9" ry="5" fill="#f6d99b" />
                <path d="M760 300h240" stroke="#f4ead8" strokeOpacity="0.1" strokeWidth="1.5" />
              </g>

              {/* Counter */}
              <g>
                <rect x="0" y="598" width="1000" height="64" fill="url(#counter-top)" />
                <rect x="0" y="598" width="1000" height="64" fill="url(#counter-grain)" />
                <rect x="0" y="662" width="1000" height="98" fill="url(#counter-front)" />
                <path d="M0 662h1000" stroke="#6e5438" strokeOpacity="0.5" />
                <path d="M0 600h1000" stroke="#f4ead8" strokeOpacity="0.18" strokeWidth="1" />
              </g>

              {/* Packing list, left of the chest */}
              <g transform="rotate(-3 196 628)">
                <rect x="92" y="574" width="208" height="128" fill="#f4ead8" />
                <rect x="92" y="574" width="208" height="128" fill="none" stroke="#1b2a20" strokeOpacity="0.14" />
                <text x="112" y="602" fill="#4d5a48" fontSize="10" fontWeight="600" letterSpacing="2.2" fontFamily="var(--font-body)">
                  PACKING LIST
                </text>
                <path d="M112 614h168M112 632h148M112 650h160M112 668h96" stroke="#1b2a20" strokeOpacity="0.22" strokeWidth="1" />
                <circle cx="278" cy="590" r="3.8" fill="none" stroke="#c8452d" strokeWidth="1.4" />
                <path d="M274 590h8" stroke="#c8452d" strokeWidth="1.4" />
              </g>

              {/* Spool and scissors, right of the chest */}
              <g opacity="0.9">
                <ellipse cx="880" cy="606" rx="34" ry="13" fill="#6e5438" opacity="0.35" filter="url(#soft-shadow)" />
                <rect x="844" y="556" width="72" height="50" rx="7" fill="#c9a77c" />
                <ellipse cx="880" cy="556" rx="36" ry="13" fill="#e8dac1" />
                <ellipse cx="880" cy="556" rx="12" ry="4.5" fill="#8f704d" />
                <path d="M862 566c22-10 44 2 34 22" stroke="#c8452d" strokeWidth="6" fill="none" strokeLinecap="round" />
                <path d="M846 583c-24 8-38 24-44 38" stroke="#c8452d" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M774 588l-26 14 16 8-4 18 22-14" stroke="#b08a4f" strokeWidth="2.4" fill="none" strokeLinejoin="round" />
                <circle cx="748" cy="602" r="5" fill="none" stroke="#b08a4f" strokeWidth="2.4" />
                <circle cx="760" cy="628" r="5" fill="none" stroke="#b08a4f" strokeWidth="2.4" />
              </g>

              {/* Chest */}
              <ellipse cx="558" cy="626" rx="266" ry="24" fill="#0b120d" opacity="0.55" filter="url(#chest-shadow)" />

              <g data-chest>
                {/* Right side and interior first; the front panel is drawn after the contents so they sit inside. */}
                <path d="M740 410 820 370v210l-80 40V410Z" fill="url(#pinstripe-dark)" />
                <path d="M740 410 820 370v210l-80 40V410Z" fill="url(#lid-shade)" />
                <path d="M320 410 400 370h420l-80 40H320Z" fill="url(#inner)" />

                {/* Tissue, tucked in the box */}
                <g data-tissue>
                  <path d="M348 402 430 378l62 22-48 30-96-16 0-12Z" fill="#f4ead8" />
                  <path d="M410 396 486 376l62 24-32 30-106-18v-16Z" fill="#e8dac1" />
                  <path d="M478 400 552 380l74 22-40 34-98-20 0-16Z" fill="#f4ead8" />
                  <path d="M556 398 628 378l70 22-44 34-96-20 0-16Z" fill="#e8dac1" />
                  <path d="M640 402 700 384l58 20-46 34-86-22 0-14Z" fill="#f4ead8" />
                </g>

                {/* Contents, hidden by the front panel below y=410 */}
                <g data-content>
                  <rect x="388" y="356" width="112" height="120" rx="5" fill="#c9a77c" />
                  <rect x="388" y="356" width="112" height="12" rx="4" fill="#b08a4f" />
                  <rect x="402" y="382" width="84" height="54" fill="#f4ead8" />
                  <text x="444" y="404" textAnchor="middle" fill="#1b2a20" fontSize="9" fontWeight="600" letterSpacing="1.8" fontFamily="var(--font-body)">
                    ALMONDS
                  </text>
                  <path d="M412 418h64M412 428h46" stroke="#1b2a20" strokeOpacity="0.3" strokeWidth="1" />
                  <ellipse cx="444" cy="356" rx="56" ry="12" fill="#e8dac1" />
                </g>
                <g data-content>
                  <rect x="522" y="368" width="76" height="110" rx="2" fill="#3b2418" />
                  <rect x="522" y="368" width="76" height="110" rx="2" fill="none" stroke="#0f1913" strokeOpacity="0.4" />
                  <rect x="522" y="392" width="76" height="34" fill="#c8452d" />
                  <text x="560" y="413" textAnchor="middle" fill="#f4ead8" fontSize="9" fontWeight="600" letterSpacing="1.4" fontFamily="var(--font-body)">
                    DARK
                  </text>
                  <path d="M532 444h56M532 454h40" stroke="#f4ead8" strokeOpacity="0.4" strokeWidth="1" />
                </g>
                <g data-content>
                  <rect x="626" y="364" width="78" height="116" rx="10" fill="#d9a23b" />
                  <rect x="626" y="364" width="78" height="116" rx="10" fill="none" stroke="#8f6a1f" strokeOpacity="0.5" />
                  <rect x="620" y="354" width="90" height="18" rx="4" fill="#b08a4f" />
                  <rect x="644" y="396" width="42" height="34" rx="2" fill="#f4ead8" opacity="0.86" />
                  <path d="M654 410h22M654 420h14" stroke="#1b2a20" strokeOpacity="0.45" strokeWidth="1.2" />
                  <path d="M640 452c14-10 32-6 40 8" stroke="#f4ead8" strokeOpacity="0.35" strokeWidth="1.4" fill="none" />
                </g>
                <g data-content>
                  <rect x="462" y="322" width="152" height="92" rx="1" fill="#f4ead8" transform="rotate(-4 538 368)" />
                  <path d="M480 344h94M480 360h76M480 376h86" stroke="#1b2a20" strokeOpacity="0.42" strokeWidth="1.6" strokeLinecap="round" transform="rotate(-4 538 368)" />
                  <path d="M556 388c8-10 18-8 22 0" stroke="#c8452d" strokeWidth="1.6" fill="none" transform="rotate(-4 538 368)" />
                </g>

                {/* Front panel over the contents */}
                <path d="M320 410h420v210H320V410Z" fill="url(#pinstripe)" />
                <path d="M320 410h420v210H320V410Z" fill="url(#lid-shade)" opacity="0.45" />
                <path d="M320 410h420v18H320v-18Z" fill="#0f1913" opacity="0.35" />

                {/* Brass corners */}
                <g stroke="#b08a4f" strokeWidth="2.2" strokeLinecap="square">
                  <path d="M326 416v22M326 416h22" />
                  <path d="M734 416v22M734 416h-22" />
                  <path d="M326 614v-22M326 614h22" />
                  <path d="M734 614v-22M734 614h-22" />
                </g>

                {/* Lid, hinged at the back edge */}
                <g data-lid style={{ transformOrigin: "50% 100%" }}>
                  <path d="M320 380 400 340h420l-80 40H320Z" fill="url(#pinstripe)" />
                  <path d="M320 380 400 340h420l-80 40H320Z" fill="url(#lid-shade)" />
                  <path d="M320 380h420v28H320v-28Z" fill="url(#pinstripe-dark)" />
                  <path d="M740 380 820 340v28l-80 40v-28Z" fill="url(#pinstripe-dark)" />
                  <path d="M320 407h420" stroke="#0f1913" strokeOpacity="0.35" />
                </g>

                {/* Ribbon: lid top, front band and side band. It leaves before the lid lifts. */}
                <g data-ribbon>
                  <path d="M536 356 570 342v44l-34 14v-44Z" fill="#e0a32e" />
                  <path d="M536 400 570 386v42l-34 14v-42Z" fill="#c98f22" />
                  <path d="M536 428h34v192h-34V428Z" fill="#e0a32e" />
                  <path d="M740 494 820 456v34l-80 38v-34Z" fill="#c98f22" />
                  <path d="M320 494h420v34H320v-34Z" fill="#e0a32e" />
                  <path d="M320 494h420v5H320v-5Z" fill="#f4ead8" opacity="0.28" />
                  <path d="M320 523h420v5H320v-5Z" fill="#a97317" opacity="0.5" />
                </g>

                {/* Bow and tag */}
                <g data-bow>
                  <path d="M560 342c-40-42-72-10-30 10 16 8 26-1 30-10Z" fill="#e0a32e" />
                  <path d="M560 342c40-42 72-10 30 10-16 8-26-1-30-10Z" fill="#f0b644" />
                  <path d="M560 342c-20 14-26 34-14 48 10 12 24 4 20-12-2-10-6-22-6-36Z" fill="#c98f22" />
                  <path d="M560 342c20 14 26 34 14 48-10 12-24 4-20-12 2-10 6-22 6-36Z" fill="#e0a32e" />
                  <ellipse cx="560" cy="346" rx="13" ry="10" fill="#a97317" />
                </g>
                <g data-tag transform="rotate(7 700 438)">
                  <path d="M646 360c30 14 52 34 54 58" stroke="#b08a4f" strokeWidth="1.6" fill="none" />
                  <path d="M700 406h132l14 22-14 70H700l-12-46 12-46Z" fill="#f4ead8" />
                  <path d="M700 406h132l14 22-14 70H700l-12-46 12-46Z" fill="none" stroke="#1b2a20" strokeOpacity="0.18" />
                  <circle cx="704" cy="438" r="4" fill="none" stroke="#1b2a20" strokeOpacity="0.45" />
                  <text x="756" y="450" textAnchor="middle" fill="#1b2a20" fontSize="17" style={{ fontFamily: "var(--font-hand)" }}>
                    for someone
                  </text>
                  <text x="756" y="474" textAnchor="middle" fill="#1b2a20" fontSize="17" style={{ fontFamily: "var(--font-hand)" }}>
                    specific.
                  </text>
                  <path d="M720 492h72" stroke="#1b2a20" strokeOpacity="0.25" />
                </g>

                {/* Wax seal: a base and three shards. The base fades as the shards fly, so it can break apart. */}
                <g>
                  <path
                    data-seal-base
                    d="M560 414c20-2 36 12 36 34 0 24-16 38-38 38s-36-14-36-36 12-34 38-36Z"
                    fill="#c8452d"
                  />
                  <g>
                    <path data-shard d="M522 414 560 414 542 486 518 474Z" fill="#c8452d" />
                    <path data-shard d="M560 414 598 414 600 462 560 486Z" fill="#b73823" />
                    <path data-shard d="M542 486 600 462 598 486 558 486Z" fill="#a83422" />
                  </g>
                  <path
                    data-seal-detail
                    d="M560 414c20-2 36 12 36 34 0 24-16 38-38 38s-36-14-36-36 12-34 38-36Z"
                    fill="none"
                    stroke="#8e2a1a"
                    strokeOpacity="0.45"
                  />
                  <ellipse data-seal-detail cx="548" cy="432" rx="8" ry="4.5" fill="#f4ead8" opacity="0.26" transform="rotate(-28 548 432)" />
                  <text
                    data-seal-mark
                    x="560"
                    y="462"
                    textAnchor="middle"
                    fill="#f4ead8"
                    fontSize="30"
                    fontWeight="600"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    P
                  </text>
                </g>
              </g>
            </svg>

            <button
              type="button"
              onClick={openChest}
              aria-label={opened ? "Replay the chest unwrapping" : "Break the wax seal and open the chest"}
              className="group absolute z-20 grid size-[clamp(3.4rem,6vw,4.6rem)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full focus-visible:outline-offset-4"
              style={{ left: "56%", top: "59.2%" }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-fg/0 transition-colors duration-300 group-hover:border-fg/45 group-focus-visible:border-fg/60"
              />
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-[calc(100%+0.35rem)] -translate-x-1/2 -rotate-3 whitespace-nowrap border border-ink/15 bg-paper px-2 py-1 font-hand text-[0.78rem] leading-none text-ink shadow-[0_4px_10px_rgb(0_0_0_/_0.18)] transition-opacity duration-300 group-hover:opacity-100"
              >
                {opened ? "open it again" : "break the seal"}
              </span>
            </button>
          </div>

          <p data-hero-fade className="mt-3 text-center text-[0.8rem] text-fg-soft lg:mt-4">
            A chest, not a box. Press the seal to see what is inside.
          </p>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {opened
          ? "Chest opened. Inside: a tin of almonds, a bar of dark chocolate, a jar of honey and a handwritten note."
          : ""}
      </p>
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
