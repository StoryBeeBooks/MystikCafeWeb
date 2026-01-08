import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
