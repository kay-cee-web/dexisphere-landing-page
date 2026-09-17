import { Bot, ChartColumn, Funnel, Radar, Send, SquareKanban, type LucideIcon } from "lucide-react";

export type ProductSlug = "agents" | "prospecting" | "outreach" | "crm" | "funnels" | "analytics";

export type ProductMeta = {
  slug: ProductSlug;
  name: string;
  /** One line for menus and cards. */
  tagline: string;
  Icon: LucideIcon;
  /** Tool names the agent really has for this area (shown as mono chips). */
  tools: string[];
};

/** The six product pages, in menu order. One per agent category in the app. */
export const PRODUCTS: ProductMeta[] = [
  {
    slug: "agents",
    name: "AI Agents",
    tagline: "Describe the job in a sentence. An agent plans it and does it.",
    Icon: Bot,
    tools: ["schedule_automation", "check_connections", "plan_usage"],
  },
  {
    slug: "prospecting",
    name: "Prospecting",
    tagline: "Find businesses worth contacting and file them into clean lists.",
    Icon: Radar,
    tools: ["find_prospects", "find_duplicates", "score_leads"],
  },
  {
    slug: "outreach",
    name: "Outreach",
    tagline: "Email, SMS and WhatsApp campaigns, verified before they send.",
    Icon: Send,
    tools: ["send_email", "send_sms", "send_whatsapp", "verify_emails"],
  },
  {
    slug: "crm",
    name: "CRM",
    tagline: "Leads, deals, tasks and appointments that keep themselves current.",
    Icon: SquareKanban,
    tools: ["create_deal", "move_deal_stage", "book_appointment"],
  },
  {
    slug: "funnels",
    name: "Funnels",
    tagline: "Landing pages, pop-ups and sticky bars built from a brief.",
    Icon: Funnel,
    tools: ["create_funnel", "update_funnel", "list_funnels"],
  },
  {
    slug: "analytics",
    name: "Analytics",
    tagline: "Plain-language reports on campaigns, funnels and pipeline.",
    Icon: ChartColumn,
    tools: ["campaign_performance", "pipeline_summary", "list_campaigns"],
  },
];

export const productBySlug = (slug: ProductSlug) => PRODUCTS.find((product) => product.slug === slug)!;
