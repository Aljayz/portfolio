import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Add the line below. Use the EXACT name of your new repository.
  basePath: "", 
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
    ],
  },
};

export default nextConfig;