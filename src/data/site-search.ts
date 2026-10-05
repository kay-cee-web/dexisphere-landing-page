import { POSTS } from "./blog/posts";
import { DOC_SEARCH_INDEX } from "./docs";
import type { SearchEntry } from "./docs/types";
import { ROUTES } from "./navigation";
import { PRODUCTS } from "./products/catalog";

const page = (href: string, title: string, description: string): SearchEntry => ({
  href,
  title,
  description,
  group: "Pages",
  headings: [],
});

const PAGES: SearchEntry[] = [
  page(ROUTES.features, "Features", "Everything the agent can do, and the controls you keep."),
  page(ROUTES.pricing, "Pricing", "Lifetime licences: Free, Solo, Business and Agency."),
  page(ROUTES.integrations, "Integrations", "Every connection: email, payments, social, ads and work tools."),
  page(ROUTES.about, "About", "Who builds Dexisphere and why."),
  page(ROUTES.contact, "Contact", "Talk to the team, sales or support."),
  page(ROUTES.blog, "Blog", "Playbooks and product news."),
  page(ROUTES.changelog, "Changelog", "What shipped, release by release."),
  page(ROUTES.careers, "Careers", "Open roles."),
  page(ROUTES.privacy, "Privacy Policy", "What we collect and what each connection can access."),
  page(ROUTES.terms, "Terms of Service", "The terms for using Dexisphere."),
  page(ROUTES.refunds, "Refund Policy", "Refunds on lifetime licences."),
];

/**
 * Everything the header's ⌘K palette can open: pages, the five jobs, blog posts
 * and every docs page with its headings (the docs introduction is /docs itself,
 * so PAGES leaves it out). Hrefs key the results and must stay unique.
 * Built on the server, passed down as data.
 */
export const SITE_SEARCH_INDEX: SearchEntry[] = [
  ...PRODUCTS.map((product) => ({
    href: ROUTES.product(product.slug),
    title: product.name,
    description: product.tagline,
    group: "Products",
    headings: [],
  })),
  ...PAGES,
  ...DOC_SEARCH_INDEX.map((entry) => ({ ...entry, group: "Docs" })),
  ...POSTS.map((post) => ({ href: ROUTES.post(post.slug), title: post.title, description: post.excerpt, group: "Blog", headings: [] })),
];
