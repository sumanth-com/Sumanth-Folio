"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const STANDARDS = [
  {
    n: "01",
    title: "Decide once",
    detail:
      "Clear scope, clear outcomes, clear ownership. No endless workshops — we lock direction and move.",
  },
  {
    n: "02",
    title: "Build the product",
    detail:
      "Design and engineering under one lead. Fast iteration, production quality, nothing left half-shipped.",
  },
  {
    n: "03",
    title: "Measure what matters",
    detail:
      "Launch is the start. Conversion, retention, and clarity of the next move — reported without noise.",
  },
];

export default function ProjectsSource() {
  return (
    <section
      id="source"
      className="relative z-20 overflow-hidden px-4 py-20 pb-28 md:px-10 md:py-28"
    >
      <div className="relative mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="mb-3 inline-flex rounded-full border border-black/10 bg-white px-3.5 py-1 text-[12px] font-medium text-black/65">
            The source
          </span>
          <h2 className="mx-auto max-w-3xl text-[clamp(1.75rem,4vw,2.85rem)] font-bold tracking-tight text-black">
            One partner. Full stack. Direct line to the work.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-black/50 md:text-[16px]">
            This is the only layer between your idea and a shipped product —
            strategy, design, and engineering from one accountable seat. No
            agency theater. No diluted ownership.
          </p>
        </motion.div>

        {/* executive strip */}
        <div className="mt-12 overflow-hidden rounded-[28px] border border-black/8 bg-[#0c0c0d] text-white shadow-[0_28px_60px_rgba(0,0,0,0.18)] md:mt-14">
          <div className="grid md:grid-cols-3">
            {STANDARDS.map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className={`relative px-6 py-8 md:px-7 md:py-10 ${
                  i < STANDARDS.length - 1
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <p className="text-[11px] font-semibold tracking-[0.2em] text-white/35">
                  {item.n}
                </p>
                <h3 className="mt-3 text-[18px] font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/50">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 px-6 py-6 sm:flex-row md:px-8">
            <div className="text-center sm:text-left">
              <p className="text-[14px] font-semibold text-white">
                Ready when the brief is serious.
              </p>
              <p className="mt-1 text-[12.5px] text-white/40">
                Limited capacity · Direct conversation · No pitch decks required
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-black transition-opacity hover:opacity-90"
            >
              Start a conversation
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
