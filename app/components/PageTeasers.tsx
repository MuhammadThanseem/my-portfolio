"use client";

import Link from "next/link";
import { ArrowRightIcon, ChatIcon, CodeIcon, LayersIcon, SparkleIcon } from "./Icons";
import { RevealStagger, staggerItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

const teasers = [
  {
    href: "/about",
    icon: SparkleIcon,
    title: "About",
    description: "Background, skills, experience and education.",
  },
  {
    href: "/work",
    icon: LayersIcon,
    title: "Work",
    description: "Live products and client sites I've shipped.",
  },
  {
    href: "/process",
    icon: CodeIcon,
    title: "Process",
    description: "How a project moves from idea to production.",
  },
  {
    href: "/services",
    icon: ChatIcon,
    title: "Services",
    description: "What I can help with, end to end.",
  },
];

export function PageTeasers() {
  return (
    <section className="relative px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teasers.map((teaser) => (
            <SpotlightCard key={teaser.href} variants={staggerItem} className="h-full rounded-2xl">
              <Link
                href={teaser.href}
                data-cursor-hover
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-300">
                  <teaser.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{teaser.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{teaser.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                  Explore
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </SpotlightCard>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
