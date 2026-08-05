"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const AVATARS = {
  ethan:
    "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
  maya: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
  liam: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
};

function LiquidPolish() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#141416]" />

      {/* soft top-left light — clean and alive */}
      <motion.div
        animate={{
          opacity: [0.45, 0.7, 0.5, 0.75, 0.45],
          scale: [1, 1.08, 1.02, 1.1, 1],
          x: [0, 10, -4, 8, 0],
          y: [0, 6, 2, -4, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-[20%] -top-[25%] h-[85%] w-[95%] rounded-full bg-[radial-gradient(ellipse_at_30%_25%,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_38%,transparent_68%)] blur-[2px]"
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.25, 0.38, 0.2],
          scale: [1, 1.12, 0.96, 1.06, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-[5%] top-[8%] h-40 w-48 rounded-full bg-[radial-gradient(circle,rgba(230,235,245,0.18)_0%,transparent_70%)] blur-[28px]"
      />
      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.1, 0.16, 0.08],
          x: ["0%", "8%", "-4%", "0%"],
          y: ["0%", "-6%", "4%", "0%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-15%] right-[-10%] h-44 w-52 rounded-full bg-[radial-gradient(circle,rgba(180,190,210,0.12)_0%,transparent_70%)] blur-[30px]"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-black/35" />
    </div>
  );
}

function Stars() {
  return (
    <div className="mb-5 flex gap-1 text-[#e8c35a]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current" aria-hidden>
          <path d="M10 1.5l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.6 4.9 17.2l1-5.7-4.1-4 5.7-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomeTestimonials() {
  return (
    <section
      id="home-testimonials"
      className="relative z-20 overflow-hidden px-4 py-20 md:px-10 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl">
        <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#e4e4e2] px-3.5 py-1 text-[12px] font-medium text-black/65">
          Testimonials
        </span>

        <div className="mb-6 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2 className="whitespace-nowrap text-[clamp(1.6rem,4vw,3rem)] font-bold tracking-tight text-black">
            What clients say
          </h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-black/50 md:pb-1 md:text-right">
            Thoughtful feedback from founders and teams who trusted the process,
            direction, and final result.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 md:gap-5">
          {/* Featured black card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[26px] bg-[#141416] p-6 text-white shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
          >
            <LiquidPolish />
            <div className="relative z-10">
              <Stars />
              <p className="text-[15px] leading-relaxed text-white/85">
                Working with Sumanth felt incredibly smooth. The direction was
                clear from the beginning, and the final website captured our brand
                with precision and confidence.
              </p>
            </div>
            <div className="relative z-10 mt-8 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={AVATARS.ethan}
                alt=""
                className="h-10 w-10 rounded-full object-cover object-top"
              />
              <div>
                <p className="text-[14px] font-bold text-white">Vikram Iyer</p>
                <p className="text-[12px] text-white/45">Founder</p>
              </div>
            </div>
          </motion.article>

          {/* Middle stack */}
          <div className="flex flex-col gap-4 md:gap-5">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex flex-1 flex-col justify-between rounded-[26px] border border-black/[0.05] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              <p className="text-[15px] leading-relaxed text-black/60">
                The process was thoughtful, fast, and highly organized. Every
                design decision felt intentional, and the final result made our
                product feel much more polished.
              </p>
              <div className="mt-8 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={AVATARS.maya}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover object-top"
                />
                <div>
                  <p className="text-[14px] font-bold text-black">Ananya Reddy</p>
                  <p className="text-[12px] text-black/45">Designer</p>
                </div>
              </div>
            </motion.article>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="flex items-center gap-3 rounded-[22px] border border-black/[0.05] bg-white px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f0f0ee] text-black/70">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="8" cy="8" r="2.5" />
                  <circle cx="16" cy="8" r="2.5" />
                  <path d="M3 18c.4-2.2 2.3-3.5 5-3.5M21 18c-.4-2.2-2.3-3.5-5-3.5M9 18c.5-1.5 1.8-2.5 3-2.5s2.5 1 3 2.5" strokeLinecap="round" />
                </svg>
              </span>
              <p className="text-[15px] font-semibold tracking-tight text-black">
                Trusted by 85+ clients
              </p>
            </motion.div>
          </div>

          {/* Right column: CTA card above quote (same radius as Trusted-by) */}
          <div className="flex h-full flex-col gap-4 md:gap-5">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-[22px] bg-[#1a1a1a] px-5 py-4 text-center text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(0,0,0,0.16)] transition-opacity hover:opacity-85"
            >
              Let&apos;s work together
            </Link>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="flex min-h-0 flex-1 flex-col justify-between rounded-[26px] border border-black/[0.05] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              <p className="text-[15px] leading-relaxed text-black/60">
                Sumanth helped turn a rough idea into a refined visual identity.
                The work felt clean, strategic, and exactly aligned with where we
                wanted to go.
              </p>
              <div className="mt-8 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={AVATARS.liam}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover object-top"
                />
                <div>
                  <p className="text-[14px] font-bold text-black">Siddharth Patel</p>
                  <p className="text-[12px] text-black/45">Director</p>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
