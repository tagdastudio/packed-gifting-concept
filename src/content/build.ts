import type { ItemKind } from "./hampers";

export type BoxSize = {
  id: "petite" | "medium" | "grand";
  name: string;
  items: number;
  base: number;
  blurb: string;
};

export type BuildItem = {
  id: string;
  name: string;
  note: string;
  price: number;
  category: string;
  diet: string[];
  kind: ItemKind;
};

export const buildBoxes: BoxSize[] = [
  { id: "petite", name: "Petite", items: 3, base: 500, blurb: "A thank-you, a host, a small hello." },
  { id: "medium", name: "Medium", items: 5, base: 700, blurb: "The everyday box. Most people choose this." },
  { id: "grand", name: "Grand", items: 7, base: 900, blurb: "For the big table, the whole team, the long relationship." },
];

export const buildCategories = [
  "Dry fruit",
  "Chocolate & sweets",
  "Pantry",
  "Home & table",
  "Coffee & tea",
  "Baby & new home",
] as const;

export const buildItems: BuildItem[] = [
  {
    id: "almond-pistachio-tin",
    name: "Almond & pistachio tin",
    note: "200 g, roasted the week it is packed.",
    price: 650,
    category: "Dry fruit",
    diet: ["Contains nuts"],
    kind: "tin",
  },
  {
    id: "medjool-dates",
    name: "Medjool dates",
    note: "250 g, soft and dark.",
    price: 550,
    category: "Dry fruit",
    diet: ["No nuts", "Vegan"],
    kind: "jar",
  },
  {
    id: "fig-apricot-mix",
    name: "Fig & apricot mix",
    note: "200 g, unsulphured, no added sugar.",
    price: 500,
    category: "Dry fruit",
    diet: ["No nuts", "Vegan"],
    kind: "jar",
  },
  {
    id: "cashew-chilli",
    name: "Cashew & chilli mix",
    note: "150 g, roasted, a little hot.",
    price: 450,
    category: "Dry fruit",
    diet: ["Contains nuts", "Vegan"],
    kind: "tin",
  },
  {
    id: "dark-chocolate",
    name: "70% dark chocolate",
    note: "80 g single-origin bar.",
    price: 450,
    category: "Chocolate & sweets",
    diet: ["Contains milk", "Eggless"],
    kind: "bar",
  },
  {
    id: "milk-hazelnut",
    name: "Milk chocolate & hazelnut",
    note: "80 g bar, toasted hazelnuts.",
    price: 500,
    category: "Chocolate & sweets",
    diet: ["Contains nuts", "Contains milk"],
    kind: "bar",
  },
  {
    id: "chocolate-apricots",
    name: "Chocolate-dipped apricots",
    note: "150 g, dark chocolate, no sulphur.",
    price: 550,
    category: "Chocolate & sweets",
    diet: ["Contains milk", "Eggless"],
    kind: "jar",
  },
  {
    id: "fig-walnut-bar",
    name: "Fig & walnut bar",
    note: "One bar, made in small batches.",
    price: 400,
    category: "Chocolate & sweets",
    diet: ["Contains nuts", "Eggless"],
    kind: "biscuits",
  },
  {
    id: "saffron-honey",
    name: "Saffron honey",
    note: "150 g, wildflower honey with Kashmiri saffron.",
    price: 550,
    category: "Pantry",
    diet: ["No nuts", "Vegetarian"],
    kind: "jar",
  },
  {
    id: "cold-pressed-oil",
    name: "Cold-pressed sesame oil",
    note: "250 ml, from a small press in Karnataka.",
    price: 700,
    category: "Pantry",
    diet: ["No nuts", "Vegan"],
    kind: "bottle",
  },
  {
    id: "black-salt",
    name: "Black salt",
    note: "100 g, for the table and the pantry.",
    price: 300,
    category: "Pantry",
    diet: ["No nuts", "Vegan"],
    kind: "jar",
  },
  {
    id: "wildflower-honey",
    name: "Wildflower honey",
    note: "200 g, raw and unfiltered.",
    price: 500,
    category: "Pantry",
    diet: ["No nuts", "Vegetarian"],
    kind: "jar",
  },
  {
    id: "beeswax-candle",
    name: "Beeswax candle",
    note: "180 g, unscented, cotton wick.",
    price: 700,
    category: "Home & table",
    diet: ["No food"],
    kind: "candle",
  },
  {
    id: "stoneware-cup",
    name: "Stoneware cup",
    note: "Hand-thrown, warm cream glaze.",
    price: 850,
    category: "Home & table",
    diet: ["No food"],
    kind: "cup",
  },
  {
    id: "linen-napkin",
    name: "Linen napkin",
    note: "Stonewashed, one size, made to be used.",
    price: 450,
    category: "Home & table",
    diet: ["No food"],
    kind: "cloth",
  },
  {
    id: "brass-keyring",
    name: "Brass keyring",
    note: "A small, heavy brass loop.",
    price: 600,
    category: "Home & table",
    diet: ["No food"],
    kind: "keys",
  },
  {
    id: "nilgiri-tea",
    name: "Nilgiri tea",
    note: "100 g loose leaf, from the Nilgiris.",
    price: 500,
    category: "Coffee & tea",
    diet: ["No nuts", "Vegan"],
    kind: "tea",
  },
  {
    id: "filter-coffee",
    name: "Filter coffee",
    note: "250 g, ground for a south Indian filter.",
    price: 750,
    category: "Coffee & tea",
    diet: ["No nuts", "Vegetarian"],
    kind: "coffee",
  },
  {
    id: "muslin-cloth",
    name: "Muslin cloth",
    note: "Two squares, soft after the first wash.",
    price: 450,
    category: "Baby & new home",
    diet: ["No food"],
    kind: "cloth",
  },
  {
    id: "board-book",
    name: "Board book",
    note: "A small, sturdy first book.",
    price: 400,
    category: "Baby & new home",
    diet: ["No food"],
    kind: "notebook",
  },
  {
    id: "soy-candle",
    name: "Soy candle",
    note: "120 g, cedar and orange peel.",
    price: 450,
    category: "Baby & new home",
    diet: ["No food"],
    kind: "candle",
  },
  {
    id: "note-card",
    name: "Letterpress note card",
    note: "Your message, printed in ink.",
    price: 150,
    category: "Baby & new home",
    diet: ["No food"],
    kind: "card",
  },
];

export const itemsByCategory = (category: string) => buildItems.filter((item) => item.category === category);

export const getBuildItem = (id: string) => buildItems.find((item) => item.id === id);
