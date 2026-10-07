"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  "const engineer = {",
  "  name: 'Muhammad Thanseem',",
  "  role: 'Software Engineer',",
  "  stack: ['Next.js', 'Node', 'Angular'],",
  "  focus: ['Web', 'IoT', 'AI / RAG'],",
  "  available: true,",
  "};",
];

const fullCode = codeLines.join("\n");

function useTypewriter(text: string, speed = 22, startDelay = 900) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return output;
}

const badges = [
  { label: "Next.js", className: "-top-4 left-10" },
  { label: "RAG / AI", className: "top-12 -right-9" },
  { label: "Node.js", className: "bottom-16 -left-11" },
  { label: "Angular", className: "-bottom-5 right-12" },
];

export function HeroVisual() {
  const output = useTypewriter(fullCode);
  const reducedMotion = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const parallaxX = useSpring(px, { stiffness: 60, damping: 18, mass: 0.6 });
  const parallaxY = useSpring(py, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (reducedMotion) return;
    function handleMove(e: MouseEvent) {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      px.set(((e.clientX - cx) / cx) * 14);
      py.set(((e.clientY - cy) / cy) * 14);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reducedMotion, px, py]);

  return (
    <motion.div style={{ x: parallaxX, y: parallaxY }} className="relative mx-auto hidden w-full max-w-md lg:block">
      <motion.div
        className="absolute -inset-10 rounded-full bg-gradient-to-br from-sage-600/30 via-sage-600/20 to-sage-500/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative rounded-2xl border border-white/10 bg-[#16130d]/90 shadow-2xl shadow-black/50 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-3 text-xs text-stone-500">profile.ts</span>
        </div>
        <pre className="min-h-[230px] whitespace-pre-wrap px-6 py-6 font-mono text-[13px] leading-relaxed text-stone-300">
          <code>
            {output}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block h-[1em] w-[2px] translate-y-[2px] bg-sage-300 align-middle"
            />
          </code>
        </pre>
      </motion.div>

      {badges.map((badge, i) => (
        <motion.span
          key={badge.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 1.3 + i * 0.15 },
            scale: { duration: 0.5, delay: 1.3 + i * 0.15 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
          }}
          className={`absolute rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-stone-200 backdrop-blur-md ${badge.className}`}
        >
          {badge.label}
        </motion.span>
      ))}
    </motion.div>
  );
}
