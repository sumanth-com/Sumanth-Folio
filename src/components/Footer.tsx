"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT } from "@/data/contact";

function BevelPill({
  href,
  children,
  external,
  compact,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  compact?: boolean;
}) {
  const content = (
    <span
      className="group relative inline-flex rounded-full p-[3px] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03]"
      style={{
        background:
          "linear-gradient(180deg, rgba(120,120,120,0.55) 0%, rgba(40,40,40,0.9) 45%, rgba(20,20,20,1) 100%)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.06), 0 8px 28px rgba(0,0,0,0.45)",
      }}
    >
      <span
        className={`relative inline-flex items-center justify-center gap-2 rounded-full bg-[#0a0a0a] font-medium text-white transition-all duration-300 group-hover:bg-[#141414] group-hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] ${
          compact ? "px-4 py-2 text-[13px]" : "px-6 py-3 text-[14px]"
        }`}
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.65)",
        }}
      >
        <span className="inline-flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5">
          {children}
        </span>
      </span>
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="inline-flex">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-flex">
      {content}
    </Link>
  );
}

const SOCIAL = [
  {
    label: "LinkedIn",
    href: CONTACT.linkedin,
  },
  {
    label: "X",
    href: CONTACT.x,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="connect"
      className="relative z-20 flex h-[100dvh] min-h-[100dvh] w-full flex-col overflow-hidden bg-[#070708] text-white"
    >
      {/* alive top-left light */}
      <motion.div
        className="pointer-events-none absolute -left-[20%] -top-[30%] h-[85%] w-[85%]"
        animate={{
          opacity: [0.55, 0.9, 0.65, 0.95, 0.55],
          scale: [1, 1.08, 1.02, 1.1, 1],
          x: [0, 18, -8, 12, 0],
          y: [0, 10, 4, -6, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 30% 30%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 32%, transparent 62%)",
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-24 -top-40 h-[75%] w-[65%] origin-top-left"
        animate={{
          opacity: [0.25, 0.5, 0.3, 0.55, 0.25],
          rotate: [-20, -14, -22, -16, -20],
          scaleX: [1, 1.12, 0.96, 1.08, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(105deg, transparent 10%, rgba(255,255,255,0.1) 38%, rgba(255,255,255,0.04) 55%, transparent 75%)",
          filter: "blur(22px)",
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute left-[8%] top-[4%] h-64 w-64 rounded-full"
        animate={{
          opacity: [0.12, 0.28, 0.15, 0.32, 0.12],
          scale: [0.9, 1.15, 1, 1.2, 0.9],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        style={{
          background:
            "radial-gradient(circle, rgba(230,235,245,0.35) 0%, transparent 70%)",
          filter: "blur(28px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-8 text-center">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-white/25 md:w-14" />
          <p className="text-[13px] font-medium tracking-[0.14em] text-white/70 uppercase md:text-[14px]">
            Open for partnership
          </p>
          <span className="h-px w-10 bg-white/25 md:w-14" />
        </div>

        <h2 className="text-[clamp(2.6rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-tight">
          <span className="text-white">Let&apos;s</span>{" "}
          <span className="text-white/40">Build</span>
        </h2>

        <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-white/75 md:text-[15px]">
          If you&apos;re ready to grow your brand online, I&apos;m ready to lead the work.
          <br />
          Strategy, design, and delivery — built for results, not just conversation.
        </p>

        <div className="mt-9">
          <BevelPill href={CONTACT.meeting} external>
            Book a free intro call
            <span aria-hidden>→</span>
          </BevelPill>
        </div>
      </div>

      <div className="relative z-10 flex items-end justify-between gap-4 px-5 pb-24 md:px-10 md:pb-28">
        <div>
          <div className="mb-3 h-px w-16 bg-white/20" />
          <p className="text-[12px] text-white/70 md:text-[13px]">
            © Sumanth, {year}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {SOCIAL.map((item) => (
            <BevelPill key={item.label} href={item.href} external compact>
              {item.label}
            </BevelPill>
          ))}
        </div>
      </div>
    </footer>
  );
}
