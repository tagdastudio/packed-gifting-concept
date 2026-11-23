"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "./gsap";

/**
 * After every client-side page change, re-measure scroll animations for the new page. Without this, anything shared by
 * all pages (a footer, a header) keeps the previous page's scroll positions and animates at the wrong places.
 */
export function RouteRefresh() {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(id);
  }, [pathname]);
  return null;
}
