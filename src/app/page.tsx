import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: { absolute: site.title },
  description: site.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: absoluteUrl("/"),
            description: site.description,
            areaServed: site.city,
          }),
        }}
      />
      <main id="main">
        <Hero />
        <Manifesto />
      </main>
    </>
  );
}
