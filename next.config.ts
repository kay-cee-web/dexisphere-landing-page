import type { NextConfig } from "next";

/** The six old product pages, folded into the five jobs on 2026-10-03. */
const RETIRED_PRODUCTS: [string, string][] = [
  ["/agents", "/features"],
  ["/prospecting", "/new-business"],
  ["/outreach", "/new-business"],
  ["/crm", "/new-business"],
  ["/funnels", "/new-business"],
  ["/analytics", "/new-business"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return RETIRED_PRODUCTS.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
