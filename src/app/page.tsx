import type { Metadata } from "next";
import { BuildTeaser } from "@/components/home/BuildTeaser";
import { CorporateBand } from "@/components/home/CorporateBand";
import { Hero } from "@/components/home/Hero";
import { JournalTeaser } from "@/components/home/JournalTeaser";
import { Manifesto } from "@/components/home/Manifesto";
import { Shelf } from "@/components/home/Shelf";
import { VisitBand } from "@/components/home/VisitBand";
import { PhotoBand } from "@/components/ui/PhotoBand";
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
        <PhotoBand
          src="/media/editorial/gift-red.jpg"
          alt="A cream parcel tied with a red ribbon on a dark wooden table."
          quote="Packed by hand. Sent with a note."
          caption="The red ribbon is the one thing every box has in common."
          height="h-[clamp(16rem,36vw,30rem)]"
        />
        <Shelf />
        <BuildTeaser />
        <CorporateBand />
        <JournalTeaser />
        <VisitBand />
      </main>
    </>
  );
}
