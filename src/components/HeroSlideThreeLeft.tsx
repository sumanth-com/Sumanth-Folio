"use client";

const strengths = [
  "Products",
  "Customers",
  "AI",
  "Business",
  "Execution",
];

export default function HeroSlideThreeLeft() {
  return (
    <div className="absolute left-8 top-1/2 z-10 hidden -translate-y-1/2 lg:left-16 lg:block xl:left-24 2xl:left-28">
      <div className="flex w-[min(34vw,380px)] flex-col items-start text-left">
        <h2 className="whitespace-nowrap text-[clamp(1rem,1.4vw,1.28rem)] font-bold leading-tight tracking-tight text-black">
          The Future Doesn&apos;t Need More{" "}
          <span className="text-violet-600">Feature Factories.</span>
        </h2>

        <h2 className="mt-2 whitespace-nowrap text-[clamp(1rem,1.4vw,1.28rem)] font-bold leading-tight tracking-tight text-black">
          It needs{" "}
          <span className="text-violet-600">product architects.</span>
        </h2>

        <p className="mt-3 text-[12px] font-medium text-black/60">
          People who understand:
        </p>

        <ul className="mt-1.5 space-y-1">
          {strengths.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[12px] leading-relaxed text-black/55"
            >
              <span
                className="h-1 w-1 shrink-0 rounded-full bg-violet-500"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-3 text-[clamp(0.78rem,0.92vw,0.84rem)] font-semibold leading-snug text-violet-600">
          That&apos;s where I thrive.
        </p>

        <a
          href="#contact"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-[12px] font-semibold text-white transition-opacity hover:opacity-85"
        >
          Let&apos;s Ship Your Product →
        </a>
      </div>
    </div>
  );
}
