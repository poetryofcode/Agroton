import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // Specifies the project root directory
  },
  // You can add other configuration options here if needed
};

export default nextConfig;
