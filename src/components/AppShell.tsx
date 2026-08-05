"use client";

import Dock, { PageTransition } from "@/components/Dock";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageTransition>{children}</PageTransition>
      <Dock />
    </>
  );
}
