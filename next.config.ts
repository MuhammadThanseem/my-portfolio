import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 renders this route indicator even in production builds unless
  // disabled — we don't want a Next.js debug badge visible to site visitors.
  devIndicators: false,
};

export default nextConfig;
