"use client";

import { motion } from "framer-motion";
import { profile } from "../lib/data";
import { MailIcon, PhoneIcon, PinIcon, socialIcons } from "./Icons";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="right">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Let&apos;s build something together</h2>
        </Reveal>

        <Reveal delay={0.1} variant="blur">
          <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-10 sm:p-14">
            <motion.div
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative grid gap-12 lg:grid-cols-2">
              <div>
                <p className="max-w-md text-lg leading-relaxed text-zinc-400">
                  Have a project in mind, an open role, or just want to talk shop about MEAN stack and IoT?
                  My inbox is open.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 text-zinc-300 transition-colors hover:text-white"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                      <MailIcon className="h-4 w-4" />
                    </span>
                    {profile.email}
                  </a>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-zinc-300 transition-colors hover:text-white"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                      <PhoneIcon className="h-4 w-4" />
                    </span>
                    {profile.phone}
                  </a>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                      <PinIcon className="h-4 w-4" />
                    </span>
                    {profile.location}
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  {profile.socials.map((social) => {
                    const Icon = socialIcons[social.icon];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Ready to talk?</p>
                <p className="text-xl font-semibold text-white">
                  Drop me a line and I&apos;ll get back to you within a day.
                </p>
                <MagneticButton
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    "Let's build something together"
                  )}`}
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black"
                >
                  <MailIcon className="h-4 w-4" />
                  Email Me
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with Next.js &amp; Framer Motion.</p>
        </div>
      </div>
    </section>
  );
}
