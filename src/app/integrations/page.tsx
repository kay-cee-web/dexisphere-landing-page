import type { Metadata } from "next";
import { ChannelsStrip } from "@/components/integrations/ChannelsStrip";
import { IntegrationsBrowser } from "@/components/integrations/IntegrationsBrowser";
import { WorkspaceConnections } from "@/components/integrations/WorkspaceConnections";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { INTEGRATIONS } from "@/data/integrations";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect Gmail, Outlook, SMTP, Twilio, WhatsApp Business, Google Places, Mailchimp and more once, and every Dexisphere agent can use them.",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Works with the accounts you already use"
        lede={`${INTEGRATIONS.length} connectors and channels for email, messaging, prospect sources and email platforms. Your agents send from your addresses and work in your tools.`}
      >
        <IntegrationsBrowser />
      </PageHero>
      <WorkspaceConnections />
      <ChannelsStrip />
      <CtaSection />
    </>
  );
}
