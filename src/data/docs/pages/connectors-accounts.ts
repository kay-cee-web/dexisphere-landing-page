import type { ContentBlock } from "@/types/content";

/** The email platform, payment, social and work tool sections of the Connectors page. */
export const CONNECTOR_ACCOUNT_BLOCKS: ContentBlock[] = [
  { type: "h2", text: "Email platforms" },
  {
    type: "p",
    text: "Keep a list you already own in step with your pipeline. Add the platform's API key, then pick the list to sync from your real lists. It syncs **contacts only**, both ways: importing turns subscribers into leads, and pushing sends leads to the list. It never creates or sends a campaign, unsubscribed contacts are skipped on import, and only active leads are pushed. Ask an agent to run the sync, for example \"import my Mailchimp audience\".",
  },
  {
    type: "table",
    head: ["Platform", "What it calls a list"],
    rows: [
      ["Mailchimp", "Audience"],
      ["Brevo, Klaviyo, ActiveCampaign", "List"],
      ["ConvertKit", "Form"],
      ["MailerLite", "Group"],
      ["GetResponse", "Campaign"],
      ["Systeme.io", "Tag (no list to pick)"],
    ],
  },
  { type: "h2", text: "Payments" },
  {
    type: "p",
    text: "Connect **Stripe, PayPal, Paystack, Flutterwave, Paddle or Lemon Squeezy** with a key, and agents can tell you what came in, what was refunded and who paid. Payment connections are **read-only**: an agent sees your sales and can't move money. Dexisphere tests the key before saving it and never shows it back. Paddle and PayPal can point at their sandbox.",
  },
  {
    type: "p",
    text: "A connected card offers **Alerts**, **Test** and **Disconnect**. Alerts shows a webhook URL and steps to add it in your provider's dashboard, then lets you pick which events to hear about (payments, refunds, disputes, subscriptions, payouts), a WhatsApp number and a minimum amount.",
  },
  { type: "h2", text: "Social and ads" },
  {
    type: "p",
    text: "Connect **Facebook Page, Instagram, LinkedIn, X, YouTube or TikTok** by OAuth. One Meta sign-in covers your Page, the Instagram account linked to it and Meta Ads, so connecting either card connects both. Instagram needs a Business or Creator account linked to a Page. The matching ad accounts (Meta Ads, LinkedIn Ads, TikTok Ads, and Google Ads through Google) come with the same sign-in and are **read-only**.",
  },
  {
    type: "callout",
    tone: "info",
    title: "Publishing isn't on yet",
    text: "Agents can draft posts for your approval and read how your posts and ad spend are doing. Publishing to your accounts is waiting on each platform's review, so nothing goes out from Dexisphere for now.",
  },
  { type: "h2", text: "Work tools" },
  {
    type: "p",
    text: "Work tools let an agent tell you what changed without you opening anything. **Slack** and **Telegram channel** are places it posts; **Jira**, **GitHub** and **Shopify** are things it watches, read-only. It never writes to Jira, GitHub or Shopify.",
  },
  {
    type: "table",
    head: ["Tool", "What you add", "What it does"],
    rows: [
      ["Slack", "An incoming webhook URL", "Posts alerts and summaries to the channel the webhook belongs to."],
      ["Telegram channel", "A bot token and channel ID", "Posts updates to a channel you run. The bot must be an admin with **Post messages** on."],
      ["Jira", "Site, account email and API token", "Tells you about tickets assigned to you, mentions, status changes and due dates."],
      ["GitHub", "A fine-grained token with **Pull requests: Read** and **Issues: Read**", "Nudges you about review requests, assignments, mentions and failing checks."],
      ["Shopify", "Shop domain and an Admin API token with `read_orders` and `read_products`", "Tells you about new orders, low stock and refunds."],
    ],
  },
];
