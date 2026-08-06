"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";

export default function Blog() {
  return (
    <section id="blog" className="relative z-20 px-4 pb-28 pt-10 md:px-8 md:pt-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40">
            Library
          </p>
          <h1 className="mt-2 whitespace-nowrap text-[clamp(1.35rem,3.4vw,2.25rem)] font-bold tracking-tight text-black">
            Signal over noise. Read what moves the work.
          </h1>
          <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-black/45 md:text-[14px]">
            Briefs for founders and builders who want leverage, judgment, and
            outcomes — not recycled hype.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG_POSTS.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({
  post,
  index,
}: {
  post: (typeof BLOG_POSTS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1"
      >
        <div className="relative h-36 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-black">
            {post.tag}
          </span>
          <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
            {post.readTime}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <p className="text-[11px] font-medium text-black/40">{post.category}</p>
          <h2 className="mt-1 line-clamp-3 text-[14px] font-bold leading-snug tracking-tight text-black">
            {post.title}
          </h2>
          <div className="mt-auto flex items-center justify-between pt-4 text-[12px] font-semibold text-black/55">
            <span>{post.views} reads</span>
            <span className="transition-transform group-hover:translate-x-1">
              Read →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
