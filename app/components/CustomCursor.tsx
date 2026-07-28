"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { isTouchDevice, prefersReducedMotion } from "../lib/motion";

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, [role="button"], [data-cursor-hover]';

/**
 * Premium trailing cursor: a tight dot plus a lagging ring that expands over
 * interactive elements. Disabled entirely on touch devices and when the user
 * has requested reduced motion, so it never fights the native cursor.
 *
 * Rendered only on the client (see the `next/dynamic(..., { ssr: false })`
 * import in layout.tsx), so it's safe to read matchMedia synchronously here.
 */
export function CustomCursor() {
  const enabled = !prefersReducedMotion() && !isTouchDevice();
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 320, damping: 30, mass: 0.6 });
  const ringY = useSpring(dotY, { stiffness: 320, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    function handleMove(e: MouseEvent) {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest?.(INTERACTIVE_SELECTOR);
      setHovering(Boolean(target));
    }
    function handleDown() {
      setPressed(true);
    }
    function handleUp() {
      setPressed(false);
    }
    function handleLeave() {
      dotX.set(-100);
      dotY.set(-100);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled, dotX, dotY]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] hidden mix-blend-difference md:block">
      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{ scale: pressed ? 0.6 : 1 }}
        transition={{ duration: 0.15 }}
        className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: hovering ? 0.9 : 0.5,
          scale: pressed ? 0.85 : 1,
        }}
        transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
      />
    </div>
  );
}
