import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Case study images are still hosted on Google Drive; Next's image
    // optimiser fetches them once, resizes them and serves them from the CDN.
    remotePatterns: [
      { protocol: "https", hostname: "drive.google.com", pathname: "/thumbnail" },
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "www.doranikolaidou.gr" },
      { protocol: "https", hostname: "www.leclatbeaute.gr" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
