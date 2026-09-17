/** PLACEHOLDER — sample article body written for the launch mock-up; replace before launch. */
import type { ContentBlock } from "@/types/content";

export const blocks: ContentBlock[] = [
  {
    type: "p",
    text: "An agent that can send email, SMS and WhatsApp messages on your behalf is useful in direct proportion to how much you trust it. \"Ask before sending\" is the design pattern we built to earn that trust, one message at a time. Here's how we got there.",
  },
  { type: "h2", text: "The problem with \"are you sure?\"" },
  {
    type: "p",
    text: "Our first prototype used a classic confirmation dialog: the agent was about to send, a modal popped up, you clicked OK. People clicked OK. Every time, without reading. A confirmation that interrupts without informing just trains people to dismiss it.",
  },
  {
    type: "p",
    text: "What people actually wanted to know before a send was specific: what does the message say, who exactly is it going to, and did anything look wrong? So we stopped asking \"are you sure?\" and started showing the evidence.",
  },
  { type: "h2", text: "Draft, recipients, checks, then wait" },
  {
    type: "p",
    text: "With Ask before sending switched on, an agent that's ready to send stops and shows you three things in the conversation:",
  },
  {
    type: "ol",
    items: [
      "**The draft**, exactly as it will go out, with merge tags like `{fullname}` and `{company}` visible.",
      "**The recipients**, so you can spot the list that's twice as long as you expected.",
      "**The checks** it ran, such as address verification with `verify_emails` or a copy review with `check_email_copy`.",
    ],
  },
  {
    type: "p",
    text: "Then it waits. Nothing goes out until you say so. Above the composer, an approval bar gives you three clear choices: **Send**, **Don't send**, or **Ask for changes**.",
  },
  {
    type: "code",
    title: "Asking for changes",
    code: "Shorten the email to 80 words, drop the second paragraph,\nand remove anyone on the list without a verified address. Then show me again.",
  },
  {
    type: "quote",
    text: "The approval moment should feel like a colleague handing you a draft, not a system throwing up a warning.",
    cite: "Grace Otieno, Product Designer",
  },
  { type: "h2", text: "Why it lives in the instructions" },
  {
    type: "p",
    text: "Here's a detail most people never notice: the Ask before sending switch writes a short approval rule into the agent's own instructions. The agent reads its instructions on every turn, so the rule travels with it everywhere, including when you're chatting with it over WhatsApp or Telegram, far from the approval bar.",
  },
  {
    type: "p",
    text: "It also means the switch is honest. Agents can update their own instructions during a conversation, so the switch reads its state back from the instructions text instead of trusting a separate setting that could drift out of sync.",
  },
  { type: "h2", text: "A switch for when you mean stop" },
  {
    type: "p",
    text: "Approvals handle the everyday case. Sometimes you need something blunter: a campaign looks wrong, a client asked you to pause, or you're simply going on holiday. For that, every agent has a sending switch.",
  },
  {
    type: "callout",
    tone: "warn",
    title: "Stopped doesn't mean idle",
    text: "An agent with sending turned off still researches, builds lists and drafts messages. It just can't send them. Its settings show how many sends went out and how many were blocked in the last 24 hours.",
  },
  {
    type: "p",
    text: "We designed the two controls to complement each other. Ask before sending is a conversation; the sending switch is a lock.",
  },
  { type: "h2", text: "What we learned" },
  {
    type: "ul",
    items: [
      "Show evidence, not warnings. People read drafts; they don't read dialogs.",
      "Give a third option. \"Ask for changes\" gets used far more than \"Don't send\".",
      "Put rules where the agent will see them, not only where the UI will.",
      "Pair a soft control with a hard one, and label both in plain words.",
    ],
  },
  {
    type: "p",
    text: "Autonomy is a spectrum, and you should choose where each agent sits on it. Read more about approvals and the sending switch in the [docs](/docs).",
  },
];
