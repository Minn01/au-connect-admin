import { publicAdminPath } from "@/constants";

const PRODUCTION_ORIGIN = "https://life.au.edu";

export function adminPublicOrigin(request: Request) {
  return process.env.NODE_ENV === "production"
    ? PRODUCTION_ORIGIN
    : new URL(request.url).origin;
}

export function adminPublicUrl(path: string, request: Request) {
  return new URL(publicAdminPath(path), adminPublicOrigin(request));
}
