import type { BuildItem } from "@/content/build";
import { ItemGlyph } from "@/components/hampers/HamperPlate";

const glyphColors = {
  ink: "#1b2a20",
  paper: "#f4ead8",
  paper2: "#e8dac1",
  accent: "#e8dac1",
  ribbon: "#c8452d",
  seal: "#b08a4f",
};

/** The literal box tray: one slot per item the chosen size holds, filled from the current selection. */
export function SlotTray({
  max,
  items,
  className = "",
}: {
  max: number;
  items: BuildItem[];
  className?: string;
}) {
  return (
    <div className={`border border-line-ink bg-paper-2 p-3 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <p className="label text-ink-soft">The tray</p>
        <p className="text-[0.72rem] tabular-nums text-ink-soft" aria-live="polite">
          {items.length} of {max} slots
        </p>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2" aria-hidden="true">
        {Array.from({ length: max }).map((_, index) => {
          const item = items[index];
          return (
            <div
              key={index}
              className={`grid aspect-square place-items-center border ${
                item ? "border-ink/25 bg-paper" : "border-dashed border-ink/20 bg-transparent"
              }`}
            >
              {item ? (
                <svg viewBox="0 0 120 130" className="size-7">
                  <ItemGlyph kind={item.kind} {...glyphColors} />
                </svg>
              ) : (
                <span className="text-[1.2rem] font-light text-ink/25">+</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
