import type { MetadataRoute } from "next";
import { hampers } from "@/content/hampers";

export const dynamic = "force-static";
import { notes } from "@/content/journal";
import { absoluteUrl } from "@/lib/site";

const staticRoutes = [
  "/",
  "/hampers",
  "/build",
  "/corporate",
  "/weddings",
  "/visit",
  "/about",
  "/journal",
  "/faq",
  "/delivery",
  "/legal/privacy",
  "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticRoutes,
    ...hampers.map((hamper) => `/hampers/${hamper.slug}`),
    ...notes.map((note) => `/journal/${note.slug}`),
  ];
  return paths.map((path, index) => ({
    url: absoluteUrl(path),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
