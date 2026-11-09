import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  serverExternalPackages: ["@opennextjs/cloudflare"],
  async redirects() {
    // Google crawled a false /$ URL and reports it as a 404. It was never a real page.
    return [{ source: "/$", destination: "/", permanent: true }];
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
