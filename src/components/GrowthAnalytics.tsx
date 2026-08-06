"use client";

import { motion } from "framer-motion";
import { useId } from "react";

type GrowthAnalyticsProps = {
  metricLabel: string;
  metricValue: string;
  story: string;
  brandColor: string;
};

function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const n = parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function lighten(hex: string, amount = 0.28) {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const n = parseInt(full, 16);
  const r = Math.min(255, Math.round(((n >> 16) & 255) + (255 - ((n >> 16) & 255)) * amount));
  const g = Math.min(255, Math.round(((n >> 8) & 255) + (255 - ((n >> 8) & 255)) * amount));
  const b = Math.min(255, Math.round((n & 255) + (255 - (n & 255)) * amount));
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

export default function GrowthAnalytics({
  metricLabel,
  metricValue,
  story,
  brandColor,
}: GrowthAnalyticsProps) {
  const uid = useId().replace(/:/g, "");
  const strokeId = `growthStroke-${uid}`;
  const glowId = `growthGlow-${uid}`;
  const bright = lighten(brandColor, 0.35);

  return (
    <section className="relative overflow-hidden rounded-[28px] px-4 py-14 md:px-8 md:py-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${hexToRgba(brandColor, 0.22)} 0%, #07090d 55%, #050608 100%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
        <div>
          <span className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[12px] font-medium text-white/60">
            Growth
          </span>
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-tight text-white">
            How it&apos;s growing
          </h2>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/50 md:text-[15px]">
            {story}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[340px]"
        >
          <div
            className="pointer-events-none absolute -inset-[1px] rounded-[26px] opacity-90"
            style={{
              background: `linear-gradient(180deg, ${hexToRgba(brandColor, 0.55)} 0%, rgba(20,20,20,0.15) 40%, ${hexToRgba(brandColor, 0.45)} 100%)`,
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -inset-3 rounded-[30px] opacity-50"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${hexToRgba(brandColor, 0.4)}, transparent 60%), radial-gradient(ellipse at 50% 100%, ${hexToRgba(brandColor, 0.32)}, transparent 55%)`,
              filter: "blur(18px)",
            }}
            aria-hidden
          />

          <div
            className="relative overflow-hidden rounded-[24px] border border-white/10 px-5 pb-7 pt-5"
            style={{
              background:
                "linear-gradient(165deg, rgba(18,18,22,0.95) 0%, rgba(8,8,10,0.98) 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.08), 0 20px 50px rgba(0,0,0,0.45)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-[0.2]"
              style={{
                backgroundImage: `linear-gradient(${hexToRgba(brandColor, 0.35)} 1px, transparent 1px), linear-gradient(90deg, ${hexToRgba(brandColor, 0.35)} 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
                maskImage: "linear-gradient(to top, black 20%, transparent 95%)",
              }}
              aria-hidden
            />

            <div className="relative flex justify-end">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70">
                Monthly
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M3 4.5 6 7.5 9 4.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            <div className="relative mx-auto mt-5 h-[132px] w-full max-w-[260px]">
              <svg
                viewBox="0 0 260 132"
                className="h-full w-full overflow-visible"
                aria-hidden
              >
                <defs>
                  <linearGradient id={strokeId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={brandColor} stopOpacity="0.35" />
                    <stop offset="45%" stopColor={bright} stopOpacity="1" />
                    <stop offset="100%" stopColor={brandColor} stopOpacity="0.4" />
                  </linearGradient>
                  <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <motion.path
                  d="M8 108 C 48 102, 72 96, 98 78 C 118 64, 128 28, 142 22 C 156 16, 168 48, 188 72 C 208 96, 228 104, 252 108"
                  fill="none"
                  stroke={`url(#${strokeId})`}
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter={`url(#${glowId})`}
                  initial={{ pathLength: 0, opacity: 0.45 }}
                  animate={{
                    pathLength: [0, 1, 1, 0],
                    opacity: [0.45, 1, 1, 0.45],
                  }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.45, 0.7, 1],
                  }}
                />
                <motion.circle
                  cx="142"
                  cy="22"
                  r="6"
                  fill={bright}
                  filter={`url(#${glowId})`}
                  animate={{
                    scale: [0.85, 1.2, 0.85],
                    opacity: [0.65, 1, 0.65],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx="142"
                  cy="22"
                  r="11"
                  fill={hexToRgba(brandColor, 0.22)}
                  animate={{
                    scale: [1, 1.45, 1],
                    opacity: [0.35, 0.15, 0.35],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </div>

            <div className="relative mt-2 text-center">
              <p className="text-[13px] font-medium text-white/75">{metricLabel}</p>
              <div className="mt-1 flex items-start justify-center gap-1.5">
                <p className="text-[42px] font-bold leading-none tracking-tight text-white md:text-[46px]">
                  {metricValue}
                </p>
                <span className="mt-2 inline-flex" style={{ color: bright }} aria-hidden>
                  <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" fill="currentColor">
                    <path d="M6 1.5 10.5 8H1.5L6 1.5Z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
