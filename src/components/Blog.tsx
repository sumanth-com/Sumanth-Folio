"use client";

import { motion } from "framer-motion";

const ARTICLES = [
  {
    title: "From Commerce to Code: My Transition",
    excerpt: "How I pivoted from a B.Com degree to Full Stack Development in under a year. The challenges, the late nights, and the breakthroughs.",
    category: "Journey",
    readTime: "5 min read",
    link: "#",
  },
  {
    title: "Understanding Microservices Architecture",
    excerpt: "A deep dive into how I built the Elite Hotel backend using Node.js services, Docker, and RabbitMQ for asynchronous communication.",
    category: "Tech",
    readTime: "8 min read",
    link: "#",
  },
  {
    title: "Why I picked Next.js for Nxtcart",
    excerpt: "Comparing Create React App (CRA) vs Next.js. Why Server Side Rendering (SSR) and SEO mattered for my e-commerce project.",
    category: "Tech",
    readTime: "6 min read",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section className="relative z-20 overflow-hidden bg-white py-32 px-4 md:px-12" id="blog">
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold tracking-tight text-black md:text-7xl"
        >
          Insights
        </motion.h2>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-shadow hover:shadow-md">
                <div className="h-1 bg-black" />

                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-bold text-black">
                      {article.category}
                    </span>
                    <span className="font-mono text-xs text-black/50">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-black transition-opacity group-hover:opacity-70">
                    {article.title}
                  </h3>

                  <p className="mb-6 flex-1 leading-relaxed text-black/60">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center text-sm font-bold text-black transition-transform group-hover:translate-x-2">
                    Read Article <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
