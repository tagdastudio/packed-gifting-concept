# Packed — a gifting-house concept

A configurable, design-led website for a gift, hamper or corporate-gifting business, built by **Tagda Studio**.

**Live preview:** https://packed-gifting-concept.pages.dev

The business and its details are fictional. The site is a concept, not a live shop; prices, hours, lead times and the address are illustrative. A thin concept banner and a noindex header make that clear on every page.

## What it is

- A **packing-table hero**: a photographic still life lit by a torch that follows the pointer, a headline made of paper labels tied with a ribbon, and pinned tags that move the light and change the caption.
- Six hamper pages with drawn specimen plates, contents, allergens, shelf life, lead time and a WhatsApp reserve action.
- A **build-a-hamper** tool: choose a size, fill the box from six shelves, write the note, see an indicative price and send the whole brief on WhatsApp. No payment and no backend.
- Corporate and wedding briefs that compose a complete message locally; the visitor chooses whether to send it.
- A store page with current hours, a drawn neighbourhood map, delivery and pickup.
- Three journal notes, a grouped FAQ, delivery and legal pages, and a 404 with an empty box.

## Stack

Next.js 16 (App Router, static export) · React 19 · TypeScript · Tailwind CSS v4 · GSAP + ScrollTrigger · Lenis · Cloudflare Pages.

## Run

```bash
npm install
npm run dev          # http://127.0.0.1:4301
npm run check        # typecheck, lint, production build
```

Build the static site:

```bash
npm run build        # writes ./out
```

## Deploy

```bash
npm run build
npx wrangler pages deploy out --project-name packed-gifting-concept --branch main
```

The repo is `tagdastudio/packed-gifting-concept`. Cloudflare serves `out` as static files; `public/_headers` sets the security headers and the noindex tag.

## Rebrand it for a client

1. **`src/content/site.ts`** — name, wordmark, descriptor, city, address, hours, phone, WhatsApp, email, Instagram, delivery note, concept flag.
2. **`src/app/globals.css`** — the palette tokens (`--color-bg`, `--color-paper`, `--color-saffron`, `--color-vermilion`, and the rest). Keep the token names.
3. **`src/lib/fonts.ts`** — the three voices: display, body and hand.
4. **`src/content/hampers.ts`** — names, prices, contents, allergens, lead times and the plate colours.
5. **`src/content/build.ts`** — box sizes, shelves and items.
6. **`public/media/`** — replace the Pexels placeholders with the client's own photography; keep the drawn plates as fallbacks or remove them per hamper.
7. **`src/components/layout/ConceptBanner.tsx`** — remove the concept banner for a real launch.
8. **`next.config.ts`** — set `NEXT_PUBLIC_INDEXABLE=true` and remove the noindex rule in `public/_headers` when the site is ready to be indexed. Update `NEXT_PUBLIC_SITE_URL` or the default in `src/lib/site.ts`.

## Preview files

- `preview/hero-desktop.png`, `preview/hero-mobile.png` — the hero.
- `preview/hero-motion.gif` — the entrance.
- `preview/mobile/` — mobile menu, builder, FAQ and detail captures.
- `preview/pages/` — full-page QA captures (ignored by git).

## Credits

Photography placeholders are from Pexels; see `CREDITS.md`. Fonts are Petrona, Host Grotesk and Kalam via Google Fonts. All rights in the concept, copy, layout and drawn illustrations belong to Tagda Studio.
