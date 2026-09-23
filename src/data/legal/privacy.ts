/** PLACEHOLDER — draft legal text for layout only; have counsel review and replace before launch. */
import { CONTACT_EMAILS } from "@/lib/config";
import { PRIVACY_INTEGRATIONS } from "./privacy-integrations";
import { PRIVACY_SECTIONS_LATER } from "./privacy-later";
import type { LegalDocument, LegalSection } from "./types";

const SECTIONS_EARLY: LegalSection[] = [
  {
    title: "Information we collect",
    blocks: [
      { type: "p", text: "We collect what we need to run your account and your agents. That falls into a few groups:" },
      {
        type: "ul",
        items: [
          "**Account details:** your name, email address, password, plan and any licence code you redeem.",
          "**What you give agents:** your messages, each agent's name and instructions, images you attach, and the agents' replies.",
          "**Workspace data:** the lists, leads, companies, deals, tasks, appointments, campaigns and funnels you or your agents create, including the contact details of the people in them.",
          "**Connected accounts:** the credentials you add for connectors, such as OAuth grants, API keys, SMTP details, Twilio credentials and your own AI keys, and the data those accounts let us access (see Connected accounts and integrations below).",
          "**Channel data:** messages you send your agent over WhatsApp, Telegram or the browser extension, plus a label or masked number for each link and when it was last used.",
          "**Usage data:** tokens used per chat turn, send and block counts, and technical logs such as IP address, browser and timestamps.",
          "**Funnel analytics:** when people visit funnels you publish, we record events such as views and clicks with their country, city, browser, operating system, device type and referrer.",
        ],
      },
    ],
  },
  {
    title: "How we use it",
    blocks: [
      {
        type: "ul",
        items: [
          "To provide the service: run your agents and their tools, send what you ask them to send, and show your Records.",
          "To secure your account: verify your email, send password reset codes and detect abuse.",
          "To apply your plan: count tokens and allowances and show your usage.",
          "To support you when you contact us, and to tell you about important changes to the service.",
          "To understand and improve how the product is used, using aggregated or de-identified data where we can.",
        ],
      },
      { type: "p", text: "We don't sell your personal information, and we don't use your workspace data to advertise to you or to the people in your lists." },
    ],
  },
  {
    title: "AI processing and model providers",
    blocks: [
      {
        type: "p",
        text: "Agents are powered by third-party AI models. When you send a message, we send the model provider for that agent's model what it needs to respond: your message, the agent's instructions, earlier messages in the conversation, and the results of any tools the agent uses, which can include workspace data.",
      },
      {
        type: "ul",
        items: [
          "**Providers:** Anthropic (Claude models), OpenAI (GPT models) and Google (Gemini models), depending on the model you choose.",
          "**Your own AI key:** if you add one, requests for that provider are made with your key, and that provider's terms with you also apply.",
          "**Provider handling:** each provider processes this data under its own API terms, which set how long it keeps the data and whether it may be used for training.",
        ],
      },
      { type: "callout", tone: "info", title: "Keep secrets out of chat", text: "Don't paste passwords or API keys into a conversation. Add credentials through Connectors, where they aren't sent to a model." },
    ],
  },
  {
    title: "Sharing and subprocessors",
    blocks: [
      { type: "p", text: "We share data only with the service providers that help us run Dexisphere, with services you connect, or when the law requires it." },
      {
        type: "table",
        head: ["Who", "Why"],
        rows: [
          ["Macrid", "Operates the platform and backend that Dexisphere runs on."],
          ["Anthropic, OpenAI, Google", "AI models that power agents."],
          ["Twilio, Meta (WhatsApp, Facebook), Telegram", "Delivering SMS and WhatsApp messages, Facebook Pages you connect, and agent channels."],
          ["Google, Microsoft, your SMTP provider", "Email, calendars, spreadsheets, Business Profile listings and place search you connect or use."],
          ["Email platforms you connect", "Syncing leads to Mailchimp, Brevo, Klaviyo, ConvertKit, ActiveCampaign, MailerLite, GetResponse or Systeme.io, when you ask."],
          ["Payment processor", "Handling checkout for paid licences. We don't see your full card details."],
          ["Hosting and infrastructure providers", "Storing data and running the service."],
        ],
      },
      { type: "p", text: "We may also disclose information to comply with the law, to protect people's safety or our rights, or as part of a merger or acquisition, in which case this policy continues to apply." },
    ],
  },
  PRIVACY_INTEGRATIONS,
  {
    title: "Data retention",
    blocks: [
      {
        type: "ul",
        items: [
          "Account details are kept while your account is open.",
          "An agent's instructions, conversation and channel links are kept until you delete the agent.",
          "Workspace records are kept until you delete them or close your account.",
          "A connected account's tokens or keys are deleted as soon as you disconnect it.",
          "Work receipts aren't stored: they exist only in your browser for the current session.",
          "Channel pairing codes expire after 15 minutes. Unused conversation copies are removed automatically.",
          "After you close your account, we delete or anonymise your data within 30 days, except where we must keep it longer for legal, tax or security reasons. Backups roll off on their normal schedule.",
        ],
      },
    ],
  },
];

export const PRIVACY: LegalDocument = {
  title: "Privacy Policy",
  description: "What Dexisphere collects, how agents, AI providers and connected accounts use it, who we share it with, and the choices you have.",
  lastUpdated: "September 23, 2026",
  lastUpdatedIso: "2026-09-23",
  summary: [
    "We collect your account details, what you give your agents, and the workspace data they work with.",
    "Your messages and relevant data go to the AI provider for the model each agent uses.",
    "Connected accounts such as Gmail, Outlook, Facebook and WhatsApp Business are used only for the features you use, and you can disconnect them any time.",
    "We don't sell your personal information.",
    "You control your data: delete agents, disconnect accounts, or ask us to export or erase everything.",
    `Questions? Email [${CONTACT_EMAILS.privacy}](mailto:${CONTACT_EMAILS.privacy}).`,
  ],
  sections: [...SECTIONS_EARLY, ...PRIVACY_SECTIONS_LATER],
};
