import { ADMIN_BASE_PATH, publicAdminPath } from "@/constants";

function configuredAdminUrl() {
  const value = process.env.ADMIN_PUBLIC_URL?.trim();
  if (!value) return null;

  const url = new URL(value);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.pathname.replace(/\/+$/, "") !== ADMIN_BASE_PATH ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error(`ADMIN_PUBLIC_URL must be an HTTP(S) URL ending in ${ADMIN_BASE_PATH}`);
  }

  return url;
}

function adminBaseUrl(request: Request) {
  const configured = configuredAdminUrl();
  if (configured) return configured;

  // Next may expose its internal localhost URL in production behind a proxy.
  // Use the public Host and forwarded scheme when a canonical URL is not set.
  const requestUrl = new URL(request.url);
  const host = request.headers.get("host");
  const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0].trim();
  const protocol = forwardedProto === "http" || forwardedProto === "https"
    ? `${forwardedProto}:`
    : requestUrl.protocol;
  let origin = requestUrl.origin;

  if (host) {
    try {
      const publicUrl = new URL(`${protocol}//${host}`);
      if (publicUrl.host === host && publicUrl.pathname === "/") {
        origin = publicUrl.origin;
      }
    } catch {
      // Fall back to the URL supplied by Next for malformed Host headers.
    }
  }

  return new URL(publicAdminPath("/"), origin);
}

export function adminPublicOrigin(request: Request) {
  return adminBaseUrl(request).origin;
}

export function adminPublicUrl(path: string, request: Request) {
  return new URL(publicAdminPath(path), adminBaseUrl(request).origin);
}
