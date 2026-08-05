"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Engineering",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Framer Motion",
      "Responsive Design",
      "SEO Optimization",
      "Figma",
      "UI/UX Design",
      "Design Systems",
      "Landing Pages",
    ],
  },
  {
    category: "Backend & Database",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "JWT",
      "RBAC",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "SQL",
      "Database Design",
      "Migrations",
    ],
  },
  {
    category: "Software Architecture",
    items: [
      "System Design",
      "REST Architecture",
      "Scalable Applications",
      "Modular Design",
      "AI Integration",
      "Google Gemini API",
      "LLM Integration",
      "CI/CD",
      "Vercel",
      "Netlify",
      "Docker",
      "AWS",
      "Technical Documentation",
    ],
  },
];

export default function Skills() {
  return (
    <section
      className="relative z-20 overflow-hidden px-4 py-14 md:px-10 md:py-16"
      id="skills"
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8 text-center md:mb-10"
        >
          <h2 className="mb-3 text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-black">
            Technical Arsenal
          </h2>
          <p className="mx-auto max-w-2xl text-[14px] leading-relaxed tracking-[-0.01em] text-black/50 md:text-[15px]">
            I choose tools for outcomes—fast interfaces, reliable backends, and
            architecture built to scale with the product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="rounded-[22px] border border-black/10 bg-white p-6 transition-shadow hover:shadow-md md:p-7"
            >
              <h3 className="mb-5 whitespace-nowrap text-center text-[13px] font-bold uppercase tracking-[0.12em] text-black md:text-[14px]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-[12px] font-medium tracking-tight text-black/75 transition-colors hover:bg-black hover:text-white md:text-[13px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
