"use client";

import { motion } from "framer-motion";

const IMPACT_ITEMS = [
  "AI-Native Products",
  "Scalable Platforms",
  "Business Automation",
  "Full Product Execution",
  "MVPs That Ship Fast",
];

function BoltIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-400"
      aria-hidden
    >
      <path d="M9.5 1 4 9h3.5L6.5 15 12 7H8.5L9.5 1Z" />
    </svg>
  );
}

export default function HeroSlideThreeRight() {
  return (
    <div className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:right-8 lg:block xl:right-12 2xl:right-16">
      <motion.div
        initial={{ opacity: 0, x: 28, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
        className="relative w-[min(34vw,360px)] min-w-[280px] max-w-[360px]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-[1px] rounded-[26px] bg-[conic-gradient(from_0deg,rgba(139,92,246,0.7),rgba(59,130,246,0.35),rgba(139,92,246,0.15),rgba(167,139,250,0.65),rgba(139,92,246,0.7))] opacity-80 blur-[0.5px]"
          aria-hidden
        />

        <div className="absolute -inset-3 rounded-[30px] bg-violet-500/20 blur-2xl" aria-hidden />

        <div className="relative overflow-hidden rounded-[24px] border border-violet-400/35 bg-[#09090f]/92 px-6 py-6 shadow-[0_0_48px_rgba(139,92,246,0.28),0_24px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_55%)]"
            aria-hidden
          />

          <h3 className="relative mb-5 text-[clamp(0.95rem,1.25vw,1.08rem)] font-bold uppercase leading-tight tracking-[0.14em] text-white">
            How I Create{" "}
            <span className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent">
              Impact
            </span>
          </h3>

          <ul className="relative space-y-2.5">
            {IMPACT_ITEMS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.07 }}
                className="flex items-start gap-2.5"
              >
                <BoltIcon />
                <span className="text-[12px] font-semibold uppercase tracking-wide text-white/88">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="relative mt-5 border-t border-violet-500/20 pt-4 pb-1">
            <span
              className="pointer-events-none absolute -left-0.5 top-3 select-none font-serif text-[2.1rem] leading-none text-violet-400"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="px-[1.35rem] text-left text-[11px] leading-[1.7] text-white/50">
              Bold ideas deserve products that ship, not slides that stall.
            </p>
            <span
              className="pointer-events-none absolute -right-0.5 bottom-0 select-none font-serif text-[2.1rem] leading-none text-violet-400"
              aria-hidden
            >
              &rdquo;
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
