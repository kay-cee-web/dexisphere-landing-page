import { ContentBlocks, slugify } from "@/components/content/ContentBlocks";
import { InlineText } from "@/components/content/InlineText";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import type { LegalDocument } from "@/data/legal/types";
import type { ContentBlock } from "@/types/content";
import { LegalToc, type LegalTocItem } from "./LegalToc";

/** Privacy, terms and any future policy: summary, numbered sections and a sticky contents list. */
export function LegalPage({ document: doc }: { document: LegalDocument }) {
  const toc: LegalTocItem[] = doc.sections.map((section, index) => ({
    id: slugify(section.title),
    number: index + 1,
    title: section.title,
  }));

  const blocks: ContentBlock[] = doc.sections.flatMap((section, index) => [
    { type: "h2" as const, text: `${index + 1}. ${section.title}`, id: toc[index].id },
    ...section.blocks,
  ]);

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={doc.title}
        lede={doc.description}
        align="left"
        className="pb-10 sm:pb-14"
        actions={
          <Pill>
            Last updated <time dateTime={doc.lastUpdatedIso}>{doc.lastUpdated}</time>
          </Pill>
        }
      />
      <Container width="wide" className="grid gap-10 pb-20 sm:pb-28 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
        <LegalToc items={toc} />
        <div className="grid min-w-0 max-w-[75ch] content-start gap-10">
          <section aria-labelledby="legal-summary" className="grid gap-3 rounded-[16px] border border-line bg-raised p-6">
            <Eyebrow id="legal-summary" className="text-accent">
              The short version
            </Eyebrow>
            <ul className="grid gap-2 pl-5 text-[15px] leading-relaxed text-ink marker:text-accent list-disc">
              {doc.summary.map((item) => (
                <li key={item} className="pl-1">
                  <InlineText text={item} />
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-muted">This summary is for convenience. The full text below is what applies.</p>
          </section>
          <ContentBlocks blocks={blocks} className="[&>h2:first-child]:mt-0" />
        </div>
      </Container>
    </>
  );
}
