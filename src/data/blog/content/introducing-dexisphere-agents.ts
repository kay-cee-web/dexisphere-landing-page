/** PLACEHOLDER — sample article body written for the launch mock-up; replace before launch. */
import { APP_LINKS } from "@/lib/config";
import type { ContentBlock } from "@/types/content";

export const blocks: ContentBlock[] = [
  {
    type: "p",
    text: "Most sales and marketing software gives you a place to do the work. You still do the clicking: search for prospects, clean the list, write the email, move the deal, book the call. Dexisphere starts from a different question. What if you described the job once, and an agent did the clicking for you?",
  },
  {
    type: "p",
    text: "Today we're opening Dexisphere Agents to everyone. You tell an agent what you'd otherwise do by hand, it does the work with real tools, and it shows you exactly what changed.",
  },
  { type: "h2", text: "Tell it the job" },
  {
    type: "p",
    text: "You create an agent from a plain-language task. There's no flow builder and no trigger-action wiring to learn. If you can explain the job to a new hire, you can explain it to an agent.",
  },
  {
    type: "code",
    title: "New agent",
    code: "Find 40 dental clinics in Leeds with a website but no online booking.\nAdd them to a list called \"Leeds dental – Sept\", score them,\nand draft a short intro email for the top 15. Don't send anything yet.",
  },
  {
    type: "p",
    text: "If you'd rather not start from a blank page, the idea library has ready-made tasks for prospecting, funnels, outreach, CRM, deliverability, analytics and business admin. Pick one, adjust it, and go.",
  },
  { type: "h2", text: "Real tools, not advice" },
  {
    type: "p",
    text: "A chatbot that tells you how to build a prospect list is a nice tutorial. An agent that builds the list is a colleague. Every Dexisphere agent runs server-side with a toolbox that reaches into your actual workspace:",
  },
  {
    type: "ul",
    items: [
      "**Prospecting and funnels:** `find_prospects`, `create_funnel`, `update_funnel`.",
      "**Records and lists:** `search_leads`, `create_lead`, `score_leads`, `merge_duplicates`, `add_to_list`.",
      "**Pipeline:** `create_deal`, `move_deal_stage`, `pipeline_summary`.",
      "**Outreach:** `send_email`, `send_sms`, `send_whatsapp`, `verify_emails`, `campaign_performance`.",
      "**Tasks, calendar and automation:** `create_task`, `book_appointment`, `schedule_automation`.",
    ],
  },
  {
    type: "p",
    text: "You can pick the model each agent uses, from the Anthropic Claude, OpenAI GPT and Google Gemini families, or bring your own AI key.",
  },
  { type: "h2", text: "A receipt for every turn" },
  {
    type: "p",
    text: "Letting software act on your pipeline only works if you can see what it did. So after every chat turn, Dexisphere compares your records before and after and lists the changes under the reply: leads added, deals moved, tasks created, appointments booked, campaigns and funnels touched. Each line links straight to the record.",
  },
  {
    type: "quote",
    text: "We didn't want you to trust the agent's summary of what it did. We wanted you to see the diff.",
    cite: "Ada Nwosu, Head of Product",
  },
  {
    type: "p",
    text: "If something changed elsewhere in your workspace during the turn, say a teammate edited a deal, the receipt says so rather than quietly taking credit.",
  },
  { type: "h2", text: "You hold the send button" },
  {
    type: "p",
    text: "Research and drafting are cheap to undo. A sent email isn't. With **Ask before sending** switched on, an agent shows you the draft, the recipients and the checks it ran, then waits. You answer with Send, Don't send, or Ask for changes.",
  },
  {
    type: "p",
    text: "Every agent also has a sending switch. Turn it off and the agent keeps researching and drafting, but nothing leaves the building. Its settings show how many messages were sent and blocked in the last 24 hours.",
  },
  {
    type: "callout",
    tone: "good",
    title: "Talk to it anywhere",
    text: "Pair an agent with WhatsApp, Telegram or the browser extension using a 6-character code, then message it from your phone. You can disconnect at any time.",
  },
  { type: "h2", text: "What it costs" },
  {
    type: "p",
    text: `Each chat turn uses tokens, and every reply shows what it used and what's left. Plans are lifetime licences: start on Free Forever, or buy Solo, Business or Agency once and redeem the code in the app. No subscriptions. See [pricing](/pricing) for the details, or [start free](${APP_LINKS.register}) and give your first agent a job.`,
  },
];
