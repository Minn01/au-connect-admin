"use client";

import { useEffect, useState } from "react";

import { BASE_API_PATH } from "@/constants";

function isHttpUrl(value: string) {
  return value.startsWith("http://") || value.startsWith("https://");
}

function isLocalPath(value: string) {
  return value.startsWith("/");
}

export function useResolvedAdminMediaUrl(
  value: string | null | undefined,
  fallback = ""
) {
  const [url, setUrl] = useState(fallback);
  const raw = (value ?? "").trim();
  const immediate =
    !raw ? fallback : isLocalPath(raw) || isHttpUrl(raw) ? raw : null;

  useEffect(() => {
    let cancelled = false;

    if (immediate !== null) {
      return;
    }

    fetch(`${BASE_API_PATH}/fetch-media?blobName=${encodeURIComponent(raw)}`)
      .then((res) => res.json().then((json) => ({ ok: res.ok, json })))
      .then(({ ok, json }) => {
        if (!cancelled) {
          setUrl(ok && json?.url ? json.url : fallback);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setUrl(fallback);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [fallback, immediate, raw]);

  return immediate ?? url;
}
