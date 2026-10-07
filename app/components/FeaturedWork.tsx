"use client";

import Link from "next/link";
import { clientProjects } from "../lib/data";
import { ArrowRightIcon, ExternalLinkIcon } from "./Icons";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { motion } from "framer-motion";

const featured = clientProjects.slice(0, 3);

export function FeaturedWork() {
  return (
    <section className="relative px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="clip" className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sage-300">Featured Work</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">A few recent builds</h2>
          </div>
          <Link
            href="/work"
            data-cursor-hover
            className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-300 transition-colors hover:text-white"
          >
            View all work
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <SpotlightCard
              key={project.title}
              variants={staggerItem}
              className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" data-cursor-hover className="block">
                <motion.div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-sage-500/15 to-sage-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-sage-300">{project.type}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/10 text-stone-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-white/30 group-hover:text-white">
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-stone-400">{project.description}</p>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-stone-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </SpotlightCard>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
