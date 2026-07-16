"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "../lib/data";
import { Reveal } from "./Reveal";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-zinc-200">{name}</span>
        <span className="text-zinc-500">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-400 to-cyan-300"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Skills</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Technologies I work with</h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, groupIndex) => (
            <Reveal
              key={group.title}
              delay={groupIndex * 0.1}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-7"
            >
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                {group.title}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
