import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { formatPostDate, type PostMeta } from "@/data/blog/posts";
import { ROUTES } from "@/data/navigation";
import { AuthorAvatar } from "./AuthorAvatar";

/** The newest post as a large horizontal card above the grid. */
export function FeaturedPost({ post }: { post: PostMeta }) {
  return (
    <Reveal>
      <Link
        href={ROUTES.post(post.slug)}
        className="group grid overflow-hidden rounded-[20px] border border-line bg-surface transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-float lg:grid-cols-[1.1fr_1fr]"
      >
        <div aria-hidden className="relative min-h-52 overflow-hidden border-b border-line bg-raised lg:min-h-80 lg:border-b-0 lg:border-r">
          <div className="bg-glow absolute inset-0 transition-transform duration-700 group-hover:scale-110" />
          <div className="bg-grid absolute inset-0 opacity-70" />
          <span className="absolute bottom-5 left-6 font-display text-[56px] font-semibold leading-none text-ink/10 sm:text-[72px]">
            {post.category}
          </span>
        </div>
        <div className="flex flex-col gap-4 p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <Eyebrow className="text-accent">Featured</Eyebrow>
            <Pill tone="accent">{post.category}</Pill>
          </div>
          <h2 className="text-[26px] font-semibold leading-tight text-ink sm:text-[34px]">{post.title}</h2>
          <p className="text-[15.5px] leading-relaxed text-muted">{post.excerpt}</p>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4">
            <span className="flex items-center gap-3">
              <AuthorAvatar name={post.author.name} />
              <span className="grid text-[13px] leading-tight">
                <span className="font-medium text-ink">{post.author.name}</span>
                <span className="text-faint">
                  {formatPostDate(post.date)} · {post.readMinutes} min read
                </span>
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent">
              Read the post
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
