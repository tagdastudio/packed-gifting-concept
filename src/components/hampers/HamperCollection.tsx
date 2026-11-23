"use client";

import { useMemo, useSyncExternalStore } from "react";
import type { Hamper } from "@/content/hampers";
import { budgetFilters, dietFilters, occasionFilters } from "@/content/hampers";
import { HamperCard } from "./HamperCard";

const FILTER_EVENT = "packed:filters";

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(FILTER_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(FILTER_EVENT, callback);
  };
}

const getSnapshot = () => window.location.search;
const getServerSnapshot = () => "";

type Props = { hampers: Hamper[] };

export function HamperCollection({ hampers }: Props) {
  const search = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const params = useMemo(() => new URLSearchParams(search), [search]);

  const occasion = params.get("occasion") ?? "All";
  const diet = params.get("diet") ?? "All";
  const budget = params.get("budget") ?? "All budgets";
  const selectedBudget = budgetFilters.find((item) => item.label === budget) ?? budgetFilters[0];

  const visible = useMemo(
    () =>
      hampers.filter((hamper) => {
        const matchOccasion = occasion === "All" || hamper.occasions.includes(occasion);
        const matchDiet = diet === "All" || hamper.diet.some((entry) => entry.includes(diet));
        const matchBudget = hamper.price >= selectedBudget.min && hamper.price <= selectedBudget.max;
        return matchOccasion && matchDiet && matchBudget;
      }),
    [hampers, occasion, diet, selectedBudget],
  );

  function update(key: "occasion" | "diet" | "budget", value: string) {
    const next = new URLSearchParams(window.location.search);
    if (value === "All" || value === "All budgets") next.delete(key);
    else next.set(key, value);
    const query = next.toString();
    window.history.replaceState(null, "", query ? `?${query}` : window.location.pathname);
    window.dispatchEvent(new Event(FILTER_EVENT));
  }

  function reset() {
    window.history.replaceState(null, "", window.location.pathname);
    window.dispatchEvent(new Event(FILTER_EVENT));
  }

  return (
    <div>
      <div className="gutter page">
        <div className="flex flex-col gap-5 border-b border-line-ink pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <FilterRow label="Occasion" options={occasionFilters} value={occasion} onChange={(value) => update("occasion", value)} />
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <FilterRow label="Diet" options={dietFilters} value={diet} onChange={(value) => update("diet", value)} />
              <FilterRow
                label="Budget"
                options={budgetFilters.map((item) => item.label)}
                value={budget}
                onChange={(value) => update("budget", value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
            <p className="text-[0.85rem] tabular-nums text-ink-soft" aria-live="polite">
              {visible.length} of {hampers.length} boxes
            </p>
            <button type="button" onClick={reset} className="link-line min-h-11 text-[0.85rem] font-medium text-ink">
              Clear filters
            </button>
          </div>
        </div>
      </div>

      <div className="gutter page mt-8">
        {visible.length ? (
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((hamper) => (
              <HamperCard key={hamper.slug} hamper={hamper} />
            ))}
          </div>
        ) : (
          <div className="border border-line-ink p-8 text-center">
            <p className="font-display text-[1.8rem]">No box matches that combination.</p>
            <button type="button" onClick={reset} className="btn btn-ink mt-5">
              Show every box
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (next: string) => void;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <p className="label text-ink-soft">{label}</p>
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={value === option}
            className="chip chip-ink shrink-0"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
