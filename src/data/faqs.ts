import type { Faq } from "@/types/marketing";

/** General questions: home page and pricing page. Answers must match the app's real behaviour. */
export const GENERAL_FAQS: Faq[] = [
  {
    question: "Do I need any technical knowledge to set up Dexisphere?",
    answer:
      "Not at all. Dexisphere is designed for people who have never written a line of code. Sign up, pick a plan and start telling your agent what to do in plain language. There are no scripts to write, no APIs to configure and no dashboards to learn — the agent handles the execution for you.",
  },
  {
    question: "What does a Dexisphere agent actually do?",
    answer:
      "You describe a task in plain language, like 'find roofing companies in Leeds and add the ones with a phone number to a new list'. The agent runs on our servers with real tools for prospecting, your CRM, email, SMS, WhatsApp, funnels and automations, so it does the work instead of telling you how.",
  },
  {
    question: "How do AI credits work, and do I need external AI accounts?",
    answer:
      "Your AI credits come ready to use out of the box. You don't need to create accounts with OpenAI, Anthropic or any other provider, generate API keys, or handle any technical configuration. Your plan includes a token allowance that powers every agent turn. If you prefer, you can add your own AI key and turns run on that instead.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Absolutely. Every workspace runs in its own isolated environment, meaning your data, leads and conversations are completely separated from other users. We encrypt data at rest and in transit, and your sending accounts and API keys are never shared. You get professional-grade protection without having to configure anything yourself.",
  },
  {
    question: "How do I know what an agent changed?",
    answer:
      "Every reply comes with a work receipt: the leads it added, deals it moved, tasks and appointments it created and campaigns it sent, each linking to the record. Your Records pages show everything agents have created.",
  },
  {
    question: "Can an agent send messages without my approval?",
    answer:
      "Only if you let it. Turn on 'Ask before sending' and the agent shows you the draft, the recipients and its checks, then waits for you to say send. Each agent also has a sending switch: turned off, it can still research and draft but can't send anything.",
  },
  {
    question: "What's the difference between Dexisphere and doing it myself with automation tools?",
    answer:
      "With traditional tools you build workflows, manage integrations and maintain automations yourself. Dexisphere removes all of that complexity. Tell the agent what you need done and it handles prospecting, outreach, CRM updates and funnels on its own — so you can focus on closing deals, not managing software. If you need full control, you can still connect your own accounts and keys.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Plans are one-time lifetime licences, not subscriptions. Start on Free Forever, then buy Solo, Business or Agency once. After checkout you get a licence code and redeem it in the app, and your allowances update straight away.",
  },
  {
    question: "What can I do with a Dexisphere agent?",
    answer:
      "Your agent works around the clock, even when your laptop is closed. It can find prospects on Google, verify emails, draft and send outreach over email, SMS and WhatsApp, manage your CRM pipeline, build landing pages and funnels, and report back with receipts for every change. Think of it as a digital team member that never sleeps and is always ready to help.",
  },
  {
    question: "Which tools and channels does it work with?",
    answer:
      "Send from SMTP, Gmail or Outlook, text through Twilio or the shared sender, and broadcast on WhatsApp Business. Find prospects with Google Places, sync lists to Mailchimp, Brevo, Klaviyo and more, and talk to your agent on WhatsApp, Telegram or the browser extension.",
  },
];

/** Pricing-specific questions, shown on /pricing after the comparison table. */
export const PRICING_FAQS: Faq[] = [
  {
    question: "Is it really a one-time payment?",
    answer:
      "Yes. Every paid plan is a lifetime licence: you pay once, nothing renews, and future updates are included. There is no monthly or yearly billing to cancel.",
  },
  {
    question: "How do I activate a plan after buying?",
    answer:
      "Checkout gives you a licence code. Open the plans page in the app, choose Redeem code and paste it in. Your new allowances apply immediately.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Yes. Each tier includes everything in the one below it, so you can start on Solo and move to Business or Agency when you need more campaigns, tokens or team seats.",
  },
  {
    question: "What happens when I run out of tokens?",
    answer:
      "The agent tells you in the chat and links you to upgrade. Nothing is lost: your agents, lists and records stay put. Adding your own AI key lets turns continue on your key.",
  },
  {
    question: "Do I need my own Twilio or email account?",
    answer:
      "For email, connect SMTP, Gmail or Outlook so messages come from your address. SMS works on the shared sender out of the box; connect Twilio to text from your own number.",
  },
  {
    question: "What does Reseller access mean?",
    answer:
      "Business and Agency include reseller access, so agencies can set up and run Dexisphere for their clients. The Free and Solo plans don't include it.",
  },
];
