import type { Metadata } from "next";
import { SITE_NAME } from "./config";

/** Shared SEO copy: root metadata, the share image and the home page's JSON-LD. */
export const SITE_TAGLINE = "AI agents that do your marketing and sales busywork";

export const SITE_TITLE = `${SITE_NAME} · ${SITE_TAGLINE}`;

export const SITE_DESCRIPTION =
  "Dexisphere AI agents automate your workflows: they find prospects, run email, SMS and WhatsApp outreach, triage incoming messages, keep your CRM and data clean, and show a receipt for every change. Free forever plan.";

/**
 * A page that sets `openGraph` replaces the root's whole object, so spread this
 * in to keep the site name and locale.
 */
export const OPEN_GRAPH_BASE = { siteName: SITE_NAME, type: "website", locale: "en_US" } as const;

/**
 * app/opengraph-image.tsx, for pages that set their own `openGraph` (which drops
 * the inherited image).
 */
export const SHARE_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME}: ${SITE_TAGLINE}`,
};

/**
 * A page's metadata plus its canonical URL, og:url and the share image. Paths
 * resolve against `metadataBase` (the www domain). og:title/description still
 * fall back to the page's own title and description.
 */
export function pageMeta(path: string, meta: Metadata): Metadata {
  return {
    ...meta,
    alternates: { ...meta.alternates, canonical: path },
    openGraph: { ...OPEN_GRAPH_BASE, url: path, images: SHARE_IMAGE, ...meta.openGraph },
  };
}

export const SITE_KEYWORDS = [
  "AI agents",
  "AI sales agent",
  "AI marketing automation",
  "AI workflow automation",
  "lead generation",
  "prospecting tool",
  "cold email outreach",
  "WhatsApp marketing",
  "SMS marketing",
  "CRM automation",
  "support triage",
  "data orchestration",
  "funnel builder",
  "Dexisphere",
];
