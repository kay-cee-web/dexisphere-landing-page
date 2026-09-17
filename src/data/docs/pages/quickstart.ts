import { APP_LINKS } from "@/lib/config";
import type { DocPage } from "../types";

export const QUICKSTART: DocPage = {
  slug: "quickstart",
  title: "Quickstart",
  description: "Create an account, hand your first task to an agent, read its work receipt and connect a sender, in about five minutes.",
  group: "Getting started",
  nextSteps: ["agents", "approvals", "channels"],
  blocks: [
    {
      type: "p",
      text: "This guide takes you from nothing to an agent that has finished real work in your workspace. You need an email address and nothing else: no card, no install, no code.",
    },
    { type: "h2", text: "1. Create your account" },
    {
      type: "p",
      text: `Open [the sign-up page](${APP_LINKS.register}) and fill in your full name, work email and a password of at least 8 characters, then confirm the password and accept the privacy policy. Leave **Licence code** empty unless you already bought a plan.`,
    },
    { type: "h2", text: "2. Verify your email" },
    {
      type: "p",
      text: "We email you a 6-digit code as soon as the account exists. Type it on the **Check your inbox** screen: the form submits by itself once all six digits are in. If nothing arrives, check spam, then use **Send a new code** (it unlocks 60 seconds after each send).",
    },
    { type: "h2", text: "3. Describe your first task" },
    {
      type: "p",
      text: "The home screen asks **What should an agent take off your plate?** Describe the job the way you would brief a colleague and press **Create agent**. The task becomes the new agent's instructions, the agent gets a name, and its chat opens with your task already typed. Press Enter to send it (Shift+Enter adds a new line).",
    },
    {
      type: "p",
      text: "Not sure where to start? Pick a card from the idea library below the composer to fill it in. These prompts work end to end without connecting anything first:",
    },
    {
      type: "code",
      title: "CRM · Stalled deal review",
      code: "Every Monday, flag the deals that haven't moved in two weeks and tell me what the next step on each should be.",
    },
    {
      type: "code",
      title: "Analytics · Monday performance brief",
      code: "Every Monday, sum up last week's sends, replies and closed deals in one short report I can read in a minute.",
    },
    {
      type: "code",
      title: "Deliverability · Spam-filter copy check",
      code: "Before I send, flag the subject lines and phrases likely to trip spam filters and show me a rewrite beside them.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Be specific",
      text: "Name the niche, the place, the number and the output you want. \"Find 40 dental clinics in Austin with no website and put them in a new list\" gets a better result than \"find me leads\".",
    },
    { type: "h2", text: "4. Watch the work receipt" },
    {
      type: "p",
      text: "When the reply arrives, look underneath it. If the turn changed anything, a receipt titled **Changed in your workspace** lists each change, such as a list created, leads added or a deal moved. Every line links to the record so you can check the result yourself. Beside the reply's time you'll also see how many tokens the turn used.",
    },
    {
      type: "p",
      text: "A reply with no receipt simply changed nothing, which is normal for questions, drafts and reports. [Work receipts](/docs/work-receipts) explains exactly what is tracked.",
    },
    { type: "h2", text: "5. Connect a sender" },
    {
      type: "p",
      text: "Agents can research, draft and organise without any connections. To actually send email, connect a mailbox. In the agent, open **Plugins → Connectors** and choose one:",
    },
    {
      type: "ul",
      items: [
        "**Gmail** or **Outlook**: press **Connect** and approve access in the popup.",
        "**Email (SMTP)**: press **Add sender** and enter your mail server details.",
        "**SMS (Twilio)** is optional. Without it, SMS goes out on a shared sender.",
      ],
    },
    {
      type: "code",
      title: "SMTP sender",
      language: "text",
      code: ["SMTP host     smtp.yourdomain.com", "Port          587", "Username      you@yourdomain.com", "Password      ••••••••••", "Encryption    TLS", "From address  you@yourdomain.com", "From name     Your Name"].join("\n"),
    },
    {
      type: "callout",
      tone: "warn",
      title: "Turn on Ask before sending first",
      text: "Before you let an agent loose on a real list, open **Settings → General** and switch on **Ask before sending**. The agent will then show you every draft, its recipients and its checks, and wait for your go-ahead. Use an app password for SMTP where your provider supports one, and never paste credentials into the chat. See [Approvals](/docs/approvals).",
    },
    { type: "h2", text: "What's next" },
    {
      type: "p",
      text: "Refine the agent by chatting with it, link it to WhatsApp or Telegram so you can reach it from your phone, or ask it to run a task on a schedule.",
    },
  ],
};
