"use client";

import Link from "next/link";
import Image from "next/image";
import { RefreshCw } from "lucide-react";

type SystemStateProps = {
  kind: "not-found" | "error" | "global-error";
  onRetry?: () => void;
};

const content = {
  "not-found": {
    eyebrow: "404 · Page not found",
    title: "This page wandered off campus.",
    description:
      "The address may be incorrect, or the page may have been moved or removed.",
  },
  error: {
    eyebrow: "Something went wrong",
    title: "We couldn’t load this page.",
    description:
      "An unexpected error interrupted the request. Try again, or return to the dashboard.",
  },
  "global-error": {
    eyebrow: "System error",
    title: "The admin portal hit a problem.",
    description:
      "The application couldn’t start correctly. Reload the portal, or try again in a moment.",
  },
} as const;

export default function SystemState({ kind, onRetry }: SystemStateProps) {
  const state = content[kind];
  const isNotFound = kind === "not-found";
  const errorCode = isNotFound ? ["4", "4"] : ["5", "0"];

  return (
    <div className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-[#f8e9eb] px-5 py-[clamp(1rem,3vh,2.25rem)] text-[#171112] sm:px-8 lg:px-12">
      <header className="relative z-10 flex items-center gap-3 self-start">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white sm:h-12 sm:w-12">
          <Image
            src="/au-connect-logo.png"
            alt="AU Connect"
            width={34}
            height={34}
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-black tracking-[0.13em] sm:text-base">AU CONNECT</span>
          <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-red-700 sm:text-[10px]">
            Admin portal
          </span>
        </span>
      </header>

      <main className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col items-center justify-center py-[clamp(0.75rem,2.5vh,2.5rem)] text-center">
        <div
          className="relative flex h-[clamp(6rem,26vh,23rem)] shrink items-center justify-center font-[Georgia,serif] text-[clamp(6rem,min(29vw,26vh),24rem)] leading-none tracking-[-0.13em] text-[#171112]"
          aria-hidden="true"
        >
          <span>{errorCode[0]}</span>
          <span className="relative mx-[0.02em] inline-grid aspect-square h-[0.72em] place-items-center rounded-full border-[clamp(12px,2.5vw,34px)] border-white bg-red-600 shadow-[inset_0_0_0_clamp(5px,0.8vw,12px)_#f8e9eb]">
            <span className="absolute left-[17%] top-[20%] h-[18%] w-[18%] rounded-full bg-[#171112]" />
            <span className="absolute bottom-[19%] right-[16%] h-[8%] w-[8%] rounded-full bg-white" />
          </span>
          <span>{errorCode[1]}</span>
        </div>

        <p className="mt-[clamp(0.5rem,2vh,1.5rem)] text-[10px] font-bold uppercase tracking-[0.3em] text-red-700 sm:text-xs">
          {state.eyebrow}
        </p>
        <h1 className="mt-[clamp(0.4rem,1.2vh,0.75rem)] max-w-4xl font-[Georgia,serif] text-[clamp(1.75rem,min(5vw,6vh),4.75rem)] font-normal leading-[1.02] tracking-[-0.045em]">
          {state.title}
        </h1>
        <p className="mt-[clamp(0.5rem,1.5vh,1rem)] max-w-lg text-sm leading-5 text-[#695b5e] sm:text-base sm:leading-6">
          {state.description}
        </p>

        <div className="mt-[clamp(0.75rem,2.5vh,2rem)] flex w-full max-w-sm flex-col justify-center gap-2 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3">
          {!isNotFound && (
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#171112] bg-transparent px-7 py-3 text-sm font-semibold transition hover:bg-white/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              Try again
            </button>
          )}

          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#171112] px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
          >
            Take me to the dashboard
          </Link>
        </div>

        <p className="mt-[clamp(0.5rem,2vh,1.5rem)] text-[10px] uppercase tracking-[0.18em] text-[#9b8589] sm:text-xs">
          If this keeps happening, contact your system administrator.
        </p>
      </main>
    </div>
  );
}
