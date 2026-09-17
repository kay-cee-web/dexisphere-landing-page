import { ArrowLeft, BookOpen } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ROUTES } from "@/data/navigation";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-40">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-70" />
      <div aria-hidden className="bg-glow absolute inset-0 -z-10" />
      <Container width="narrow" className="grid justify-items-center gap-6 text-center">
        <p className="font-mono text-[13px] text-accent">404 · find_page returned 0 results</p>
        <h1 className="text-[40px] font-semibold leading-tight sm:text-[56px]">This page isn&apos;t on file.</h1>
        <p className="max-w-[48ch] text-[17px] leading-relaxed text-muted">
          The link may be old or mistyped. Head back home, or look it up in the docs.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <ButtonLink href={ROUTES.home} size="lg">
            <ArrowLeft /> Back home
          </ButtonLink>
          <ButtonLink href={ROUTES.docs} size="lg" variant="secondary">
            <BookOpen /> Documentation
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
