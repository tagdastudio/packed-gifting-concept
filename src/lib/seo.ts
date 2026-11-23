import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = {
  /** Shown as "<title> · <site name>". Use { absolute } for the home page. */
  title: string | { absolute: string };
  description: string;
  /** The page's path, e.g. "/hampers". */
  path: string;
};

/** Per-page metadata: canonical URL and a complete Open Graph block. */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const ogTitle = typeof title === "string" ? `${title} · ${site.name}` : title.absolute;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      url: path,
      title: ogTitle,
      description,
    },
    twitter: { card: "summary_large_image", title: ogTitle, description },
  };
}
