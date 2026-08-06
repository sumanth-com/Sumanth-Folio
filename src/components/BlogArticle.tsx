"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAdjacentPosts, type BlogPost } from "@/data/blog";

export default function BlogArticle({ post }: { post: BlogPost }) {
  const { prev, next } = getAdjacentPosts(post.slug);
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  useEffect(() => {
    setLiked(false);
    setCopied(false);
  }, [post.slug]);

  function handleLike() {
    setLiked((v) => {
      if (!v) setBurstKey((n) => n + 1);
      return !v;
    });
  }

  async function handleShare() {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
    } catch {
      /* cancelled */
    }
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="relative z-20 pb-16 pt-0">
      {/* full-width sticky navbar — no side gap */}
      <div className="sticky top-0 z-40 border-b border-black/8 bg-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-[#f7f7f5] px-3 py-1.5 text-[12px] font-semibold text-black/70 transition-colors hover:bg-black hover:text-white"
            >
              ← All insights
            </Link>
            <span className="hidden h-4 w-px bg-black/10 sm:block" />
            <p className="text-[13px] text-black/45">
              Reading · {post.category}
            </p>
          </div>
          <p className="text-[12px] font-medium text-black/40">
            {post.readTime} · {post.date}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pt-6 md:px-8 md:pt-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-6">
          {/* left sticky overview */}
          <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
            <div className="rounded-[22px] border border-black/8 bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-[13px] font-bold text-white">
                  SR
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">Sumanth Reddy</p>
                  <p className="text-[11px] text-black/45">Builder · Bengaluru</p>
                </div>
              </div>
            </div>

            <div className="rounded-[22px] border border-black/8 bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/40">
                Overview
              </p>
              <p className="text-[13px] font-bold leading-snug text-black">
                {post.title}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium text-black/45">
                <span className="rounded-full bg-black/[0.06] px-2.5 py-1 font-semibold uppercase tracking-wide text-black/65">
                  {post.tag}
                </span>
                <span className="rounded-full bg-[#f7f7f5] px-2.5 py-1">
                  {post.category}
                </span>
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-black/55">
                {post.excerpt}
              </p>
              <ul className="mt-4 space-y-2 border-t border-black/8 pt-3">
                {post.sections.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${slugify(section.heading)}`}
                      className="flex gap-2 text-[12px] leading-snug text-black/60 transition-colors hover:text-black"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                      <span>{section.heading}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Pass along — compact row */}
              <div className="mt-3 border-t border-black/8 pt-2.5">
                <div className="flex items-center gap-1.5">
                  <p className="mr-1 shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/40">
                    Pass
                  </p>
                  <LikeButton liked={liked} burstKey={burstKey} onClick={handleLike} />

                  <button
                    type="button"
                    onClick={handleShare}
                    className="flex h-8 flex-1 items-center justify-center gap-1 rounded-full border border-black/10 bg-[#f7f7f5] text-[11px] font-semibold text-black/70 transition-colors hover:border-black/20 hover:bg-white hover:text-black"
                  >
                    <ShareIcon />
                    Share
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex h-8 flex-1 items-center justify-center gap-1 rounded-full border border-black/10 bg-[#f7f7f5] text-[11px] font-semibold text-black/70 transition-colors hover:border-black/20 hover:bg-white hover:text-black"
                  >
                    {copied ? <CheckIcon /> : <CopyIcon />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* main article */}
          <article className="min-w-0 overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
            <div className="relative h-44 overflow-hidden bg-black sm:h-52 md:h-56">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt=""
                className="h-full w-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black">
                {post.category}
              </span>
            </div>

            <div className="p-5 md:p-8 lg:p-10">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-[12px] text-black/45">
                <span className="rounded-full bg-black/[0.06] px-2.5 py-1 font-semibold uppercase tracking-wide text-black/70">
                  {post.tag}
                </span>
                <span>{post.views} reads</span>
                <span>·</span>
                <span>{post.readTime}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>

              <h1 className="max-w-4xl text-[clamp(1.5rem,3.2vw,2.35rem)] font-bold leading-tight tracking-tight text-black">
                {post.title}
              </h1>
              <p className="mt-2 text-[13px] text-black/45">
                By Sumanth Reddy · Notes for ambitious builders and future operators
              </p>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-black/60 md:text-[16px]">
                {post.excerpt}
              </p>

              <div className="mt-8 space-y-10">
                {post.sections.map((section, i) => {
                  const gallerySrc = post.gallery[i];
                  const imageLeft = i % 2 === 0;

                  const textBlock = (
                    <section
                      id={slugify(section.heading)}
                      className="scroll-mt-28 min-w-0 flex-1"
                    >
                      <h2 className="text-[18px] font-bold tracking-tight text-black md:text-[20px]">
                        {section.heading}
                      </h2>
                      <div className="mt-3 space-y-4 text-[14.5px] leading-[1.75] text-black/65 md:text-[15.5px]">
                        {section.paragraphs.map((para) => (
                          <p key={para.slice(0, 40)}>{para}</p>
                        ))}
                      </div>
                    </section>
                  );

                  if (!gallerySrc) {
                    return (
                      <div key={section.heading} className="max-w-3xl">
                        {textBlock}
                      </div>
                    );
                  }

                  return (
                    <div
                      key={section.heading}
                      className={`flex flex-col gap-5 md:items-start md:gap-6 ${
                        imageLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <figure className="w-full shrink-0 overflow-hidden rounded-[18px] border border-black/8 bg-[#f7f7f5] md:w-[38%] md:max-w-[260px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={gallerySrc}
                          alt=""
                          className="aspect-[4/3] h-auto w-full object-cover"
                        />
                      </figure>
                      {textBlock}
                    </div>
                  );
                })}
              </div>

              {/* Build with me — full width of article */}
              <div className="mt-10 w-full rounded-[22px] border border-black/8 bg-[#f7f7f5] p-5 md:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/40">
                  Build with me
                </p>
                <p className="mt-2 text-[17px] font-bold tracking-tight text-black md:text-[19px]">
                  Want this operating model inside your product or career path?
                </p>
                <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-black/55 md:text-[14px]">
                  I help ambitious builders and founders ship with CEO-level clarity:
                  ownership, taste, evals, and systems that scale without chaos.
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-85"
                  >
                    Start a conversation
                    <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-2.5 text-[13px] font-semibold text-black transition-colors hover:bg-black hover:text-white"
                  >
                    See shipped work
                  </Link>
                </div>
              </div>

              {/* Prev / Next under Build with me */}
              <div className="mt-5 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group flex min-h-[88px] flex-col justify-center rounded-[20px] border border-black/8 bg-[#f7f7f5] px-5 py-4 transition-colors hover:bg-black hover:text-white"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black/40 group-hover:text-white/50">
                      ← Previous
                    </p>
                    <p className="mt-1.5 line-clamp-2 text-[14px] font-bold leading-snug tracking-tight">
                      {shortName(prev)}
                    </p>
                    <p className="mt-2 text-[12px] font-semibold text-black/45 group-hover:text-white/60">
                      Read brief →
                    </p>
                  </Link>
                ) : (
                  <div className="flex min-h-[88px] flex-col justify-center rounded-[20px] border border-dashed border-black/12 bg-[#f7f7f5]/50 px-5 py-4 opacity-45">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black/40">
                      ← Previous
                    </p>
                    <p className="mt-1.5 text-[14px] font-bold">You are at the start</p>
                  </div>
                )}

                {next ? (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group flex min-h-[88px] flex-col justify-center rounded-[20px] border border-black/8 bg-[#f7f7f5] px-5 py-4 text-left sm:items-end sm:text-right transition-colors hover:bg-black hover:text-white"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black/40 group-hover:text-white/50">
                      Next →
                    </p>
                    <p className="mt-1.5 line-clamp-2 text-[14px] font-bold leading-snug tracking-tight">
                      {shortName(next)}
                    </p>
                    <p className="mt-2 text-[12px] font-semibold text-black/45 group-hover:text-white/60">
                      Read brief →
                    </p>
                  </Link>
                ) : (
                  <div className="flex min-h-[88px] flex-col justify-center rounded-[20px] border border-dashed border-black/12 bg-[#f7f7f5]/50 px-5 py-4 text-left opacity-45 sm:items-end sm:text-right">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black/40">
                      Next →
                    </p>
                    <p className="mt-1.5 text-[14px] font-bold">You are at the end</p>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function LikeButton({
  liked,
  burstKey,
  onClick,
}: {
  liked: boolean;
  burstKey: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={liked}
      aria-label={liked ? "Unlike" : "Like"}
      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
        liked
          ? "border-black bg-black text-white"
          : "border-black/10 bg-[#f7f7f5] text-black/70 hover:border-black/20 hover:text-black"
      }`}
    >
      <motion.span
        animate={liked ? { scale: [1, 1.28, 0.94, 1.06, 1] } : { scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 flex h-4 w-4 items-center justify-center leading-none"
      >
        <HeartIcon filled={liked} />
      </motion.span>

      <AnimatePresence>
        {burstKey > 0 && liked && (
          <>
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const angle = (i / 6) * Math.PI * 2;
              const x = Math.cos(angle) * 14;
              const y = Math.sin(angle) * 14;
              return (
                <motion.span
                  key={`${burstKey}-${i}`}
                  initial={{ opacity: 1, scale: 0.4, x: 0, y: 0 }}
                  animate={{ opacity: 0, scale: 0.2, x, y }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="pointer-events-none absolute h-1 w-1 rounded-full bg-black"
                />
              );
            })}
          </>
        )}
      </AnimatePresence>
    </button>
  );
}

function shortName(post: BlogPost) {
  const words = post.title.split(/\s+/);
  if (words.length <= 5) return post.title;
  return `${words.slice(0, 5).join(" ")}…`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 overflow-visible"
      aria-hidden
    >
      <path
        d="M12 21s-6.7-4.1-8.9-8C1.6 10.1 3 7.2 5.8 6.7c1.5-.3 3 .4 3.9 1.6.9-1.2 2.4-1.9 3.9-1.6 2.8.5 4.2 3.4 2.7 6.3C18.7 16.9 12 21 12 21z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <circle cx="18" cy="5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="19" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.2 10.9 15.7 6.6M8.2 13.1l7.5 4.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <rect
        x="8"
        y="8"
        width="11"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6 15V6.8A1.8 1.8 0 0 1 7.8 5H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <path
        d="M5 12.5 10 17l9-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
