"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { showcaseSites } from "../lib/data";
import { ExternalLinkIcon } from "./Icons";
import { Reveal } from "./Reveal";

const INTERVAL = 4800;

export function LiveShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % showcaseSites.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  const site = showcaseSites[index];

  return (
    <section id="showcase" className="relative px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Live Showcase</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Real products, live in production</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            A closer look at sites and products I&apos;ve designed and shipped for clients.
          </p>
        </Reveal>

        <Reveal delay={0.1} variant="scale">
          <div
            className="mt-14 grid gap-6 lg:grid-cols-5 lg:gap-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative lg:col-span-3">
              <motion.div
                className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-indigo-600/25 via-violet-600/15 to-cyan-500/15 blur-3xl"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              <div
                aria-hidden
                className="absolute inset-0 translate-x-4 translate-y-6 rotate-2 rounded-2xl border border-white/10 bg-white/[0.02] opacity-50"
              />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d14] shadow-2xl shadow-black/50">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  aria-label={`Visit ${site.name}`}
                >
                  <div className="flex items-center gap-2 border-b border-white/10 bg-[#0e1018] px-4 py-3.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={site.domain}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-3 truncate rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-zinc-400"
                      >
                        {site.domain}
                      </motion.span>
                    </AnimatePresence>
                    <ExternalLinkIcon className="ml-auto h-3.5 w-3.5 flex-none text-zinc-600 transition-colors duration-300 group-hover:text-zinc-300" />
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={site.image}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={site.image}
                          alt={site.name}
                          fill
                          sizes="(min-width: 1024px) 42rem, 100vw"
                          className="object-cover object-top"
                          priority={index === 0}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 lg:col-span-2">
              {showcaseSites.map((s, i) => {
                const active = i === index;
                return (
                  <button
                    key={s.name}
                    onClick={() => setIndex(i)}
                    className={`group relative overflow-hidden rounded-xl border px-5 py-4 text-left transition-colors duration-300 ${
                      active
                        ? "border-white/15 bg-white/[0.04]"
                        : "border-transparent hover:border-white/10 hover:bg-white/[0.02]"
                    }`}
                  >
                    {active && (
                      <motion.span
                        key={index}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500/15 to-cyan-400/10"
                      />
                    )}
                    <div className="relative flex items-center justify-between gap-3">
                      <span className={`font-semibold ${active ? "text-white" : "text-zinc-300"}`}>{s.name}</span>
                      <span className="text-xs text-zinc-500">{s.domain}</span>
                    </div>
                    <AnimatePresence>
                      {active && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          className="relative overflow-hidden text-sm leading-relaxed text-zinc-400"
                        >
                          {s.blurb}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
