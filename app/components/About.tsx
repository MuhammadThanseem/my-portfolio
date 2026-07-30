"use client";

import { motion } from "framer-motion";
import { profile, stats } from "../lib/data";
import type { GithubStats } from "../lib/github";
import { AnimatedCounter } from "./AnimatedCounter";
import { DraggablePhoto } from "./DraggablePhoto";
import { GithubActivity } from "./GithubActivity";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";

export function About({ githubStats }: { githubStats: GithubStats | null }) {
  return (
    <section className="relative px-6 pt-36 pb-28 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About Me</p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Turning ideas into reliable, production-ready software
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-5">
          <Reveal delay={0.1} variant="left" className="lg:col-span-3">
            <div className="space-y-5 text-lg leading-relaxed text-zinc-400">
              <p>
                I&apos;m a self-taught software engineer based in {profile.location}, currently building
                insurance and claims platforms at Trivand Technologies with Angular, Node.js and Next.js.
                Before that I spent time deep in the IoT world — wiring up ThingsBoard and Grafana dashboards
                and shipping Vue.js / Django products at Vuelogix Technologies.
              </p>
              <p>
                My background spans the full MEAN/MEVN stack, IoT device configuration, and everything in
                between — from atomic-design component libraries to CI/CD pipelines and Dockerized
                deployments. More recently I&apos;ve been building AI-powered features using Retrieval-Augmented
                Generation (RAG), LangChain and LLM APIs to ground assistants in real product data. I enjoy the
                parts of engineering most people skip: clean version control history, thoughtful release notes,
                and systems that are easy for the next person to pick up.
              </p>
              <p>
                Outside of client work I hold an MCA from College of Engineering, Vatakara and write
                occasionally on Medium and Stack Overflow about the problems I run into along the way.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Angular", "Vue", "Next.js", "Node.js", "Python", "MongoDB", "Docker", "IoT", "RAG", "LangChain"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} variant="right" className="lg:col-span-2">
            <DraggablePhoto />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8">
              <motion.div
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <RevealStagger className="relative grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <motion.div key={stat.label} variants={staggerItem}>
                    <div className="text-4xl font-bold text-white sm:text-5xl">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
                  </motion.div>
                ))}
              </RevealStagger>

              <div className="relative mt-10 space-y-4 border-t border-white/10 pt-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Role</span>
                  <span className="font-medium text-white">Software Engineer</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Location</span>
                  <span className="font-medium text-white">{profile.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Focus</span>
                  <span className="font-medium text-white">Web &amp; IoT</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <GithubActivity stats={githubStats} />
      </div>
    </section>
  );
}
