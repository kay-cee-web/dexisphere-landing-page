import { CONNECTOR_ACCOUNT_BLOCKS } from "./connectors-accounts";
import { CONNECTOR_SENDER_BLOCKS } from "./connectors-senders";
import type { DocPage } from "../types";

export const CONNECTORS: DocPage = {
  slug: "connectors",
  title: "Connectors",
  description:
    "Connect the Google services, mailboxes, senders, prospect sources, email platforms, payment, social and work accounts your agents work with, by OAuth, API key or in the Macrid app.",
  group: "Platform",
  nextSteps: ["approvals", "tokens-and-limits"],
  blocks: [
    {
      type: "p",
      text: "Connectors link the accounts agents send from and read from. They belong to your **workspace**, not to one agent: connect Gmail once and every agent can use it. Open any agent and go to **Plugins → Connectors** to see them all. Each card reads **Not connected**, **Connected** or **Needs attention**, with what to fix.",
    },
    { type: "h2", text: "Connection types" },
    {
      type: "table",
      head: ["Type", "Button", "How it works"],
      rows: [
        ["OAuth", "**Connect**", "A popup asks you to sign in to the provider and approve access. The card turns **Connected** when you're done."],
        ["API key", "**Add key** or **Add sender**", "A form asks for the credentials that provider needs. Keys are saved to your workspace, never to the chat."],
        ["In the Macrid app", "**Set up in Macrid**", "WhatsApp Business is connected through Meta in the Macrid app. The button opens the right page there."],
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
    { type: "h2", text: "Google" },
    {
      type: "p",
      text: "Each Google service is its own sign-in and asks only for its own access, so you share only what you need.",
    },
    {
      type: "table",
      head: ["Service", "What agents can do"],
      rows: [
        ["Gmail", "Send email from your address. **Send only**: it can't read your inbox, so connect a Mailbox to read replies."],
        ["Google Calendar", "Book, move and cancel meetings, and check when you're free."],
        ["Google Drive, Sheets, Docs", "Open files you pick and save what an agent creates. They share one access, so connecting one connects all three, and it can't browse or search the rest of your Drive."],
        ["Google Contacts", "Pull your contacts in, and save new ones back."],
        ["Google Business Profile", "Read the listings you manage, with their reviews and enquiries."],
      ],
    },
    { type: "h2", text: "Email and messaging" },
    {
      type: "table",
      head: ["Connector", "Type", "Used for"],
      rows: [
        ["Outlook", "OAuth", "Mail and calendar for Microsoft accounts, in one grant."],
        ["Mailbox (IMAP)", "App password", "Reading replies from Gmail, Outlook, Yahoo, Zoho or any IMAP server."],
        ["Email (SMTP)", "API key", "Campaigns and sequences from your own mailbox."],
        ["SMS (Twilio)", "API key, optional", "Texts from your own number. Without it, SMS uses the shared sender."],
        ["WhatsApp Business", "In the Macrid app", "Broadcasts from your business number, via Meta."],
      ],
    },
    {
      type: "p",
      text: "A **Mailbox** needs an app password, not your normal one: turn on two-step verification with your provider, create an app password and paste it in. Dexisphere tests the login before saving, so a saved mailbox already works. Use **Test** or **Remove** on each one later.",
    },
    ...CONNECTOR_SENDER_BLOCKS,
    { type: "h2", text: "Prospect sources" },
    {
      type: "ul",
      items: [
        "**Google Places** (API key, optional) finds local businesses by niche, city and radius. Prospecting works without it on a shared key, which has a daily limit shared by everyone using it. Add your own **Google Places API key** (from Google Cloud → Credentials, with the Places API (New) enabled) and the card reads **Your own key, no daily limit**.",
        "**Facebook** (OAuth) finds the pages and businesses active in your niche. It's a separate connection from the Facebook Page card under Social and ads.",
      ],
    },
    ...CONNECTOR_ACCOUNT_BLOCKS,
    { type: "h2", text: "How agents use connections" },
    {
      type: "p",
      text: "Agents check what's connected with their `check_connections` tool. If you type a task that names a platform with nothing connected, a notice above the composer says the agent can draft it but not send it, with a **Connect** link. It never blocks the message. Idea cards show **Connect X** for the same reason.",
    },
  ],
};
