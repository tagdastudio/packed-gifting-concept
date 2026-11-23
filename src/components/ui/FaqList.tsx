type FaqGroupLike = { title: string; items: readonly { q: string; a: string }[] };

export function FaqList({ groups, tone = "paper" }: { groups: readonly FaqGroupLike[]; tone?: "paper" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className="grid gap-12">
      {groups.map((group) => (
        <section key={group.title} className="grid gap-5 lg:grid-cols-12 lg:gap-8">
          <h3 className={`label pt-1 lg:col-span-3 ${dark ? "text-fg/55" : "text-ink-soft"}`}>{group.title}</h3>
          <div className={`lg:col-span-8 lg:col-start-5 ${dark ? "border-t border-line" : "border-t border-line-ink"}`}>
            {group.items.map((item) => (
              <details key={item.q} className={`group border-b ${dark ? "border-line" : "border-line-ink"}`}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left">
                  <span className={`font-display text-[1.18rem] leading-snug tracking-[-0.01em] ${dark ? "text-fg" : "text-ink"}`}>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className={`relative mt-1.5 size-4 shrink-0 transition-transform duration-300 group-open:rotate-45 ${
                      dark ? "text-fg/60" : "text-ink/60"
                    }`}
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
                    <span className="absolute left-1/2 top-0 h-full w-px bg-current" />
                  </span>
                </summary>
                <p className={`max-w-[44rem] pb-5 text-[0.98rem] leading-relaxed ${dark ? "text-fg/65" : "text-ink-soft"}`}>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
