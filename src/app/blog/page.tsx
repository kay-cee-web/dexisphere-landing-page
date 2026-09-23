import type { Metadata } from "next";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { NewsletterSection } from "@/components/blog/NewsletterSection";
import { PostFilter } from "@/components/blog/PostFilter";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { POST_CATEGORIES } from "@/data/blog/posts";
import { postsNewestFirst } from "@/data/blog/related";
import { ROUTES } from "@/data/navigation";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(ROUTES.blog, {
  title: "Blog",
  description:
    "Playbooks, product notes and engineering stories from the team building Dexisphere, AI agents for marketing and sales.",
});

export default function BlogPage() {
  const posts = postsNewestFirst();
  const [featured] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from the agent frontier"
        lede="Prompt playbooks, product deep dives and stories from teams who hand their busywork to agents."
      />
      <section className="pb-20 sm:pb-28">
        <Container width="wide" className="grid gap-14">
          {featured && <FeaturedPost post={featured} />}
          <PostFilter posts={posts} categories={POST_CATEGORIES} featuredSlug={featured?.slug} />
        </Container>
      </section>
      <NewsletterSection />
      <CtaSection />
    </>
  );
}
