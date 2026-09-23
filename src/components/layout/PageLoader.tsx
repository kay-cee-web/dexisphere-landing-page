import Image from "next/image";

const ICON = "/image/dexisphere-icon512.png";

/**
 * Tapotik's opening animation with our mark: a faint icon fills with the brand
 * gradient from the bottom, then the frosted overlay fades out over the page.
 * Pure CSS, server-rendered, so it plays on every hard load (not client
 * navigations) and needs no JS. Reduced motion skips it via the global rule in
 * globals.css. Timings live there; motion/intro.ts delays reveals to match.
 */
export function PageLoader() {
  return (
    <div aria-hidden data-page-loader className="animate-loader-dismiss fixed inset-0 z-100 grid place-items-center bg-ground/70 backdrop-blur-2xl">
      <div className="animate-loader-logo-out relative size-24 sm:size-28">
        <Image src={ICON} alt="" width={112} height={112} priority className="absolute inset-0 size-full opacity-15 grayscale" />
        <div className="animate-loader-fill absolute inset-0">
          <Image src={ICON} alt="" width={112} height={112} priority className="size-full" />
        </div>
      </div>
    </div>
  );
}
