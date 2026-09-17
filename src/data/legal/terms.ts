/** PLACEHOLDER — draft legal text for layout only; have counsel review and replace before launch. */
import { CONTACT_EMAILS, REDEEM_URL } from "@/lib/config";
import { ROUTES } from "@/data/navigation";
import { TERMS_SECTIONS_LATER } from "./terms-later";
import type { LegalDocument, LegalSection } from "./types";

const SECTIONS_EARLY: LegalSection[] = [
  {
    title: "Acceptance of these terms",
    blocks: [
      {
        type: "p",
        text: `These terms govern your use of Dexisphere, including the website and the app. By creating an account or using the service, you agree to them and to our [Privacy Policy](${ROUTES.privacy}). If you use Dexisphere for a company, you confirm you can accept these terms on its behalf.`,
      },
      { type: "p", text: "You must be at least 18, or the age of majority where you live, to use Dexisphere." },
    ],
  },
  {
    title: "Your account",
    blocks: [
      {
        type: "ul",
        items: [
          "Give accurate details when you sign up, and verify your email address.",
          "Keep your password safe. You're responsible for everything done through your account, including by your agents.",
          `Tell us straight away at [${CONTACT_EMAILS.support}](mailto:${CONTACT_EMAILS.support}) if you think someone else has accessed it.`,
          "We may suspend or close accounts that break these terms or put the service or other people at risk.",
        ],
      },
    ],
  },
  {
    title: "Licences and payments",
    blocks: [
      {
        type: "p",
        text: `Dexisphere is sold as lifetime licences. The Free Forever plan costs nothing. Paid plans (see [pricing](${ROUTES.pricing})) are a one-time payment: there's no subscription and nothing renews.`,
      },
      {
        type: "ul",
        items: [
          `After checkout you receive a licence code. Redeem it on [the plans page](${REDEEM_URL}) to apply the plan to your account.`,
          "\"Lifetime\" means for as long as we operate the Dexisphere service. It isn't a licence to the software itself.",
          "Each plan comes with the allowances listed at purchase, such as tokens, campaigns and lead searches. When an allowance is used up, the related features stop until you upgrade.",
          "Licence codes are for the buyer's own use. Don't resell or share them unless your plan includes reseller access.",
          "Refunds follow the policy shown at checkout. Taxes are added where required.",
        ],
      },
    ],
  },
  {
    title: "Acceptable use",
    blocks: [
      {
        type: "p",
        text: "Dexisphere helps you reach real people, so how you use it matters. You agree not to use it, or let your agents use it, to:",
      },
      {
        type: "ul",
        items: [
          "send messages to people who haven't consented where consent is required, or ignore opt-outs and unsubscribe requests;",
          "break anti-spam and marketing laws such as CAN-SPAM, GDPR and ePrivacy rules, CASL or the TCPA;",
          "break the policies of the platforms you send through, including Meta's WhatsApp Business policies, Twilio's acceptable use policy and messaging rules, and your email provider's terms;",
          "send misleading, harassing, hateful, illegal or fraudulent content, or impersonate anyone;",
          "collect or use personal data in ways the law doesn't allow;",
          "probe, overload or get around the limits and security of the service, or resell it without permission.",
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "You are the sender",
        text: "Messages your agents send go out under your name, from your connected accounts. You're responsible for having a lawful basis to contact each recipient, for including a working unsubscribe option in marketing email (the `{unsubscribe}` merge tag), and for honouring opt-outs.",
      },
    ],
  },
  {
    title: "Your content and connected accounts",
    blocks: [
      {
        type: "p",
        text: "You own your content: your messages, instructions, images, workspace records and the outputs your agents produce for you. You give us permission to host, process and transmit it only as needed to provide and support the service, including sending it to the AI providers and services involved.",
      },
      {
        type: "ul",
        items: [
          "You confirm you have the rights and permissions for the content and contact data you bring into Dexisphere.",
          "When you connect an account, you authorise Dexisphere and your agents to act in it as you instruct, for example sending email from your mailbox.",
          "You can disconnect accounts, unlink channels and delete agents or records at any time.",
        ],
      },
    ],
  },
];

export const TERMS: LegalDocument = {
  title: "Terms of Service",
  description: "The agreement between you and Dexisphere: your account, lifetime licences, responsible outreach, AI output and our responsibilities.",
  lastUpdated: "September 1, 2026",
  lastUpdatedIso: "2026-09-01",
  summary: [
    "Paid plans are one-time lifetime licences. Nothing renews.",
    "You own your content and workspace data.",
    "Only contact people you're allowed to contact, and follow anti-spam laws and WhatsApp, Twilio and Meta policies.",
    "Agents can make mistakes. You're responsible for what they send, so use Ask before sending.",
    "The service is provided as is, and our liability is limited.",
  ],
  sections: [...SECTIONS_EARLY, ...TERMS_SECTIONS_LATER],
};
