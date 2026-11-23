export type NavItem = { label: string; href: string };

/**
 * One object is the whole client rebrand: name, wordmark or logo, city, contact, hours, delivery and concept flag.
 * The demo values are fictional. Replace them with a client's approved details before launch.
 */
export const site = {
  name: "Packed",
  wordmark: "packed",
  descriptor: "A gifting house for hampers, pantry goods and small luxuries.",
  tagline: "Gifts, packed properly.",
  city: "Mysuru",
  region: "Karnataka",
  address: ["No. 12, Vinoba Road", "Mysuru 570005"],
  addressNote: "Illustrative address for the concept.",
  hours: [
    { day: "Monday to Saturday", time: "10:00 – 20:00" },
    { day: "Sunday", time: "11:00 – 17:00" },
  ],
  /** Minutes from midnight, Asia/Kolkata. 0 is Sunday, matching Date#getDay. */
  openHours: [
    { day: 0, open: 11 * 60, close: 17 * 60 },
    { day: 1, open: 10 * 60, close: 20 * 60 },
    { day: 2, open: 10 * 60, close: 20 * 60 },
    { day: 3, open: 10 * 60, close: 20 * 60 },
    { day: 4, open: 10 * 60, close: 20 * 60 },
    { day: 5, open: 10 * 60, close: 20 * 60 },
    { day: 6, open: 10 * 60, close: 20 * 60 },
  ],
  timezone: "Asia/Kolkata",
  hoursNote: "Festive weeks run longer. Message before a late visit.",
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  whatsapp: "910000000000",
  whatsappDisplay: "WhatsApp",
  email: "hello@packed.example",
  instagram: "@packed.demo",
  instagramUrl: "https://www.instagram.com/",
  mapUrl: "https://www.google.com/maps?q=Mysuru",
  directionsLabel: "Open in Maps",
  delivery: "Local delivery in Mysuru. Courier across India on request.",
  deliveryShort: "Mysuru delivery. India on request.",
  concept: true,
  themeColor: "#1b2a20",
  lang: "en",
  title: "Packed — Gifts, packed properly",
  description:
    "A gifting house for hampers, pantry goods and small luxuries. Build a hamper, send a corporate brief, or visit the shop in Mysuru.",
  nav: [
    { label: "Hampers", href: "/hampers" },
    { label: "Build a hamper", href: "/build" },
    { label: "Corporate", href: "/corporate" },
    { label: "The shop", href: "/visit" },
    { label: "Journal", href: "/journal" },
  ] satisfies NavItem[],
} as const;

export type Site = typeof site;
