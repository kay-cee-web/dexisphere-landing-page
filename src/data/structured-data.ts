import { GENERAL_FAQS } from "@/data/faqs";
import { PLANS } from "@/data/plans";
import { SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/config";
import { SITE_DESCRIPTION } from "@/lib/seo";

/**
 * Home page JSON-LD: who we are (Organization), the site (WebSite), the
 * product with its lifetime prices (SoftwareApplication) and the FAQ.
 */
export const HOME_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/image/dexisphere-icon512.png`,
      sameAs: Object.values(SOCIAL_LINKS),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: PLANS.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: plan.price,
        priceCurrency: "USD",
        url: `${SITE_URL}/pricing`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: GENERAL_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};
