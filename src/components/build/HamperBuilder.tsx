"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { ItemGlyph } from "@/components/hampers/HamperPlate";
import { SlotTray } from "./SlotTray";
import {
  buildBoxes,
  buildCategories,
  buildItems,
  itemsByCategory,
  type BoxSize,
  type BuildItem,
} from "@/content/build";
import { site } from "@/content/site";
import { formatRupees, waLink } from "@/lib/links";

const glyphColors = {
  ink: "#1b2a20",
  paper: "#f4ead8",
  paper2: "#e8dac1",
  accent: "#e8dac1",
  ribbon: "#c8452d",
  seal: "#b08a4f",
};

export function HamperBuilder() {
  const [sizeId, setSizeId] = useState<BoxSize["id"]>("medium");
  const [selected, setSelected] = useState<string[]>([]);
  const [category, setCategory] = useState<string>(buildCategories[0]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const size = buildBoxes.find((entry) => entry.id === sizeId) ?? buildBoxes[1];
  const max = size.items;
  const items = selected.map((id) => buildItems.find((entry) => entry.id === id)).filter(Boolean) as BuildItem[];
  const total = size.base + items.reduce((sum, item) => sum + item.price, 0);
  const unitTotal = total;
  const grandTotal = total * quantity;
  const canSend = items.length > 0;

  const activeItems = useMemo(() => itemsByCategory(category), [category]);

  function chooseSize(next: BoxSize) {
    setSizeId(next.id);
    setSelected((current) => current.slice(0, next.items));
    setMessage("");
  }

  function toggleItem(item: BuildItem) {
    setMessage("");
    setSelected((current) => {
      if (current.includes(item.id)) return current.filter((id) => id !== item.id);
      if (current.length >= max) return current;
      return [...current, item.id];
    });
  }

  function sendMessage() {
    if (!canSend) return;
    const lines = [
      "Hi Packed, I've built a box.",
      "",
      `Size: ${size.name} (${max} items)`,
      `Box: ${items.map((item) => item.name).join(", ")}`,
      note.trim() ? `Note: "${note.trim()}"` : "Note: I will send the message separately.",
      `Quantity: ${quantity}`,
      `Indicative total: ${formatRupees(grandTotal)}`,
      `City: ${site.city}`,
      "",
      "Please confirm stock, the final price and delivery.",
    ];
    const link = waLink(lines.join("\n"));
    setMessage(link);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      <div className="gutter page pb-20 pt-8 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-7">
            <fieldset className="min-w-0">
              <legend className="label text-ink-soft">1. Choose the box</legend>
              <div className="mt-3 grid min-w-0 gap-3 sm:grid-cols-3">
                {buildBoxes.map((entry) => {
                  const active = entry.id === sizeId;
                  return (
                    <label
                      key={entry.id}
                      className={`block cursor-pointer border p-4 transition-colors duration-300 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ink ${
                        active ? "border-ink bg-paper-2" : "border-line-ink-strong bg-paper hover:border-ink"
                      }`}
                    >
                      <input
                        type="radio"
                        name="box-size"
                        value={entry.id}
                        checked={active}
                        onChange={() => chooseSize(entry)}
                        className="sr-only"
                      />
                      <span className="flex items-baseline justify-between gap-2">
                        <span className="font-display text-[1.2rem]">{entry.name}</span>
                        <span className="text-[0.78rem] tabular-nums text-ink-soft">{entry.items} items</span>
                      </span>
                      <span className="mt-1 block text-[0.82rem] leading-relaxed text-ink-soft">{entry.blurb}</span>
                      <span className="mt-2 block text-[0.78rem] tabular-nums text-ink-soft">from {formatRupees(entry.base)} packing</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-10">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <p className="label text-ink-soft">2. Fill it</p>
                <p className="text-[0.8rem] tabular-nums text-ink-soft">
                  {selected.length} of {max} chosen
                </p>
              </div>

              <div className="-mx-1 mt-3 flex w-full min-w-0 max-w-full gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {buildCategories.map((entry) => (
                  <button
                    key={entry}
                    type="button"
                    onClick={() => setCategory(entry)}
                    aria-pressed={category === entry}
                    className="chip chip-ink shrink-0"
                  >
                    {entry}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2">
                {activeItems.map((item) => {
                  const inBox = selected.includes(item.id);
                  const full = !inBox && selected.length >= max;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleItem(item)}
                      aria-pressed={inBox}
                      disabled={full}
                      className={`group flex gap-3 border p-3 text-left transition-colors duration-300 ${
                        inBox
                          ? "border-ink bg-ink text-paper"
                          : full
                            ? "cursor-not-allowed border-line-ink bg-transparent opacity-45"
                            : "border-line-ink-strong bg-paper hover:border-ink"
                      }`}
                    >
                      <span className={`grid size-12 shrink-0 place-items-center border ${inBox ? "border-paper/25 bg-paper/10" : "border-line-ink bg-paper-2"}`}>
                        <svg viewBox="0 0 120 130" aria-hidden="true" className="size-9">
                          <ItemGlyph kind={item.kind} {...glyphColors} />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-start justify-between gap-2">
                          <span className="font-display text-[1.02rem] leading-snug">{item.name}</span>
                          <span className="shrink-0 text-[0.78rem] tabular-nums">{formatRupees(item.price)}</span>
                        </span>
                        <span className={`mt-0.5 block text-[0.78rem] leading-relaxed ${inBox ? "text-paper/65" : "text-ink-soft"}`}>
                          {item.note}
                        </span>
                        <span className={`mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.12em] ${inBox ? "text-paper/70" : "text-ink-soft"}`}>
                          {inBox ? "In the box · remove" : full ? "Box is full" : "Add"}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
              <label className="block">
                <span className="label text-ink-soft">3. Write the note</span>
                <textarea
                  value={note}
                  onChange={(event) => {
                    setNote(event.target.value.slice(0, 240));
                    setMessage("");
                  }}
                  rows={3}
                  maxLength={240}
                  placeholder="For the new flat. Open the honey first."
                  className="field mt-2 resize-y"
                />
                <span className="mt-1 block text-right text-[0.7rem] tabular-nums text-ink-soft">{note.length}/240</span>
              </label>
              <div>
                <span className="label text-ink-soft">How many</span>
                <div className="mt-2 flex items-center border border-line-ink-strong">
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    aria-label="One fewer box"
                    className="grid size-11 place-items-center text-lg"
                  >
                    −
                  </button>
                  <span className="min-w-10 text-center text-[0.95rem] tabular-nums">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.min(20, value + 1))}
                    aria-label="One more box"
                    className="grid size-11 place-items-center text-lg"
                  >
                    +
                  </button>
                </div>
                {quantity === 20 ? <p className="mt-1 text-[0.7rem] text-ink-soft">For more, use corporate.</p> : null}
              </div>
            </div>
          </div>

          <aside id="box-summary" className="min-w-0 scroll-mt-24 lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-24">
              <div className="border border-line-ink bg-paper-2 p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-[1.5rem] leading-none">Your box</h2>
                  <span className="text-[0.78rem] tabular-nums text-ink-soft">
                    {selected.length}/{max}
                  </span>
                </div>
                <p className="mt-1 text-[0.85rem] text-ink-soft">
                  {size.name} · {size.items} items
                </p>

                <SlotTray max={max} items={items} className="mt-4" />

                {items.length ? (
                  <ul className="mt-4 grid gap-2 border-t border-line-ink pt-3">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-start justify-between gap-3 text-[0.85rem]">
                        <span className="leading-snug">{item.name}</span>
                        <button
                          type="button"
                          onClick={() => toggleItem(item)}
                          className="shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-ink-soft underline underline-offset-2 hover:text-ink"
                          aria-label={`Remove ${item.name}`}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 border-t border-line-ink pt-3 text-[0.85rem] text-ink-soft">
                    Nothing in the box yet. Add something from the shelves.
                  </p>
                )}

                <div className="mt-4 border-t border-line-ink pt-3">
                  {items.length ? (
                    <>
                      <div className="flex items-baseline justify-between text-[0.85rem]">
                        <span className="text-ink-soft">Packing</span>
                        <span className="tabular-nums">{formatRupees(size.base)}</span>
                      </div>
                      <div className="mt-1 flex items-baseline justify-between text-[0.85rem]">
                        <span className="text-ink-soft">Contents</span>
                        <span className="tabular-nums">{formatRupees(unitTotal - size.base)}</span>
                      </div>
                      <div className="mt-3 flex items-baseline justify-between border-t border-line-ink pt-3">
                        <span className="font-display text-[1.1rem]">Indicative</span>
                        <span className="font-display text-[1.3rem] tabular-nums">{formatRupees(grandTotal)}</span>
                      </div>
                      {quantity > 1 ? (
                        <p className="mt-1 text-right text-[0.72rem] text-ink-soft">
                          {quantity} boxes · {formatRupees(unitTotal)} each
                        </p>
                      ) : null}
                    </>
                  ) : (
                    <p className="text-[0.84rem] leading-relaxed text-ink-soft">
                      Choose {max} things to see the price. Packing starts at {formatRupees(size.base)}.
                    </p>
                  )}
                </div>

                <div className="mt-4 border border-line-ink bg-paper p-3">
                  <p className="label text-ink-soft">The card</p>
                  <p className={`hand mt-2 min-h-10 text-[1.02rem] leading-snug ${note ? "text-ink" : "text-ink/35"}`}>
                    {note || "Your note will be printed here."}
                  </p>
                </div>

                <button type="button" onClick={sendMessage} disabled={!canSend} className="btn btn-ink mt-4 w-full disabled:cursor-not-allowed disabled:opacity-40">
                  Send this box on WhatsApp
                  <Arrow />
                </button>
                <p className="mt-2 text-center text-[0.7rem] leading-relaxed text-ink-soft">
                  No payment is taken here. We confirm stock, price and delivery first.
                </p>
                {message ? (
                  <a href={message} target="_blank" rel="noreferrer" className="link-line mt-3 block text-center text-[0.78rem] font-medium">
                    Open the message again
                  </a>
                ) : null}
              </div>

              <p className="mt-3 text-[0.78rem] leading-relaxed text-ink-soft">
                Need more than 20, or one box sent to many addresses?{" "}
                <Link href="/corporate" className="link-line font-medium text-ink">
                  Use the corporate table
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line-ink bg-paper px-4 pb-[calc(0.7rem+env(safe-area-inset-bottom))] pt-3 lg:hidden">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[0.75rem] text-ink-soft">
              {selected.length} of {max} · {size.name}
            </p>
            <p className="text-[1rem] font-semibold tabular-nums">{items.length ? formatRupees(grandTotal) : "—"}</p>
          </div>
          <a href="#box-summary" className="btn btn-ink shrink-0">
            Review box
          </a>
        </div>
      </div>
    </div>
  );
}
