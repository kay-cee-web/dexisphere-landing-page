import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/config";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_TITLE,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f8fc",
    theme_color: "#5b5bf7",
    icons: [
      { src: "/image/dexisphere-icon100.png", sizes: "100x100", type: "image/png" },
      { src: "/image/dexisphere-icon512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
