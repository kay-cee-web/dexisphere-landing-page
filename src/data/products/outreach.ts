/** PLACEHOLDER — demo run figures (counts, token usage, domains, list names) are sample values; replace before launch. */
import { Hand, Inbox, MailCheck, PenLine, Repeat, ScanSearch, Send, ShieldCheck, Sparkles } from "lucide-react";
import type { ProductContent } from "./types";

export const OUTREACH_CONTENT: ProductContent = {
  meta: {
    title: "Outreach",
    description: "AI agents that draft and send email, SMS and WhatsApp campaigns, verify addresses and check your domain first, and ask before anything goes out.",
  },
  hero: {
    headline: "Campaigns that check themselves before they send.",
    lede: "Pick a list and say what you want to say. The agent drafts the message, verifies the addresses, checks your domain and copy, then waits for your go-ahead.",
    bullets: [
      "Email from your own mailbox, SMS and WhatsApp in one place",
      "Invalid and risky addresses held back before sending",
      "SPF, DKIM and DMARC checked on your sending domain",
      "Ask before sending: see the draft, the recipients and the checks",
    ],
  },
  demo: {
    agent: "Outreach agent",
    model: "claude-sonnet-5",
    task: "Email the Austin dental clinics list about our new online booking page. Ask me before anything goes out.",
    tools: [
      { name: "verify_emails", detail: "Checking 31 addresses" },
      { name: "check_sending_domain", detail: "SPF, DKIM and DMARC on yourstudio.com" },
      { name: "check_email_copy", detail: "Subject and body against spam triggers" },
    ],
    reply: "Draft ready: “A quicker way for your patients to book.” 28 addresses are valid and 3 risky ones are held back. Your domain passes all three checks. Say send when you're happy.",
    receipt: {
      area: "Outreach · Email",
      badge: { label: "Draft", tone: "warn" },
      stats: [
        { label: "Recipients", value: 28 },
        { label: "Held back", value: 3 },
        { label: "Sent", value: 0 },
      ],
    },
    approval: true,
    usage: "1,960 tokens · 95,900 left",
  },
  capabilities: {
    title: "Every channel, with the checks built in",
    lede: "The agent does the sending and the diligence you'd normally skip when you're busy.",
    items: [
      { title: "Email, SMS and WhatsApp", description: "Send from your connected mailbox, by SMS on your Twilio number or the shared sender, or through WhatsApp Business.", Icon: Send, meta: "send_email · send_sms · send_whatsapp" },
      { title: "Addresses verified first", description: "Addresses are checked before a campaign leaves, and invalid or risky ones are held back to protect your reputation.", Icon: MailCheck, meta: "verify_emails" },
      { title: "Domain health checks", description: "SPF, DKIM and DMARC are checked on the domain you send from before a campaign leaves.", Icon: ShieldCheck, meta: "check_sending_domain" },
      { title: "Copy that passes filters", description: "Subject lines and phrases likely to trip spam filters are flagged, with a rewrite beside them.", Icon: ScanSearch, meta: "check_email_copy" },
      { title: "Ask before sending", description: "Turn it on and the agent shows the draft, recipients and checks, then waits for Send, Don't send or your changes.", Icon: Hand, meta: "Send · Don't send · Ask for changes" },
      { title: "Replies and results", description: "The agent reads replies in your inbox and reports opens, clicks and delivery for each campaign.", Icon: Inbox, meta: "read_inbox · campaign_performance" },
    ],
  },
  steps: {
    title: "Brief it, check it, send it",
    lede: "You stay the one who says go. The agent does everything around it.",
    items: [
      { title: "Pick the list and the message", description: "Name the list and what you want to say. The agent drafts subject lines and bodies in your voice, with merge tags.", Icon: PenLine },
      { title: "Checks run first", description: "Addresses are verified, your sending domain and copy are checked, and anything risky is held back.", Icon: MailCheck },
      { title: "You say send", description: "Approve from the bar, ask for changes, or let a trusted agent send on its own. The receipt lists every campaign it created.", Icon: Send },
    ],
  },
  useCases: {
    title: "Outreach tasks that work end to end today",
    lede: "Real tasks from the app's idea library, ready to send to an agent.",
    items: [
      { title: "Cold email drafting", task: "Before a campaign goes out, write the subject lines and bodies for that segment in my voice, each with a real reason to reply.", outcome: "Drafts per segment you can approve, edit or send back with notes.", Icon: Sparkles },
      { title: "Campaign launch", task: "When I pick a list, build the campaign from it and queue it through my connected mailbox with tracking on.", outcome: "A campaign built and queued from your own mailbox, shown on the receipt.", Icon: Send },
      { title: "Non-reply chase", task: "Three days after a campaign, follow up with everyone who didn't answer, on the channel they're most likely to read.", outcome: "Follow-ups that go out on time instead of when you remember.", Icon: Repeat },
      { title: "Spam-filter copy check", task: "Before I send, flag the subject lines and phrases likely to trip spam filters and show me a rewrite beside them.", outcome: "Cleaner copy, side by side with the original, before anything leaves.", Icon: ScanSearch },
    ],
  },
  faqs: [
    { question: "Which channels can the agent send on?", answer: "Email through your connected SMTP account, Gmail or Outlook; SMS through your own Twilio number or the shared sender if you haven't connected one; and WhatsApp through your WhatsApp Business connection." },
    { question: "Can I review everything before it goes out?", answer: "Yes. Turn on Ask before sending and the agent shows you the draft, the recipients and the checks, then waits. Reply Send, Don't send or Ask for changes from the bar above the composer." },
    { question: "How do I stop an agent from sending?", answer: "Switch sending off in the agent's settings. It keeps researching and drafting, but nothing goes out, and settings show how many sends were made and blocked in the last 24 hours." },
    { question: "Can it personalise emails?", answer: "Yes. Emails support the merge tags {username}, {fullname}, {email}, {company}, {date} and {unsubscribe}, and the agent writes copy for the segment you describe." },
    { question: "Does it send from my own accounts?", answer: "Yes. Email goes out from the mailboxes you connect, so replies land in your inbox and your domain's reputation is the one that counts." },
  ],
  cta: {
    title: "Send campaigns you'd sign off on.",
    lede: "Your agent drafts, verifies and checks every campaign, then asks before it sends.",
  },
};
