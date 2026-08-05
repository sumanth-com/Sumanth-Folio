"use client";

import { motion } from "framer-motion";

const AVATARS = [
  "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
  "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
  "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
  "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
];

export default function WhyChooseMe() {
  return (
    <section
      id="why-choose-me"
      className="relative z-20 overflow-hidden px-4 py-20 md:px-10 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl">
        <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#e4e4e2] px-3.5 py-1 text-[12px] font-medium text-black/65">
          Why choose me
        </span>

        <div className="mb-5 flex flex-col gap-3 md:mb-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-black md:text-5xl">
            Design built around lasting clarity
          </h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-black/50 md:pb-1 md:text-right">
            I bring strategy, visual direction, and refined execution together to
            create meaningful digital experiences with lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-3 md:gap-4">
          {/* Column 1 */}
          <div className="flex h-full flex-col gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 rounded-[22px] border border-black/[0.05] bg-white px-5 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="flex -space-x-2.5">
                {AVATARS.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-white object-cover object-top"
                  />
                ))}
              </div>
              <p className="text-[15px] font-semibold tracking-tight text-black">
                85+ clients
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex min-h-[260px] flex-1 flex-col justify-between rounded-[26px] border border-black/[0.05] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:min-h-[300px]"
            >
              <p className="max-w-[220px] text-[14px] leading-relaxed text-black/55">
                Clear design direction shaped around every project goal.
              </p>
              <div>
                <p className="text-[clamp(4.5rem,8vw,6rem)] font-bold leading-none tracking-tight text-black">
                  92
                </p>
                <p className="mt-2 text-[14px] text-black/45">Client satisfaction</p>
              </div>
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="flex h-full flex-col gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex min-h-[260px] flex-1 flex-col justify-between rounded-[26px] border border-black/[0.05] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:min-h-[300px]"
            >
              <p className="max-w-[240px] text-[14px] leading-relaxed text-black/55">
                Brand identities, websites, and digital systems delivered with
                care.
              </p>
              <div>
                <p className="text-[clamp(4.5rem,8vw,6rem)] font-bold leading-none tracking-tight text-black">
                  56
                </p>
                <p className="mt-2 text-[14px] text-black/45">Projects completed</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="flex items-center gap-2.5 rounded-[22px] border border-black/[0.05] bg-white px-5 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              <motion.span
                animate={{ opacity: [0.45, 1, 0.45], scale: [1, 1.15, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]"
              />
              <p className="text-[15px] font-medium tracking-tight text-black">
                Available for projects
              </p>
            </motion.div>
          </div>

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="flex h-full min-h-[300px] flex-col justify-between rounded-[26px] bg-[#1a1a1a] p-6 text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
          >
            <p className="max-w-[280px] text-[15px] leading-relaxed text-white/70">
              I help founders, creators, and teams turn ideas into refined digital
              experiences that feel memorable and easy to navigate.
            </p>

            <div>
              <div className="mb-2 flex items-end gap-3">
                <p className="text-[clamp(4rem,7vw,5.5rem)] font-bold leading-none tracking-tight text-white">
                  4.9
                </p>
                <div className="mb-2 flex gap-0.5 text-[#e8c35a]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      className="h-4 w-4 fill-current"
                      aria-hidden
                    >
                      <path d="M10 1.5l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.6 4.9 17.2l1-5.7-4.1-4 5.7-.8L10 1.5z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[14px] text-white/45">
                Trusted by clients across India
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
