"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/data/contact";

const CHANNELS = [
  {
    id: "email",
    label: "Email",
    value: CONTACT.email,
    hint: "Best for briefs and detailed asks",
    href: `mailto:${CONTACT.email}`,
    external: false,
    icon: MailIcon,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Message on LinkedIn",
    hint: "Partnerships, roles, and intros",
    href: CONTACT.linkedin,
    external: true,
    icon: LinkedinIcon,
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-20 px-4 pb-28 pt-10 md:px-8 md:pt-14"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 md:mb-10"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40">
            Contact
          </p>
          <h1 className="mt-2 max-w-2xl text-[clamp(1.85rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-black">
            No forms. Just a direct line.
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-black/50 md:text-[16px]">
            Pick the channel that fits. I reply personally — usually within a day.
            For partnerships and builds, a short intro call is the fastest path.
          </p>
        </motion.div>

        {/* Meeting — primary path */}
        <motion.a
          href={CONTACT.meeting}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="group mb-5 flex flex-col gap-5 overflow-hidden rounded-[28px] border border-black/8 bg-[#0c0c0d] p-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:-translate-y-0.5 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              Meeting
            </p>
            <h2 className="mt-2 text-[clamp(1.35rem,2.6vw,1.85rem)] font-bold tracking-tight">
              Book a 20-minute intro
            </h2>
            <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-white/50 md:text-[14px]">
              Tell me what you are building, your timeline, and a few preferred
              slots. We will lock a call and decide if we should work together.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-white/45">
              <span className="rounded-full border border-white/12 bg-white/5 px-2.5 py-1">
                {CONTACT.location}
              </span>
              <span className="rounded-full border border-white/12 bg-white/5 px-2.5 py-1">
                {CONTACT.response}
              </span>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-black transition-opacity group-hover:opacity-90 md:self-center">
            {CONTACT.meetingLabel}
            <span aria-hidden>→</span>
          </span>
        </motion.a>

        {/* Channels */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CHANNELS.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={channel.id}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                className="group flex items-start gap-4 rounded-[22px] border border-black/8 bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/15 md:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/8 bg-[#f7f7f5] text-black transition-colors group-hover:bg-black group-hover:text-white">
                  <Icon />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black/40">
                      {channel.label}
                    </p>
                    <span className="text-[12px] font-semibold text-black/30 transition-transform group-hover:translate-x-0.5 group-hover:text-black">
                      →
                    </span>
                  </div>
                  <p className="mt-1 truncate text-[15px] font-bold tracking-tight text-black">
                    {channel.value}
                  </p>
                  <p className="mt-1 text-[12px] leading-snug text-black/45">
                    {channel.hint}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-5 rounded-[22px] border border-black/8 bg-white px-5 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.03)] md:px-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[13px] font-bold text-black">{CONTACT.name}</p>
              <p className="text-[12px] text-black/45">{CONTACT.role}</p>
            </div>
            <p className="max-w-md text-[12px] leading-relaxed text-black/50 sm:text-right">
              Open for product builds, partnerships, and intro calls.
              Prefer email or LinkedIn for first contact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
