"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECT_CASES } from "@/data/projects";

function FolderProof({
  project,
  index,
}: {
  project: (typeof PROJECT_CASES)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-[280px]"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block w-full outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-4 focus-visible:ring-offset-[#ececea]"
        aria-label={`View proof — ${project.title}`}
      >
        {/* tab */}
        <div
          className="relative ml-2 h-6 w-[42%] rounded-t-[12px]"
          style={{
            background: "linear-gradient(180deg, #555 0%, #333 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
          }}
        />

        {/* folder body */}
        <div
          className="relative h-[340px] w-full rounded-[26px] rounded-tl-md sm:h-[360px]"
          style={{
            background: "linear-gradient(160deg, #3a3a3a 0%, #1a1a1a 55%, #0e0e0e 100%)",
            boxShadow:
              "0 24px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[26px] rounded-tl-md">
            <div
              className="absolute inset-x-[10px] top-[10px] bottom-[40%] rounded-[18px]"
              style={{
                background: "linear-gradient(180deg, #050505 0%, #171717 100%)",
                boxShadow: "inset 0 10px 24px rgba(0,0,0,0.55)",
              }}
            />

            <div className="absolute inset-x-[14px] top-[14px] bottom-[38%] overflow-hidden rounded-[14px] bg-[#0a0a0a] shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-5 group-focus-visible:-translate-y-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.folderCover.src}
                alt=""
                className="h-full w-full object-contain object-center"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between bg-gradient-to-t from-black/70 via-black/25 to-transparent px-3 pb-3 pt-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-black">
                  View proof
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </span>
              </div>
            </div>

            <div
              className="absolute inset-x-0 bottom-0 h-[44%] rounded-b-[26px] transition-[clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] group-hover:[clip-path:polygon(0_0,calc(100%-118px)_0,100%_118px,100%_100%,0_100%)] group-focus-visible:[clip-path:polygon(0_0,calc(100%-118px)_0,100%_118px,100%_100%,0_100%)]"
              style={{
                background:
                  "linear-gradient(165deg, #4a4a4a 0%, #2a2a2a 42%, #141414 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.14)",
              }}
            >
              <div className="absolute inset-0 rounded-b-[26px] bg-[radial-gradient(ellipse_at_18%_0%,rgba(255,255,255,0.14)_0%,transparent_52%)]" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-5 pb-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {project.tag}
              </p>
              <div className="mt-1 flex items-end justify-between gap-2">
                <div>
                  <h3 className="text-[17px] font-bold tracking-tight text-white md:text-[18px]">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] text-white/50">{project.subtitle}</p>
                </div>
                <span className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-transform duration-300 group-hover:rotate-45 group-focus-visible:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute right-0 top-[56%] z-20 h-[118px] w-[118px] origin-top-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:rotate-[58deg] group-focus-visible:translate-x-1 group-focus-visible:translate-y-1 group-focus-visible:rotate-[58deg]">
            <div className="absolute inset-0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}>
              <div
                className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                  background:
                    "linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 50%, #141414 100%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                  background:
                    "linear-gradient(225deg, #f0f0f0 0%, #b8b8b8 40%, #7e7e7e 100%)",
                  boxShadow: "0 16px 32px rgba(0,0,0,0.4)",
                }}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectProofs() {
  return (
    <section
      id="selected-works"
      className="relative z-20 px-4 py-20 pb-16 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center md:mb-14">
          <span className="mb-3 inline-flex rounded-full border border-black/10 bg-white px-3.5 py-1 text-[12px] font-medium text-black/65">
            Selected works
          </span>
          <h2 className="whitespace-nowrap text-[clamp(1.35rem,3.2vw,2.5rem)] font-bold tracking-tight text-black">
            Selected. Shipped. Proven.
          </h2>
          <p className="mx-auto mt-3 max-w-3xl whitespace-nowrap text-[12px] text-black/50 md:text-[14px]">
            These aren&apos;t concept decks — they&apos;re live products. Open a folder for the full operating story.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PROJECT_CASES.map((project, index) => (
            <FolderProof key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
