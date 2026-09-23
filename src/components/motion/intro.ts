/** The page loader starts fading out at 55% of its 1.3s dismiss animation (globals.css). */
const LOADER_OUT_AT = 1.3 * 0.55;

/**
 * Extra delay for an entrance animation starting right now, so reveals that
 * fire under the page loader (layout/PageLoader) play as it fades instead of
 * finishing behind it. Reads the loader's real start time, which is first
 * paint, not navigation start. It's 0 once the loader has gone, on client-side
 * navigations and with reduced motion (the loader's animation is already over).
 * Call it when the animation starts (a variant function), not at render.
 */
export function introDelay() {
  if (typeof document === "undefined") return 0;
  const loader = document.querySelector("[data-page-loader]");
  const animation = loader?.getAnimations()[0];
  if (!animation || animation.playState === "finished" || animation.startTime === null) return 0;
  const outAt = Number(animation.startTime) / 1000 + LOADER_OUT_AT;
  return Math.max(0, outAt - performance.now() / 1000);
}
