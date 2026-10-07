"use client";

import { motion } from "framer-motion";
import { MailIcon } from "./Icons";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

export function HomeCta() {
  return (
    <section className="relative px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="blur">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-10 text-center sm:p-14">
            <motion.div
              className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sage-500/10 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="relative text-2xl font-bold text-white sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-stone-400">
              Let&apos;s talk about what you&apos;re building and whether I&apos;m the right fit for it.
            </p>
            <MagneticButton
              href="/contact"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sage-500 to-sage-400 px-6 py-3 text-sm font-semibold text-black"
            >
              <MailIcon className="h-4 w-4" />
              Get in touch
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
