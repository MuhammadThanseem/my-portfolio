"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "../lib/motion";

/** Character-by-character heading reveal. Falls back to plain text when reduced motion is requested. */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.03,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} aria-hidden="true">
          <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                className="inline-block"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: delay + wi * 0.06 + ci * stagger }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wi < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
