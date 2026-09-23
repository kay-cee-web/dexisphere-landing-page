import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_TAGLINE } from "@/lib/seo";

/**
 * The link preview for every page (WhatsApp, Slack, X, LinkedIn...). Rendered
 * once at build time. Colours are the night artwork tokens from tokens.css.
 */
export const alt = `Dexisphere: ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [logo, medium, bold] = await Promise.all([
  readFile(join(process.cwd(), "public/image/dexisphere-logo-white.png")),
  readFile(join(process.cwd(), "src/assets/fonts/BricolageGrotesque-Medium.ttf")),
  readFile(join(process.cwd(), "src/assets/fonts/BricolageGrotesque-Bold.ttf")),
]);
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

const CHIPS = ["Prospecting", "Outreach", "CRM", "Support triage", "Data sync"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#070b1c",
          backgroundImage:
            "radial-gradient(circle at 12% 0%, rgba(91,91,247,0.45), transparent 45%), radial-gradient(circle at 95% 100%, rgba(0,199,172,0.3), transparent 45%)",
          color: "#f5f6fc",
          fontFamily: "Bricolage",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> only */}
        <img src={logoSrc} width={216} height={72} alt="" />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.03em", maxWidth: 940 }}>
            {SITE_TAGLINE}
          </div>
          <div style={{ fontSize: 28, fontWeight: 500, color: "#aeb4cc", maxWidth: 900, lineHeight: 1.35 }}>
            Tell an agent the job. It does the work and shows you a receipt for every change.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 12 }}>
              {CHIPS.map((chip) => (
                <div
                  key={chip}
                  style={{
                    display: "flex",
                    padding: "8px 18px",
                    borderRadius: 999,
                    border: "1px solid rgba(245,246,252,0.18)",
                    background: "rgba(245,246,252,0.06)",
                    fontSize: 22,
                    fontWeight: 500,
                  }}
                >
                  {chip}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 24, fontWeight: 500, color: "#aeb4cc" }}>dexisphere.com</div>
          </div>
          <div style={{ height: 6, borderRadius: 999, backgroundImage: "linear-gradient(90deg, #5b5bf7, #00c7ac)" }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: medium, weight: 500, style: "normal" },
        { name: "Bricolage", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
