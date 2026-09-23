/** PLACEHOLDER — draft legal text for layout only; have counsel review and replace before launch. */
import { CONTACT_EMAILS } from "@/lib/config";
import type { LegalSection } from "./types";

const privacyMail = `[${CONTACT_EMAILS.privacy}](mailto:${CONTACT_EMAILS.privacy})`;

/** Privacy Policy sections 7–11. */
export const PRIVACY_SECTIONS_LATER: LegalSection[] = [
  {
    title: "Security",
    blocks: [
      {
        type: "ul",
        items: [
          "Data travels over encrypted HTTPS connections between your browser, the app and our providers.",
          "Connector credentials are stored on the server and used by your agents' tools. They aren't shown back in chat.",
          "Access to production data is limited to the people who need it to run and support the service.",
          "Your session is a sign-in token kept in your browser. Signing out removes it from that browser.",
        ],
      },
      {
        type: "p",
        text: `No system is completely secure. Use a strong, unique password, sign out on shared devices, and tell us at ${privacyMail} if you believe your account or data has been compromised.`,
      },
    ],
  },
  {
    title: "International transfers",
    blocks: [
      {
        type: "p",
        text: "We and our providers operate in several countries, including the United States, so your information may be processed outside the country where you live. Where the law requires it, we rely on appropriate safeguards for these transfers, such as standard contractual clauses.",
      },
    ],
  },
  {
    title: "Your rights",
    blocks: [
      { type: "p", text: "Depending on where you live, you may have the right to:" },
      {
        type: "ul",
        items: [
          "access the personal information we hold about you, and get a copy in a portable format;",
          "correct information that's wrong, or delete it;",
          "object to or restrict certain processing, and withdraw consent where we rely on it;",
          "complain to your local data protection authority.",
        ],
      },
      {
        type: "p",
        text: `Much of this you can do yourself: edit or delete agents, disconnect channels and connectors, and delete records. For anything else, email ${privacyMail} from the address on your account. We'll respond within the time the law allows.`,
      },
      {
        type: "callout",
        tone: "info",
        title: "People in your lists",
        text: "For contact data you upload or your agents collect, you decide how it's used and we process it on your behalf. If someone in your lists asks us about their data, we'll refer them to you, and we'll help you respond.",
      },
    ],
  },
  {
    title: "Cookies and local storage",
    blocks: [
      {
        type: "p",
        text: "We keep browser storage to the minimum the site and app need. We don't use advertising cookies.",
      },
      {
        type: "table",
        head: ["Where", "Key", "Purpose"],
        rows: [
          ["This website", "`theme`", "Remembers whether you chose light, dark or system theme."],
          ["The app", "`token`", "Keeps you signed in. Removed when you sign out."],
          ["The app", "`redirectAfterLogin`", "Returns you to the page you were on if your session ends."],
        ],
      },
      {
        type: "p",
        text: "You can clear these at any time in your browser settings. Clearing the app's storage signs you out. If we add analytics or other cookies, we'll update this section first.",
      },
    ],
  },
  {
    title: "Changes and contact",
    blocks: [
      {
        type: "p",
        text: "We may update this policy as the product changes. We'll change the \"Last updated\" date above, and for significant changes we'll let you know by email or in the app before they take effect.",
      },
      {
        type: "p",
        text: `Questions, requests or complaints about privacy: ${privacyMail}. For help with your account, email [${CONTACT_EMAILS.support}](mailto:${CONTACT_EMAILS.support}).`,
      },
    ],
  },
];
