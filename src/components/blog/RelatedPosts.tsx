import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PostMeta } from "@/data/blog/posts";
import { ROUTES } from "@/data/navigation";
import { PostCard } from "./PostCard";

/** "Keep reading": three related post cards. */
export function RelatedPosts({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;
  return (
    <Section tone="raised" bordered>
      <Container width="wide" className="grid gap-12">
        <SectionHeading
          align="left"
          eyebrow="Keep reading"
          title="Related posts"
          actions={
            <ButtonLink href={ROUTES.blog} variant="secondary">
              All posts
            </ButtonLink>
          }
        />
        <Stagger as="ul" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem as="li" key={post.slug}>
              <PostCard post={post} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
