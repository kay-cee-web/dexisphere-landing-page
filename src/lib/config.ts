const trimSlash = (url: string) => url.replace(/\/$/, "");

export const SITE_NAME = "Dexisphere";
export const SITE_URL = trimSlash(process.env.NEXT_PUBLIC_SITE_URL || "https://dexisphere.com");

/** The Dexisphere app (the agents workspace). Every sign-in flow lives there. */
export const APP_URL = trimSlash(process.env.NEXT_PUBLIC_APP_URL || "https://app.dexisphere.com");

export const appLink = (path: string) => `${APP_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const APP_LINKS = {
  login: appLink("/login"),
  register: appLink("/register"),
  forgotPassword: appLink("/forgot-password"),
};

/**
 * Plans are managed in the main Macrid app, exactly as the Dexisphere app links
 * to them: buy a licence at checkout, then redeem its code on this page.
 */
export const MACRID_APP_URL = trimSlash(process.env.NEXT_PUBLIC_MACRID_APP_URL || "https://app.macrid.com");
export const REDEEM_URL = `${MACRID_APP_URL}/settings/plans`;

export const CONTACT_EMAILS = {
  sales: "sales@dexisphere.com",
  support: "support@dexisphere.com",
  press: "press@dexisphere.com",
  privacy: "privacy@dexisphere.com",
  careers: "careers@dexisphere.com",
};

/** PLACEHOLDER social profiles — replace with the real handles before launch. */
export const SOCIAL_LINKS = {
  x: "https://x.com/dexisphere",
  linkedin: "https://www.linkedin.com/company/dexisphere",
  youtube: "https://www.youtube.com/@dexisphere",
  facebook: "https://www.facebook.com/dexisphere",
};

export const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);
