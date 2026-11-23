"use client";

import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";

function ScrollTriggerSync() {
  useLenis(() => ScrollTrigger.update());
  return null;
}

/**
 * Lenis smooth scrolling, driven by GSAP's ticker so scroll-linked animations and the scroll position move in the same
 * frame. `anchorOffset` keeps #links clear of a fixed header.
 */
export function SmoothScroll({ children, anchorOffset = 80 }: { children: React.ReactNode; anchorOffset?: number }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (time: number) => lenisRef.current?.lenis?.raf(time * 1000);
    // First in the frame, so tweens and anything measuring the page see this frame's scroll position.
    gsap.ticker.add(update, false, true);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false, lerp: 0.11, anchors: { offset: -anchorOffset }, stopInertiaOnNavigate: true }}>
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
