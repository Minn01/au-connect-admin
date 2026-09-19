import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces a minimal standalone server bundle for the Docker image.
  output: "standalone",
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
