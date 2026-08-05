"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FAQS = [
  {
    q: "How do I start a project with you?",
    a: "Share a short brief through the contact page — goals, timeline, and any references. I’ll reply with next steps and set up a shared board so you can request work as needed.",
  },
  {
    q: "How fast will I deliver?",
    a: "You can set your own deadlines. On average, I deliver a first version within a couple of days, then iterate based on your feedback.",
  },
  {
    q: "Why not hire full-time?",
    a: "A full-time designer or developer can be expensive and hard to source. Your team may not have enough work to keep someone busy every week — working with me gives you senior output when you need it.",
  },
  {
    q: "Can I order a one-time project?",
    a: "Yes. I take focused one-off projects as well as ongoing retainers. Start with what you need now — you can always expand scope later.",
  },
  {
    q: "How do revisions and feedback work?",
    a: "Every deliverable includes clear rounds of revisions. Leave comments on the shared board or during a call, and I’ll update the work until it matches what you need.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-20 overflow-hidden px-4 py-20 md:px-10 md:py-28"
    >
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-[clamp(1.85rem,4vw,3rem)] font-bold leading-tight tracking-tight text-black">
          Explore my FAQs
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-black/45">
          Answers to questions about process, pricing, timelines, and project
          details
        </p>

        <div className="mt-12 flex flex-col gap-3 text-left">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="overflow-hidden rounded-[22px] border border-black/[0.06] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-black/[0.015]"
                >
                  <span className="text-[15px] font-medium tracking-tight text-[#2a2a2a] md:text-[16px]">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center text-[22px] font-light leading-none text-black/40 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-black/50">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
