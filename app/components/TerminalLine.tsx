"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../lib/data";

function useTypewriter(text: string, speed = 32, startDelay = 300) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return output;
}

const command = "whoami";
const response = `${profile.name} — ${profile.titles[0]}`;

export function TerminalLine() {
  const typedCommand = useTypewriter(command, 55, 300);
  const commandDone = typedCommand.length === command.length;
  const typedResponse = useTypewriter(commandDone ? response : "", 16, 300);

  return (
    <div className="mb-6 inline-block rounded-lg border border-white/10 bg-black/30 px-4 py-3 font-mono text-sm">
      <p className="text-stone-400">
        <span className="text-sage-400">~$</span> {typedCommand}
        {!commandDone && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
            className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-sage-400 align-middle"
          />
        )}
      </p>
      {commandDone && (
        <p className="mt-1 text-stone-200">
          {typedResponse}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
            className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-sage-400 align-middle"
          />
        </p>
      )}
    </div>
  );
}
