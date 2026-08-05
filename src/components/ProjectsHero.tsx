"use client";

import projectHero from "@/assets/Project.png";

export default function ProjectsHero() {
  return (
    <section
      id="projects-hero"
      className="relative z-20 flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#f5f5f5] px-4 pb-24 pt-4 md:px-8"
      aria-label="Projects showcase"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={projectHero.src}
        alt="Digital solutions across laptop, phone, and tablet"
        className="max-h-full max-w-full scale-[1.12] object-contain md:scale-[1.18]"
      />

      <a
        href="#selected-works"
        className="absolute bottom-5 right-5 z-20 flex items-center gap-2.5 rounded-full border border-black/12 bg-white px-3.5 py-2.5 text-black shadow-[0_8px_28px_rgba(0,0,0,0.14)] transition-colors hover:bg-black hover:text-white md:bottom-6 md:right-8"
        aria-label="Scroll to selected works"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
          Scroll
        </span>
        <span className="flex h-7 w-7 animate-bounce items-center justify-center rounded-full bg-black/5">
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </span>
      </a>
    </section>
  );
}
