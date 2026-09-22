"use client";

import { useEffect, useState } from "react";

import { ADMIN_BASE_PATH, BASE_API_PATH, publicAdminPath } from "@/constants";

function isHttpUrl(value: string) {
  return value.startsWith("http://") || value.startsWith("https://") || value.startsWith("//");
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
    !raw
      ? fallback
      : isHttpUrl(raw)
        ? raw
        : isLocalPath(raw)
          ? raw === ADMIN_BASE_PATH || raw.startsWith(`${ADMIN_BASE_PATH}/`)
            ? raw
            : publicAdminPath(raw.startsWith("/public/") ? raw.slice("/public".length) : raw)
          : null;

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
