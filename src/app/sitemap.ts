import type { MetadataRoute } from "next";
import { POSTS } from "@/data/blog/posts";
import { JOBS } from "@/data/careers/jobs";
import { ARTICLE_SLUGS } from "@/data/docs";
import { ROUTES } from "@/data/navigation";
import { PRODUCTS } from "@/data/products/catalog";
import { SITE_URL } from "@/lib/config";

const STATIC_PATHS = [
  ROUTES.home,
  ROUTES.features,
  ROUTES.pricing,
  ROUTES.about,
  ROUTES.contact,
  ROUTES.integrations,
  ROUTES.changelog,
  ROUTES.careers,
  ROUTES.blog,
  ROUTES.docs,
  ROUTES.privacy,
  ROUTES.terms,
  ROUTES.refunds,
];

/** Built from the same data that generates each dynamic route, so it can't drift. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PATHS,
    ...PRODUCTS.map((product) => ROUTES.product(product.slug)),
    ...POSTS.map((post) => ROUTES.post(post.slug)),
    ...ARTICLE_SLUGS.map((slug) => ROUTES.doc(slug)),
    ...JOBS.map((job) => ROUTES.job(job.slug)),
  ];
  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
