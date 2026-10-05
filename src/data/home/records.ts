import { MailOpen, MessageSquare, MousePointerClick, Send, type LucideIcon } from "lucide-react";

/** Sample figures for the Records preview (illustrative, labelled "Example workspace" on the page). */
export const RECORD_TABS = ["Lists", "Leads", "Deals", "Tasks", "Campaigns", "Funnels", "Analytics"];

export type RecordKpi = {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
  change: string;
  Icon: LucideIcon;
  /** Daily values for the sparkline, oldest first. Any scale. */
  trend: number[];
};

export const RECORD_KPIS: RecordKpi[] = [
  { label: "Emails sent", value: 1284, change: "+18%", Icon: Send, trend: [31, 40, 36, 52, 47, 60, 58, 71] },
  { label: "Open rate", value: 41.2, suffix: "%", decimals: 1, change: "+3.1 pts", Icon: MailOpen, trend: [36, 37, 35, 38, 39, 38, 40, 41] },
  { label: "SMS delivered", value: 96, suffix: "%", change: "+1.4 pts", Icon: MessageSquare, trend: [93, 94, 94, 95, 94, 95, 96, 96] },
  { label: "Funnel views", value: 3902, change: "+22%", Icon: MousePointerClick, trend: [380, 420, 390, 470, 510, 490, 560, 610] },
];

/** Relative heights (0–100) for sends per day over two weeks. */
export const RECORD_BARS = [34, 52, 41, 68, 59, 22, 18, 47, 72, 64, 81, 76, 30, 26];

export const RECORD_ROWS: { name: string; channel: string; status: "Sent" | "Scheduled" | "Draft"; recipients: number }[] = [
  { name: "Austin dentists intro", channel: "Email", status: "Sent", recipients: 35 },
  { name: "Roofers follow-up", channel: "SMS", status: "Scheduled", recipients: 112 },
  { name: "Open house reminder", channel: "WhatsApp", status: "Sent", recipients: 64 },
  { name: "Q4 agency offer", channel: "Email", status: "Draft", recipients: 240 },
];

export const RECORD_POINTS = [
  { title: "Read-only by design", body: "Records shows what agents created, so you can check the work without clicking through every screen." },
  { title: "Campaign analytics", body: "Open, click and delivery rates across email, SMS and WhatsApp over 7, 30 or 90 days." },
  { title: "Funnel stats", body: "Views, clicks, unique visitors and click-through rate, with events by country and device." },
];
