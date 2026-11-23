import type { Metadata } from "next";
import { HamperBuilder } from "@/components/build/HamperBuilder";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Build a hamper",
  description:
    "Choose a box, fill it from the shelves and write the note. We confirm stock, price and delivery before anything is packed.",
  path: "/build",
});

export default function BuildPage() {
  return (
    <main id="main" className="bg-paper pb-24 text-ink lg:pb-0">
      <PageHero
        crumb="Build a hamper"
        title="A box, built around a person."
        intro="Choose a size, fill it from the shelves and write the note. The price is indicative; we confirm stock, the final price and delivery before anything is packed."
        meta={["3 sizes", "3–7 items", "From ₹2,300"]}
      />
      <PhotoBand
        src="/media/editorial/tying-ribbon.jpg"
        alt="Hands tying a black ribbon around a kraft paper box, with twine and scissors on a grey table."
        caption="Tied by hand, one box at a time. The hands are the same hands that answer the message."
        height="h-[clamp(15rem,32vw,26rem)]"
        objectPosition="center 45%"
      />
      <HamperBuilder />
      <div className="pb-20 lg:pb-0">
        <CtaBand
          tone="kraft"
          title="Bringing a team? There is a table for that."
          body="Corporate orders start at 25 boxes, with a written quote, GST invoice and delivery to one office or many homes."
          primary={{ label: "Corporate gifting", href: "/corporate" }}
          secondary={{ label: "Read the questions", href: "/faq" }}
        />
      </div>
    </main>
  );
}
