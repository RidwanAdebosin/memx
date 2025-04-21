import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "i.ytimg.com",
      "res.cloudinary.com",
      "example.com",
      "pbs.twimg.com",
    ],
  },
};

export default nextConfig;
