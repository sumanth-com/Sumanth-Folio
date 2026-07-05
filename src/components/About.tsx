"use client";

import { motion } from "framer-motion";
import idCard from "@/assets/id.png";

const HIRE_CARDS = [
  {
    title: "Full Stack Developer",
    detail: "Frontend to backend — I ship complete products end to end.",
  },
  {
    title: "Open to Work",
    detail: "Available for full-time roles and freelance projects.",
  },
  {
    title: "Scalable Systems",
    detail: "Microservices, cloud, and production-ready architecture.",
  },
  {
    title: "Fast & Reliable",
    detail: "Clean code, clear communication, and on-time delivery.",
  },
  {
    title: "1.5+ Years of Experience",
    detail: "Hands-on building real products across the full stack.",
  },
  {
    title: "21+ Projects Delivered Successfully",
    detail: "Web apps, platforms, and software solutions shipped on time.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-20 flex h-screen max-h-screen min-h-0 items-center overflow-hidden bg-white px-4 py-12 md:px-10 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
        {/* Left — content */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex min-w-0 flex-col justify-center"
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-black/50">
            About
          </p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-black md:text-3xl">
            Sumanth Reddy
          </h2>

          <div className="mb-4 max-w-xl space-y-1.5 text-sm leading-relaxed text-black/70 md:text-[15px]">
            <p>
              I&apos;m a software developer who finds real joy in turning ideas into
              products that people actually use.
            </p>
            <p>
              Life and code both excite me — I love learning fast, building with
              purpose, and pushing myself to write software that is clean,
              scalable, and meaningful.
            </p>
            <p>
              From polished interfaces to robust backends, I care about craft,
              clarity, and delivering work that teams can trust and users can
              feel.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
            {HIRE_CARDS.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-black/10 bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md sm:p-3"
              >
                <h3 className="mb-0.5 text-xs font-bold text-black sm:text-sm">
                  {card.title}
                </h3>
                <p className="text-[11px] leading-snug text-black/55 sm:text-xs">
                  {card.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — ID badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative hidden shrink-0 items-center justify-center lg:flex"
        >
          <div className="relative flex items-end justify-center">
            {/* Ground shadow — 3D float effect */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[3%] left-1/2 h-5 w-[68%] -translate-x-1/2 rounded-[100%] bg-black/20 blur-xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[2%] left-1/2 h-2.5 w-[48%] -translate-x-1/2 rounded-[100%] bg-black/30 blur-md"
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={idCard.src}
              alt="Sumanth Reddy ID badge"
              width={idCard.width}
              height={idCard.height}
              className="relative z-10 h-auto max-h-[min(90vh,880px)] w-auto max-w-[min(50vw,540px)] object-contain"
              style={{
                filter:
                  "drop-shadow(0 24px 32px rgba(0,0,0,0.18)) drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
