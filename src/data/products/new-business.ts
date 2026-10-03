/** PLACEHOLDER — demo run figures (counts, token usage, domains, list names) are sample values; replace before launch. */
import { CalendarClock, CopyCheck, Hand, ListPlus, MailCheck, MapPin, MessageSquare, Receipt, RefreshCw, Send, ShieldCheck, Target } from "lucide-react";
import type { ProductContent } from "./types";

export const NEW_BUSINESS_CONTENT: ProductContent = {
  meta: {
    title: "New business",
    description: "Find customers and write to them from one sentence. Dexisphere searches, scores, writes the emails, checks your domain and sends from your own addresses.",
  },
  hero: {
    headline: "Find customers and write to them, from one sentence.",
    lede: "It searches. Scores what it finds. Writes the emails. Checks your sending domain won't put you in spam, and holds the send if it would. Email, SMS or WhatsApp, from your own numbers and your own addresses.",
    bullets: [
      "Local businesses by niche and area, through Google Places",
      "Duplicates caught before they reach your lists",
      "SPF, DKIM and DMARC checked before anything goes out",
      "Nothing sent until you say send, if you want it that way",
    ],
  },
  demo: {
    agent: "New business",
    model: "claude-sonnet-5",
    task: "Find dentists in Austin and email the best twenty. Ask me before anything goes out.",
    tools: [
      { name: "find_prospects", detail: "dentists · Austin", result: "64 found" },
      { name: "find_duplicates", detail: "Checking against your lists", result: "8 on file" },
      { name: "score_leads", detail: "Ranking the rest", result: "top 20" },
      { name: "check_sending_domain", detail: "SPF, DKIM and DMARC", result: "pass" },
    ],
    reply: "Kept 20, dropped 44 (no site, closed or already on file). Twenty emails written, one per practice, sending from hello@yourstudio.com. Your domain passes all three checks. Say send when you're happy.",
    receipt: {
      area: "New business",
      badge: { label: "Draft", tone: "warn" },
      stats: [
        { label: "Found", value: 64 },
        { label: "Kept", value: 20 },
        { label: "Sent", value: 0 },
      ],
    },
    approval: true,
    usage: "2,310 tokens · 97,690 left",
  },
  capabilities: {
    title: "From a search to a sent email, without the spreadsheet",
    lede: "The clicking you'd do across a prospect finder, a CRM and your mailbox, done in one go.",
    items: [
      { title: "It searches", description: "Name the kind of business and where. It brings back phone, website and address, and drops the ones you can't contact.", Icon: MapPin, meta: "find_prospects" },
      { title: "It scores them", description: "Leads are ranked on what's on file, so the best fits are the ones that get written to.", Icon: Target, meta: "score_leads" },
      { title: "No one twice", description: "Every result is checked against the people you already have, and duplicates are merged, not filed again.", Icon: CopyCheck, meta: "find_duplicates · merge_duplicates" },
      { title: "It writes the emails", description: "One per business, in your voice, with a real reason to reply. Checked against spam triggers before you see it.", Icon: MailCheck, meta: "check_email_copy" },
      { title: "It won't burn your domain", description: "Addresses are verified and your sending domain is checked. If the send would land in spam, it holds it.", Icon: ShieldCheck, meta: "verify_emails · check_sending_domain" },
      { title: "Your addresses, your numbers", description: "Email from Gmail, Outlook or any mailbox. SMS from your Twilio number. WhatsApp from your business number.", Icon: Send, meta: "send_email · send_sms · send_whatsapp" },
    ],
  },
  steps: {
    title: "One sentence in, a campaign out",
    lede: "No filters to set up, no lists to dedupe, no copy to stare at.",
    items: [
      { title: "Say who you're after", description: "“Find dentists in Austin and email the best twenty.” The niche, the area and what makes a good one.", Icon: MessageSquare },
      { title: "It does the legwork", description: "Searches, drops the dead ends, files the rest into a list, writes the emails and checks your domain.", Icon: ListPlus },
      { title: "You say send", description: "See the draft, the recipients and the checks. Send, don't send, or ask for changes.", Icon: Hand },
    ],
  },
  useCases: {
    title: "What people hand over first",
    lede: "Real tasks from the app's idea library. Pick one, change the niche, send.",
    items: [
      { title: "Weekly prospect run", task: "Every Monday, search my niche and area, score the businesses I could sell to, and file the best of them into a fresh list.", outcome: "A scored list waiting at the start of every week.", Icon: CalendarClock },
      { title: "Cold email drafting", task: "Before a campaign goes out, write the subject lines and bodies for that segment in my voice, each with a real reason to reply.", outcome: "Copy that sounds like you, checked before it's sent.", Icon: MailCheck },
      { title: "Non-reply chase", task: "Three days after a campaign, follow up with everyone who didn't answer, on the channel they're most likely to read.", outcome: "The follow-up you'd mean to send, actually sent.", Icon: RefreshCw },
      { title: "Pipeline digest", task: "Every Monday, summarise the pipeline and flag the deals that haven't moved in two weeks with the next step on each.", outcome: "The stalled deals, before they go cold.", Icon: Receipt },
    ],
  },
  faqs: [
    { question: "Where do the businesses come from?", answer: "Google Places, by type and location. You can use the shared Places key, which has a daily limit, or connect your own key for more searches." },
    { question: "Will it email people I already have?", answer: "Not twice. Results are checked against your existing leads, and duplicates are merged into the record you already have." },
    { question: "Already have a list in Mailchimp or Brevo?", answer: "Connect it. Dexisphere pulls your contacts in, pushes new leads back out, and drops anyone who unsubscribed. It works with Mailchimp, Brevo, Klaviyo, ConvertKit, ActiveCampaign, MailerLite, GetResponse and Systeme.io." },
    { question: "Will it send without asking?", answer: "Only if you let it. Turn on Ask before sending and it shows you the draft, the recipients and its checks, then waits. Each agent also has a sending switch that stops it sending anything at all." },
    { question: "Which addresses does it send from?", answer: "Yours. Connect Gmail, Outlook or any mailbox over SMTP for email, your Twilio number for SMS (or use the shared sender), and your WhatsApp Business number for broadcasts." },
  ],
  cta: {
    title: "Start the week with people to write to.",
    lede: "Say who you sell to and where. It finds them, writes to them, and waits for your yes.",
  },
};
