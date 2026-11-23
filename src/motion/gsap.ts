"use client";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Every plugin a concept might use, registered once. Import gsap and plugins from this file, never from "gsap" directly.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, DrawSVGPlugin, Flip, MorphSVGPlugin, ScrambleTextPlugin, useGSAP);
  CustomEase.create("expo", "0.19,1,0.22,1");
  gsap.defaults({ ease: "expo", duration: 1 });
}

/** Media queries for gsap.matchMedia(). Animate only inside MQ.motion, so reduced-motion users get the finished state. */
export const MQ = {
  motion: "(prefers-reduced-motion: no-preference)",
  desktop: "(min-width: 1024px)",
  fine: "(hover: hover) and (pointer: fine)",
} as const;

export { CustomEase, DrawSVGPlugin, Flip, gsap, MorphSVGPlugin, ScrambleTextPlugin, ScrollTrigger, SplitText, useGSAP };
