"use client";

import { useEffect, useState } from "react";

const FULL_TEXT =
  "What if your best idea never stayed 'just an idea'?\nYou see the problem — but who actually builds it?\nNo clear plan yet? What would you create tomorrow?";

const FILE_NAME = "what-if.ts";

function useTypewriter(
  text: string,
  typeMs = 42,
  pauseMs = 4000,
  deleteMs = 20
) {
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplay(text.slice(0, index + 1));
        setIndex((i) => i + 1);
      }, typeMs);
    } else if (!deleting && index >= text.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => {
        setIndex((i) => i - 1);
        setDisplay(text.slice(0, index - 1));
      }, deleteMs);
    } else if (deleting && index === 0) {
      setDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [text, index, deleting, typeMs, pauseMs, deleteMs]);

  return { display, complete: !deleting && index >= text.length };
}

export default function HeroMacTerminal() {
  const { display: typed, complete } = useTypewriter(FULL_TEXT);

  return (
    <div className="w-[min(34vw,380px)] min-w-[300px] max-w-[380px] shrink-0">
      <div className="w-full overflow-hidden rounded-xl border border-black/10 bg-[#f5f5f7] shadow-[0_16px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)]">
        <div className="flex h-9 shrink-0 items-center gap-2 border-b border-black/[0.06] bg-[#ececee] px-3">
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
          </div>
          <span className="ml-auto truncate font-mono text-[10px] text-black/45">
            {FILE_NAME}
          </span>
        </div>

        <div className="flex h-[188px] w-full flex-col bg-[#1d1d1f] px-4 py-4 text-left">
          <div className="mb-3 shrink-0 font-mono text-[10px] leading-none">
            <span className="text-violet-400">export const </span>
            <span className="text-sky-300">bigQuestions</span>
            <span className="text-white/50"> = </span>
            <span className="text-emerald-400">&quot;</span>
          </div>

          <div className="h-[96px] w-full overflow-hidden">
            <div className="whitespace-pre-wrap break-words font-mono text-[11px] leading-relaxed text-emerald-300/95">
              {typed}
              <span className="ml-px inline-block h-[13px] w-[6px] animate-pulse bg-violet-400 align-middle" />
              {complete && (
                <span className="text-emerald-400/80">&quot;;</span>
              )}
            </div>
          </div>

          <div className="mt-3 flex shrink-0 items-center justify-end border-t border-white/[0.06] pt-2.5">
            <a
              href="#contact"
              className="rounded-md border border-violet-500/30 bg-violet-500/15 px-3 py-1.5 font-mono text-[10px] font-semibold text-violet-300 transition-colors hover:bg-violet-500/25 hover:text-violet-200"
            >
              Got Questions? Let&apos;s Talk →
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-1.5 h-1.5 w-[92%] rounded-b-lg bg-gradient-to-b from-[#d1d1d6] to-[#e8e8ed] shadow-sm" />
      <div className="mx-auto h-1 w-[38%] rounded-full bg-[#c8c8cd]" />
    </div>
  );
}
