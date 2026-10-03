import { logo, type Integration } from "./types";

/** Contacts only, both ways. Nothing here creates or sends a campaign, so no description may imply it. */
const EMAIL_PLATFORM_ACCESS =
  "Your API key and the list you choose. Dexisphere imports that list's subscribed contacts as leads and adds or updates the leads you push to it. It doesn't create or send campaigns.";

const emailPlatform = (name: string, file: string, description: string, invertOnDark = false): Integration => ({
  name, category: "Email platforms", logo: logo(file, { invertOnDark }), auth: "API key", description, access: EMAIL_PLATFORM_ACCESS,
});

/** Read-only payment accounts: the agent sees sales; it can't move money. */
const payment = (name: string, file: string, description: string, credentials: string): Integration => ({
  name, category: "Payments", logo: logo(file), auth: "API key",
  description: `${description} Read-only: it sees your sales but can't move money.`,
  access: `${credentials}, used only to read your transactions, refunds, payouts and disputes, and the payment events (webhooks) ${name} sends us. Dexisphere never creates charges, refunds or payouts.`,
});

export const EMAIL_PLATFORM_INTEGRATIONS: Integration[] = [
  emailPlatform("Mailchimp", "mailchimp.png", "Import your audience, or push new leads into it."),
  emailPlatform("Brevo", "brevo.svg", "Import your Brevo list, or push new leads into it."),
  emailPlatform("Klaviyo", "klaviyo.png", "Import your Klaviyo list, or push leads into it.", true),
  emailPlatform("ConvertKit", "kit.svg", "Import your subscribers, or push leads to a form.", true),
  emailPlatform("ActiveCampaign", "activecampaign.png", "Import your contacts, or push leads into a list."),
  emailPlatform("MailerLite", "mailerlite.png", "Import a group, or push new leads into it."),
  emailPlatform("GetResponse", "getresponse.jpg", "Import a campaign's contacts, or push leads in."),
  emailPlatform("Systeme.io", "systeme.png", "Import your contacts, or push leads in as a tag."),
];

export const PAYMENT_INTEGRATIONS: Integration[] = [
  payment("Stripe", "stripe.svg", "Payments, refunds and payouts, with an alert when money lands.", "A secret or restricted key (we suggest a restricted, read-only key)"),
  payment("PayPal", "paypal.svg", "Transactions and disputes from your PayPal balance.", "Your app's client ID and secret, with Transaction Search on"),
  payment("Paystack", "paystack.svg", "Payments, refunds and settlements as they happen.", "Your secret key"),
  payment("Flutterwave", "flutterwave.png", "Multi-currency payments across Africa, in one feed.", "Your secret key"),
  payment("Paddle", "paddle.png", "Subscription revenue, renewals and refunds.", "A Paddle Billing API key"),
  payment("Lemon Squeezy", "lemon-squeezy.svg", "Orders, subscriptions and refunds from your store.", "Your API key"),
];
