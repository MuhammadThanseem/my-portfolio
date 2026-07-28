"use client";

import { motion, useMotionValue, useTransform, type Variants } from "framer-motion";
import { useState, type MouseEvent, type ReactNode } from "react";

/**
 * Reusable card shell: subtle 3D tilt toward the cursor, a hover lift, and a
 * radial glow that tracks the pointer. Pass `variants={staggerItem}` when
 * nesting inside a RevealStagger list; otherwise it animates independently.
 */
export function SpotlightCard({
  children,
  className,
  variants,
  tilt = true,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  tilt?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], tilt ? [5, -5] : [0, 0]);
  const rotateY = useTransform(x, [-60, 60], tilt ? [-5, 5] : [0, 0]);
  const [pos, setPos] = useState({ px: 50, py: 50 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
    setPos({ px: ((e.clientX - rect.left) / rect.width) * 100, py: ((e.clientY - rect.top) / rect.height) * 100 });
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      variants={variants}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at ${pos.px}% ${pos.py}%, rgba(129,140,248,0.16), transparent 70%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 ring-1 ring-inset ring-white/20 transition-opacity duration-500 group-hover:opacity-100"
      />
      {children}
    </motion.div>
  );
}
