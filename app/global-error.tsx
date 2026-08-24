"use client";

import { useEffect } from "react";

import SystemState from "./components/SystemState";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="flex min-h-screen">
          <SystemState kind="global-error" onRetry={reset} />
        </main>
      </body>
    </html>
  );
}
