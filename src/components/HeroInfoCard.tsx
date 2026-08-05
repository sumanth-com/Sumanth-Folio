"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const CARDS = [
  {
    title: "Development",
    description:
      "Building responsive, polished websites with clean structure, smooth interactions, and launch ready execution.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[18px] w-[18px]"
        aria-hidden
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Visual system",
    description:
      "Creating clear visual systems that keep your brand consistent across every touchpoint.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[18px] w-[18px]"
        aria-hidden
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: "Product design",
    description:
      "Designing intuitive interfaces and user flows that make digital products feel simple and refined.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[18px] w-[18px]"
        aria-hidden
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3 2.1 2.1 0 0 1 0 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
] as const satisfies ReadonlyArray<{
  title: string;
  description: string;
  icon: ReactNode;
}>;

export default function HeroInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="absolute right-4 top-1/2 z-30 hidden w-[min(30vw,340px)] -translate-y-1/2 lg:right-8 lg:block xl:right-12 2xl:right-20"
    >
      <div className="flex flex-col gap-3.5">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + i * 0.12 }}
            className="rounded-[22px] border border-black/[0.08] bg-white/95 px-5 py-4 shadow-[0_14px_36px_rgba(0,0,0,0.08)] backdrop-blur-sm"
          >
            <div className="mb-2.5 flex items-center justify-between gap-3">
              <h2 className="text-[14px] font-bold tracking-tight text-black">
                {card.title}
              </h2>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-black">
                {card.icon}
              </span>
            </div>
            <p className="text-[12px] leading-relaxed text-black/55">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
