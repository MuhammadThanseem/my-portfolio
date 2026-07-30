"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../lib/data";
import { EASE_OUT } from "../lib/motion";

const initials = profile.shortName.slice(0, 2).toUpperCase();
const PHOTO_SRC = "/profile.jpg";

export function DraggablePhoto() {
  const [imageFailed, setImageFailed] = useState(false);

  // A same-origin 404 can resolve before React finishes hydrating and attaches
  // the <img onError>, so the failure is missed — preload separately instead.
  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setImageFailed(false);
    img.onerror = () => setImageFailed(true);
    img.src = PHOTO_SRC;
  }, []);

  return (
    <div className="relative mx-auto w-fit pb-10 pt-2">
      <motion.div
        drag
        dragConstraints={{ left: -18, right: 18, top: -14, bottom: 14 }}
        dragElastic={0.35}
        whileDrag={{ scale: 1.04, rotate: 0, zIndex: 20 }}
        whileHover={{ y: -4 }}
        initial={{ opacity: 0, y: 20, rotate: -3 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        data-cursor-hover
        className="relative w-56 cursor-grab select-none rounded-2xl border border-white/10 bg-[#12141c] p-3 pb-6 shadow-2xl shadow-black/50 active:cursor-grabbing"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500/25 via-violet-500/15 to-cyan-400/15">
          {!imageFailed ? (
            // eslint-disable-next-line @next/next/no-img-element -- decorative polaroid photo with a graceful fallback avatar
            <img
              src={PHOTO_SRC}
              alt={profile.name}
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="bg-gradient-to-br from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent">
                {initials}
              </span>
            </div>
          )}
        </div>
        <p className="mt-3 text-center font-mono text-xs text-zinc-500">@{profile.githubUsername}</p>
      </motion.div>

      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pointer-events-none absolute -right-3 bottom-0 rotate-6 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-md"
      >
        drag me ✋
      </motion.span>
    </div>
  );
}
