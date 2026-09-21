import {
  AtSign, Boxes, Calendar, Flame, Globe, Layers, Mail, MailCheck, MapPin, MessageCircle, MessageSquare, Rocket, Send, Sheet,
  Store, Users, type LucideIcon,
} from "lucide-react";

export type IntegrationCategory = "Email & calendar" | "Messaging" | "Prospect sources" | "Email platforms" | "Agent channels";

export type Integration = {
  name: string;
  category: IntegrationCategory;
  Icon: LucideIcon;
  description: string;
  /** How it connects, in the app's words. */
  auth: "OAuth" | "API key" | "Pairing code" | "In the Dexisphere app";
};

export const INTEGRATION_CATEGORIES: IntegrationCategory[] = [
  "Email & calendar",
  "Messaging",
  "Prospect sources",
  "Email platforms",
  "Agent channels",
];

/** The app's real connector catalogue (macrid-clone src/data/connectors + channels). */
export const INTEGRATIONS: Integration[] = [
  { name: "Gmail", category: "Email & calendar", Icon: Send, auth: "OAuth", description: "Send from your Google address and read replies." },
  { name: "Outlook", category: "Email & calendar", Icon: Mail, auth: "OAuth", description: "Mail and calendar for Microsoft accounts, in one grant." },
  { name: "Email (SMTP)", category: "Email & calendar", Icon: MailCheck, auth: "API key", description: "Send campaigns from any mailbox you own." },
  { name: "Google Calendar", category: "Email & calendar", Icon: Calendar, auth: "OAuth", description: "Let agents see meetings and brief you beforehand." },
  { name: "Google Sheets", category: "Email & calendar", Icon: Sheet, auth: "OAuth", description: "Export lead lists and pipeline reports." },
  { name: "SMS (Twilio)", category: "Messaging", Icon: MessageSquare, auth: "API key", description: "Text from your own number, or use the shared sender." },
  { name: "WhatsApp Business", category: "Messaging", Icon: MessageCircle, auth: "In the Dexisphere app", description: "Broadcast from your business number via Meta." },
  { name: "Google Places", category: "Prospect sources", Icon: MapPin, auth: "API key", description: "Find local businesses by niche, city and radius." },
  { name: "Google Business Profile", category: "Prospect sources", Icon: Store, auth: "OAuth", description: "Read your listings, hours, reviews and posts." },
  { name: "Facebook", category: "Prospect sources", Icon: Users, auth: "In the Dexisphere app", description: "Pull pages and businesses engaging with your niche." },
  { name: "Mailchimp", category: "Email platforms", Icon: AtSign, auth: "API key", description: "Push captured leads into an audience." },
  { name: "Brevo", category: "Email platforms", Icon: Send, auth: "API key", description: "Sync a list and send from Brevo." },
  { name: "Klaviyo", category: "Email platforms", Icon: Layers, auth: "API key", description: "Keep a Klaviyo list in step with your CRM." },
  { name: "ConvertKit", category: "Email platforms", Icon: Flame, auth: "API key", description: "Subscribe new leads to a form." },
  { name: "ActiveCampaign", category: "Email platforms", Icon: Layers, auth: "API key", description: "Hand leads to an automation." },
  { name: "MailerLite", category: "Email platforms", Icon: Boxes, auth: "API key", description: "Add leads to a MailerLite group." },
  { name: "GetResponse", category: "Email platforms", Icon: Rocket, auth: "API key", description: "Feed a list from your funnels." },
  { name: "Systeme.io", category: "Email platforms", Icon: Boxes, auth: "API key", description: "Sync contacts with a Systeme.io funnel." },
  { name: "WhatsApp", category: "Agent channels", Icon: MessageCircle, auth: "Pairing code", description: "Message your agent and get answers on WhatsApp." },
  { name: "Telegram", category: "Agent channels", Icon: Send, auth: "Pairing code", description: "Chat with your agent through the Telegram bot." },
  { name: "Browser extension", category: "Agent channels", Icon: Globe, auth: "Pairing code", description: "Keep your agent in a side panel on any page." },
];
