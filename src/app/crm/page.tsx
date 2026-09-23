import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";
import { PRODUCT_CONTENT } from "@/data/products";
import { ROUTES } from "@/data/navigation";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(ROUTES.product("crm"), PRODUCT_CONTENT.crm.meta);

export default function Page() {
  return <ProductPage slug="crm" />;
}
