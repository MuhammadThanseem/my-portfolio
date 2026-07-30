"use client";

import { motion } from "framer-motion";
import { useMotionValue, useSpring } from "framer-motion";
import NextLink from "next/link";
import { useState, type MouseEvent, type ReactNode } from "react";

const MotionLink = motion.create(NextLink);

type Ripple = { id: number; x: number; y: number };

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
  /** How strongly the button is pulled toward the cursor (0–1). */
  strength?: number;
};

/**
 * Wraps a link/button with a subtle magnetic pull toward the cursor and a
 * click ripple — the two interactions that make premium CTAs feel tactile.
 * Purely additive: pass the existing className through untouched.
 */
export function MagneticButton({ children, className, href, download, target, rel, onClick, strength = 0.35 }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  function handleClick(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
    onClick?.();
  }

  const content = (
    <>
      {children}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ opacity: 0.45, scale: 0 }}
          animate={{ opacity: 0, scale: 4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{ left: r.x, top: r.y }}
          className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40"
        />
      ))}
    </>
  );

  const sharedClassName = `relative isolate overflow-hidden ${className ?? ""}`;
  const isInternal = href?.startsWith("/") && !download && !target;

  if (href && isInternal) {
    return (
      <MotionLink
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.045 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        data-cursor-hover
        className={sharedClassName}
      >
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.045 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        data-cursor-hover
        className={sharedClassName}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      data-cursor-hover
      className={sharedClassName}
    >
      {content}
    </motion.button>
  );
}
