"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import idCard from "@/assets/id.png";

function LiquidPolish() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden>
      <div className="absolute inset-0 bg-[#141416]" />
      <motion.div
        animate={{
          x: ["-10%", "18%", "-8%"],
          y: ["-6%", "14%", "-4%"],
          rotate: [0, 20, -10, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.25, 0.4, 0.28],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 top-[-30%] h-[120%] w-[80%] rounded-full bg-[radial-gradient(circle_at_40%_45%,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_35%,transparent_62%)] blur-[18px]"
      />
      <motion.div
        animate={{
          x: ["8%", "-20%", "10%"],
          y: ["4%", "18%", "-6%"],
          rotate: [0, -18, 10, 0],
          scale: [1.05, 0.9, 1.12, 1],
          opacity: [0.18, 0.35, 0.2],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-8 bottom-[-25%] h-[100%] w-[85%] rounded-full bg-[radial-gradient(circle_at_55%_40%,rgba(180,190,210,0.16)_0%,rgba(255,255,255,0.03)_40%,transparent_68%)] blur-[20px]"
      />
      <motion.div
        animate={{
          x: ["0%", "12%", "-6%", "0%"],
          y: ["8%", "-10%", "6%", "8%"],
          opacity: [0.12, 0.28, 0.15, 0.12],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute left-[20%] top-[25%] h-16 w-28 rounded-full bg-white/[0.08] blur-[14px]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-black/30" />
    </div>
  );
}

const Icons = {
  code: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M12 12v.01" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
};

const HIRE_CARDS: {
  title: string;
  detail: string;
  icon: ReactNode;
  dark?: boolean;
}[] = [
  {
    title: "Full Stack Developer",
    detail:
      "I build both the interface and the API — React, Next.js, Node — so one person owns the full product path.",
    icon: Icons.code,
  },
  {
    title: "Design + Engineering",
    detail:
      "I turn wireframes into polished UI and ship the code behind it, so design never gets lost in handoff.",
    icon: Icons.layers,
  },
  {
    title: "1.5+ Years Experience",
    detail:
      "Real production work across the stack — shipping features, fixing edge cases, and learning from live users.",
    icon: Icons.briefcase,
    dark: true,
  },
  {
    title: "21+ Projects Shipped",
    detail:
      "Web apps, landing pages, and platforms delivered end to end — from first commit to a live, usable product.",
    icon: Icons.check,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-20 flex min-h-screen items-center overflow-hidden px-4 py-16 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex min-w-0 flex-col justify-center"
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-black/50">
            About
          </p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-black md:text-3xl">
            Sumanth Reddy
          </h2>

          <div className="mb-4 max-w-xl space-y-1.5 text-sm leading-relaxed text-black/70 md:text-[15px]">
            <p>
              I&apos;m a software developer who finds real joy in turning ideas into
              products that people actually use.
            </p>
            <p>
              Life and code both excite me — I love learning fast, building with
              purpose, and pushing myself to write software that is clean,
              scalable, and meaningful.
            </p>
            <p>
              From polished interfaces to robust backends, I care about craft,
              clarity, and delivering work that teams can trust and users can
              feel.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
            {HIRE_CARDS.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className={`relative overflow-hidden rounded-xl p-2.5 shadow-sm transition-shadow hover:shadow-md sm:p-3 ${
                  card.dark
                    ? "border border-white/10 bg-[#141416] text-white shadow-[0_12px_28px_rgba(0,0,0,0.2)]"
                    : "border border-black/10 bg-white"
                }`}
              >
                {card.dark && <LiquidPolish />}
                <h3
                  className={`relative z-10 mb-0.5 flex items-center gap-2 text-xs font-bold sm:text-sm ${
                    card.dark ? "text-white" : "text-black"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
                      card.dark
                        ? "bg-white/10 text-white/85"
                        : "bg-black/[0.05] text-black/75"
                    }`}
                  >
                    {card.icon}
                  </span>
                  {card.title}
                </h3>
                <p
                  className={`relative z-10 text-[11px] leading-snug sm:text-xs ${
                    card.dark ? "text-white/65" : "text-black/55"
                  }`}
                >
                  {card.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative hidden shrink-0 items-center justify-center lg:flex"
        >
          <div className="relative flex items-end justify-center">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[3%] left-1/2 h-5 w-[68%] -translate-x-1/2 rounded-[100%] bg-black/20 blur-xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[2%] left-1/2 h-2.5 w-[48%] -translate-x-1/2 rounded-[100%] bg-black/30 blur-md"
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={idCard.src}
              alt="Sumanth Reddy ID badge"
              width={idCard.width}
              height={idCard.height}
              className="relative z-10 h-auto max-h-[min(90vh,880px)] w-auto max-w-[min(50vw,540px)] object-contain"
              style={{
                filter:
                  "drop-shadow(0 24px 32px rgba(0,0,0,0.18)) drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
