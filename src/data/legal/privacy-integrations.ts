/** PLACEHOLDER — draft legal text for layout only; have counsel review and replace before launch. */
import { INTEGRATIONS } from "@/data/integrations";
import { CONTACT_EMAILS } from "@/lib/config";
import type { LegalSection } from "./types";

const privacyMail = `[${CONTACT_EMAILS.privacy}](mailto:${CONTACT_EMAILS.privacy})`;

/**
 * Privacy Policy: connected accounts. The table is built from the integrations
 * catalogue, so a new connector shows up here with what it accesses.
 */
export const PRIVACY_INTEGRATIONS: LegalSection = {
  title: "Connected accounts and integrations",
  blocks: [
    {
      type: "p",
      text: "You choose which accounts to connect. We only access what a connected account needs for the features you use, and agents act in it only when you ask them to, directly or through a task you scheduled.",
    },
    {
      type: "table",
      head: ["Integration", "How it connects", "What we can access"],
      rows: INTEGRATIONS.map((item) => [item.name, item.auth, item.access]),
    },
    { type: "h3", text: "How we handle credentials" },
    {
      type: "ul",
      items: [
        "OAuth tokens, API keys and passwords are stored on our servers and used only by your workspace's tools.",
        "They are never sent to an AI model and never shown back in chat.",
        "Data an agent reads from a connected account, such as an email thread or a calendar event, may be sent to the AI provider for that agent's model, only to complete the task you asked for.",
      ],
    },
    { type: "h3", text: "Google user data" },
    {
      type: "p",
      text: "Dexisphere's use and transfer of information received from Google APIs to any other app will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. Data from Gmail, Google Calendar, Google Sheets and Google Business Profile is used only to provide the features you use. We don't use it for advertising, we don't sell it, we don't use it to train general AI models, and people at Dexisphere don't read it unless you ask us to, it's needed for security, or the law requires it.",
    },
    { type: "h3", text: "Meta: Facebook and WhatsApp Business" },
    {
      type: "p",
      text: `Data from Facebook and WhatsApp Business is used under Meta's Platform Terms, only for the features you use. To delete it, disconnect the account in Dexisphere, remove Dexisphere under **Settings & privacy > Settings > Apps and websites** in Facebook, or email ${privacyMail} from the address on your account. We delete data received from Meta within 30 days of your request.`,
    },
    { type: "h3", text: "Disconnecting and revoking access" },
    {
      type: "ul",
      items: [
        "Disconnect any account in the app under **Plugins > Connectors**. We delete its stored tokens or keys straight away.",
        "You can also revoke access from the provider: [Google account permissions](https://myaccount.google.com/permissions), Facebook's Apps and websites settings, or [your Microsoft account's app permissions](https://account.live.com/consent/Manage).",
        "Records already created from a connected account, such as leads you imported, stay in your workspace until you delete them.",
      ],
    },
    {
      type: "p",
      text: "We're adding more integrations, such as LinkedIn, Slack and Shopify. Each new one will be added to this section, with what it can access, before it becomes available.",
    },
  ],
};
