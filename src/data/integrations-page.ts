import { Calendar, MapPin, MessageCircle, MessageSquare, Send, AtSign, type LucideIcon } from "lucide-react";
import type { Integration } from "@/data/integrations";

/** Auth labels as pills: how each connector is set up. */
export const AUTH_TONES: Record<Integration["auth"], "accent" | "iris" | "good" | "neutral"> = {
  OAuth: "accent",
  "API key": "iris",
  "Pairing code": "good",
  "In the Macrid app": "neutral",
};

export type ConnectorStatus = "ready" | "shared" | "connect";

/** The demo connectors panel. Sample rows; statuses mirror the app's setup states. */
export const PANEL_ROWS: { name: string; detail: string; Icon: LucideIcon; status: ConnectorStatus }[] = [
  { name: "Gmail", detail: "sam@northwind.co", Icon: Send, status: "ready" },
  { name: "Google Calendar", detail: "2 calendars", Icon: Calendar, status: "ready" },
  { name: "Google Places", detail: "Shared key · daily limit", Icon: MapPin, status: "shared" },
  { name: "SMS", detail: "Shared sender", Icon: MessageSquare, status: "shared" },
  { name: "WhatsApp Business", detail: "Set up in the Macrid app", Icon: MessageCircle, status: "connect" },
  { name: "Mailchimp", detail: "API key", Icon: AtSign, status: "connect" },
];

export const PANEL_AGENTS = ["Lead finder", "Follow-ups", "Pipeline tidy"];

export const WORKSPACE_POINTS: { title: string; description: string }[] = [
  {
    title: "Connect once per workspace",
    description: "Gmail, Twilio or a Places key you add is there for every agent you create, today and later.",
  },
  {
    title: "Shared defaults to start",
    description:
      "SMS goes out on a shared sender and prospect search runs on a shared Places key with a daily limit, until you add your own.",
  },
  {
    title: "Agents check before they act",
    description:
      "An agent can look at what's connected before a task, and the composer warns you when a task needs something you haven't set up.",
  },
];

export const CHANNEL_STEPS = [
  "Open your agent's settings and pick WhatsApp, Telegram or the browser extension.",
  "Copy the 6-character code. It's valid for 15 minutes.",
  "Send LINK and the code, scan the QR code, or enter it in the extension. Disconnect anytime.",
];
