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
  /** What Dexisphere can read or do once connected. Listed in the Privacy Policy, so keep it accurate. */
  access: string;
};

export const INTEGRATION_CATEGORIES: IntegrationCategory[] = [
  "Email & calendar",
  "Messaging",
  "Prospect sources",
  "Email platforms",
  "Agent channels",
];

const EMAIL_PLATFORM_ACCESS = "Your API key and the list you choose. We add or update the contacts you sync.";

/**
 * The app's real connector catalogue (macrid-clone src/data/connectors + channels).
 * Adding one here also adds it to the Privacy Policy's integrations table.
 */
export const INTEGRATIONS: Integration[] = [
  {
    name: "Gmail", category: "Email & calendar", Icon: Send, auth: "OAuth",
    description: "Send from your Google address and read replies.",
    access: "Your email address, the messages and replies agents follow up on, and permission to send email as you.",
  },
  {
    name: "Outlook", category: "Email & calendar", Icon: Mail, auth: "OAuth",
    description: "Mail and calendar for Microsoft accounts, in one grant.",
    access: "Your email address, mail and calendar events, and permission to send email as you.",
  },
  {
    name: "Email (SMTP)", category: "Email & calendar", Icon: MailCheck, auth: "API key",
    description: "Send campaigns from any mailbox you own.",
    access: "The server, username and password for the mailbox you add, used to send your email.",
  },
  {
    name: "Google Calendar", category: "Email & calendar", Icon: Calendar, auth: "OAuth",
    description: "Let agents see meetings and brief you beforehand.",
    access: "Your calendars and events, including titles, times and attendees.",
  },
  {
    name: "Google Sheets", category: "Email & calendar", Icon: Sheet, auth: "OAuth",
    description: "Export lead lists and pipeline reports.",
    access: "The spreadsheets agents create or write to when you ask for an export.",
  },
  {
    name: "SMS (Twilio)", category: "Messaging", Icon: MessageSquare, auth: "API key",
    description: "Text from your own number, or use the shared sender.",
    access: "Your Twilio account ID, auth token and sender number, and the delivery status of messages you send.",
  },
  {
    name: "WhatsApp Business", category: "Messaging", Icon: MessageCircle, auth: "In the Dexisphere app",
    description: "Broadcast from your business number via Meta.",
    access: "Your WhatsApp Business account and number through Meta, the messages you send and the replies you receive.",
  },
  {
    name: "Google Places", category: "Prospect sources", Icon: MapPin, auth: "API key",
    description: "Find local businesses by niche, city and radius.",
    access: "Your API key, if you add one. Results are public business listings.",
  },
  {
    name: "Google Business Profile", category: "Prospect sources", Icon: Store, auth: "OAuth",
    description: "Read your listings, hours, reviews and posts.",
    access: "The business listings you manage, with their hours, reviews and posts.",
  },
  {
    name: "Facebook", category: "Prospect sources", Icon: Users, auth: "In the Dexisphere app",
    description: "Pull pages and businesses engaging with your niche.",
    access: "The Facebook Pages you grant access to, and public Page and engagement data used for prospecting.",
  },
  { name: "Mailchimp", category: "Email platforms", Icon: AtSign, auth: "API key", description: "Push captured leads into an audience.", access: EMAIL_PLATFORM_ACCESS },
  { name: "Brevo", category: "Email platforms", Icon: Send, auth: "API key", description: "Sync a list and send from Brevo.", access: EMAIL_PLATFORM_ACCESS },
  { name: "Klaviyo", category: "Email platforms", Icon: Layers, auth: "API key", description: "Keep a Klaviyo list in step with your CRM.", access: EMAIL_PLATFORM_ACCESS },
  { name: "ConvertKit", category: "Email platforms", Icon: Flame, auth: "API key", description: "Subscribe new leads to a form.", access: EMAIL_PLATFORM_ACCESS },
  { name: "ActiveCampaign", category: "Email platforms", Icon: Layers, auth: "API key", description: "Hand leads to an automation.", access: EMAIL_PLATFORM_ACCESS },
  { name: "MailerLite", category: "Email platforms", Icon: Boxes, auth: "API key", description: "Add leads to a MailerLite group.", access: EMAIL_PLATFORM_ACCESS },
  { name: "GetResponse", category: "Email platforms", Icon: Rocket, auth: "API key", description: "Feed a list from your funnels.", access: EMAIL_PLATFORM_ACCESS },
  { name: "Systeme.io", category: "Email platforms", Icon: Boxes, auth: "API key", description: "Sync contacts with a Systeme.io funnel.", access: EMAIL_PLATFORM_ACCESS },
  {
    name: "WhatsApp", category: "Agent channels", Icon: MessageCircle, auth: "Pairing code",
    description: "Message your agent and get answers on WhatsApp.",
    access: "Your phone number (shown masked) and the messages you exchange with your agent.",
  },
  {
    name: "Telegram", category: "Agent channels", Icon: Send, auth: "Pairing code",
    description: "Chat with your agent through the Telegram bot.",
    access: "Your Telegram chat and the messages you exchange with your agent.",
  },
  {
    name: "Browser extension", category: "Agent channels", Icon: Globe, auth: "Pairing code",
    description: "Keep your agent in a side panel on any page.",
    access: "The messages you exchange with your agent from the side panel.",
  },
];
