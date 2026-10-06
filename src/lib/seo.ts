import type { Metadata } from "next";
import { SITE_NAME } from "./config";

/** Shared SEO copy: root metadata, the share image and the home page's JSON-LD. */
export const SITE_TAGLINE = "The AI agent that runs the parts of your business you never get to";

export const SITE_TITLE = `${SITE_NAME} · ${SITE_TAGLINE}`;

export const SITE_DESCRIPTION =
  "An AI agent that finds your customers, runs your outreach, drafts your content, watches your ads, sits in your meetings and watches your money, then messages you on WhatsApp when something actually needs you. Free forever plan.";

/**
 * A page that sets `openGraph` replaces the root's whole object, so spread this
 * in to keep the site name and locale.
 */
export const OPEN_GRAPH_BASE = { siteName: SITE_NAME, type: "website", locale: "en_US" } as const;

/**
 * public/share.jpg (a 1200x630 copy of public/image.png, kept under 300 KB so
 * WhatsApp shows it), the share image for every route. Pages that set their own
 * `openGraph` drop the inherited one, so pageMeta adds it back.
 */
export const SHARE_IMAGE = {
  url: "/share.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
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
  "AI meeting notetaker",
  "payment alerts",
  "social media content",
  "lead generation",
  "prospecting tool",
  "cold email outreach",
  "WhatsApp marketing",
  "SMS marketing",
  "CRM automation",
  "small business AI assistant",
  "Dexisphere",
];
