"use client";

import { processSteps } from "../lib/data";
import { CloudIcon, CodeIcon, LayersIcon, RocketIcon, SearchIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

const icons = {
  search: SearchIcon,
  layers: LayersIcon,
  code: CodeIcon,
  rocket: RocketIcon,
  cloud: CloudIcon,
};

export function ProcessTimeline() {
  return (
    <section className="relative px-6 pt-32 pb-14 sm:px-8 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sage-300">Process</p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">How I build</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-400">
            No two projects are identical, but the shape of the work rarely changes. Five stages, repeated on
            every feature and every release.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.step} delay={i * 0.08} variant="scale">
                <SpotlightCard className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7">
                  <span className="absolute -right-2 -top-4 text-7xl font-bold text-white/[0.04]">
                    {item.step}
                  </span>
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sage-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-stone-400">{item.description}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
