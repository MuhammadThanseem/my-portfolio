"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "../lib/motion";

const tapeColors = {
  cream: "bg-[#ece3d1]/80",
  stone: "bg-stone-300/80",
  sage: "bg-sage-300/80",
} as const;

export function StickyNote({
  text,
  rotate = -4,
  tape = "cream",
  delay = 0,
  className = "",
}: {
  text: string;
  rotate?: number;
  tape?: keyof typeof tapeColors;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -14, right: 14, top: -10, bottom: 10 }}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 18 }}
      whileDrag={{ scale: 1.08, zIndex: 20 }}
      initial={{ opacity: 0, y: 16, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE_OUT }}
      data-cursor-hover
      className={`relative inline-flex cursor-grab select-none items-center whitespace-nowrap rounded-sm border border-white/10 bg-[#1c170f] px-4 py-2.5 text-xs font-medium text-stone-200 shadow-lg shadow-black/40 active:cursor-grabbing ${className}`}
    >
      <span
        aria-hidden
        className={`absolute -top-1.5 left-1/2 h-3 w-6 -translate-x-1/2 rounded-[2px] ${tapeColors[tape]}`}
      />
      {text}
    </motion.div>
  );
}
