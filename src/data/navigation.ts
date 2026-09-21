import { BookOpen, Briefcase, Building, Mail, Newspaper, Plug, Sparkles, Zap } from "lucide-react";
import { APP_LINKS } from "@/lib/config";
import type { NavLink } from "@/types/marketing";
import { PRODUCTS } from "./products/catalog";

export const ROUTES = {
  home: "/",
  features: "/features",
  pricing: "/pricing",
  about: "/about",
  contact: "/contact",
  integrations: "/integrations",
  changelog: "/changelog",
  careers: "/careers",
  blog: "/blog",
  docs: "/docs",
  privacy: "/privacy",
  terms: "/terms",
  product: (slug: string) => `/${slug}`,
  post: (slug: string) => `/blog/${slug}`,
  job: (slug: string) => `/careers/${slug}`,
  doc: (slug: string) => `/docs/${slug}`,
} as const;

export type NavGroup = { label: string; links: NavLink[]; footer?: NavLink[] };

export const PRIMARY_NAV: (NavGroup | NavLink)[] = [
  {
    label: "Products",
    links: PRODUCTS.map((p) => ({ label: p.name, href: ROUTES.product(p.slug), description: p.tagline, Icon: p.Icon })),
    footer: [
      { label: "All features", href: ROUTES.features, Icon: Sparkles },
      { label: "Integrations", href: ROUTES.integrations, Icon: Plug },
    ],
  },
  { label: "Features", href: ROUTES.features },
  { label: "Pricing", href: ROUTES.pricing },
  {
    label: "Resources",
    links: [
      { label: "Documentation", href: ROUTES.docs, description: "Set up agents, channels and connectors.", Icon: BookOpen },
      { label: "Blog", href: ROUTES.blog, description: "Playbooks and product news.", Icon: Newspaper },
      { label: "Changelog", href: ROUTES.changelog, description: "What shipped, release by release.", Icon: Zap },
    ],
  },
  { label: "About", href: ROUTES.about },
];

export const isNavGroup = (item: NavGroup | NavLink): item is NavGroup => "links" in item;

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      ...PRODUCTS.map((p) => ({ label: p.name, href: ROUTES.product(p.slug) })),
      { label: "Pricing", href: ROUTES.pricing },
      { label: "Changelog", href: ROUTES.changelog },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: ROUTES.about },
      { label: "Careers", href: ROUTES.careers },
      { label: "Blog", href: ROUTES.blog },
      { label: "Contact", href: ROUTES.contact },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: ROUTES.docs },
      { label: "Integrations", href: ROUTES.integrations },
      { label: "Features", href: ROUTES.features },
      { label: "Open the app", href: APP_LINKS.login },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: ROUTES.privacy },
      { label: "Terms of Service", href: ROUTES.terms },
    ],
  },
];
