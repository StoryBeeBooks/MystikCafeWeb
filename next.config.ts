import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/MystikCafeWeb',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.k12path.com',
        pathname: '/MystikCafe/**',
      },
    ],
  },
};

export default nextConfig;
