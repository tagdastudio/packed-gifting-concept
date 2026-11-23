import Link from "next/link";
import { RevealLines } from "@/motion/RevealLines";

const steps = [
  {
    label: "Choose or build",
    body: "Start with a hamper we have packed, or fill a chest yourself from the shelves.",
  },
  {
    label: "We pack it",
    body: "Tissue, tins, a printed card and your note. Packed by hand, checked twice.",
  },
  {
    label: "It reaches them",
    body: "Local delivery in Mysuru, courier across India on request. We confirm the date before we pack.",
  },
];

export function Manifesto() {
  return (
    <section className="bg-paper text-ink">
      <div className="gutter page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="label text-ink-soft">The house</p>
            <p className="mt-5 max-w-[24ch] text-[0.98rem] leading-relaxed text-ink-soft">
              A small gifting house in Mysuru. We pack for people who notice what is inside, and for the ones who say they
              do not need anything.
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <RevealLines
              as="h2"
              className="font-display text-[clamp(1.9rem,3.6vw,3.6rem)] leading-[1.06] tracking-[-0.02em]"
            >
              A gift is a small, precise thing you say to someone. We spend our days getting the sentence right.
            </RevealLines>
            <p className="mt-6 max-w-[38rem] text-[1.02rem] leading-relaxed text-ink-soft">
              Not every gift needs to be a grand gesture. It needs to be the right one: the almonds they actually eat, the
              chocolate dark enough to be worth it, a note in your words, packed so it arrives looking like it was packed for
              them and no one else.
            </p>
            <Link href="/about" className="link-line mt-6 inline-flex min-h-11 items-center text-[0.95rem] font-medium">
              How we pack
              <Arrow />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid border-t border-line-ink lg:mt-20 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.label} className="border-b border-line-ink py-6 lg:border-b-0 lg:border-r lg:px-7 lg:py-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <p className="label text-ink-soft">{step.label}</p>
              <p className="mt-3 max-w-[26rem] text-[1rem] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-2 shrink-0">
      <path d="M3 13 13 3M5.5 3H13v7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
