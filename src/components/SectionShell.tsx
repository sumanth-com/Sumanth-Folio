import type { ReactNode } from "react";

export default function SectionShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-[#ececea] text-black">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </main>
  );
}
