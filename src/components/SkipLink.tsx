/** The first thing Tab reaches on every page: jumps past the header to the main content. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-[2px] bg-saffron px-4 py-3 text-sm font-semibold text-ink transition-transform focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}
