"use client";

import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { philosophyNotes, profile } from "../lib/data";
import { ArrowRightIcon, DownloadIcon, socialIcons } from "./Icons";
import { HeroVisual } from "./HeroVisual";
import { MagneticButton } from "./MagneticButton";
import { SplitText } from "./SplitText";
import { StickyNote } from "./StickyNote";

function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.titles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.titles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-block bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent"
        >
          {profile.titles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [spotlightVisible, setSpotlightVisible] = useState(false);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const spotlightX = useSpring(spotX, { stiffness: 120, damping: 24 });
  const spotlightY = useSpring(spotY, { stiffness: 120, damping: 24 });
  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}% ${spotlightY}%, rgba(99,102,241,0.14), transparent 70%)`;

  function handleSpotlightMove(e: MouseEvent<HTMLElement>) {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    spotX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      id="home"
      onMouseMove={handleSpotlightMove}
      onMouseEnter={() => setSpotlightVisible(true)}
      onMouseLeave={() => setSpotlightVisible(false)}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 sm:px-8"
    >
      {!reducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-[1]"
          animate={{ opacity: spotlightVisible ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ background: spotlightBackground }}
        />
      )}

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance &amp; full-time opportunities
          </motion.p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            <SplitText text="Hi, I'm" delay={0.15} />{" "}
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="inline-block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300 bg-[length:200%_auto] bg-clip-text text-transparent motion-safe:animate-[gradient-pan_5s_ease-in-out_infinite]"
            >
              {profile.shortName}
            </motion.span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-2xl font-semibold text-zinc-300 sm:text-3xl md:text-4xl"
          >
            <RotatingTitle />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            {profile.tagline}
          </motion.p>

          <div className="mt-8 flex flex-wrap items-start gap-x-6 gap-y-4">
            {philosophyNotes.map((note, i) => (
              <StickyNote
                key={note.text}
                text={note.text}
                tape={note.tape}
                rotate={note.rotate}
                delay={0.5 + i * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_0_0_rgba(129,140,248,0)] transition-shadow duration-300 hover:shadow-[0_0_28px_2px_rgba(129,140,248,0.45)]"
            >
              View My Work
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
            >
              Download CV
              <DownloadIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-12 flex items-center gap-4"
          >
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              );
            })}
          </motion.div>
        </div>

        <HeroVisual />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 sm:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-zinc-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
