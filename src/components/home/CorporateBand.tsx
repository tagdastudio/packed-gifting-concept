import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";

const points = [
  ["Minimum", "25 boxes. Below that, order from the shelf like anyone else."],
  ["Quote", "One written quote with a per-unit price and the full contents."],
  ["Delivery", "3–7 days across India after dispatch, tracked to each address."],
];

export function CorporateBand() {
  return (
    <section className="bg-paper py-16 text-ink lg:py-24">
      <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <p className="label text-ink-soft">For companies</p>
          <h2 className="mt-4 max-w-[12ch] font-display text-[clamp(2.2rem,4.4vw,4.4rem)] leading-[1.0] tracking-[-0.026em]">
            A hundred thank-yous. One standard.
          </h2>
          <p className="mt-5 max-w-[32rem] text-[1rem] leading-relaxed text-ink-soft">
            Welcome kits, client boxes, festival hampers and the gifts that mark a working relationship. The same packing
            standard as a single box, with the paperwork a finance team needs.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/corporate" className="btn btn-ink">
              Corporate gifting
              <Arrow />
            </Link>
            <Link href="/hampers" className="btn btn-ink-outline">
              See the boxes
            </Link>
          </div>
        </div>
        <dl className="grid gap-0 border-t border-line-ink lg:col-span-5 lg:col-start-8">
          {points.map(([label, value]) => (
            <div key={label} className="grid grid-cols-[5rem_1fr] gap-4 border-b border-line-ink py-5">
              <dt className="label pt-1 text-ink-soft">{label}</dt>
              <dd className="max-w-[22rem] text-[0.95rem] leading-relaxed">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
