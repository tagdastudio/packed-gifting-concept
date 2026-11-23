import Link from "next/link";
import { featuredHampers } from "@/content/hampers";
import { HamperCard } from "@/components/hampers/HamperCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Arrow } from "@/components/ui/Arrow";

export function Shelf() {
  return (
    <section className="bg-paper-2 py-16 text-ink lg:py-24">
      <SectionHeading
        label="The shelf"
        title="Six boxes, kept ready."
        intro="Each one is a starting point. If the person needs something else, the shelf is where we begin, not where we stop."
      />
      <div className="gutter page mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
        {featuredHampers.map((hamper) => (
          <HamperCard key={hamper.slug} hamper={hamper} />
        ))}
      </div>
      <div className="gutter page mt-10 flex justify-end border-t border-line-ink pt-5">
        <Link href="/hampers" className="link-line inline-flex min-h-11 items-center text-[0.92rem] font-medium">
          All six boxes
          <Arrow className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
