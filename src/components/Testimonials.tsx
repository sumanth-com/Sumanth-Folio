"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const STORIES = [
  {
    quote:
      "Working with Sumanth felt incredibly smooth. The direction was clear from day one, and the final site captured our brand with precision.",
    name: "Vikram Iyer",
    role: "Founder, Protronics",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
    dark: true,
  },
  {
    quote:
      "The process was thoughtful, fast, and highly organized. Every design decision felt intentional, and the product finally looked premium.",
    name: "Ananya Reddy",
    role: "Product Lead",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
  },
  {
    quote:
      "Every revision moved us forward. No fluff, just decisive craft that made our platform feel ready for real users.",
    name: "Siddharth Patel",
    role: "Director, Ops",
    avatar:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
  },
  {
    quote:
      "I hired Sumanth for a redesign and got a growth partner. Conversion climbed because the experience matched the ambition.",
    name: "Meera Krishnan",
    role: "CEO, Retail brand",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
    dark: true,
  },
  {
    quote:
      "Clear scope, sharp UI, and engineering that holds up when traffic hits. Exactly what we needed to ship with confidence.",
    name: "Arjun Nair",
    role: "CTO, SaaS",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
  },
  {
    quote:
      "From first call to live launch, the accountability never slipped. Rare to find, and why we’ll work together again.",
    name: "Kavya Menon",
    role: "Founder, EdTech",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
  },
  {
    quote:
      "What stood out about Sumanth was judgment. He knew what to cut, what to amplify, and how to make the product feel inevitable.",
    name: "Rohan Desai",
    role: "Partner, Studio",
    avatar:
      "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
    dark: true,
  },
  {
    quote:
      "Our messy brief became a confident digital presence. Clients noticed. So did our pipeline.",
    name: "Priya Shah",
    role: "Head of Brand",
    avatar:
      "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
  },
];

function highlightSumanth(quote: string): ReactNode {
  const parts = quote.split(/(Sumanth)/g);
  return parts.map((part, i) =>
    part === "Sumanth" ? (
      <span key={i} className="font-semibold text-inherit">
        Sumanth
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function StoryCard({ item }: { item: (typeof STORIES)[number] }) {
  const dark = Boolean(item.dark);

  return (
    <article
      className={`flex w-[min(86vw,380px)] shrink-0 flex-col justify-between rounded-[26px] p-6 md:w-[400px] md:p-7 ${
        dark
          ? "bg-[#141416] text-white shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
          : "border border-black/[0.06] bg-white text-black shadow-[0_14px_36px_rgba(0,0,0,0.06)]"
      }`}
    >
      <div>
        <div className={`mb-4 flex gap-1 ${dark ? "text-[#e8c35a]" : "text-[#c9a227]"}`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 20 20" className="h-3 w-3 fill-current" aria-hidden>
              <path d="M10 1.5l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.6 4.9 17.2l1-5.7-4.1-4 5.7-.8L10 1.5z" />
            </svg>
          ))}
        </div>
        <p className={`text-[15px] leading-relaxed md:text-[16px] ${dark ? "text-white/85" : "text-black/65"}`}>
          &ldquo;{highlightSumanth(item.quote)}&rdquo;
        </p>
      </div>
      <div className="mt-7 flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.avatar}
          alt=""
          className="h-11 w-11 rounded-full object-cover object-top"
        />
        <div>
          <p className={`text-[14px] font-bold ${dark ? "text-white" : "text-black"}`}>
            {item.name}
          </p>
          <p className={`text-[12px] ${dark ? "text-white/45" : "text-black/45"}`}>
            {item.role}
          </p>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 48,
}: {
  items: typeof STORIES;
  reverse?: boolean;
  duration?: number;
}) {
  const loop = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-4 md:gap-5"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, index) => (
          <StoryCard key={`${item.name}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  const rowA = STORIES.filter((_, i) => i % 2 === 0);
  const rowB = STORIES.filter((_, i) => i % 2 === 1);

  return (
    <section
      className="relative z-20 flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden py-20 pb-28 md:py-24"
      id="stories"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="relative mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-white px-3.5 py-1 text-[12px] font-medium text-black/65">
            Success stories
          </span>
          <h2 className="text-[clamp(1.7rem,3.8vw,2.75rem)] font-bold tracking-tight text-black">
            Real words. Real launches.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-black/50 md:text-[15px]">
            Continuous proof from founders and teams who trusted the process,
            direction, and final result.
          </p>
        </div>

        <div className="relative space-y-5 overflow-hidden rounded-[28px]">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-[#ececea] to-transparent sm:w-16 md:w-24"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#ececea] to-transparent sm:w-16 md:w-24"
            aria-hidden
          />

          <MarqueeRow items={rowA} duration={52} />
          <MarqueeRow items={rowB} reverse duration={58} />
        </div>

        {/* Client + investor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mt-12 md:mt-16"
        >
          <div className="overflow-hidden rounded-[28px] border border-black/8 bg-[#0c0c0d] px-6 py-8 text-center text-white shadow-[0_24px_50px_rgba(0,0,0,0.18)] md:px-10 md:py-10 md:text-left">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  For founders & investors
                </p>
                <h3 className="mt-2 text-[clamp(1.35rem,2.8vw,1.85rem)] font-bold tracking-tight text-white">
                  Build something worth backing.
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/50">
                  If you&apos;re launching a product or evaluating a team that can
                  ship with clarity, let&apos;s talk. One accountable partner from
                  strategy to live product.
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-black transition-opacity hover:opacity-90"
                >
                  Start a partnership
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[13px] font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  See shipped work
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
