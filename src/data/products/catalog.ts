import { ChartColumn, Megaphone, UserSearch, Video, Wallet, type LucideIcon } from "lucide-react";

export type ProductSlug = "new-business" | "social-media" | "advertising" | "meetings" | "money";

export type ProductMeta = {
  slug: ProductSlug;
  name: string;
  /** One line for menus and cards. */
  tagline: string;
  Icon: LucideIcon;
  /** Tool names the agent really has for this area (mono chips). Empty when the work runs outside named tools. */
  tools: string[];
};

/** The five jobs Dexisphere takes off your plate, in menu order. One page each. */
export const PRODUCTS: ProductMeta[] = [
  {
    slug: "new-business",
    name: "New business",
    tagline: "Find customers and write to them, from one sentence.",
    Icon: UserSearch,
    tools: ["find_prospects", "score_leads", "send_email", "check_sending_domain"],
  },
  {
    slug: "social-media",
    name: "Social media",
    tagline: "The week's posts drafted in your voice, waiting for your yes.",
    Icon: Megaphone,
    tools: [],
  },
  {
    slug: "advertising",
    name: "Advertising",
    tagline: "Watch every ad account without opening an ads manager.",
    Icon: ChartColumn,
    tools: [],
  },
  {
    slug: "meetings",
    name: "Meetings",
    tagline: "It sits in your calls and remembers what you promised.",
    Icon: Video,
    tools: ["create_task", "list_calendar_events"],
  },
  {
    slug: "money",
    name: "Money",
    tagline: "Read-only on your payments. It sees your sales, never moves them.",
    Icon: Wallet,
    tools: ["schedule_automation"],
  },
];

export const productBySlug = (slug: ProductSlug) => PRODUCTS.find((product) => product.slug === slug)!;
