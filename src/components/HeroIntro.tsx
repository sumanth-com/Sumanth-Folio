"use client";

import { motion } from "framer-motion";
import { STATS } from "@/data/stats";

export default function HeroIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="absolute left-4 top-1/2 z-30 hidden -translate-y-1/2 lg:left-8 lg:block xl:left-12 2xl:left-20"
    >
      <div className="w-[min(36vw,440px)]">
        <p className="mb-4 text-[clamp(1.65rem,2.6vw,2.35rem)] font-bold leading-tight tracking-tight text-black">
          I&apos;m Sumanth Reddy
        </p>

        <h1 className="mb-4 text-[clamp(0.82rem,1.15vw,1.05rem)] font-bold tracking-tight text-black xl:text-[1.08rem]">
          I lead products from vision to launch with clarity and conviction.
        </h1>

        <p className="mb-6 max-w-[360px] text-[clamp(0.8rem,1vw,0.9rem)] leading-relaxed text-black/55">
          Strong ideas deserve decisive execution. I align design, engineering,
          and strategy so products ship with purpose and lasting impact.
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium text-black/60 sm:text-[12px]">
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-black px-2 text-[11px] font-bold text-white">
              {STATS.years}
            </span>
            {STATS.yearsLabel}
          </span>
          <span className="h-1 w-1 rounded-full bg-black/25" aria-hidden />
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-black px-2 text-[11px] font-bold text-white">
              {STATS.clients}
            </span>
            {STATS.clientsLabel}
          </span>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="mt-7 flex w-full max-w-[360px] flex-col items-center gap-1.5"
          aria-hidden
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
            Scroll
          </span>
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-black/5 blur-[2px]" />
            <span className="absolute inset-0 animate-ping rounded-full bg-black/10 [animation-duration:2s]" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="relative h-5 w-5 text-black drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]"
            >
              <path
                d="M12 4v14M12 18l-5-5M12 18l5-5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
