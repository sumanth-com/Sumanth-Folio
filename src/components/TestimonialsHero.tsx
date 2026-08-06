"use client";

import { motion } from "framer-motion";

const FACES = [
  {
    src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=240&h=300&dpr=1",
    className: "left-[6%] top-[14%] h-[100px] w-[84px] md:h-[130px] md:w-[108px] lg:left-[10%] lg:top-[12%] lg:h-[150px] lg:w-[124px]",
    delay: 0,
  },
  {
    src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=240&h=300&dpr=1",
    className: "left-[18%] top-[8%] hidden h-[88px] w-[74px] sm:block md:left-[20%] md:h-[110px] md:w-[92px] lg:left-[22%]",
    delay: 0.08,
  },
  {
    src: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=240&h=300&dpr=1",
    className: "right-[18%] top-[9%] hidden h-[92px] w-[78px] sm:block md:right-[20%] md:h-[118px] md:w-[98px] lg:right-[22%]",
    delay: 0.12,
  },
  {
    src: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=240&h=300&dpr=1",
    className: "right-[5%] top-[15%] h-[100px] w-[84px] md:h-[132px] md:w-[110px] lg:right-[9%] lg:top-[13%] lg:h-[152px] lg:w-[126px]",
    delay: 0.04,
  },
  {
    src: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=240&h=300&dpr=1",
    className: "bottom-[22%] left-[8%] h-[96px] w-[80px] md:bottom-[20%] md:h-[120px] md:w-[100px] lg:left-[12%] lg:h-[140px] lg:w-[116px]",
    delay: 0.16,
  },
  {
    src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=240&h=300&dpr=1",
    className: "bottom-[18%] right-[7%] h-[96px] w-[80px] md:bottom-[16%] md:h-[124px] md:w-[104px] lg:right-[11%] lg:h-[144px] lg:w-[120px]",
    delay: 0.2,
  },
  {
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=240&h=300&dpr=1",
    className: "bottom-[28%] left-[22%] hidden h-[78px] w-[66px] md:block md:h-[96px] md:w-[80px] lg:left-[24%]",
    delay: 0.1,
  },
  {
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=240&h=300&dpr=1",
    className: "bottom-[26%] right-[22%] hidden h-[80px] w-[68px] md:block md:h-[100px] md:w-[84px] lg:right-[24%]",
    delay: 0.14,
  },
];

export default function TestimonialsHero() {
  return (
    <section
      id="testimonials-hero"
      className="relative z-20 flex min-h-[100dvh] w-full items-center justify-center overflow-hidden px-4 pb-28 pt-10 md:px-8"
      aria-label="Testimonials"
    >
      {/* floating faces */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {FACES.map((face, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{
              opacity: 1,
              y: [0, -7, 0],
              scale: 1,
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.15 + face.delay },
              scale: { duration: 0.7, delay: 0.15 + face.delay },
              y: {
                duration: 4.2 + (i % 3) * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8 + i * 0.15,
              },
            }}
            className={`absolute overflow-hidden rounded-[18px] shadow-[0_18px_40px_rgba(0,0,0,0.12)] md:rounded-[22px] ${face.className}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={face.src}
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </motion.div>
        ))}
      </div>

      {/* soft vignette so text stays readable */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,236,234,0.92)_0%,rgba(236,236,234,0.55)_42%,transparent_72%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 inline-flex rounded-full border border-black/10 bg-white px-3.5 py-1 text-[12px] font-medium text-black/65"
        >
          Testimonials
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-bold tracking-tight"
        >
          <span className="block text-[clamp(1.85rem,4.2vw,3.25rem)] text-black">
            Trusted by leaders
          </span>
          <span className="mt-1 block text-[clamp(1.85rem,4.6vw,3.5rem)] text-black/30">
            from various industries
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-5 max-w-xl text-[14px] leading-relaxed text-black/55 md:text-[15px]"
        >
          Learn why founders and teams trust me to take their product from idea
          to a polished, live experience.
        </motion.p>

        <motion.a
          href="#stories"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-85"
        >
          Read success stories
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
