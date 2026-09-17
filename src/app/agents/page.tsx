import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";
import { PRODUCT_CONTENT } from "@/data/products";

export const metadata: Metadata = PRODUCT_CONTENT.agents.meta;

export default function Page() {
  return <ProductPage slug="agents" />;
}
