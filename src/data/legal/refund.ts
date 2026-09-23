/** PLACEHOLDER — draft legal text for layout only; have counsel review and replace before launch. */
import { CONTACT_EMAILS } from "@/lib/config";
import { ROUTES } from "@/data/navigation";
import type { LegalDocument } from "./types";

const SUPPORT = `[${CONTACT_EMAILS.support}](mailto:${CONTACT_EMAILS.support})`;

export const REFUND_POLICY: LegalDocument = {
  title: "Refund Policy",
  description: "Our 30-day money-back guarantee on lifetime licences: what it covers, how to ask for a refund and what happens to your account afterwards.",
  lastUpdated: "September 23, 2026",
  lastUpdatedIso: "2026-09-23",
  summary: [
    "Every paid plan comes with a 30-day money-back guarantee.",
    "You don't need to give a reason. Just email us within 30 days of buying.",
    "Refunds go back to your original payment method within 5 to 7 business days.",
    "After a refund your licence code stops working and your account moves back to your previous plan or Free.",
  ],
  sections: [
    {
      title: "Our 30-day guarantee",
      blocks: [
        {
          type: "p",
          text: `If you're not happy with Dexisphere for any reason, ask for a refund within 30 days of your purchase and we'll return the full amount you paid. Paid plans are one-time lifetime licences (see [pricing](${ROUTES.pricing})), so there are no renewals to cancel.`,
        },
      ],
    },
    {
      title: "What's covered",
      blocks: [
        {
          type: "ul",
          items: [
            "New lifetime licences on any paid plan: Solo, Business and Agency.",
            "Upgrades from one lifetime plan to a higher one. We refund the upgrade payment.",
            "Other one-time purchases, such as extra allowances or add-ons.",
          ],
        },
        { type: "p", text: "The Free Forever plan costs nothing, so there's nothing to refund." },
      ],
    },
    {
      title: "What isn't covered",
      blocks: [
        {
          type: "ul",
          items: [
            "Requests made more than 30 days after the purchase date.",
            `Purchases on accounts we've suspended or closed for breaking our [Terms of Service](${ROUTES.terms}), including fraud, abuse of refunds or spam sent through your agents.`,
          ],
        },
      ],
    },
    {
      title: "How to request a refund",
      blocks: [
        {
          type: "ol",
          items: [
            `Email ${SUPPORT} within 30 days of your purchase date, or pick "Licence codes and payments" on our [contact page](${ROUTES.contact}).`,
            "Include your full name, the email address on your Dexisphere account and, if you have it, your order number or licence code.",
            "That's it. You don't need to tell us why.",
          ],
        },
      ],
    },
    {
      title: "Processing time",
      blocks: [
        {
          type: "p",
          text: "We process approved refunds within 5 to 7 business days and email you when it's done. The money goes back to the payment method you used at checkout. Your bank or card issuer may take a few extra days to show it.",
        },
      ],
    },
    {
      title: "What happens after a refund",
      blocks: [
        {
          type: "ul",
          items: [
            "The refunded licence code is deactivated and can't be redeemed again.",
            "If you refunded an upgrade, your account goes back to the plan you had before.",
            "If you refunded your only paid plan, your account moves to Free Forever. Features and allowances beyond the Free plan stop working, and agents over the Free limits are paused.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Export what you need",
          text: "We may delete workspace data tied to the refunded plan, including agents, contacts, campaigns and funnels, 30 days after the refund is complete. Export anything you want to keep before then.",
        },
      ],
    },
    {
      title: "Contact us",
      blocks: [
        {
          type: "p",
          text: `Questions about this policy or a refund? Email ${SUPPORT}. We aim to reply within one business day.`,
        },
      ],
    },
  ],
};
