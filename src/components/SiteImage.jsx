"use client";

/**
 * SiteImage
 * Normal <img>, but the alt text can be set in src/data/image-alts.js.
 * Order: page entry -> "*" (all pages) -> the alt passed in code.
 * decorative: always alt="" (icons, avatars used as decoration).
 */
import { useLanguage } from "@/components/context/LanguageContext";
import { IMAGE_ALTS } from "@/data/image-alts";

export default function SiteImage({ src, alt = "", decorative = false, ...rest }) {
  const { lang, basePath } = useLanguage();

  const custom = decorative
    ? ""
    : IMAGE_ALTS[basePath]?.[src]?.[lang] || IMAGE_ALTS["*"]?.[src]?.[lang];

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={decorative ? "" : custom || alt} {...rest} />;
}
