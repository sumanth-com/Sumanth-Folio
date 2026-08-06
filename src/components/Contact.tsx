"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import contPortrait from "@/assets/Cont.jpg";
import { CONTACT } from "@/data/contact";

const ACTIONS = [
  {
    id: "email",
    label: "Email",
    href: `mailto:${CONTACT.email}`,
    external: false,
    icon: MailIcon,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: CONTACT.linkedin,
    external: true,
    icon: LinkedinIcon,
  },
  {
    id: "meeting",
    label: "Book a call",
    href: CONTACT.meeting,
    external: true,
    icon: CalendarIcon,
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-20 flex min-h-[calc(100dvh-6rem)] flex-col items-center justify-center px-4 pb-28 pt-10 md:px-8"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40">
            Contact
          </p>
          <h1 className="mt-3 whitespace-nowrap text-[clamp(1.35rem,4.2vw,2.5rem)] font-bold leading-none tracking-tight text-black">
            Let&apos;s build what compounds.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-black/50">
            Serious product work. Clear ownership. Decisions that move the business —
            not meetings that waste the week.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-10 flex items-center justify-center gap-4 sm:gap-5"
        >
          {ACTIONS.map((action, i) => {
            const Icon = action.icon;
            return (
              <motion.a
                key={action.id}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                aria-label={action.label}
                title={action.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.12 + i * 0.05 }}
                className="group flex h-14 w-14 items-center justify-center rounded-[18px] border border-black/8 bg-white text-black shadow-[0_10px_28px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white sm:h-16 sm:w-16"
              >
                <Icon />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.28 }}
          className="mt-10 w-full max-w-md"
        >
          <div className="rounded-[22px] border border-black/8 bg-white px-5 py-5 shadow-[0_10px_28px_rgba(0,0,0,0.04)] sm:px-6">
            <div className="flex flex-col items-center gap-3">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border border-black/10 bg-[#0c0c0d] shadow-[0_8px_22px_rgba(0,0,0,0.12)] sm:h-[88px] sm:w-[88px]">
                <Image
                  src={contPortrait}
                  alt={CONTACT.name}
                  fill
                  className="object-cover object-[center_18%]"
                  sizes="88px"
                  priority
                />
              </div>
              <div>
                <p className="text-[15px] font-bold tracking-tight text-black">
                  {CONTACT.name}
                </p>
                <p className="mt-0.5 text-[12px] text-black/45">
                  {CONTACT.role}
                </p>
              </div>
              <p className="max-w-sm text-[13px] leading-relaxed text-black/50">
                I partner with founders and operators who want leverage, not noise.
                If the brief is clear and the stakes are real, we should talk.
              </p>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-[#f7f7f5] px-3 py-1 text-[11px] font-medium text-black/50">
                  Selective availability
                </span>
                <span className="rounded-full bg-[#f7f7f5] px-3 py-1 text-[11px] font-medium text-black/50">
                  Reply within 24 hours
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m3 7 9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S.02 4.88.02 3.5 1.14 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.48h4.56V23H.22V8.48zM8.34 8.48h4.37v1.98h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7V23h-4.56v-6.62c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V23H8.34V8.48z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3 10h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 3v4M16 3v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 15h.01M12 15h.01M16 15h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
