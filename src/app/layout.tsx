import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { PageLoader } from "@/components/layout/PageLoader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { InlineScript } from "@/components/ui/InlineScript";
import { SITE_NAME, SITE_URL } from "@/lib/config";
import { OPEN_GRAPH_BASE, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_TITLE } from "@/lib/seo";
import { THEME_BOOT_SCRIPT } from "@/lib/theme";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s · ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  category: "technology",
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  // og:title/description fall back to each page's own; the share image comes
  // from app/opengraph-image.tsx and applies to every route.
  openGraph: OPEN_GRAPH_BASE,
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/image/dexisphere-icon100.png", type: "image/png", sizes: "100x100" },
      { url: "/image/dexisphere-icon512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/image/dexisphere-icon512.png", sizes: "512x512" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}
    >
      <head>
        <InlineScript html={THEME_BOOT_SCRIPT} />
        {/* Reveal animations render hidden until JS runs; without JS, show everything. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-dvh flex-col bg-ground text-ink">
        <MotionProvider>
          <a
            href="#main"
            className="sr-only z-[60] rounded-[10px] bg-accent px-4 py-2 text-accent-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
        <PageLoader />
      </body>
    </html>
  );
}
