/**
 * PLACEHOLDER — sample blog posts. Titles, authors, dates and bodies are
 * written for launch mock-up; replace with real articles before publishing.
 */
export type PostCategory = "Product" | "Playbooks" | "Engineering" | "Design" | "Customers";

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  author: { name: string; role: string };
  /** ISO date. */
  date: string;
  readMinutes: number;
  tags: string[];
};

export const POST_CATEGORIES: PostCategory[] = ["Product", "Playbooks", "Engineering", "Design", "Customers"];

export const POSTS: PostMeta[] = [
  {
    slug: "introducing-dexisphere-agents",
    title: "Introducing Dexisphere Agents: tell it the job, get a receipt",
    excerpt: "Agents that prospect, run outreach and update your CRM with real tools, and show you exactly what they changed.",
    category: "Product",
    author: { name: "Ada Nwosu", role: "Head of Product" },
    date: "2026-09-02",
    readMinutes: 6,
    tags: ["Agents", "Launch"],
  },
  {
    slug: "how-work-receipts-work",
    title: "How work receipts work: diffing your records around every turn",
    excerpt: "Why we compare your records before and after each chat turn instead of trusting an activity log.",
    category: "Engineering",
    author: { name: "Luca Ferrari", role: "Staff Engineer" },
    date: "2026-08-21",
    readMinutes: 8,
    tags: ["Receipts", "Architecture"],
  },
  {
    slug: "designing-ask-before-sending",
    title: "Designing 'Ask before sending': trust for autonomous outreach",
    excerpt: "Drafts, recipients and checks, then a single word to send. The approval pattern behind every agent.",
    category: "Design",
    author: { name: "Grace Otieno", role: "Product Designer" },
    date: "2026-08-07",
    readMinutes: 5,
    tags: ["Design", "Approvals"],
  },
  {
    slug: "local-prospecting-playbook",
    title: "From Google Places to a booked call: a local prospecting playbook",
    excerpt: "A step-by-step prompt sequence for finding, cleaning, contacting and booking local businesses.",
    category: "Playbooks",
    author: { name: "Sam Whitfield", role: "Growth Lead" },
    date: "2026-07-24",
    readMinutes: 7,
    tags: ["Prospecting", "Outreach"],
  },
  {
    slug: "agency-runs-thirty-clients",
    title: "How a four-person agency runs outreach for 30 clients",
    excerpt: "One agent per client, approvals on, receipts in the Monday report. A customer story.",
    category: "Customers",
    author: { name: "Ada Nwosu", role: "Head of Product" },
    date: "2026-07-10",
    readMinutes: 6,
    tags: ["Agencies", "Case study"],
  },
  {
    slug: "verify-before-you-send",
    title: "Verify before you send: protecting your sender reputation",
    excerpt: "Why agents check addresses and your sending domain before every campaign, and how to read the results.",
    category: "Playbooks",
    author: { name: "Sam Whitfield", role: "Growth Lead" },
    date: "2026-06-26",
    readMinutes: 5,
    tags: ["Deliverability", "Email"],
  },
];

export const postBySlug = (slug: string) => POSTS.find((post) => post.slug === slug) ?? null;

export const formatPostDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
