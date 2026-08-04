"use client";

import { motion } from "framer-motion";

export default function HeroSlideThreeLeft() {
  return (
    <div className="absolute left-8 top-1/2 z-10 hidden -translate-y-1/2 lg:left-16 lg:block xl:left-24 2xl:left-28">
      <motion.div
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex w-[min(34vw,380px)] flex-col items-start text-left"
      >
        <h2 className="text-[clamp(1rem,1.4vw,1.28rem)] font-bold leading-tight tracking-tight text-black">
          The Future Doesn&apos;t Need More{" "}
          <span className="text-violet-600">Feature Factories.</span>
        </h2>

        <p className="mt-2 text-[clamp(1rem,1.4vw,1.28rem)] font-bold leading-tight tracking-tight text-black">
          It needs <span className="text-violet-600">product architects.</span>
        </p>

        <p className="mt-3 max-w-[340px] text-[12px] leading-relaxed text-black/60">
          People who understand products, customers,{" "}
          <span className="font-semibold text-violet-600">AI</span>, business
          &amp; execution —{" "}
          <span className="font-medium text-black/75">
            that&apos;s where I thrive.
          </span>
        </p>

        <a
          href="#contact"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-[12px] font-semibold text-white transition-opacity hover:opacity-85"
        >
          Let&apos;s Ship Your Product →
        </a>
      </motion.div>
    </div>
  );
}
