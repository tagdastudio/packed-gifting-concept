export type ItemKind =
  | "tin"
  | "bar"
  | "jar"
  | "candle"
  | "cup"
  | "bottle"
  | "card"
  | "cloth"
  | "spoon"
  | "notebook"
  | "pen"
  | "tea"
  | "keys"
  | "diya"
  | "biscuits"
  | "coffee"
  | "clip";

export type HamperItem = {
  name: string;
  note: string;
  kind: ItemKind;
};

export type Hamper = {
  slug: string;
  number: string;
  name: string;
  price: number;
  blurb: string;
  description: string;
  forWho: string;
  occasions: string[];
  diet: string[];
  contents: HamperItem[];
  allergens: string;
  shelfLife: string;
  leadTime: string;
  serves: string;
  featured: boolean;
  wrap: {
    bg: string;
    ink: string;
    accent: string;
    ribbon: string;
    seal: string;
  };
};

export const hampers: Hamper[] = [
  {
    slug: "the-festive-box",
    number: "No. 01",
    name: "The Festive Box",
    price: 3200,
    blurb: "For the neighbour who sends sweets back, and the client you actually like.",
    description:
      "A warm, generous box for Diwali and the weeks around it. The tin is filled with almonds and pistachios, the chocolate is dark enough to be worth it, and the diya is brass so it can be kept. We print your note on cream card and tie the box with a red ribbon.",
    forWho: "Family, neighbours, clients and the people who host everything.",
    occasions: ["Festive", "Wedding", "Family", "Clients"],
    diet: ["Contains nuts", "Eggless"],
    contents: [
      { name: "Almond & pistachio tin", note: "200 g, roasted the week it is packed.", kind: "tin" },
      { name: "70% dark chocolate", note: "80 g bar, single origin, wrapped in paper.", kind: "bar" },
      { name: "Brass diya", note: "Small, heavy, made to be used again.", kind: "diya" },
      { name: "Saffron honey", note: "150 g jar, wildflower honey with Kashmiri saffron.", kind: "jar" },
      { name: "Letterpress note", note: "Your message, printed in ink on cream card.", kind: "card" },
    ],
    allergens: "Almonds, pistachios, milk. Packed in a kitchen that handles nuts, milk and wheat.",
    shelfLife: "3 months from packing. Chocolate is best within 6 weeks.",
    leadTime: "5–7 days",
    serves: "2–4 people",
    featured: true,
    wrap: { bg: "#e0a32e", ink: "#1b2a20", accent: "#f4ead8", ribbon: "#c8452d", seal: "#b08a4f" },
  },
  {
    slug: "the-table-box",
    number: "No. 02",
    name: "The Table Box",
    price: 2850,
    blurb: "For the host who says 'just bring yourself' and means it.",
    description:
      "Everything for the table after the flowers have gone. Cold-pressed oil, wildflower honey, black salt, a linen napkin and a teak spoon. It is the box we take when we are invited somewhere and do not want to arrive empty-handed.",
    forWho: "Hosts, housewarmings, Sunday lunches and people who cook.",
    occasions: ["Housewarming", "Wedding", "Thank you", "Hosts"],
    diet: ["No nuts", "Vegetarian"],
    contents: [
      { name: "Cold-pressed sesame oil", note: "250 ml, from a small press in Karnataka.", kind: "bottle" },
      { name: "Wildflower honey", note: "200 g, raw and unfiltered.", kind: "jar" },
      { name: "Linen napkin", note: "Stonewashed, one size, meant to be used.", kind: "cloth" },
      { name: "Teak serving spoon", note: "Hand-finished, food-safe oil.", kind: "spoon" },
      { name: "Black salt", note: "100 g, for the table and the pantry.", kind: "jar" },
    ],
    allergens: "No nuts. Packed in a kitchen that handles nuts, milk and wheat.",
    shelfLife: "9 months. Oil and honey are best within 6 months of opening.",
    leadTime: "4–6 days",
    serves: "A table of 4",
    featured: true,
    wrap: { bg: "#2e4a52", ink: "#f4ead8", accent: "#e8dac1", ribbon: "#e0a32e", seal: "#b08a4f" },
  },
  {
    slug: "the-new-home-box",
    number: "No. 03",
    name: "The New Home Box",
    price: 3600,
    blurb: "For the first flat, the new city, and the keys that still feel borrowed.",
    description:
      "A small, useful set for a new address: a stoneware cup, a beeswax candle, a brass keyring and a tin of Nilgiri tea. Nothing needs to be displayed. Everything can be used on the first night.",
    forWho: "First homes, moving-in days, new cities and quiet housewarmings.",
    occasions: ["New home", "Wedding", "Housewarming", "Family"],
    diet: ["No food except tea", "Keepsake"],
    contents: [
      { name: "Stoneware cup", note: "Hand-thrown, glazed in a warm cream.", kind: "cup" },
      { name: "Beeswax candle", note: "180 g, unscented, cotton wick.", kind: "candle" },
      { name: "Brass keyring", note: "A small, heavy brass loop for the new keys.", kind: "keys" },
      { name: "Nilgiri tea", note: "100 g loose leaf, from the Nilgiris.", kind: "tea" },
      { name: "Letterpress note", note: "Your message, printed in ink.", kind: "card" },
    ],
    allergens: "Tea only. No nuts.",
    shelfLife: "Tea 12 months. Candle 24 months, away from direct sun.",
    leadTime: "5–7 days",
    serves: "One new home",
    featured: true,
    wrap: { bg: "#e8dac1", ink: "#1b2a20", accent: "#f4ead8", ribbon: "#c8452d", seal: "#b08a4f" },
  },
  {
    slug: "the-thank-you-box",
    number: "No. 04",
    name: "The Thank You Box",
    price: 2400,
    blurb: "For the teacher, the colleague, the neighbour who took the parcel in.",
    description:
      "The smallest box we make, and the one we send most. Dark chocolate, apricots, a fig and walnut bar and a letterpress card. The note does most of the work; the box is there to make it land.",
    forWho: "Teachers, colleagues, neighbours, anyone who helped.",
    occasions: ["Thank you", "Colleagues", "Teachers"],
    diet: ["Contains nuts", "Eggless"],
    contents: [
      { name: "70% dark chocolate", note: "80 g bar, single origin.", kind: "bar" },
      { name: "Apricots", note: "150 g, soft and unsulphured.", kind: "jar" },
      { name: "Fig & walnut bar", note: "One bar, made in small batches.", kind: "biscuits" },
      { name: "Letterpress card", note: "Your message, printed in ink.", kind: "card" },
    ],
    allergens: "Walnuts, milk. Packed in a kitchen that handles nuts, milk and wheat.",
    shelfLife: "3 months from packing.",
    leadTime: "4–5 days",
    serves: "1–2 people",
    featured: false,
    wrap: { bg: "#a83422", ink: "#f4ead8", accent: "#e8dac1", ribbon: "#e0a32e", seal: "#b08a4f" },
  },
  {
    slug: "the-welcome-box",
    number: "No. 05",
    name: "The Welcome Box",
    price: 4200,
    blurb: "For the first day, the first desk, the first week of a new job.",
    description:
      "A quiet welcome kit for a new team member: filter coffee, almond biscuits, a soy candle, a pocket notebook and a brass pen. It is designed to be opened at a desk, not in a conference room.",
    forWho: "New hires, first days, studio welcomes and small teams.",
    occasions: ["Corporate", "Onboarding", "Teams"],
    diet: ["Contains gluten", "Contains dairy", "Contains nuts"],
    contents: [
      { name: "Filter coffee", note: "250 g, ground for a south Indian filter.", kind: "coffee" },
      { name: "Almond biscuits", note: "150 g, baked in small batches.", kind: "biscuits" },
      { name: "Soy candle", note: "120 g, cedar and orange peel.", kind: "candle" },
      { name: "Pocket notebook", note: "A6, 64 pages, made to be carried.", kind: "notebook" },
      { name: "Brass pen", note: "A slim brass pen that takes standard refills.", kind: "pen" },
    ],
    allergens: "Almonds, wheat, milk. Packed in a kitchen that handles nuts, milk and wheat.",
    shelfLife: "4 months. Coffee is best within 8 weeks of opening.",
    leadTime: "7–10 days",
    serves: "One new desk",
    featured: false,
    wrap: { bg: "#1b2a20", ink: "#f4ead8", accent: "#e8dac1", ribbon: "#e0a32e", seal: "#c8452d" },
  },
  {
    slug: "the-boardroom-box",
    number: "No. 06",
    name: "The Boardroom Box",
    price: 6800,
    blurb: "For the client whose opinion of your judgment is worth something.",
    description:
      "Our most considered box: a leather folio, a fountain pen, single-origin coffee, dark chocolate and a brass clip. The packaging is quiet. The note is printed on heavy card. This is the one we send to people who notice the difference.",
    forWho: "Clients, leadership, board members and long relationships.",
    occasions: ["Corporate", "Leadership", "Clients"],
    diet: ["Contains milk", "No nuts"],
    contents: [
      { name: "Leather folio", note: "A4, vegetable-tanned, made in Kanpur.", kind: "notebook" },
      { name: "Fountain pen", note: "Brass body, medium nib, converter included.", kind: "pen" },
      { name: "Single-origin coffee", note: "250 g whole bean, Chikmagalur.", kind: "coffee" },
      { name: "70% dark chocolate", note: "100 g bar, single origin.", kind: "bar" },
      { name: "Brass clip", note: "A small desk clip for the papers that matter.", kind: "clip" },
      { name: "Heavy card note", note: "Your message, printed and hand-signed.", kind: "card" },
    ],
    allergens: "Milk. No nuts. Packed in a kitchen that handles nuts, milk and wheat.",
    shelfLife: "6 months for coffee and chocolate; the folio and pen are keepsakes.",
    leadTime: "10–14 days",
    serves: "One desk",
    featured: false,
    wrap: { bg: "#3b2418", ink: "#f4ead8", accent: "#e8dac1", ribbon: "#e0a32e", seal: "#b08a4f" },
  },
];

export const featuredHampers = hampers.filter((hamper) => hamper.featured);

export const getHamper = (slug: string) => hampers.find((hamper) => hamper.slug === slug);

export const occasionFilters = ["All", "Festive", "Wedding", "Corporate", "New home", "Thank you", "Hosts"];

export const dietFilters = ["All", "No nuts", "Eggless", "Vegetarian"];

export const budgetFilters = [
  { label: "All budgets", min: 0, max: 10000 },
  { label: "Under ₹3,000", min: 0, max: 2999 },
  { label: "₹3,000–5,000", min: 3000, max: 5000 },
  { label: "₹5,000+", min: 5001, max: 100000 },
];
