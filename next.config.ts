import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* The site used to publish price tiers and to name its products after rings.
     Both are gone; the old URLs are kept pointing at what replaced them. */
  async redirects() {
    return [
      { source: "/pricing", destination: "/contact", permanent: true },
      { source: "/products/sites", destination: "/products/websites", permanent: true },
      { source: "/products/flow", destination: "/products/websites", permanent: true },
    ];
  },
};

export default nextConfig;
