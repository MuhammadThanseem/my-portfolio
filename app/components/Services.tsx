"use client";

import { services } from "../lib/data";
import { ChatIcon, CloudIcon, CodeIcon, CpuIcon, LayersIcon, SparkleIcon } from "./Icons";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { motion } from "framer-motion";

const icons = {
  code: CodeIcon,
  layers: LayersIcon,
  sparkle: SparkleIcon,
  cpu: CpuIcon,
  cloud: CloudIcon,
  chat: ChatIcon,
};

export function Services() {
  return (
    <section className="relative px-6 pt-32 pb-14 sm:px-8 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sage-300">Services</p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">What I can help with</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-400">
            Client and freelance engagements I regularly take on, spanning the full stack from UI to
            deployment.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <SpotlightCard
                key={service.title}
                variants={staggerItem}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7"
              >
                <motion.div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-sage-500/15 to-sage-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sage-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold text-white">{service.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-stone-400">{service.description}</p>
              </SpotlightCard>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
