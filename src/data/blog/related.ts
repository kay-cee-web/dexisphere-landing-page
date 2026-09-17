import { POSTS, type PostMeta } from "./posts";

const newestFirst = (a: PostMeta, b: PostMeta) => b.date.localeCompare(a.date);

/** Posts sorted newest first. */
export const postsNewestFirst = () => [...POSTS].sort(newestFirst);

/** Up to `count` other posts: same category first, then the newest of the rest. */
export function relatedPosts(post: PostMeta, count = 3): PostMeta[] {
  const others = postsNewestFirst().filter((candidate) => candidate.slug !== post.slug);
  const sameCategory = others.filter((candidate) => candidate.category === post.category);
  const rest = others.filter((candidate) => candidate.category !== post.category);
  return [...sameCategory, ...rest].slice(0, count);
}
