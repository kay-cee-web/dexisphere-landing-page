import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocArticle } from "@/components/docs/DocArticle";
import { ARTICLE_SLUGS, docBySlug } from "@/data/docs";
import { ROUTES } from "@/data/navigation";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLE_SLUGS.map((slug) => ({ slug }));
}

/** The introduction lives at /docs, so its slug isn't a page here. */
const articleBySlug = (slug: string) => (slug === "introduction" ? null : docBySlug(slug));

export async function generateMetadata(props: PageProps<"/docs/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const page = articleBySlug(slug);
  if (!page) return {};
  return pageMeta(ROUTES.doc(slug), { title: `${page.title} · Docs`, description: page.description });
}

export default async function DocPage(props: PageProps<"/docs/[slug]">) {
  const { slug } = await props.params;
  const page = articleBySlug(slug);
  if (!page) notFound();
  return <DocArticle page={page} />;
}
