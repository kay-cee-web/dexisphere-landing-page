import type { Faq } from "@/types/marketing";

/** General questions: home page and pricing page. Answers must match the app's real behaviour. */
export const GENERAL_FAQS: Faq[] = [
  {
    question: "What does a Dexisphere agent actually do?",
    answer:
      "You describe a task in plain language, like 'find roofing companies in Leeds and add the ones with a phone number to a new list'. The agent runs on our servers with real tools for prospecting, your CRM, email, SMS, WhatsApp, funnels and automations, so it does the work instead of telling you how.",
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
    question: "How does pricing work?",
    answer:
      "Plans are one-time lifetime licences, not subscriptions. Start on Free Forever, then buy Solo, Business or Agency once. After checkout you get a licence code and redeem it in the app, and your allowances update straight away.",
  },
  {
    question: "What are AI tokens?",
    answer:
      "Each chat turn uses tokens from your plan's allowance, and every reply shows how many it used and how many remain. If you add your own OpenAI, Anthropic or Gemini key, turns run on your key instead.",
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
