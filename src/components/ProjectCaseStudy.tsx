"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import GrowthAnalytics from "@/components/GrowthAnalytics";
import type { ProjectCase } from "@/data/projects";

function mediaSrc(image: ProjectCase["cover"]) {
  return typeof image === "string" ? image : image.src;
}

function BrowserChrome({ children, url }: { children: ReactNode; url: string }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-black/10 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
      <div className="flex items-center gap-3 border-b border-black/8 bg-[#f3f3f1] px-3.5 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d0d0d0]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d0d0d0]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d0d0d0]" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center rounded-full bg-white px-3 py-1 text-[11px] text-black/45 shadow-sm">
          <span className="truncate">{url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
      <div className="bg-[#fafafa]">{children}</div>
    </div>
  );
}

export default function ProjectCaseStudy({ project }: { project: ProjectCase }) {
  const hasLive = Boolean(project.liveUrl?.startsWith("http"));

  return (
    <div className="relative pb-28">
      {/* top bar */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 pt-8 md:px-10 md:pt-10">
        <Link
          href="/projects#selected-works"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2 text-[12px] font-medium text-black/70 transition-colors hover:bg-black hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M15 18 9 12l6-6" />
          </svg>
          All projects
        </Link>
        {hasLive ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-black px-3.5 py-2 text-[12px] font-semibold text-white transition-opacity hover:opacity-85"
          >
            Open live site
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </a>
        ) : (
          <span className="rounded-full border border-black/10 bg-white px-3.5 py-2 text-[12px] font-medium text-black/45">
            Case study
          </span>
        )}
      </div>

      {/* intro — centered hierarchy */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-12 md:px-10 md:pb-14 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-[clamp(2.25rem,5.5vw,3.6rem)] font-bold tracking-tight text-black">
            {project.title}
          </h1>
          <p className="mt-3 text-[13px] font-medium text-black/40 md:text-[15px]">
            {project.category}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-black/55 md:text-[16px]">
            {project.cardLine}
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:mt-12 md:grid-cols-2">
          <div className="rounded-[22px] border border-black/8 bg-white/70 p-5 text-left md:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40">
              What it is
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-black/65 md:text-[15px]">
              {project.summary}
            </p>
          </div>
          <div className="rounded-[22px] border border-black/8 bg-white/70 p-5 text-left md:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40">
              What it&apos;s for
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-black/65 md:text-[15px]">
              {project.purpose}
            </p>
          </div>
        </div>
      </section>

      {/* live preview */}
      <section id="live-look" className="mx-auto w-full max-w-6xl px-4 pb-16 md:px-10 md:pb-20">
        <div className="mb-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40">
            {hasLive ? "Live product" : "Product"}
          </p>
          <h2 className="mt-1 whitespace-nowrap text-[clamp(1.25rem,2.8vw,1.85rem)] font-bold tracking-tight text-black">
            Built to convert attention into trust.
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[13px] text-black/45">
            The first impression that carries the brand, the promise, and the next action.
          </p>
        </div>
        <BrowserChrome
          url={
            hasLive
              ? project.liveUrl!
              : `${project.title.toLowerCase().replace(/\s+/g, "")}.app`
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mediaSrc(project.cover)}
            alt={`${project.title} live preview`}
            className="block h-auto w-full"
          />
        </BrowserChrome>
        {hasLive && (
          <div className="mt-5 flex justify-center">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-black/70 underline-offset-4 transition-colors hover:text-black hover:underline"
            >
              Visit {project.title}
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          </div>
        )}
      </section>

      {/* experience moments */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 md:px-10 md:pb-20">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40">
            Experience
          </p>
          <h2 className="mt-1 whitespace-nowrap text-[clamp(1.35rem,3vw,2rem)] font-bold tracking-tight text-black">
            Moments that move the business.
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-[14px] text-black/50">
            Each surface has a job — acquire trust, remove doubt, and drive action.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {project.screens.map((screen, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={screen.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="grid items-center gap-8 md:grid-cols-12 md:gap-10"
              >
                <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
                  <div className="overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_18px_48px_rgba(0,0,0,0.09)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mediaSrc(screen.image)}
                      alt={screen.title}
                      className="block h-auto w-full"
                    />
                  </div>
                </div>

                <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold text-black/50">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {screen.device}
                  </div>
                  <h3 className="mt-4 text-[clamp(1.3rem,2.5vw,1.75rem)] font-bold tracking-tight text-black">
                    {screen.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-black/55 md:text-[15px]">
                    {screen.description}
                  </p>
                  <div className="mt-6 border-l-2 border-black/15 pl-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/40">
                      Outcome
                    </p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-black/70">
                      {screen.use}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* growth */}
      <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
        <GrowthAnalytics
          metricLabel={project.growth.metricLabel}
          metricValue={project.growth.metricValue}
          story={project.growth.story}
          brandColor={project.brandColor}
        />
      </div>

      {/* bottom CTA */}
      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 md:mt-16 md:px-10">
        <p className="text-[14px] text-black/50">
          Want something like this for your brand?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-85"
        >
          Let&apos;s build
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
