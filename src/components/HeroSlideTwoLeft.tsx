"use client";

export default function HeroSlideTwoLeft() {
  return (
    <div className="absolute left-8 top-1/2 z-30 hidden -translate-y-1/2 lg:left-16 lg:block xl:left-24 2xl:left-28">
      <div className="flex w-[min(34vw,380px)] flex-col items-start text-left">
        <h2 className="whitespace-nowrap text-[clamp(1rem,1.4vw,1.28rem)] font-bold leading-tight tracking-tight text-black">
          Crazy Ideas + Focused Mind = Real Results
        </h2>

        <p className="mt-2 whitespace-nowrap text-[clamp(0.78rem,0.92vw,0.84rem)] font-medium leading-snug text-black/80">
          Crazy Enough To Build What Others Only Imagine.
        </p>

        <p className="mt-3 max-w-[340px] text-[12px] leading-relaxed text-black/55">
          Have an idea or a problem?{" "}
          <span className="font-medium text-black/70">
            Contact me — I build and ship software that works.
          </span>{" "}
          No clear vision yet? We&apos;ll define it and launch something real.
        </p>

        <a
          href="#contact"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-[12px] font-semibold text-white transition-opacity hover:opacity-85"
        >
          Let&apos;s Build Together →
        </a>
      </div>
    </div>
  );
}
