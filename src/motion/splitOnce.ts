import { SplitText } from "./gsap";

/**
 * Splits `target` (one element or several, split as one run) once web fonts are ready and hands the pieces to `animate`, the first time only: SplitText re-splits on
 * resize (autoSplit) and an entrance that has played must not replay. Returns the cleanup for the surrounding GSAP
 * context, which also covers a cleanup that lands before the fonts do.
 */
export function splitOnce(target: gsap.DOMTarget, vars: SplitText.Vars, animate: (self: SplitText, played: () => void) => gsap.core.Animation) {
  let instance: SplitText | undefined;
  let played = false;
  let cancelled = false;
  document.fonts.ready.then(() => {
    if (cancelled) return;
    instance = SplitText.create(target, {
      ...vars,
      autoSplit: true,
      onSplit: (self) => (played ? undefined : animate(self, () => (played = true))),
    });
  });
  return () => {
    cancelled = true;
    instance?.revert();
  };
}
