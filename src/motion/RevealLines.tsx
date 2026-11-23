"use client";

import { useRef, type ElementType } from "react";
import { gsap, MQ, useGSAP } from "./gsap";
import { splitOnce } from "./splitOnce";

type Props = {
  as?: ElementType;
  className?: string;
  /** Seconds before the first line moves. */
  delay?: number;
  /** "scroll" waits until the text scrolls into view; "load" plays as soon as the page is ready (hero headings). */
  trigger?: "scroll" | "load";
  children: React.ReactNode;
  id?: string;
};

/**
 * Text that rises into place one line at a time. Lines are masked; .split-line-mask (globals.css) pads each mask so
 * ascenders and descenders are never clipped. Reduced motion: the text is simply there.
 */
export function RevealLines({ as: Tag = "div", className, delay = 0, trigger = "scroll", children, id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () =>
        // Headings keep one readable name (aria-label); other text is left as it is, since aria-label isn't allowed on <p>.
        splitOnce(el, { type: "lines", mask: "lines", linesClass: "split-line", aria: /^H[1-6]$/.test(el.tagName) ? "auto" : "none" }, (self, played) =>
          gsap.from(self.lines, {
            yPercent: 135,
            duration: 1.1,
            stagger: 0.08,
            delay,
            ...(trigger === "scroll" ? { scrollTrigger: { trigger: el, start: "top 88%", once: true, onEnter: played } } : { onStart: played }),
          }),
        ),
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} id={id}>
      {children}
    </Tag>
  );
}
