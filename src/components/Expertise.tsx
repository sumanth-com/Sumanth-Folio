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

/** Visible liquid glass polish — soft white smoke/waves on black */
function LiquidGlassPolish() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#141416]" />

      <motion.div
        animate={{
          x: ["-18%", "22%", "-12%"],
          y: ["-8%", "18%", "-5%"],
          rotate: [0, 28, -12, 0],
          scale: [1, 1.35, 0.92, 1],
          opacity: [0.75, 1, 0.8],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 top-[-35%] h-[130%] w-[95%] rounded-full bg-[radial-gradient(circle_at_40%_45%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.2)_28%,transparent_58%)] blur-[26px]"
      />
      <motion.div
        animate={{
          x: ["12%", "-30%", "16%"],
          y: ["0%", "25%", "-12%"],
          rotate: [0, -30, 14, 0],
          scale: [1.1, 0.85, 1.25, 1],
          opacity: [0.55, 0.95, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute -left-16 top-[-10%] h-[110%] w-[90%] rounded-full bg-[radial-gradient(circle_at_55%_40%,rgba(230,235,245,0.45)_0%,rgba(255,255,255,0.12)_35%,transparent_65%)] blur-[30px]"
      />
      <motion.div
        animate={{
          x: ["-8%", "18%", "-6%"],
          y: ["20%", "-15%", "10%"],
          scale: [0.9, 1.2, 0.95],
          opacity: [0.4, 0.85, 0.5],
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute left-[10%] top-[5%] h-36 w-52 rounded-full bg-white/40 blur-[20px]"
      />
      <motion.div
        animate={{
          x: ["5%", "-15%", "8%"],
          y: ["-5%", "20%", "0%"],
          opacity: [0.35, 0.7, 0.4],
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-[-20%] right-[5%] h-40 w-48 rounded-full bg-[radial-gradient(circle,rgba(200,210,230,0.35)_0%,transparent_70%)] blur-[24px]"
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveFill" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.12)" />
          </linearGradient>
          <filter id="waveBlur">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <motion.path
          fill="url(#waveFill)"
          filter="url(#waveBlur)"
          animate={{
            d: [
              "M0 120 C70 80, 130 160, 200 110 C270 60, 330 140, 400 95 L400 0 L0 0 Z",
              "M0 95 C80 150, 140 70, 210 130 C280 185, 340 75, 400 115 L400 0 L0 0 Z",
              "M0 130 C60 70, 150 155, 220 90 C290 35, 350 145, 400 100 L400 0 L0 0 Z",
              "M0 120 C70 80, 130 160, 200 110 C270 60, 330 140, 400 95 L400 0 L0 0 Z",
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
    </div>
  );
}

const TOP_CARDS = [
  {
    title: "Affordability",
    description:
      "Access high-quality design services at a fraction of traditional costs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v12M15.2 8.5c-.7-1-1.8-1.5-3.2-1.5-2 0-3.5 1.2-3.5 2.8 0 3.8 6.7 2 6.7 5.4 0 1.6-1.5 2.8-3.6 2.8-1.5 0-2.7-.6-3.4-1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Consistency",
    description: "Ensure a consistent brand identity with regular design output.",
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
    title: "Scalability",
    description: "Scalable systems built to support growing products and businesses.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20V8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const BOTTOM_CARDS = [
  {
    title: "Flexibility",
    description: "Adapt the service to cover a wide range of design tasks as needed.",
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
    title: "Diversity",
    description:
      "Access to a variety of styles and expertise from a pool of creative professionals and people.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="8" cy="7" r="2.5" />
        <circle cx="16" cy="7" r="2.5" />
        <circle cx="12" cy="13.5" r="2.5" />
        <path d="M2.5 19c.4-2.4 2.5-4 5.5-4M21.5 19c-.4-2.4-2.5-4-5.5-4M7.5 19c.5-1.8 2-3 4.5-3s4 1.2 4.5 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Support",
    description: "Enjoy dedicated customer service and revisions to perfect your designs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" strokeLinecap="round" />
        <path d="M4 14v2a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2ZM20 14v2a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" strokeLinejoin="round" />
        <path d="M16 18v1a3 3 0 0 1-3 3h-1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Convenience",
    description: "Streamline the design process with a simple workflow and process.",
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
            Design support with clear direction
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-black/50">
            A focused mix of strategy, design, and execution to help ideas become
            clear, refined, and ready to launch with confidence.
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
                Get quicker turnarounds on design projects without sacrificing
                quality at a way better price on your wallet.
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
