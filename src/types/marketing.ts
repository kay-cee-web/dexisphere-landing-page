import type { LucideIcon } from "lucide-react";

export type NavLink = { label: string; href: string; description?: string; Icon?: LucideIcon };

export type Feature = {
  title: string;
  description: string;
  Icon: LucideIcon;
  /** Optional mono detail shown under the description, e.g. a tool name. */
  meta?: string;
};

export type Step = { title: string; description: string; Icon?: LucideIcon };

export type Faq = { question: string; answer: string };

export type Testimonial = { quote: string; name: string; role: string; company: string };

export type Stat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  /** Decimal places when counting up. */
  decimals?: number;
};

export type Cta = { label: string; href: string };
