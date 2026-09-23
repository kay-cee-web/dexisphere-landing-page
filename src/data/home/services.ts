import { Activity, Bot, DatabaseZap, Inbox, Workflow, type LucideIcon } from "lucide-react";
import { ROUTES } from "@/data/navigation";

export type Service = { title: string; description: string; href: string; Icon: LucideIcon };

/** The "What we do" carousel on the home page, after AIFusionX's services row. */
export const SERVICES: Service[] = [
  {
    title: "AI Workflow Automation",
    description: "Turn repeat jobs like prospecting, follow-ups and weekly reports into agent tasks that run on a schedule.",
    href: ROUTES.product("agents"),
    Icon: Workflow,
  },
  {
    title: "Support Triage & Ticketing",
    description: "Agents read incoming replies and messages, sort them by intent and file a task or deal for the right person.",
    href: ROUTES.product("crm"),
    Icon: Inbox,
  },
  {
    title: "AI Tools & Agents",
    description: "Agents with 40+ real tools that you brief in plain language, on the web, WhatsApp or Telegram.",
    href: ROUTES.product("agents"),
    Icon: Bot,
  },
  {
    title: "Data Orchestration",
    description: "Find, dedupe, score and verify leads, then sync clean lists to Mailchimp, Brevo, Klaviyo and more.",
    href: ROUTES.integrations,
    Icon: DatabaseZap,
  },
  {
    title: "Support & Monitoring",
    description: "Work receipts for every turn, connection checks and plain-language reports, so you always know what ran.",
    href: ROUTES.product("analytics"),
    Icon: Activity,
  },
];
