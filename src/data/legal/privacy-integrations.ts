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
      text: "Dexisphere's use and transfer of information received from Google APIs to any other app will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. Each Google service asks only for its own access: Gmail can only send, and Drive, Sheets and Docs only see files you pick or that Dexisphere creates. Data from Gmail, Google Calendar, Google Drive, Sheets and Docs, Google Contacts, Google Business Profile, YouTube and Google Ads is used only to provide the features you use. We don't use it for advertising, we don't sell it, we don't use it to train general AI models, and people at Dexisphere don't read it unless you ask us to, it's needed for security, or the law requires it.",
    },
    {
      type: "p",
      text: "Dexisphere uses YouTube API Services. By connecting YouTube you agree to the [YouTube Terms of Service](https://www.youtube.com/t/terms), and Google's handling of that data is covered by the [Google Privacy Policy](https://policies.google.com/privacy). You can revoke access at any time from your [Google security settings](https://security.google.com/settings/security/permissions).",
    },
    { type: "h3", text: "Meta: Facebook, Instagram and WhatsApp Business" },
    {
      type: "p",
      text: `Data from Facebook, Instagram, Meta Ads and WhatsApp Business is used under Meta's Platform Terms, only for the features you use. To delete it, disconnect the account in Dexisphere, remove Dexisphere under **Settings & privacy > Settings > Apps and websites** in Facebook, or email ${privacyMail} from the address on your account. We delete data received from Meta within 30 days of your request.`,
    },
    { type: "h3", text: "Payment accounts" },
    {
      type: "p",
      text: "Payment connections are read-only. Dexisphere reads your transactions, refunds, payouts and disputes, and receives the payment events your provider sends, so an agent can report on sales and alert you when a payment lands. It never creates charges, issues refunds or moves money. Where your provider supports it, use a restricted key with read access only.",
    },
    { type: "h3", text: "Social, ad and work accounts" },
    {
      type: "ul",
      items: [
        "Social accounts (Facebook Page, Instagram, LinkedIn, X, YouTube and TikTok) are used to read your posts, their stats and, where the grant includes one, your ad account's spend and results. Ad accounts are read-only.",
        "Dexisphere doesn't publish to your social accounts today. If publishing is added, it will only post what you approve, and this section will say so first.",
        "Slack and Telegram channels are only posted to. Jira, GitHub and Shopify are only read: Dexisphere doesn't create, change or delete anything in them.",
      ],
    },
    { type: "h3", text: "Disconnecting and revoking access" },
    {
      type: "ul",
      items: [
        "Disconnect any account in the app under **Plugins > Connectors**. We delete its stored tokens or keys straight away.",
        "You can also revoke access from the provider: [Google account permissions](https://myaccount.google.com/permissions), Facebook's Apps and websites settings, [your Microsoft account's app permissions](https://account.live.com/consent/Manage), or the connected-apps settings of LinkedIn, X or TikTok. For API keys and tokens, delete or roll the key in the provider's dashboard.",
        "Records already created from a connected account, such as leads you imported, stay in your workspace until you delete them.",
      ],
    },
    {
      type: "p",
      text: "When we add an integration, it's added to this section, with what it can access, before it becomes available.",
    },
  ],
};
