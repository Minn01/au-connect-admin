"use client";

import { useEffect } from "react";

import SystemState from "./components/SystemState";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <SystemState kind="error" onRetry={reset} />;
}
