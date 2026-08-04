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
    <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 lg:right-16 lg:block xl:right-24 2xl:right-28">
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
        className="w-[min(34vw,380px)]"
      >
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#09090f]/94 px-6 py-6 shadow-[0_16px_36px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <h3 className="mb-5 text-[clamp(0.95rem,1.2vw,1.05rem)] font-bold uppercase leading-tight tracking-[0.14em] text-white">
            How I Create{" "}
            <span className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent">
              Impact
            </span>
          </h3>

          <ul className="space-y-2.5">
            {IMPACT_ITEMS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="flex items-start gap-2.5"
              >
                <BoltIcon />
                <span className="text-[12px] font-semibold uppercase tracking-wide text-white/88">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="relative mt-5 border-t border-white/10 pt-4 pb-1">
            <span
              className="pointer-events-none absolute -left-0.5 top-3 select-none font-serif text-[2rem] leading-none text-violet-400"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="px-[1.3rem] text-[11px] leading-[1.7] text-white/50">
              Bold ideas deserve products that ship, not slides that stall.
            </p>
            <span
              className="pointer-events-none absolute -right-0.5 bottom-0 select-none font-serif text-[2rem] leading-none text-violet-400"
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
