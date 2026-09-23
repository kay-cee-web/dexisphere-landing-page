import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { ShareLinks } from "@/components/blog/ShareLinks";
import { ContentBlocks, headingsOf } from "@/components/content/ContentBlocks";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { postBody } from "@/data/blog/content";
import { POSTS, postBySlug } from "@/data/blog/posts";
import { relatedPosts } from "@/data/blog/related";
import { ROUTES } from "@/data/navigation";
import { SITE_URL } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = postBySlug(slug);
  if (!post) return {};
  return pageMeta(ROUTES.post(post.slug), {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  });
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = postBySlug(slug);
  const blocks = postBody(slug);
  if (!post || !blocks) notFound();

  const url = `${SITE_URL}${ROUTES.post(post.slug)}`;
  const headings = headingsOf(blocks);

  return (
    <>
      <article className="relative isolate pb-20 pt-12 sm:pb-28 sm:pt-16">
        <div aria-hidden className="bg-glow absolute inset-x-0 top-0 -z-10 h-[520px] opacity-80" />
        <div aria-hidden className="bg-grid absolute inset-x-0 top-0 -z-10 h-[520px] opacity-40" />
        <Container
          width="narrow"
          className="lg:grid lg:max-w-6xl lg:grid-cols-[minmax(0,48rem)_13rem] lg:justify-between lg:gap-x-12"
        >
          <div className="grid min-w-0 gap-10">
            <ArticleHeader post={post} />
            <ShareLinks url={url} title={post.title} className="border-y border-line py-4" />
            <ContentBlocks blocks={blocks} className="[&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24" />
            <div className="grid gap-6 border-t border-line pt-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <ul aria-label="Tags" className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li key={tag}>
                      <Pill>{tag}</Pill>
                    </li>
                  ))}
                </ul>
                <ShareLinks url={url} title={post.title} />
              </div>
              <AuthorBox author={post.author} />
            </div>
          </div>
          <aside className="hidden lg:block">
            <ArticleToc headings={headings} className="sticky top-28 mt-40" />
          </aside>
        </Container>
      </article>
      <RelatedPosts posts={relatedPosts(post)} />
      <CtaSection />
    </>
  );
}
