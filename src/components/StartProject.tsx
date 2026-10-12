"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StartProject() {
  return (
    <section
      id="start-project"
      className="relative z-20 overflow-hidden px-4 py-12 md:px-10 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-6xl"
      >
        <div className="overflow-hidden rounded-[28px] border border-black/8 bg-[#0c0c0d] px-6 py-8 text-center text-white shadow-[0_24px_50px_rgba(0,0,0,0.18)] md:px-10 md:py-10 md:text-left">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                Available · Booking Aug – Sep 2026
              </p>
              <h2 className="mt-2 text-[clamp(1.35rem,2.8vw,1.85rem)] font-bold tracking-tight text-white">
                Let&apos;s create something thoughtful together.
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-white/50">
                Have a brand, website, or product idea in mind? Share a few
                details and let&apos;s shape the next step.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-black transition-opacity hover:opacity-90"
              >
                Get in touch
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[13px] font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                View projects
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
