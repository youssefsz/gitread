import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // When exporting, Next.js will use '/' as the path prefix by default
  // If your site is not hosted at the root of the domain, you can specify a basePath
  // basePath: '/your-base-path',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Disable server-side features when exporting
  trailingSlash: true,
};

export default nextConfig;
