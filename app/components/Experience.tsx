"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { experience } from "../lib/data";
import { prefersReducedMotion } from "../lib/motion";
import { Reveal } from "./Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Vertical line grows in step with scroll progress through the timeline.
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.6,
          },
        }
      );

      // Each dot pops in with a springy overshoot as it enters view.
      gsap.utils.toArray<HTMLElement>(".timeline-dot").forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2.4)",
            scrollTrigger: {
              trigger: dot,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sage-300">Experience</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Where I&apos;ve worked</h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-16 pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 sm:left-[9px]">
            <div
              ref={lineRef}
              className="h-full w-full origin-top bg-gradient-to-b from-sage-500 via-sage-400 to-sage-300"
            />
          </div>

          <ul className="space-y-14">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.08} variant="left">
                <li className="relative">
                  <span className="timeline-dot absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#0b0a07] bg-gradient-to-br from-sage-400 to-sage-300 sm:-left-10" />

                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-stone-400">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-sage-300">
                    {job.company} &middot; {job.location}
                  </p>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-stone-400">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-stone-600" />
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
