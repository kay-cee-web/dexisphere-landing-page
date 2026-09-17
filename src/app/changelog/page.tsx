import type { Metadata } from "next";
import { Fragment } from "react";
import { ReleaseEntry } from "@/components/changelog/ReleaseEntry";
import { SubscribeCard } from "@/components/changelog/SubscribeCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { RELEASES } from "@/data/changelog";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "What shipped in Dexisphere, release by release: work receipts, ask before sending, channels, records and analytics, connectors and more.",
};

/** The subscribe card sits after this many releases. */
const SUBSCRIBE_AFTER = 2;

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow="Changelog"
        title="What's new in Dexisphere"
        lede="New tools for your agents, fixes and improvements, newest first."
      />
      <Container width="default" className="grid gap-10 pb-8">
        {RELEASES.map((release, index) => (
          <Fragment key={release.version}>
            <ReleaseEntry release={release} />
            {index === SUBSCRIBE_AFTER - 1 && <SubscribeCard />}
          </Fragment>
        ))}
      </Container>
      <CtaSection />
    </>
  );
}
