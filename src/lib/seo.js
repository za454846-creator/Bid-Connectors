/**
 * Metadata helpers: title, description, canonical, hreflang, Open Graph, Twitter.
 * Values from src/data/seo.js win; otherwise the text in Lang/en.json and ar.json is used.
 */
import en from "@/components/Lang/en.json";
import ar from "@/components/Lang/ar.json";
import { PAGE_SEO } from "@/data/seo";

export const SITE_URL = "https://bidconnectors.com";
const SITE_NAME = "Bid Connectors";
const dictionaries = { en, ar };

// Full URL for a path in a language ("/about" -> ".../ar/about")
const urlFor = (lang, path) => {
  const clean = path === "/" ? "" : path;
  return lang === "ar" ? `${SITE_URL}/ar${clean}` : `${SITE_URL}${clean || "/"}`;
};

// SEO settings for a path from src/data/seo.js (or null)
export const getPageSeo = (path) => PAGE_SEO[path] || null;

// Shared builder for every page's metadata
function buildMetadata(lang, { path, title, fullTitle, description, image, noindex }) {
  const url = urlFor(lang, path);
  const shownTitle = fullTitle || title;
  return {
    // fullTitle is used as-is; a plain title gets " | Bid Connectors" from the layout
    title: fullTitle ? { absolute: fullTitle } : title,
    description,
    robots: noindex ? { index: false, follow: true } : undefined,
    alternates: {
      canonical: url,
      languages: {
        en: urlFor("en", path),
        ar: urlFor("ar", path),
        "x-default": urlFor("en", path),
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: lang === "ar" ? "ar_AR" : "en_US",
      title: shownTitle,
      description,
      url,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: shownTitle,
      description,
      images: image ? [image] : undefined,
    },
  };
}

// Applies src/data/seo.js overrides on top of default values
function withOverrides(lang, path, defaults) {
  const cfg = getPageSeo(path);
  const own = cfg?.[lang] || {};
  return buildMetadata(lang, {
    path,
    title: defaults.title,
    fullTitle: own.title || defaults.fullTitle,
    description: own.description || defaults.description,
    image: cfg?.image !== undefined ? cfg.image : defaults.image,
    noindex: cfg?.noindex ?? defaults.noindex,
  });
}

/**
 * Static pages. seoKey = JSON section with { seo: { title, description } } (fallback only).
 */
export function pageMetadata(lang, { path, seoKey, image }) {
  const t = dictionaries[lang];
  const seo = (seoKey && t[seoKey] && t[seoKey].seo) || {
    title: t.seo.defaultTitle,
    description: t.seo.defaultDescription,
  };
  return withOverrides(lang, path, {
    title: seo.title,
    fullTitle: path === "/" ? `${seo.title} | ${SITE_NAME}` : undefined,
    description: seo.description,
    image,
  });
}

/**
 * Pages whose title/description are built in code (projects, trades, sectors, locations).
 */
export function customMetadata(lang, { path, title, description, image, noindex = false }) {
  return withOverrides(lang, path, { title, description, image, noindex });
}

export function rootMetadata(lang) {
  const t = dictionaries[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.seo.defaultTitle, template: `%s | ${SITE_NAME}` },
    description: t.seo.defaultDescription,
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
  };
}

export { urlFor };
