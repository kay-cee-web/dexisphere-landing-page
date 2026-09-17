import { DocsMobileMenu } from "@/components/docs/DocsMobileMenu";
import { DocsSearch } from "@/components/docs/DocsSearch";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { Container } from "@/components/ui/Container";
import { DOC_SEARCH_INDEX } from "@/data/docs";

/**
 * Docs shell: sidebar | article | "On this page" on lg (the article renders the
 * last column). The root layout already provides the site header and footer.
 */
export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="relative isolate">
      <div aria-hidden className="bg-grid absolute inset-x-0 top-0 -z-10 h-80 opacity-40" />
      <div aria-hidden className="bg-glow absolute inset-x-0 top-0 -z-10 h-80 opacity-60" />
      <Container
        width="wide"
        className="grid gap-8 pb-20 pt-6 sm:pt-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-8 lg:pb-28 lg:pt-12 xl:grid-cols-[232px_minmax(0,1fr)] xl:gap-12"
      >
        <DocsMobileMenu search={<DocsSearch entries={DOC_SEARCH_INDEX} />} />
        <DocsSidebar entries={DOC_SEARCH_INDEX} />
        <div className="min-w-0">{children}</div>
      </Container>
    </div>
  );
}
