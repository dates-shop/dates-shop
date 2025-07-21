import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // allow builds to complete even if there are lint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // allow builds to complete even if there are type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig
