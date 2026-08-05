"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const TIMELINE_DATA = [
  {
    year: "2024 - Present",
    title: "Full Stack Developer",
    org: "Freelance & Open Source",
    description: "Architecting enterprise-scale applications like 'Elite Hotel' (Microservices) and 'Nxtcart' (E-commerce). Expertise in Next.js, Docker, Kubernetes, and Cloud Architecture.",
  },
  {
    year: "2023",
    title: "The Pivot to Tech",
    org: "Self-Taught Journey",
    description: "Graduated with a Bachelor of Commerce but discovered a passion for problem-solving. Dedicated 1000+ hours to mastering the MERN stack and software engineering fundamentals.",
  },
  {
    year: "2020 - 2023",
    title: "Bachelor of Commerce",
    org: "Calicut University",
    description: "Graduated with a specialization in Co-operation. Developed a strong analytical mindset and understanding of business logic.",
  },
  {
    year: "2018 - 2020",
    title: "Computer Applications",
    org: "GHSS Tirurangadi",
    description: "Higher Secondary in Commerce with Computer Applications. Early exposure to programming concepts which sparked my initial interest in tech.",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative z-20 overflow-hidden py-14 px-4 md:px-10 md:py-16" id="journey">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">
            My Journey
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-black/55 md:text-base">
            From writing my first &quot;Hello World&quot; to building complex applications.
            Here is a glimpse into my professional evolution.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-[20px] top-0 w-px bg-black/15 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <TimelineItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof TIMELINE_DATA)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className="hidden w-1/2 md:block" />

      <div className="absolute left-[20px] z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-black md:left-1/2" />

      <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
        <motion.div
          whileHover={{ y: -2 }}
          className="group rounded-2xl border border-black/10 bg-white p-6 transition-shadow hover:shadow-md"
        >
          <div className={`mb-2 flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}>
            <span className="mb-2 w-fit rounded-full border border-black/10 px-2 py-1 font-mono text-xs text-black">
              {item.year}
            </span>
            <h3 className="text-xl font-bold text-black">{item.title}</h3>
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-black/50">
            {item.org}
          </p>
          <p className="text-sm leading-relaxed text-black/60">{item.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
