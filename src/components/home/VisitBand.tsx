import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { MapPlate } from "@/components/ui/MapPlate";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { site } from "@/content/site";
import { waLink } from "@/lib/links";

export function VisitBand() {
  return (
    <section className="bg-bg-deep py-16 text-fg lg:py-24">
      <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="label text-fg/55">The shop</p>
          <h2 className="mt-4 max-w-[11ch] font-display text-[clamp(2.1rem,4vw,3.8rem)] leading-[1.02] tracking-[-0.024em]">
            Come to the counter.
          </h2>
          <p className="mt-5 max-w-[30rem] text-[1rem] leading-relaxed text-fg/65">
            The shelves change with the season. Come in for a box, or tell us who the gift is for and we will pack it while you
            wait.
          </p>

          <address className="mt-7 not-italic">
            <span className="block font-display text-[1.35rem] leading-snug">{site.address[0]}</span>
            <span className="block font-display text-[1.35rem] leading-snug">{site.address[1]}</span>
          </address>
          <OpenStatus tone="light" className="mt-3" />

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.9rem] text-fg/65">
            <a href={waLink("Hi Packed, I'd like to visit the shop. Are you open?")} target="_blank" rel="noreferrer" className="link-line">
              WhatsApp
            </a>
            <a href={site.mapUrl} target="_blank" rel="noreferrer" className="link-line">
              Directions
            </a>
            <Link href="/visit" className="link-line">
              Hours & delivery
            </Link>
          </div>

          <Link href="/visit" className="btn btn-primary mt-7">
            Visit the shop
            <Arrow />
          </Link>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <MapPlate className="w-full border border-line" />
          <p className="mt-3 text-[0.78rem] leading-relaxed text-fg/50">
            A drawn map, not to scale. The exact address and hours are kept current on the visit page.
          </p>
        </div>
      </div>
    </section>
  );
}
