/** PLACEHOLDER — sample article body written for the launch mock-up; replace before launch. */
import type { ContentBlock } from "@/types/content";

export const blocks: ContentBlock[] = [
  {
    type: "p",
    text: "Your sender reputation is the quiet asset behind every campaign. Damage it, and even your best-written emails land in spam. The good news: most of the damage is preventable with a few checks before you hit send. Here's what Dexisphere agents check, and how to read the results.",
  },
  { type: "h2", text: "Why bounces cost more than you think" },
  {
    type: "p",
    text: "Mailbox providers watch how people respond to your mail. A high bounce rate is one of the clearest signals that a sender is careless or worse. Send to enough dead addresses and providers start filtering your mail, including the messages going to real, interested people.",
  },
  {
    type: "p",
    text: "Scraped and purchased lists are the usual culprits, but even a list you built carefully decays. People change jobs, businesses close, domains lapse. A list that was clean in spring won't be clean in autumn.",
  },
  { type: "h2", text: "Check the addresses" },
  {
    type: "p",
    text: "Address verification isn't built into the send itself, so a good agent runs it first. Ask for it explicitly, or put it in the agent's instructions so it happens every time:",
  },
  {
    type: "code",
    title: "Agent instructions",
    code: "Before any email campaign, run verify_emails on every recipient.\nRemove invalid addresses. List the unknown ones separately and\nask me whether to include them.",
  },
  {
    type: "p",
    text: "`verify_emails` returns a status for each address. Here's how we read them:",
  },
  {
    type: "table",
    head: ["Status", "What it means", "What to do"],
    rows: [
      ["`valid`", "The mailbox looks real and reachable", "Send"],
      ["`invalid`", "The address or domain won't accept mail", "Remove it, and update the lead"],
      ["`unknown`", "The server wouldn't confirm either way", "Send carefully, or leave out of cold campaigns"],
    ],
  },
  {
    type: "callout",
    tone: "warn",
    title: "Unknown isn't the same as fine",
    text: "Some domains accept every address, real or not, so they report as unknown. For a first cold campaign, it's usually worth leaving them out and adding them once you've seen your bounce rate.",
  },
  { type: "h2", text: "Check your sending domain" },
  {
    type: "p",
    text: "Clean recipients aren't enough if your own domain looks suspicious. `check_sending_domain` looks at how your domain is set up for sending, so you can catch missing or broken authentication records before they cost you a campaign. If it flags something, fix it with whoever manages your DNS before you send at volume.",
  },
  {
    type: "p",
    text: "`list_mail_accounts` is a useful companion: it confirms which mailbox the agent will actually send from, so you don't warm up one domain and send from another.",
  },
  { type: "h2", text: "Check the copy" },
  {
    type: "p",
    text: "Spam filters read your words too. `check_email_copy` reviews a draft for phrasing, formatting and link patterns that tend to cause trouble. Treat its notes like an editor's: most are worth taking, some you'll overrule for good reasons.",
  },
  {
    type: "quote",
    text: "Deliverability isn't one big fix. It's three small checks, every single time.",
    cite: "Sam Whitfield, Growth Lead",
  },
  { type: "h2", text: "Make it a habit" },
  {
    type: "p",
    text: "Checks only help if they happen. With Ask before sending switched on, the agent shows you its checks alongside the draft and recipients before anything goes out, so a skipped verification is obvious. A simple routine we recommend:",
  },
  {
    type: "ol",
    items: [
      "Verify every list before its first campaign, and again if it's more than a couple of months old.",
      "Check the sending domain whenever you add a new mail account.",
      "Run the copy check on every new draft.",
      "After sending, ask for `campaign_performance` and watch bounces and unsubscribes.",
    ],
  },
  {
    type: "p",
    text: "The deliverability category in the idea library has ready-made tasks for all of this.",
  },
];
