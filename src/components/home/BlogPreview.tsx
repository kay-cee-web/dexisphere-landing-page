import { ArrowRight } from "lucide-react";
import { PostCard } from "@/components/blog/PostCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { POSTS } from "@/data/blog/posts";
import { ROUTES } from "@/data/navigation";

export function BlogPreview() {
  return (
    <Section tone="raised" bordered>
      <Container width="wide" className="grid gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="From the blog"
            title="Playbooks for teams that sell"
            lede="Prompts, processes and product notes for getting more done with agents."
          />
          <ButtonLink href={ROUTES.blog} variant="secondary">
            All articles <ArrowRight />
          </ButtonLink>
        </div>
        <Stagger className="grid gap-5 md:grid-cols-3">
          {POSTS.slice(0, 3).map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <PostCard post={post} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
