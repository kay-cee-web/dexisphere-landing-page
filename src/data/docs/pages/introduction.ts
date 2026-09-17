import { APP_URL } from "@/lib/config";
import type { DocPage } from "../types";

export const INTRODUCTION: DocPage = {
  slug: "introduction",
  title: "Introduction",
  description:
    "What Dexisphere is, the kinds of work its agents take on, and how agents, tools, Records and work receipts fit together.",
  group: "Getting started",
  nextSteps: ["quickstart", "agents", "connectors", "approvals"],
  blocks: [
    {
      type: "p",
      text: "Dexisphere gives you AI agents for marketing and sales. You describe a job in plain language, such as finding prospects, sending a follow-up or tidying your pipeline, and an agent does the work with real tools instead of handing you a to-do list.",
    },
    {
      type: "p",
      text: `Everything happens in the Dexisphere app at [${APP_URL.replace(/^https?:\/\//, "")}](${APP_URL}). These docs are user guides for that app. Dexisphere has no public API, so there are no endpoints or SDKs to learn: if you can write a message, you can run an agent.`,
    },
    { type: "h2", text: "What agents can do" },
    {
      type: "p",
      text: "Agents cover the areas you would otherwise click through by hand. The idea library in the app is grouped the same way, so each category comes with ready-made tasks.",
    },
    {
      type: "table",
      head: ["Category", "What an agent handles", "Example tools"],
      rows: [
        ["Prospecting", "Finds local businesses and files them into lists", "`find_prospects`, `create_list`, `add_to_list`"],
        ["Funnels", "Builds and updates funnels and landing pages", "`create_funnel`, `update_funnel`, `list_funnels`"],
        ["Outreach", "Drafts and sends email, SMS and WhatsApp", "`send_email`, `send_sms`, `send_whatsapp`"],
        ["CRM", "Keeps leads, deals, tasks and appointments current", "`create_deal`, `move_deal_stage`, `book_appointment`"],
        ["Deliverability", "Checks addresses, domains and copy before a send", "`verify_emails`, `check_sending_domain`, `check_email_copy`"],
        ["Analytics", "Reads campaign and pipeline performance", "`campaign_performance`, `pipeline_summary`"],
        ["Business", "Content drafts, research and competitor comparisons", "`schedule_automation`, `plan_usage`, `check_connections`"],
      ],
    },
    { type: "h2", text: "How the pieces fit together" },
    {
      type: "p",
      text: "Four things make up every piece of work in Dexisphere. Knowing them makes the rest of these docs easy to follow.",
    },
    {
      type: "ol",
      items: [
        "**Agents** hold a name, a set of instructions and a model. You talk to an agent in chat, and it follows its instructions on every task. See [Agents](/docs/agents).",
        "**Tools** are the actions an agent can take on the server: searching leads, creating a deal, sending an email. The agent picks the tools; you never call them yourself.",
        "**Records** are read-only views of your workspace data: lists, leads, companies, deals, tasks, appointments, campaigns, funnels and analytics. They show what agents created or changed.",
        "**Work receipts** appear under a reply and list what that turn changed in Records, with each line linking to the record. See [Work receipts](/docs/work-receipts).",
      ],
    },
    {
      type: "code",
      title: "One turn, end to end",
      code: [
        "You      Find 20 dental clinics in Austin and put them in a new list.",
        "Agent    calls find_prospects → create_list → add_to_list",
        "Reply    Created \"Austin dental clinics\" with 20 leads.",
        "Receipt  Leads  Added 20 leads to \"Austin dental clinics\"",
        "         Lists  Created list \"Austin dental clinics\"",
      ].join("\n"),
    },
    { type: "h2", text: "Where agents reach you" },
    {
      type: "p",
      text: "Chat in the app is the main place to work, but each agent can also be linked to WhatsApp, Telegram or the browser extension with a short pairing code. Outreach goes out through the senders you connect, such as your SMTP mailbox, Gmail or a Twilio number. See [Channels](/docs/channels) and [Connectors](/docs/connectors).",
    },
    { type: "h2", text: "Staying in control" },
    {
      type: "ul",
      items: [
        "**Ask before sending** makes an agent show the draft, the recipients and its checks, then wait for your go-ahead.",
        "**The sending switch** stops an agent from sending anything. It can still research and draft.",
        "**Work receipts** show what changed after every turn, so nothing happens out of sight.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "New here?",
      text: "The [Quickstart](/docs/quickstart) takes you from sign-up to a first finished task in about five minutes.",
    },
  ],
};
