"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const DETAILS = [
  {
    label: "Email",
    value: "gsumanthreddy2004@gmail.com",
    href: "mailto:gsumanthreddy2004@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="14" x="3" y="5" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Bengaluru, India / Remote",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Response time",
    value: "Within 24 hours",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

export default function StartProject() {
  return (
    <section
      id="start-project"
      className="relative z-20 overflow-hidden px-4 py-12 md:px-10 md:py-16"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#f3f3f1] px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <span className="mb-4 inline-flex w-fit rounded-full border border-black/10 bg-white px-3.5 py-1 text-[12px] font-medium text-black/65">
              Start a project
            </span>

            <h2 className="max-w-md text-[clamp(1.7rem,3.4vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-black">
              Let&apos;s create something thoughtful together
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-black/50">
              Have a brand, website, or product idea in mind? Share a few details
              and let&apos;s shape the next step.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#1a1a1a] px-5 py-2.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-85"
              >
                Get in touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full border border-black/10 bg-[#e8e8e6] px-5 py-2.5 text-[14px] font-semibold text-black transition-colors hover:bg-white"
              >
                View projects
              </Link>
            </div>

            <p className="mt-auto pt-10 text-[13px] text-black/40">
              Branding · Web design · Development
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col rounded-[24px] bg-[#1a1a1a] p-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] md:p-7"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </div>

            <h3 className="text-[18px] font-semibold tracking-tight text-white">
              Available for new projects
            </h3>
            <p className="mt-1.5 text-[13px] text-white/45">
              Currently booking for August – September 2026
            </p>

            <div className="mt-8 flex flex-col">
              {DETAILS.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-start gap-3.5 py-4 ${
                    i < DETAILS.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] text-white/40">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 block truncate text-[14px] font-medium text-white transition-opacity hover:opacity-80"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-[14px] font-medium text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
