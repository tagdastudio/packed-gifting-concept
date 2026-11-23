/** Inlined at build by next.config.ts. The demo is a static Cloudflare Pages site. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://packed-gifting-concept.pages.dev").replace(/\/$/, "");

/** The concept ships noindex; flip NEXT_PUBLIC_INDEXABLE to "true" when a client launches. */
export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const absoluteUrl = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
