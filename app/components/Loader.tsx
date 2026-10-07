"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../lib/data";
import { prefersReducedMotion } from "../lib/motion";

/**
 * One-time cinematic boot sequence: logo reveal, a warm greeting, progress
 * sweep, then a clip-path wipe off the page. Server-rendered so the opaque
 * loader is already painted before any client JS runs — no flash of the
 * page behind it. The reduced-motion check only runs inside the effect's
 * timer callback (never synchronously in the effect body), so this stays
 * hydration-safe.
 */
export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), prefersReducedMotion() ? 0 : 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          role="status"
          aria-label="Loading"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
          }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-[#0b0a07]"
        >
          <motion.span
            initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sage-400 via-sage-400 to-sage-300 text-lg font-bold text-black"
          >
            MT
          </motion.span>

          <div className="flex flex-col items-center gap-1.5 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="bg-gradient-to-r from-sage-300 via-sage-300 to-sage-300 bg-clip-text text-xl font-semibold text-transparent"
            >
              Welcome 👋
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-sm text-stone-400"
            >
              to {profile.shortName}&apos;s portfolio
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="h-px w-40 overflow-hidden rounded-full bg-white/10"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="h-full w-full bg-gradient-to-r from-sage-400 via-sage-400 to-sage-300"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
