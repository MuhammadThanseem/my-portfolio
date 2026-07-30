import { profile } from "../lib/data";
import { socialIcons } from "./Icons";

export function Footer() {
  return (
    <footer className="relative px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {profile.socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                data-cursor-hover
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <p>Built with Next.js &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}
