import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* The demo sites are photographic. Next generates one optimised variant per
     candidate width on first request, and the default matrix (8 device sizes ×
     8 image sizes) means a cold page can sit on grey placeholders while a
     prospect is looking at it. A narrower ladder still covers phone → desktop
     at 2x and makes cache hits the common case. */
  images: {
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [96, 256, 384],
  },
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
