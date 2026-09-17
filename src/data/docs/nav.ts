import {
  BookOpen, Bot, Coins, Hand, KeyRound, LifeBuoy, MessageCircle, Plug, Receipt, Rocket, type LucideIcon,
} from "lucide-react";
import { ROUTES } from "@/data/navigation";
import type { DocGroup, DocSlug } from "./types";

export type DocNavItem = { slug: DocSlug; label: string; Icon: LucideIcon };

/**
 * Sidebar order. It also sets previous/next order, so keep it in reading order.
 * Client components import this file, so it holds labels only, never page content.
 */
export const DOCS_NAV: { group: DocGroup; items: DocNavItem[] }[] = [
  {
    group: "Getting started",
    items: [
      { slug: "introduction", label: "Introduction", Icon: BookOpen },
      { slug: "quickstart", label: "Quickstart", Icon: Rocket },
      { slug: "account", label: "Account", Icon: KeyRound },
    ],
  },
  {
    group: "Using agents",
    items: [
      { slug: "agents", label: "Agents", Icon: Bot },
      { slug: "work-receipts", label: "Work receipts", Icon: Receipt },
      { slug: "channels", label: "Channels", Icon: MessageCircle },
      { slug: "approvals", label: "Approvals", Icon: Hand },
    ],
  },
  {
    group: "Platform",
    items: [
      { slug: "connectors", label: "Connectors", Icon: Plug },
      { slug: "tokens-and-limits", label: "Tokens and limits", Icon: Coins },
      { slug: "troubleshooting", label: "Troubleshooting", Icon: LifeBuoy },
    ],
  },
];

export const DOC_ORDER: DocSlug[] = DOCS_NAV.flatMap((section) => section.items.map((item) => item.slug));

/** The introduction lives at /docs itself. */
export const docHref = (slug: DocSlug) => (slug === "introduction" ? ROUTES.docs : ROUTES.doc(slug));
