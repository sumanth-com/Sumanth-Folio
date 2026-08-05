"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/1.png";

function DesignSystemsVisual({ active }: { active: boolean }) {
  const tools = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
  ];

  return (
    <div className="relative h-[220px] overflow-hidden rounded-t-[22px] bg-[#f3f3f3]">
      <div className="absolute left-4 top-5 z-10 flex flex-col gap-1.5 rounded-xl border border-black/8 bg-white p-1.5 shadow-sm">
        {tools.map((tool, i) => (
          <motion.div
            key={`${active}-${i}`}
            animate={
              active && tool.active
                ? { backgroundColor: ["#f4f4f4", "#111", "#f4f4f4"] }
                : { backgroundColor: "#f4f4f4" }
            }
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className={`flex h-7 w-7 items-center justify-center rounded-lg ${
              tool.active && active ? "text-white" : "text-black/50"
            }`}
          >
            {i === 0 && (
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M2 2l5 12 1.5-5L14 7.5 2 2z" />
              </svg>
            )}
            {i === 1 && (
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 13c2-4 4-6 10-10" strokeLinecap="round" />
              </svg>
            )}
            {i === 2 && (
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="8" cy="8" r="4.5" />
              </svg>
            )}
            {i === 3 && (
              <span className="text-[11px] font-semibold leading-none">T</span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        key={`cursor-${active}`}
        animate={
          active
            ? { y: [0, 32, 64, 96, 64, 32, 0], x: [0, 4, 2, 0, -2, 2, 0] }
            : { y: 0, x: 0 }
        }
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[52px] top-8 z-20"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4 drop-shadow" fill="#111">
          <path d="M3 2l12 7.5-5.2 1.4L7.5 17 3 2z" />
        </svg>
      </motion.div>

      <div className="absolute inset-y-0 right-0 left-[78px] flex items-center justify-center px-4">
        <div className="w-full max-w-[200px] space-y-2.5">
          <p className="mb-1 text-[10px] font-medium text-black/35">Buttons</p>
          {[
            { label: "Primary", className: "bg-[#e8e8e8] text-black/70" },
            { label: "Secondary", className: "bg-black text-white" },
            { label: "Outline", className: "border border-black/20 bg-white text-black/70" },
            { label: "Ghost", className: "bg-transparent text-black/45" },
          ].map((btn, i) => (
            <motion.div
              key={`${active}-${btn.label}`}
              animate={
                active
                  ? { scale: [1, i === 1 ? 1.04 : 1.01, 1], opacity: [0.8, 1, 0.8] }
                  : { scale: 1, opacity: 0.85 }
              }
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className={`flex h-8 items-center justify-center rounded-full text-[11px] font-medium ${btn.className}`}
            >
              {btn.label}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PerformanceVisual({ active }: { active: boolean }) {
  return (
    <div className="relative h-[220px] overflow-hidden rounded-t-[22px] bg-[#f3f3f3]">
      <svg
        viewBox="0 0 320 220"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {[45, 85, 125, 165].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="320"
            y2={y}
            stroke="rgba(0,0,0,0.045)"
            strokeWidth="1"
          />
        ))}

        <motion.path
          key={`fill-${active}`}
          d="M0 175 C45 170, 75 155, 115 150 C155 145, 185 125, 225 115 C255 105, 285 100, 320 85 L320 220 L0 220 Z"
          fill="rgba(0,0,0,0.05)"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: [0, 1, 1, 0.35] } : { opacity: 0.2 }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          key={`line-a-${active}`}
          d="M0 155 C40 145, 70 165, 105 125 C140 85, 170 105, 200 72 C230 42, 260 95, 290 58 C305 42, 312 52, 320 45"
          fill="none"
          stroke="rgba(0,0,0,0.28)"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={active ? { pathLength: [0, 1, 1, 0] } : { pathLength: 0.35 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          key={`line-b-${active}`}
          d="M0 175 C50 170, 80 155, 120 150 C160 145, 190 125, 230 115 C260 105, 290 100, 320 85"
          fill="none"
          stroke="rgba(0,0,0,0.12)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={active ? { pathLength: [0, 1, 1, 0] } : { pathLength: 0.35 }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
      </svg>

      <motion.div
        key={`tip-${active}`}
        animate={
          active
            ? { y: [0, -8, 0], opacity: [0.85, 1, 0.85], scale: [0.98, 1, 0.98] }
            : { y: 0, opacity: 0.9, scale: 1 }
        }
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[24%] top-[24%] w-[158px] rounded-xl border border-black/8 bg-white px-3 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.1)]"
      >
        <p className="mb-2 text-[10px] font-medium text-black/40">Aug 3, 2026</p>
        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between gap-2 text-black/70">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-black/25" />
              Unique Visitors
            </span>
            <span className="font-semibold text-black">9,706</span>
          </div>
          <div className="flex items-center justify-between gap-2 text-black/70">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-black/45" />
              Total Pageviews
            </span>
            <span className="font-semibold text-black">6,816</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SiteThumb({
  active,
  delay,
  src,
}: {
  active: boolean;
  delay: number;
  src: string;
}) {
  return (
    <motion.div
      key={`thumb-${active}-${src}`}
      animate={
        active
          ? { y: [0, -3, 0], opacity: [0.8, 1, 0.8] }
          : { y: 0, opacity: 0.9 }
      }
      transition={{ duration: 2.4, repeat: Infinity, delay, ease: "easeInOut" }}
      className="overflow-hidden rounded-md border border-black/10 bg-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="h-10 w-full object-cover object-top"
      />
    </motion.div>
  );
}

function ProductPartnerVisual({ active }: { active: boolean }) {
  return (
    <div className="relative h-[220px] overflow-hidden rounded-t-[22px] bg-[#f3f3f3] px-4 pt-4">
      <motion.div
        key={`msg-${active}`}
        animate={
          active
            ? { y: [-6, 0, -6], opacity: [0.85, 1, 0.85] }
            : { y: 0, opacity: 1 }
        }
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-4 top-4 z-20 flex max-w-[180px] items-center gap-2 rounded-full border border-black/8 bg-white px-2 py-1.5 shadow-sm"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portrait.src}
          alt=""
          className="h-6 w-6 rounded-full object-cover object-top"
        />
        <span className="text-[10px] leading-tight text-black/65">
          Project kickoff confirmed
          <span className="block text-black/35">12 mins ago</span>
        </span>
      </motion.div>

      <motion.div
        key={`heart-${active}`}
        animate={active ? { scale: [1, 1.12, 1] } : { scale: 1 }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-black/8 bg-white shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-black/55" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.8 8.6a4.4 4.4 0 0 0-7.4-3.1L12 7l-1.4-1.5a4.4 4.4 0 0 0-7.4 3.1c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4Z" />
        </svg>
      </motion.div>

      <div className="absolute inset-x-5 top-[58px] rounded-2xl border border-black/8 bg-white p-3.5 shadow-[0_12px_28px_rgba(0,0,0,0.06)]">
        <div className="mb-3 flex flex-wrap gap-1.5">
          <motion.span
            key={`avail-${active}`}
            animate={active ? { opacity: [0.65, 1, 0.65] } : { opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-emerald-700"
          >
            Available
          </motion.span>
          <span className="rounded-full bg-black px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
            Full Stack
          </span>
        </div>
        <div className="mb-3 flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portrait.src}
            alt="Sumanth Reddy"
            className="h-8 w-8 rounded-full object-cover object-top"
          />
          <div>
            <p className="text-[12px] font-bold text-black">Sumanth Reddy</p>
            <p className="text-[10px] text-black/40">Bengaluru, India</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <SiteThumb
            active={active}
            delay={0}
            src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1"
          />
          <SiteThumb
            active={active}
            delay={0.2}
            src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1"
          />
          <SiteThumb
            active={active}
            delay={0.4}
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1"
          />
        </div>
      </div>

      <motion.div
        key={`open-${active}`}
        animate={active ? { y: [0, -3, 0] } : { y: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-3 right-4 flex items-center gap-1.5 rounded-full border border-black/8 bg-white px-2 py-1 text-[9px] font-medium text-black/55 shadow-sm"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Open to work
      </motion.div>
    </div>
  );
}

const CARDS = [
  {
    title: "Product systems that scale",
    description:
      "I build clean UI systems and scalable frontends so your product stays consistent, fast, and ready to grow.",
    Visual: DesignSystemsVisual,
  },
  {
    title: "Websites built to perform",
    description:
      "Dominate search results with precision tailored sites designed for top rankings and visibility.",
    Visual: PerformanceVisual,
  },
  {
    title: "End to end product delivery",
    description:
      "From idea to launch, I align design, engineering, and execution so products ship with clarity and impact.",
    Visual: ProductPartnerVisual,
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.25 });

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative z-20 overflow-hidden px-4 py-24 md:px-10 md:py-28"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <span className="mb-5 inline-flex rounded-full border border-black/10 bg-white px-3.5 py-1 text-[12px] font-medium text-black/70 shadow-sm">
            Benefits
          </span>
          <h2 className="whitespace-nowrap text-[clamp(1.35rem,5vw,3.75rem)] font-bold tracking-tight text-black">
            Discover why I stand out
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-black/50">
            Designing clean, responsive websites that communicate clearly, guide
            visitors smoothly, and support meaningful business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className="overflow-hidden rounded-[26px] border border-black/[0.06] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.05)]"
            >
              <card.Visual active={inView} />
              <div className="px-6 pb-7 pt-6">
                <h3 className="text-[17px] font-bold tracking-tight text-black">
                  {card.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-black/50">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
