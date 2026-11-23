import type { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { HamperCollection } from "@/components/hampers/HamperCollection";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { hampers } from "@/content/hampers";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "The hampers",
  description:
    "Six packed boxes for festivals, new homes, teams and thank-yous. See what is inside each one, what it costs and how long it takes.",
  path: "/hampers",
});

export default function HampersPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Hampers"
        title="Six boxes, packed and ready."
        intro="Each box is built around a person and a moment, not a price point. Start with one of these, or use them as a starting point for something of your own."
        meta={["6 boxes", "From ₹2,400", "Prices illustrative"]}
      />

      <PhotoBand
        src="/media/editorial/wrapping-gold.jpg"
        alt="A kraft paper gift tied with a gold ribbon, scissors and a blank card on a warm table."
        caption="The box is the first sentence. The note is the last."
        height="h-[clamp(15rem,30vw,24rem)]"
        objectPosition="center 58%"
      />

      <section className="bg-paper pb-16 pt-8 text-ink lg:pb-24">
        <HamperCollection hampers={hampers} />
      </section>

      <CtaBand
        title="Nothing here fits? Build the box yourself."
        body="Choose a size, fill it from the shelves and write the note. We will confirm stock, price and delivery before anything is packed."
        primary={{ label: "Build a hamper", href: "/build" }}
        secondary={{ label: "Ask us for a recommendation", href: "/faq" }}
      />
    </main>
  );
}
