import { CONNECTOR_SENDER_BLOCKS } from "./connectors-senders";
import type { DocPage } from "../types";

export const CONNECTORS: DocPage = {
  slug: "connectors",
  title: "Connectors",
  description:
    "Connect the mailboxes, SMS senders, prospect sources and email platforms your agents work with, by OAuth, API key or in the Macrid app.",
  group: "Platform",
  nextSteps: ["approvals", "tokens-and-limits"],
  blocks: [
    {
      type: "p",
      text: "Connectors link the accounts agents send from and read from. They belong to your **workspace**, not to one agent: connect Gmail once and every agent can use it. Open any agent and go to **Plugins → Connectors** to see them all.",
    },
    { type: "h2", text: "Connection types" },
    {
      type: "table",
      head: ["Type", "Button", "How it works"],
      rows: [
        ["OAuth", "**Connect**", "A popup asks you to sign in to the provider and approve access. The card turns **Connected** when you're done."],
        ["API key", "**Add key** or **Add sender**", "A form asks for the credentials that provider needs. Keys are saved to your workspace, never to the chat."],
        ["In the Macrid app", "**Set up in Macrid**", "Some accounts, like WhatsApp Business, are connected through Meta in the Macrid app. The button opens the right page there."],
      ],
    },
    {
      type: "p",
      text: "Connected OAuth and API key cards show **Disconnect**. Senders you can have several of (SMTP mailboxes and Twilio numbers) show **Add another** and **Manage** instead, and you remove them in the Macrid app.",
    },
    {
      type: "callout",
      tone: "warn",
      title: "Allow the popup",
      text: "OAuth opens in a popup window. If nothing appears when you press **Connect**, your browser blocked it: allow popups for the app and try again.",
    },
    { type: "h2", text: "Outreach channels" },
    {
      type: "table",
      head: ["Connector", "Type", "Used for"],
      rows: [
        ["Email (SMTP)", "API key", "Campaigns and sequences from your own mailbox."],
        ["SMS (Twilio)", "API key, optional", "Texts from your own number. Without it, SMS uses the shared sender."],
        ["WhatsApp Business", "In the Macrid app", "Broadcasts from your business number, via Meta."],
        ["Gmail", "OAuth", "Reading replies and sending from your Google address."],
        ["Outlook", "OAuth", "Mail and calendar for Microsoft accounts, in one grant."],
        ["Google Calendar", "OAuth", "Your meetings, so an agent can brief you beforehand."],
        ["Google Sheets", "OAuth", "Exporting lead lists and pipeline reports."],
      ],
    },
    ...CONNECTOR_SENDER_BLOCKS,
    { type: "h2", text: "Prospect sources" },
    {
      type: "ul",
      items: [
        "**Google Places** (API key, optional) finds local businesses by niche, city and radius. Prospecting works without it on a shared key, which has a daily limit shared by everyone using it. Add your own **Google Places API key** (from Google Cloud → Credentials, with the Places API (New) enabled) and the card reads **Your own key, no daily limit**.",
        "**Google Business Profile** (OAuth) reads your own listings, hours, reviews and posts.",
        "**Facebook** is set up in the Macrid app. It pulls pages and the businesses engaging with your niche.",
      ],
    },
    { type: "h2", text: "Email platforms" },
    {
      type: "p",
      text: "Keep a list you already own in step with your pipeline. Each one needs an API key from that platform plus the ID of the list, form or group to sync with:",
    },
    {
      type: "table",
      head: ["Platform", "Fields"],
      rows: [
        ["Mailchimp", "API key, List ID"],
        ["Brevo", "API key, List ID"],
        ["Klaviyo", "API key, List ID"],
        ["ActiveCampaign", "API key, List ID"],
        ["GetResponse", "API key, List ID"],
        ["ConvertKit", "API key, Form ID"],
        ["MailerLite", "API key, Group ID"],
        ["Systeme.io", "API key"],
      ],
    },
    { type: "h2", text: "How agents use connections" },
    {
      type: "p",
      text: "Agents check what's connected with their `check_connections` tool. If you type a task that names a platform with nothing connected, a notice above the composer says the agent can draft it but not send it, with a **Connect** link. It never blocks the message. Idea cards show **Connect X** for the same reason.",
    },
  ],
};
