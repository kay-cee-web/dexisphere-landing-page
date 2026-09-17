import { APP_LINKS } from "@/lib/config";

/**
 * Macrid's plans, the same tiers the Dexisphere app's "Upgrade plan" link sells
 * (transcribed from Macrid's settings/plans/_data/plans.js and macrid.com).
 *
 * Every plan is a ONE-TIME LIFETIME LICENCE: no monthly/yearly axis, nothing
 * renews. Paid plans go to checkout; the buyer redeems the licence code in the
 * app (REDEEM_URL). Field keys match the backend's package columns.
 * `null` means unlimited; `0` means the feature is off on that tier.
 */
export type Plan = {
  id: "free" | "solo" | "business" | "agency";
  name: string;
  price: number;
  tagline: string;
  cta: string;
  href: string;
  popular?: boolean;
  remove_branding: boolean;
  reseller: boolean;
  num_teams: number;
  num_emails: number;
  num_whatsapp: number;
  num_sms: number;
  num_funnel_campaigns: number | null;
  num_tokens: number;
  num_custom_domains: number;
  num_lead_search: number;
  num_email_verifications: number;
};

export const PLANS: Plan[] = [
  {
    id: "free", name: "Free Forever", price: 0, cta: "Get started free", href: APP_LINKS.register,
    tagline: "Try Dexisphere with no commitment. Great for testing the platform.",
    remove_branding: false, reseller: false, num_teams: 0, num_emails: 5, num_whatsapp: 10, num_sms: 10,
    num_funnel_campaigns: 1, num_tokens: 500, num_custom_domains: 0, num_lead_search: 25, num_email_verifications: 100,
  },
  {
    id: "solo", name: "Solo", price: 59, cta: "Get Solo",
    href: "https://macrid.lemonsqueezy.com/checkout/buy/cc9a4774-9ece-458a-99e6-f4852fa62824",
    tagline: "Perfect for solopreneurs and small campaigns.",
    remove_branding: true, reseller: false, num_teams: 1, num_emails: 5000, num_whatsapp: 1000, num_sms: 1000,
    num_funnel_campaigns: 10, num_tokens: 10000, num_custom_domains: 2, num_lead_search: 1000, num_email_verifications: 10000,
  },
  {
    id: "business", name: "Business", price: 129, cta: "Claim lifetime deal", popular: true,
    href: "https://macrid.lemonsqueezy.com/checkout/buy/38d3c94d-41b3-47db-bd3c-b8a8bbb00c12",
    tagline: "For growing businesses and power users.",
    remove_branding: true, reseller: true, num_teams: 5, num_emails: 25000, num_whatsapp: 10000, num_sms: 10000,
    num_funnel_campaigns: 50, num_tokens: 50000, num_custom_domains: 10, num_lead_search: 15000, num_email_verifications: 25000,
  },
  {
    id: "agency", name: "Agency", price: 249, cta: "Get Agency",
    href: "https://macrid.lemonsqueezy.com/checkout/buy/5deef1ed-78df-4411-bd6f-1161f957fc20",
    tagline: "For agencies running campaigns at scale.",
    remove_branding: true, reseller: true, num_teams: 20, num_emails: 60000, num_whatsapp: 25000, num_sms: 25000,
    num_funnel_campaigns: null, num_tokens: 100000, num_custom_domains: 50, num_lead_search: 60000, num_email_verifications: 60000,
  },
];

export type PlanFeatureKey = Exclude<keyof Plan, "id" | "name" | "price" | "tagline" | "cta" | "href" | "popular">;

/** Comparison-table rows, in the order macrid.com lists them. */
export const PLAN_FEATURES: { key: PlanFeatureKey; label: string }[] = [
  { key: "num_emails", label: "Email campaigns" },
  { key: "num_whatsapp", label: "WhatsApp campaigns" },
  { key: "num_sms", label: "SMS campaigns" },
  { key: "num_funnel_campaigns", label: "Funnel campaigns" },
  { key: "num_tokens", label: "AI tokens" },
  { key: "num_lead_search", label: "Lead searches" },
  { key: "num_email_verifications", label: "Email verifications" },
  { key: "num_teams", label: "Team members" },
  { key: "num_custom_domains", label: "Custom domains" },
  { key: "remove_branding", label: "Remove branding" },
  { key: "reseller", label: "Reseller access" },
];

/** The allowances shown on a plan card (with their mid-sentence wording), before "Everything in …". */
export const CARD_FEATURES: { key: PlanFeatureKey; phrase: string }[] = [
  { key: "num_emails", phrase: "email campaigns" },
  { key: "num_whatsapp", phrase: "WhatsApp campaigns" },
  { key: "num_sms", phrase: "SMS campaigns" },
  { key: "num_funnel_campaigns", phrase: "funnel campaigns" },
  { key: "num_tokens", phrase: "AI tokens" },
  { key: "num_lead_search", phrase: "lead searches" },
];

/** null = unlimited, 0 = off on this tier, booleans read as included / not. */
export function formatAllowance(value: number | boolean | null) {
  if (value === null) return "Unlimited";
  if (typeof value === "boolean") return value ? "Included" : "Not included";
  return value.toLocaleString("en-US");
}
