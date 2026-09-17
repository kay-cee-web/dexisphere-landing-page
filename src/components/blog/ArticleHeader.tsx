import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Pill } from "@/components/ui/Pill";
import { formatPostDate, type PostMeta } from "@/data/blog/posts";
import { ROUTES } from "@/data/navigation";
import { AuthorAvatar } from "./AuthorAvatar";

/** Category, title, excerpt and byline at the top of an article. */
export function ArticleHeader({ post }: { post: PostMeta }) {
  return (
    <Reveal as="section" className="grid gap-6">
      <Link
        href={ROUTES.blog}
        className="inline-flex w-fit items-center gap-1.5 text-[13.5px] font-medium text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft aria-hidden className="size-4" />
        All posts
      </Link>
      <div className="flex flex-wrap items-center gap-2">
        <Pill tone="accent">{post.category}</Pill>
        <span className="text-[13px] text-faint">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readMinutes} min read
        </span>
      </div>
      <h1 className="text-[34px] font-semibold leading-[1.08] text-ink sm:text-[48px]">{post.title}</h1>
      <p className="text-[17px] leading-relaxed text-muted sm:text-[19px]">{post.excerpt}</p>
      <div className="flex items-center gap-3">
        <AuthorAvatar name={post.author.name} />
        <span className="grid text-[14px] leading-tight">
          <span className="font-medium text-ink">{post.author.name}</span>
          <span className="text-faint">{post.author.role}</span>
        </span>
      </div>
    </Reveal>
  );
}
