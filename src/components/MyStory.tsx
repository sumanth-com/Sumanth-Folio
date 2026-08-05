"use client";

import { motion } from "framer-motion";
import sign from "@/assets/sign.png";

const WORKSPACE_IMG =
  "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1100&h=820&dpr=1";

export default function MyStory() {
  return (
    <section
      id="my-story"
      className="relative z-20 overflow-hidden px-4 py-12 md:px-10 md:py-14"
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[24px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={WORKSPACE_IMG}
            alt="Workspace"
            className="h-[min(52vh,420px)] w-full object-cover md:h-[min(56vh,460px)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)] backdrop-blur-md md:bottom-5 md:left-5">
            <p className="text-[11px] font-medium text-white/70">Since</p>
            <p className="mt-0.5 text-[2rem] font-bold leading-none tracking-tight">
              2024
            </p>
            <p className="mt-1.5 text-[11px] leading-snug text-white/65">
              Design &amp; digital experiences
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="flex max-w-xl flex-col justify-center"
        >
          <span className="mb-4 inline-flex w-fit self-center rounded-full border border-black/10 bg-[#e4e4e2] px-3.5 py-1 text-[12px] font-medium text-black/65">
            My story
          </span>

          <h2 className="text-[clamp(1.75rem,3.6vw,2.85rem)] font-bold leading-[1.15] tracking-tight text-black">
            From curiosity to refined craft
          </h2>

          <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-black/55 md:text-[15px]">
            <p>
              I lead with strategy first: clarify the goals, shape product
              direction, then build systems people trust and use.
            </p>
            <p>
              Every decision ties back to outcomes—clarity in design, speed in
              delivery, and architecture that scales without losing focus or
              quality.
            </p>
            <p>
              I partner with founders and teams to ship digital products that
              feel intentional, commercially sharp, and ready for long-term
              growth.
            </p>
          </div>

          <div className="mt-7 flex items-center gap-4 md:gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={sign.src}
              alt="Sumanth Reddy signature"
              width={sign.width}
              height={sign.height}
              className="h-24 w-auto object-contain md:h-28"
            />
            <span className="h-16 w-px shrink-0 bg-black/15 md:h-20" aria-hidden />
            <div>
              <p className="text-[15px] font-semibold tracking-tight text-black">
                Suprabase
              </p>
              <p className="mt-0.5 text-[13px] text-black/45">
                Founder &amp; Designer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
