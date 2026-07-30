"use client";

import { profile } from "../lib/data";
import type { GithubStats } from "../lib/github";
import { AnimatedCounter } from "./AnimatedCounter";
import { ExternalLinkIcon } from "./Icons";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import { motion } from "framer-motion";

const user = profile.githubUsername;

export function GithubActivity({ stats }: { stats: GithubStats | null }) {
  return (
    <Reveal delay={0.15} variant="up" className="mt-10">
      <a
        href={`https://github.com/${user}`}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-colors duration-300 hover:border-white/20 sm:p-8"
      >
        <motion.div
          className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-400/15 to-indigo-500/10 blur-3xl"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Live from GitHub</p>
            <h3 className="mt-2 text-xl font-semibold text-white">@{user}</h3>
          </div>
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-white/30 group-hover:text-white">
            <ExternalLinkIcon className="h-4 w-4" />
          </span>
        </div>

        {stats ? (
          <RevealStagger className="relative mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <motion.div variants={staggerItem}>
              <div className="text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter value={stats.publicRepos} suffix="" />
              </div>
              <p className="mt-2 text-sm text-zinc-400">Public Repos</p>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter value={stats.totalStars} suffix="" />
              </div>
              <p className="mt-2 text-sm text-zinc-400">Repo Stars</p>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter value={stats.followers} suffix="" />
              </div>
              <p className="mt-2 text-sm text-zinc-400">Followers</p>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="truncate text-3xl font-bold text-white sm:text-4xl">
                {stats.topLanguage ?? "—"}
              </div>
              <p className="mt-2 text-sm text-zinc-400">Top Language</p>
            </motion.div>
          </RevealStagger>
        ) : (
          <p className="relative mt-8 text-sm text-zinc-500">
            GitHub stats are taking a break right now — tap through to see the repos directly.
          </p>
        )}
      </a>
    </Reveal>
  );
}
