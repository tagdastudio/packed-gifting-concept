# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (App Router, static export), React 19, TypeScript, Tailwind CSS v4, GSAP + ScrollTrigger, Lenis. Deployed to Cloudflare Pages. Content is typed TypeScript in `src/content/`; no CMS and no server runtime.

## Users

Two audiences in one site. First, the gift-giver: someone in India who needs a hamper for a festival, a wedding, a client, a new home or a plain thank-you, often on a phone and often close to the date. They want to know what is inside, what it costs, whether it suits the recipient, and how quickly it can reach them. Second, the buyer at a company: an EA, HR lead or founder ordering 25 to 5,000 gifts, who needs a clear budget, a per-unit price, GST invoicing, delivery to one or many addresses, and a written quote rather than a checkout.

The site is also a showcase template for Tagda Studio. A third reader is the owner of a gifting business evaluating whether this is the site they want. The demo brand is fictional; the structure is what is being sold.

## Product Purpose

A design-led gifting-house website that turns browsing into a specific, sendable brief. Success means a visitor can find a hamper that fits, understand exactly what is in it, build one themselves, or hand over a corporate requirement, and reach the shop on WhatsApp with everything the shop needs to answer: occasion, contents, quantity, budget, date and city.

The template must prove that a gifting business can have the craft of an award-level site without losing the practical paths that make it money: single hampers, custom hampers, bulk enquiries, delivery and a physical store.

## Positioning

A gifting-house template with two things a stock shop theme cannot copy: a landing experience built around unpacking a chest, and a real build-a-hamper tool that composes a structured WhatsApp brief. The site is configurable to a client's name, logo, palette, city, contact details, categories and photography; the demo is deliberately generic.

The category default is a catalogue grid, a banner, three icon cards and a contact form. This template refuses that and organises the page as a packing room: shelves, a counter, a chest, a packing list and a note.

## Operating Context

- A physical gift shop with local delivery and pan-India courier on request. The shop also takes single orders and bulk orders for weddings, festivals, corporate gifting and everyday celebrations.
- WhatsApp is the primary sales channel. The site composes the message; it does not take payment.
- Hampers contain food and other specialty goods, so contents, allergens, shelf life and packaging are part of the product record, not fine print.
- Corporate orders need quantities, a per-unit budget, a delivery date, one or many addresses, a printed note card and a GST invoice. These are confirmed in writing before production.
- The demo is set in Mysuru with illustrative details. It must not display a real business's address, phone number, founder or photographs.
- The template will be shown to real gifting businesses, including Pitara in Bhubaneswar. Their category (snacks, dry fruits, chocolates, beverages, specialty products, curated hampers; single and bulk orders; WhatsApp; delivery on request; a store) is the reference for the content model. No Pitara name, copy, contact detail or image is published in the demo.

## Capabilities and Constraints

- Static export only. No cart, checkout, payment, accounts, CMS, route handlers or server actions.
- Pages: home, hampers index, six hamper details, build a hamper, corporate and bulk, weddings and celebrations, visit the store, about, journal index and three essays, FAQ, privacy, terms, 404.
- Filters are kept in the URL. The hamper builder stores its state in the browser only.
- WhatsApp and email links are composed client-side from the current hamper, box or brief. No form backend.
- Brand configuration is a single `site` object: name, wordmark or logo, descriptor, city, address, hours, phone, WhatsApp, email, Instagram, delivery note and concept flag. Palette tokens live in `globals.css`; fonts are chosen in `src/lib/fonts.ts`.
- Photography is optional per hamper. When a photo is absent, a drawn specimen plate stands in; the site must look finished either way.
- Every page is indexable only when `site.concept` is turned off. The demo ships noindex and carries a small concept credit.
- Undecided and not to be invented: real prices, real client logos, testimonials, certifications, exact delivery promises, GST terms, allergen data for a real product, and any photography of a real shop. These are illustrative in the demo and must be confirmed before a client launch.

## Brand Commitments

- Demo name: **Packed** (lowercase wordmark), descriptor “A gifting house for hampers, pantry goods and small luxuries.” Tagline: “Gifts, packed properly.”
- Voice: plain, specific, warm and slightly dry. No “elevate”, “curate” as a verb, “seamless”, “unlock”, “journey”, “luxury” as a claim. Say what is inside, what it costs, when it arrives and what it cannot do.
- The brand's materials are the packing room: kraft paper, tissue, tins, labels, ribbon, wax, brass, chalk. The chest is the recurring object.
- No fake reviews, awards, client logos, certifications, press or founder photographs.
- The demo's address, phone, prices and delivery windows are illustrative and labelled as such.

## Evidence on Hand

- A full visual and content plan in this project (surface brief and content files) authored for the demo.
- No real client photography, logo, testimonial, price list or product data. Everything in the demo is illustrative and must be replaced with a client's approved material before launch.
- The category reference is Pitara, Bhubaneswar: a gifting and specialty retail store founded in 2025, selling snacks, dry fruits, chocolates, beverages, specialty products and curated hampers for festive, wedding, corporate and everyday occasions; single and bulk orders; WhatsApp ordering; delivery on request; a store in Shaheed Nagar. Its Instagram is the current storefront. None of its real details belong in the demo.

## Product Principles

1. **The gift is the product.** Show what is inside, at a useful size, before asking for anything.
2. **Every beautiful moment must also answer a question.** The chest unwrap explains the house; the builder produces a real brief; the filter narrows a real choice.
3. **WhatsApp is a feature, not a fallback.** The site should hand the shop a complete message, not a blank chat.
4. **The template bends, the craft does not.** Name, logo, palette, city, products and photography are configurable; the type, spacing, motion and honesty rules stay.
5. **Never pretend.** No invented proof, no fake scarcity, no prices that look final when they are not, and no real business's details in a demo.

## Accessibility & Inclusion

WCAG 2.1 AA at 1280 px and 390 px. Every interaction is keyboard-operable, including the chest, the filters, the builder and the mobile menu. The unwrap and all scroll motion respect `prefers-reduced-motion`; content is visible by default and never hidden behind hover-only. Focus is always visible. The builder can be completed without drag or pointer gestures. All images have purposeful alternative text; decorative drawings are hidden from assistive technology.
