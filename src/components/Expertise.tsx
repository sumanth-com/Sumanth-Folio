"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

function IconShell({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${
        dark
          ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
          : "bg-[#f0f0ee] text-black/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]"
      }`}
    >
      {children}
    </div>
  );
}

/** Soft premium polish — clean light on black */
function LiquidGlassPolish() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#141416]" />

      <motion.div
        animate={{
          opacity: [0.45, 0.72, 0.5, 0.78, 0.45],
          scale: [1, 1.08, 1.02, 1.1, 1],
          x: [0, 10, -4, 8, 0],
          y: [0, 6, 2, -4, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-[20%] -top-[30%] h-[90%] w-[100%] rounded-full bg-[radial-gradient(ellipse_at_30%_25%,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.07)_38%,transparent_68%)] blur-[2px]"
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.42, 0.25, 0.4, 0.2],
          scale: [1, 1.12, 0.96, 1.06, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-[8%] top-[10%] h-36 w-44 rounded-full bg-[radial-gradient(circle,rgba(230,235,245,0.2)_0%,transparent_70%)] blur-[26px]"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.22, 0.12, 0.2, 0.1],
          x: ["0%", "10%", "-4%", "0%"],
          y: ["0%", "-8%", "5%", "0%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-20%] right-[-12%] h-40 w-48 rounded-full bg-[radial-gradient(circle,rgba(180,190,210,0.14)_0%,transparent_70%)] blur-[28px]"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-black/40" />
    </div>
  );
}

const TOP_CARDS = [
  {
    title: "Direct value",
    description:
      "You work with me — not a markup chain. Senior craft at a clear price, without agency overhead.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v12M15.2 8.5c-.7-1-1.8-1.5-3.2-1.5-2 0-3.5 1.2-3.5 2.8 0 3.8 6.7 2 6.7 5.4 0 1.6-1.5 2.8-3.6 2.8-1.5 0-2.7-.6-3.4-1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "One voice",
    description:
      "I own the brand end to end. Every screen stays consistent because one person makes the calls.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Built to grow",
    description:
      "I design systems that scale with your product — structure first, so growth doesn’t break the experience.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20V8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const BOTTOM_CARDS = [
  {
    title: "Full range",
    description:
      "Strategy, UI, frontend, and shipping — I cover the stack myself. One brief, one builder, no handoffs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 8h10a3 3 0 1 1 0 6H8" strokeLinecap="round" />
        <circle cx="8" cy="14" r="2.5" />
        <path d="M20 16H10a3 3 0 1 1 0-6h6" strokeLinecap="round" />
        <circle cx="16" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Deep craft",
    description:
      "From landing pages to product systems — I bring the styles and engineering depth your brand actually needs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 7v5c0 4.5 3.4 8.4 8 9.5 4.6-1.1 8-5 8-9.5V7l-8-4Z" strokeLinejoin="round" />
        <path d="M9.5 12.5 11 14l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Direct support",
    description:
      "You talk to me. Revisions, decisions, and delivery stay on one line — no tickets lost between teams.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" strokeLinecap="round" />
        <path d="M4 14v2a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2ZM20 14v2a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" strokeLinejoin="round" />
        <path d="M16 18v1a3 3 0 0 1-3 3h-1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Simple process",
    description:
      "Brief → build → ship. I keep the workflow short so momentum never stalls on process theater.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 12.5 10.5 15 16 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Expertise() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <section
      ref={ref}
      id="expertise"
      className="relative z-20 overflow-hidden px-4 py-20 md:px-10 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-6 max-w-2xl text-center md:mb-8">
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#e4e4e2] px-3.5 py-1 text-[12px] font-medium text-black/65">
            Expertise
          </span>
          <h2 className="whitespace-nowrap text-[clamp(1.25rem,4.4vw,3rem)] font-bold tracking-tight text-black">
            One seat. Full ownership.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-black/50">
            I handle strategy, design, and build myself — clear direction, no
            handoffs, and accountability that never gets diluted.
          </p>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOP_CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-[22px] border border-black/[0.05] bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
            >
              <IconShell>{card.icon}</IconShell>
              <h3 className="mb-2 text-[16px] font-bold tracking-tight text-black">
                {card.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-black/50">
                {card.description}
              </p>
            </motion.article>
          ))}

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0d0d0f] p-5 text-white shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
          >
            {inView && <LiquidGlassPolish />}
            <div className="relative z-10">
              <IconShell dark>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 12 16.5 8.5" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
                  <path d="M12 5v1.5M12 17.5V19M5 12h1.5M17.5 12H19" strokeLinecap="round" />
                </svg>
              </IconShell>
              <h3 className="mb-2 text-[16px] font-bold tracking-tight">Speed</h3>
              <p className="text-[13px] leading-relaxed text-white/60">
                I decide fast and ship faster — sharp turnarounds without cutting
                quality, because I&apos;m the only hand on the work.
              </p>
            </div>
          </motion.article>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BOTTOM_CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.08 + i * 0.06 }}
              className="rounded-[22px] border border-black/[0.05] bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
            >
              <IconShell>{card.icon}</IconShell>
              <h3 className="mb-2 text-[16px] font-bold tracking-tight text-black">
                {card.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-black/50">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
