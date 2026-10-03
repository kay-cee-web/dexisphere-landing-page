import type { Faq } from "@/types/marketing";

/** General questions: home page and pricing page. Answers must match the app's real behaviour. */
export const GENERAL_FAQS: Faq[] = [
  {
    question: "Does it read my email?",
    answer:
      "Only the accounts you connect, and only what you've granted. You choose each one separately: connecting your calendar doesn't give it your inbox, and connecting Gmail lets it send from your address without reading your mail. Disconnect any of them at any time.",
  },
  {
    question: "Will it post things I haven't seen?",
    answer:
      "No. Posts are drafted and held for your approval. The same goes for emails and messages if you turn on Ask before sending: it shows you the draft, the recipients and its checks, then waits for you to say send.",
  },
  {
    question: "Can it change my ad budgets or move my money?",
    answer:
      "No. Ad and payment connections are read-only. It tells you what's spending and what's coming in; it cannot send, refund, charge, or change a budget. Those decisions stay with you.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "No. You talk to it the way you'd talk to someone who works for you, on the web, WhatsApp or Telegram. There are no flowcharts to build and no automations to wire up.",
  },
  {
    question: "Will it work with the tools I already have?",
    answer:
      "It connects to most of what small businesses use: Google and Microsoft, six payment processors, eight mailing platforms, six social networks and their ad accounts, Shopify, Slack, Jira and GitHub. If something's missing, ask.",
  },
  {
    question: "Will it message me all day?",
    answer:
      "No. It sends a short morning briefing of what needs you, and alerts when something actually matters. On a day when nothing needs a decision, it sends nothing at all.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT doesn't know your pipeline, can't see your inbox, and stops the moment you close the tab. Dexisphere is connected to your business and keeps working while you're away.",
  },
  {
    question: "Do I need my own AI account?",
    answer:
      "No. Your plan includes the tokens that power every agent turn. If you'd rather, bring your own OpenAI, Anthropic or Google key and run on your own credits instead.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Plans are one-time lifetime licences, not subscriptions. Start on Free Forever, then buy Solo, Business or Agency once. After checkout you get a licence code and redeem it in the app, and your allowances update straight away.",
  },
  {
    question: "What happens when I stop?",
    answer:
      "Disconnect any account in a click, and each connection stops the moment you do. If you want to leave altogether, ask us to close your account and we'll delete your data.",
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
