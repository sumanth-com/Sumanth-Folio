import type { ReactNode } from "react";
import PageAtmosphere from "@/components/PageAtmosphere";

export default function SectionShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-[#ececea] text-black">
      <PageAtmosphere />
      <div className="relative z-10">{children}</div>
    </main>
  );
}
