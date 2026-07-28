"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { profile } from "../lib/data";
import { ChatIcon, CloseIcon, MailIcon, WhatsappIcon } from "./Icons";
import { MagneticButton } from "./MagneticButton";

const topics = [
  { key: "project", label: "💼 Discuss a project", message: "Hi Thanseem! I'd like to talk about a project I'm working on." },
  { key: "hi", label: "👋 Just say hi", message: "Hi Thanseem! Just wanted to say hello and check out your work." },
  { key: "other", label: "❓ Something else", message: "Hi Thanseem! I wanted to reach out about..." },
] as const;

const whatsappDigits = profile.phone.replace(/\D/g, "");

/**
 * Static, backend-free "chat": a floating bubble that opens a small
 * conversational panel. Picking a topic hands off to a pre-filled WhatsApp
 * or email message — no form submission, no server involved.
 */
export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [topicKey, setTopicKey] = useState<(typeof topics)[number]["key"] | null>(null);

  const topic = topics.find((t) => t.key === topicKey) ?? null;

  function handleToggle() {
    setOpen((v) => !v);
    if (open) setTopicKey(null);
  }

  const whatsappHref = topic
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(topic.message)}`
    : undefined;
  const emailHref = topic
    ? `mailto:${profile.email}?subject=${encodeURIComponent("Let's talk — via your portfolio")}&body=${encodeURIComponent(topic.message)}`
    : undefined;

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            style={{ transformOrigin: "bottom left" }}
            className="absolute bottom-16 left-0 w-[calc(100vw-3rem)] max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d14]/95 shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 via-violet-400 to-cyan-300 text-xs font-bold text-black">
                MT
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{profile.shortName}</p>
                <p className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Usually replies within a day
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 px-5 py-5">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="max-w-[85%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm leading-relaxed text-zinc-200"
              >
                Hi! 👋 What would you like to talk about?
              </motion.div>

              {!topic && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex flex-col gap-2"
                >
                  {topics.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setTopicKey(t.key)}
                      className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-left text-sm text-zinc-200 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                    >
                      {t.label}
                    </button>
                  ))}
                </motion.div>
              )}

              <AnimatePresence>
                {topic && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2.5 text-sm font-medium text-black">
                      {topic.label.replace(/^\S+\s/, "")}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                      className="max-w-[85%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm leading-relaxed text-zinc-200"
                    >
                      Great — pick where you&apos;d like to continue:
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                      className="flex flex-col gap-2 pt-1"
                    >
                      <MagneticButton
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/5"
                      >
                        <WhatsappIcon className="h-4 w-4 text-emerald-400" />
                        Continue on WhatsApp
                      </MagneticButton>
                      <MagneticButton
                        href={emailHref}
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/5"
                      >
                        <MailIcon className="h-4 w-4 text-cyan-300" />
                        Continue by Email
                      </MagneticButton>
                      <button
                        onClick={() => setTopicKey(null)}
                        className="mt-1 self-start text-xs text-zinc-500 transition-colors hover:text-zinc-300"
                      >
                        ← Choose a different topic
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleToggle}
        aria-label={open ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        data-cursor-hover
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-black shadow-lg shadow-black/40"
      >
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-[#05060a] bg-emerald-400" />
          </span>
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "chat"}
            initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <ChatIcon className="h-5 w-5" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
