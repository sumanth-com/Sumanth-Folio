"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "Microservices", "PostgreSQL", "MongoDB", "RabbitMQ"] },
  { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS EC2", "AWS S3", "CI/CD", "Nginx"] },
];

export default function Skills() {
  return (
    <section className="relative z-20 min-h-screen overflow-hidden bg-white py-32 px-4 md:px-12" id="skills">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-5xl font-bold tracking-tight text-black md:text-7xl">
            Technical Arsenal
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-black/60">
            A comprehensive stack enabling end-to-end development of scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-black/10 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-6 text-2xl font-bold uppercase tracking-wider text-black">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-black/10 px-4 py-2 text-sm text-black transition-colors hover:bg-black hover:text-white"
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
