"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "Web Apps",
  "AI Integrations",
  "Automation",
  "Scalable Systems",
  "Clean UI/UX",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-500"
      aria-hidden
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
      className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 lg:right-8 lg:block xl:right-12 2xl:right-20"
    >
      <div className="relative w-[min(24vw,320px)]">
        {/* Cube depth — side face */}
        <div
          aria-hidden
          className="absolute inset-0 translate-x-2 translate-y-2 rounded-[28px] bg-black/[0.07]"
        />
        {/* Cube depth — bottom face */}
        <div
          aria-hidden
          className="absolute inset-0 translate-x-1 translate-y-3 rounded-[28px] bg-black/[0.04]"
        />

        <div className="relative rounded-[28px] border border-black/[0.08] bg-white px-6 py-7 shadow-[0_22px_44px_rgba(0,0,0,0.1),0_8px_18px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]">
          <h2 className="mb-5 text-[clamp(0.95rem,1.35vw,1.15rem)] font-bold uppercase leading-[1.35] tracking-wide text-black">
            I Build Stuff That
            <br />
            Makes A{" "}
            <span className="font-extrabold italic text-violet-500">
              Difference.
            </span>
          </h2>

          <ul className="space-y-2.5">
            {SKILLS.map((skill) => (
              <li key={skill} className="flex items-start gap-2.5">
                <CheckIcon />
                <span className="text-[13px] font-medium uppercase tracking-wide text-black/80">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
