"use client";

import { motion } from "framer-motion";

export default function HeroIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="absolute left-4 top-1/2 z-30 hidden -translate-y-1/2 lg:left-8 lg:block xl:left-12 2xl:left-20"
    >
      <div className="w-[min(36vw,440px)]">
        <p className="mb-4 text-[clamp(1.65rem,2.6vw,2.35rem)] font-bold leading-tight tracking-tight text-black">
          Mr. Sumanth Reddy
        </p>

        <h1 className="mb-4 whitespace-nowrap text-[clamp(0.82rem,1.15vw,1.05rem)] font-bold tracking-tight text-black xl:text-[1.08rem]">
          A Developer Who Builds Beyond Requirements.
        </h1>

        <p className="mb-6 max-w-[360px] text-[clamp(0.8rem,1vw,0.9rem)] leading-relaxed text-black/55">
          I don&apos;t wait for instructions. I identify problems, design better
          solutions, and ship products that create measurable impact.
        </p>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href="#contact"
            className="rounded-full bg-black px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-85 sm:px-5 sm:text-sm"
          >
            Contact Me
          </a>
          <a
            href="#contact"
            className="rounded-full border border-black/15 bg-white px-4 py-2.5 text-[13px] font-semibold text-black transition-colors hover:bg-black hover:text-white sm:px-5 sm:text-sm"
          >
            Launch Scalable Products
          </a>
        </div>
      </div>
    </motion.div>
  );
}
