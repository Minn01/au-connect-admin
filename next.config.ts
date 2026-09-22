import type { NextConfig } from "next";

const adminBasePath = "/connect-admin";
const rootRedirectOrigin =
  process.env.NODE_ENV === "production"
    ? "https://life.au.edu"
    : `http://localhost:${process.env.PORT || "3000"}`;
if (
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_BASE_PATH !== adminBasePath
) {
  throw new Error(`Production builds require NEXT_PUBLIC_BASE_PATH=${adminBasePath}`);
}

const nextConfig: NextConfig = {
  // Produces a minimal standalone server bundle for the Docker image.
  output: "standalone",
  basePath: adminBasePath,
  async redirects() {
    return [
      {
        source: "/",
        destination: `${rootRedirectOrigin}${adminBasePath}`,
        basePath: false,
        permanent: false,
      },
      ...(process.env.NODE_ENV === "production"
        ? []
        : [{
            source: "/connect",
            destination: `${rootRedirectOrigin}${adminBasePath}`,
            basePath: false as const,
            permanent: false,
          }]),
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.blob.core.windows.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
