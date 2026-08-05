"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const PRINCIPLES: {
  number: string;
  title: string;
  detail: string;
  dark?: boolean;
  icon: ReactNode;
}[] = [
  {
    number: "01",
    title: "Clarity first",
    detail:
      "I believe strong design starts with a clear idea. Every layout, decision, and detail should feel intentional and easy to understand.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M12 3l1.2 5.2L18 9l-4.2 2.2L15 16l-3-2.4L9 16l1.2-4.8L6 9l4.8-.8L12 3z" />
        <path d="M19 14l.5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5.5-2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Thoughtful by design",
    detail:
      "I approach each project with care and attention. Design should feel calm, considered, and built to last beyond trends.",
    dark: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Craft in the details",
    detail:
      "The small things matter. From spacing to motion, I refine every detail until the experience feels polished and complete.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 12 10 5 10-5" />
        <path d="m2 17 10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Built with purpose",
    detail:
      "Every project should have a clear goal. I design with intention, creating work that supports real needs and meaningful outcomes.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Principles() {
  return (
    <section
      id="principles"
      className="relative z-20 overflow-hidden px-4 py-16 md:px-10 md:py-20"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <span className="mb-5 inline-flex rounded-full border border-black/10 bg-[#e4e4e2] px-3.5 py-1 text-[12px] font-medium text-black/65">
            Principles
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-black">
            The values behind my work
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-black/50">
            A few simple principles guide every project, from early direction to
            final execution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3.5">
          {PRINCIPLES.map((item, i) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`flex flex-col rounded-[24px] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.05)] md:p-6 ${
                item.dark
                  ? "bg-[#1a1a1a] text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                  : "border border-black/[0.05] bg-white"
              }`}
            >
              <div className="mb-4 flex items-start justify-between">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    item.dark
                      ? "bg-white/10 text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                      : "bg-[#f0f0ee] text-black/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`font-serif text-[2rem] leading-none tracking-tight md:text-[2.15rem] ${
                    item.dark ? "text-white/25" : "text-black/15"
                  }`}
                >
                  {item.number}
                </span>
              </div>

              <h3
                className={`text-[17px] font-bold tracking-tight ${
                  item.dark ? "text-white" : "text-black"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-2.5 text-[13px] leading-relaxed ${
                  item.dark ? "text-white/60" : "text-black/50"
                }`}
              >
                {item.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
