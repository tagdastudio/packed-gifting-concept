import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { BuildDiagram } from "./BuildDiagram";

const steps = [
  { title: "Choose the size", body: "Petite, Medium or Grand. The size sets how many things fit, not how much thought goes in." },
  { title: "Fill it from the shelves", body: "Dry fruit, chocolate, pantry, home, coffee, a small thing for a new baby. Add or remove until it reads right." },
  { title: "Write the note", body: "Type it; we print it in ink on cream card and tie the box. The card is the part people keep." },
];

export function BuildTeaser() {
  return (
    <section className="bg-bg-deep py-16 text-fg lg:py-24">
      <div className="gutter page grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="label text-fg/55">Build a hamper</p>
          <h2 className="mt-4 max-w-[13ch] font-display text-[clamp(2.1rem,4vw,4rem)] leading-[1.02] tracking-[-0.024em]">
            A box that starts with the person, not the price.
          </h2>
          <p className="mt-5 max-w-[32rem] text-[1rem] leading-relaxed text-fg/65">
            The shelf is a shortcut. The builder is for the person who is not on it: the friend who has everything, the team
            that just shipped, the new neighbour whose name you are still learning.
          </p>
          <ol className="mt-8 grid gap-0 border-t border-line">
            {steps.map((step, index) => (
              <li key={step.title} className="grid gap-2 border-b border-line py-4 sm:grid-cols-[2rem_1fr] sm:gap-4">
                <span className="label pt-1 text-fg/45">{`0${index + 1}`}</span>
                <div>
                  <p className="font-display text-[1.25rem]">{step.title}</p>
                  <p className="mt-1 max-w-[30rem] text-[0.92rem] leading-relaxed text-fg/60">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link href="/build" className="btn btn-primary mt-7">
            Build a hamper
            <Arrow />
          </Link>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <BuildDiagram className="w-full border border-line" />
          <p className="mt-3 text-[0.78rem] leading-relaxed text-fg/50">
            The builder shows the slot tray, the price band and the note before anything is sent. We confirm stock, the final
            price and delivery on WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
