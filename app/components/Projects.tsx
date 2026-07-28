"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { clientProjects, earlyProjects } from "../lib/data";
import { ExternalLinkIcon } from "./Icons";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

function ClientProjectCard({ project }: { project: (typeof clientProjects)[number] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [8, -8]);
  const rotateY = useTransform(x, [-40, 40], [-8, 8]);

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={staggerItem}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/20"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">{project.type}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
        </div>
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-white/30 group-hover:text-white">
          <ExternalLinkIcon className="h-4 w-4" />
        </span>
      </div>

      <p className="relative mt-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

function EarlyProjectCard({ project }: { project: (typeof earlyProjects)[number] }) {
  return (
    <SpotlightCard variants={staggerItem} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{project.type}</p>
      <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </SpotlightCard>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="clip">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Projects</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Client &amp; product work</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Live products and client sites I&apos;ve designed and built. Click a card to visit the site.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2">
          {clientProjects.map((project) => (
            <ClientProjectCard key={project.title} project={project} />
          ))}
        </RevealStagger>

        <Reveal delay={0.1} variant="left" className="mt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Earlier Work</p>
          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Academic &amp; freelance projects</h3>
        </Reveal>

        <RevealStagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {earlyProjects.map((project) => (
            <EarlyProjectCard key={project.title} project={project} />
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
