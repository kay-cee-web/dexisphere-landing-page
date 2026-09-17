import { ContentBlocks, headingsOf } from "@/components/content/ContentBlocks";
import { Eyebrow } from "@/components/ui/Card";
import type { DocPage } from "@/data/docs/types";
import { DocsBreadcrumb } from "./DocsBreadcrumb";
import { DocsNextSteps } from "./DocsNextSteps";
import { DocsPager } from "./DocsPager";
import { DocsToc } from "./DocsToc";

/** One docs page: breadcrumb, header, body, next steps and pager, with "On this page" beside it on lg. */
export function DocArticle({ page }: { page: DocPage }) {
  const headings = headingsOf(page.blocks);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_168px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_200px] xl:gap-12">
      <article className="grid min-w-0 content-start gap-10">
        <header className="grid gap-4 border-b border-line pb-8">
          <DocsBreadcrumb page={page} />
          <div className="grid gap-3">
            <Eyebrow className="text-accent">{page.group}</Eyebrow>
            <h1 className="text-[34px] font-semibold leading-[1.08] text-ink sm:text-[44px]">{page.title}</h1>
            <p className="max-w-[62ch] text-[17px] leading-relaxed text-muted">{page.description}</p>
          </div>
        </header>
        <ContentBlocks blocks={page.blocks} className="max-w-[72ch] [&>*:first-child]:mt-0" />
        {page.nextSteps && page.nextSteps.length > 0 && <DocsNextSteps slugs={page.nextSteps} />}
        <DocsPager slug={page.slug} />
      </article>
      <aside className="hidden lg:block">
        <DocsToc headings={headings} className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto pb-8" />
      </aside>
    </div>
  );
}
