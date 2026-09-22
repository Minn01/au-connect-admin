import type { NextConfig } from "next";

const adminBasePath = "/connect-admin";
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
