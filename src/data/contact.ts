/**
 * PLACEHOLDER — reply-time promises and office hours are invented for layout.
 * Replace them with commitments the team can keep before launch.
 */
import { BookOpen, CreditCard, Handshake, KeyRound, LifeBuoy, Newspaper, type LucideIcon } from "lucide-react";
import { ROUTES } from "@/data/navigation";
import { APP_LINKS, CONTACT_EMAILS } from "@/lib/config";

export type ContactChannel = {
  title: string;
  description: string;
  email: string;
  replyTime: string;
  Icon: LucideIcon;
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    title: "Sales",
    description: "Picking a plan, agency and reseller setups, or a walkthrough for your team.",
    email: CONTACT_EMAILS.sales,
    replyTime: "Replies within 1 business day",
    Icon: Handshake,
  },
  {
    title: "Support",
    description: "Connectors, channels, licence codes or an agent that isn't behaving.",
    email: CONTACT_EMAILS.support,
    replyTime: "Replies within 4 business hours",
    Icon: LifeBuoy,
  },
  {
    title: "Press",
    description: "Interviews, product information and brand assets.",
    email: CONTACT_EMAILS.press,
    replyTime: "Replies within 2 business days",
    Icon: Newspaper,
  },
];

export type ContactTopic = { value: string; label: string; email: string };

/** The form's topic dropdown; each topic routes to the right inbox. */
export const CONTACT_TOPICS: ContactTopic[] = [
  { value: "sales", label: "Plans and pricing", email: CONTACT_EMAILS.sales },
  { value: "agency", label: "Agencies and reseller access", email: CONTACT_EMAILS.sales },
  { value: "support", label: "Product support", email: CONTACT_EMAILS.support },
  { value: "licence", label: "Licence codes and payments", email: CONTACT_EMAILS.support },
  { value: "press", label: "Press and media", email: CONTACT_EMAILS.press },
  { value: "privacy", label: "Privacy and data", email: CONTACT_EMAILS.privacy },
  { value: "careers", label: "Careers", email: CONTACT_EMAILS.careers },
];

export type SupportHours = { city: string; timeZone: string; hours: string };

export const SUPPORT_HOURS: SupportHours[] = [
  { city: "Lagos", timeZone: "WAT · UTC+1", hours: "Mon–Fri, 08:00–18:00" },
  { city: "London", timeZone: "BST · UTC+1", hours: "Mon–Fri, 09:00–17:30" },
  { city: "Austin", timeZone: "CDT · UTC−5", hours: "Mon–Fri, 09:00–17:00" },
];

export const QUICK_ANSWERS: { label: string; description: string; href: string; Icon: LucideIcon }[] = [
  { label: "Documentation", description: "Set up agents, channels and connectors.", href: ROUTES.docs, Icon: BookOpen },
  { label: "Pricing FAQ", description: "Lifetime licences, tokens and upgrades.", href: `${ROUTES.pricing}#faq`, Icon: CreditCard },
  { label: "Account access", description: "Reset your password in the app.", href: APP_LINKS.forgotPassword, Icon: KeyRound },
];
