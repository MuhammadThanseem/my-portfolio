import { experience } from "../lib/data";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Experience</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Where I&apos;ve worked</h2>
        </Reveal>

        <div className="relative mt-16 pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-white/10 to-transparent sm:left-[9px]" />

          <ul className="space-y-14">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.08}>
                <li className="relative">
                  <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#05060a] bg-gradient-to-br from-indigo-400 to-cyan-300 sm:-left-10" />

                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-cyan-300">
                    {job.company} &middot; {job.location}
                  </p>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-zinc-400">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-zinc-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
