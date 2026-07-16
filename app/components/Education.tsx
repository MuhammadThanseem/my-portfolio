"use client";

import { motion } from "framer-motion";
import { certificates, coursework, education } from "../lib/data";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Education</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Academic background</h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.school + edu.degree}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/20"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-white">{edu.degree}</h3>
                    <span className="text-xs text-zinc-500">{edu.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">{edu.school}</p>
                  <p className="mt-2 text-sm font-medium text-cyan-300">{edu.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                Certificates &amp; Achievements
              </h3>
              <RevealStagger className="space-y-3">
                {certificates.map((cert) => (
                  <motion.div
                    key={cert}
                    variants={staggerItem}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-zinc-300"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300" />
                    {cert}
                  </motion.div>
                ))}
              </RevealStagger>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                Graduate Coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-zinc-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
