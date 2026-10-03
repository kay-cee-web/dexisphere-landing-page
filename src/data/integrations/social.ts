import { Globe } from "lucide-react";
import { logo, type Integration } from "./types";

/**
 * Publishing is blocked pending each platform's review, so nothing here may promise that an agent posts.
 * Each grant also gives read-only access to the matching ad account.
 */
const NO_PUBLISHING = "Dexisphere doesn't publish to it.";

export const SOCIAL_INTEGRATIONS: Integration[] = [
  {
    name: "Facebook Page", category: "Social & ads", logo: logo("facebook.svg"), auth: "OAuth",
    description: "Your agent drafts posts for your approval and reads how your Page and Meta ads are doing.",
    access: `The Pages you choose, their posts and stats, and read-only access to your Meta ad accounts' spend and results. One Meta grant covers your Page, the Instagram account linked to it and Meta Ads. ${NO_PUBLISHING}`,
  },
  {
    name: "Instagram", category: "Social & ads", logo: logo("instagram.svg"), auth: "OAuth",
    description: "Drafts for your approval, and how your posts are doing. Needs a Business or Creator account.",
    access: `The Instagram Business or Creator account linked to your Facebook Page, its posts and stats, through the same Meta grant as your Page. ${NO_PUBLISHING}`,
  },
  {
    name: "LinkedIn", category: "Social & ads", logo: logo("linkedin.svg"), auth: "OAuth",
    description: "Drafts for your approval, and how your posts and LinkedIn ads are doing.",
    access: `Your LinkedIn profile, your posts and their stats, and read-only access to your LinkedIn Ads accounts' spend and results. ${NO_PUBLISHING}`,
  },
  {
    name: "X", category: "Social & ads", logo: logo("x.svg", { invertOnDark: true }), auth: "OAuth",
    description: "Drafts for your approval, and how your posts are doing.",
    access: `Your X profile, your posts and their stats. ${NO_PUBLISHING}`,
  },
  {
    name: "YouTube", category: "Social & ads", logo: logo("youtube.svg"), auth: "OAuth",
    description: "Your channel's numbers, and Google Ads spend, read-only.",
    access: `Your YouTube channel, its videos and their stats, through your Google sign-in, which also gives read-only access to your Google Ads spend and results. ${NO_PUBLISHING}`,
  },
  {
    name: "TikTok", category: "Social & ads", logo: logo("tiktok.svg", { darkFile: "tiktok-dark.svg" }), auth: "OAuth",
    description: "Drafts for your approval, and how your videos and TikTok ads are doing.",
    access: `Your TikTok profile, your videos and their stats, and read-only access to your TikTok Ads accounts' spend and results. ${NO_PUBLISHING}`,
  },
];

/** `speak` tools are where it posts; `watch` tools are read, never written to. */
export const WORK_TOOL_INTEGRATIONS: Integration[] = [
  {
    name: "Slack", category: "Work tools", logo: logo("slack.svg"), auth: "API key",
    description: "Post alerts and summaries where your team reads.",
    access: "An incoming webhook URL for the one channel you pick, used only to post messages there. It can't read anything in Slack.",
  },
  {
    name: "Telegram channel", category: "Work tools", logo: logo("telegram.svg"), auth: "API key",
    description: "Post updates to a Telegram channel you run.",
    access: "Your bot's token and the channel's ID, used only to post updates to that channel. The bot must be a channel admin with Post messages on.",
  },
  {
    name: "Jira", category: "Work tools", logo: logo("jira.svg"), auth: "API key",
    description: "Hear about tickets assigned to you, without opening Jira.",
    access: "Your Jira site, account email and API token, used only to read issues: what's assigned to you, mentions, status changes and due dates. Dexisphere doesn't change anything in Jira.",
  },
  {
    name: "GitHub", category: "Work tools", logo: logo("github.svg", { invertOnDark: true }), auth: "API key",
    description: "Get nudged about pull requests waiting for your review.",
    access: "A fine-grained personal access token with read access to pull requests and issues: review requests, assignments, mentions and failing checks. Dexisphere doesn't change anything on GitHub.",
  },
  {
    name: "Shopify", category: "Work tools", logo: logo("shopify.svg"), auth: "API key",
    description: "Hear about new orders, low stock and refunds.",
    access: "Your shop domain and an Admin API token with read_orders and read_products: orders, refunds, products and stock levels. Dexisphere can't change your store.",
  },
];

export const CHANNEL_INTEGRATIONS: Integration[] = [
  {
    name: "WhatsApp", category: "Agent channels", logo: logo("whatsapp.svg"), auth: "Pairing code",
    description: "Message your agent and get alerts and answers on WhatsApp.",
    access: "Your phone number (shown masked) and the messages you exchange with your agent.",
  },
  {
    name: "Telegram", category: "Agent channels", logo: logo("telegram.svg"), auth: "Pairing code",
    description: "Chat with your agent through the Dexisphere bot.",
    access: "Your Telegram chat and the messages you exchange with your agent.",
  },
  {
    name: "Browser extension", category: "Agent channels", Icon: Globe, auth: "Pairing code",
    description: "Keep your agent in a side panel and ask about the page you're on.",
    access: "The messages you exchange with your agent from the side panel, and the page you're on when you ask about it.",
  },
];
