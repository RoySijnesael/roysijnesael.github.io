import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files.
  output: "export",
  // Emit /about/index.html instead of /about.html.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
