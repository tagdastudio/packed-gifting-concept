import type { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Delivery",
  description:
    "How a Packed box travels: local Mysuru delivery, courier across India, collection from the counter, festive cut-offs and what to do if a parcel arrives damaged.",
  path: "/delivery",
});

const rows = [
  ["Mysuru local", "Same day if packed before 11 am, otherwise next day", "Quoted by address"],
  ["Karnataka", "2–5 working days by courier", "Quoted at dispatch"],
  ["Rest of India", "3–7 working days by courier", "Quoted at dispatch"],
  ["Collection", "Ready when we message you; held for 7 days", "Free"],
];

export default function DeliveryPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Delivery"
        title="How a box reaches you."
        intro="A box is only as good as the day it arrives. We confirm the date before we pack, and we tell you when it leaves the counter."
        meta={["Mysuru local", "Pan-India courier", "Tracked"]}
      />

      <PhotoBand
        src="/media/editorial/tying-ribbon.jpg"
        alt="Hands tying a ribbon around a kraft paper box, with scissors and twine on the table."
        caption="Packed for the journey. We would rather give you a later date we can hold."
        height="h-[clamp(12rem,26vw,20rem)]"
        objectPosition="center 45%"
      />

      <section className="bg-paper pb-16 pt-8 text-ink lg:pb-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="label text-ink-soft">Timelines</p>
          </div>
          <div className="min-w-0 lg:col-span-8 lg:col-start-5">
            <div className="min-w-0 overflow-x-auto border-t border-line-ink">
              <table className="w-full border-collapse text-left text-[0.92rem]">
                <thead>
                  <tr className="border-b border-line-ink">
                    <th className="label py-3 pr-4 text-ink-soft">Where</th>
                    <th className="label py-3 pr-4 text-ink-soft">When</th>
                    <th className="label py-3 text-ink-soft">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([where, when, cost]) => (
                    <tr key={where} className="border-b border-line-ink">
                      <td className="py-4 pr-4 font-medium">{where}</td>
                      <td className="py-4 pr-4 text-ink-soft">{when}</td>
                      <td className="py-4 text-ink-soft">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[0.8rem] leading-relaxed text-ink-soft">
              These windows are illustrative. Courier networks move at their own pace in festive weeks, and we would rather give
              you a later date we can hold than an earlier one we cannot.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-16 text-ink lg:py-24">
        <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="label text-ink-soft">Before we pack</p>
          </div>
          <div className="grid gap-8 lg:col-span-8 lg:col-start-5 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-[1.5rem]">We confirm the date</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                If the date is tight, we say so before you pay. We do not take an order we cannot make and hope the courier
                rescues it.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[1.5rem]">We pack for travel</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                Glass and fragile pieces are set in foam and tissue. The note card sits on top, not against the jar. Every box
                is checked against the order before it is closed.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[1.5rem]">Festive cut-offs</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                The order book closes earlier than feels necessary. The cut-off is posted at the counter and sent to anyone on
                the list, not hidden behind a countdown.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[1.5rem]">If no one is home</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                The courier will call the number on the parcel. Re-delivery caused by a wrong address or an unanswered phone may
                be charged. Please give us a number someone will answer.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[1.5rem]">If it arrives damaged</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                Photograph the parcel before opening it if the outer box is crushed, then message us the same day. We will replace
                the contents or refund the item; we will not ask you to argue with the courier.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[1.5rem]">A concept detail</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                This site is a concept. The timings, prices and policies are illustrative; a real house&apos;s terms are written
                into its quote and confirmed before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        tone="kraft"
        title="A date in mind? Tell us before you choose."
        body="If the box has to land on a particular day, start with the date. We will work backwards and tell you what is possible."
        primary={{ label: "Build a hamper", href: "/build" }}
        secondary={{ label: "Ask a question", href: "/faq" }}
      />
    </main>
  );
}
