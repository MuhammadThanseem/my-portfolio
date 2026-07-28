// Shared motion primitives so every component animates on the same "feel".
export const EASE_OUT = [0.21, 0.47, 0.32, 0.98] as const;
export const EASE_SPRING = { type: "spring", stiffness: 260, damping: 24 } as const;

/** Vanilla (non-React) reduced-motion check for GSAP timelines. */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** True on coarse-pointer / touch devices — used to skip cursor & tilt effects. */
export function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}
