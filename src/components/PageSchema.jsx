"use client";

/**
 * PageSchema
 * Adds the schema markup set in src/data/seo.js for the current page.
 */
import { useLanguage } from "@/components/context/LanguageContext";
import { PAGE_SEO } from "@/data/seo";

export default function PageSchema() {
  const { lang, basePath } = useLanguage();
  const cfg = PAGE_SEO[basePath];
  if (!cfg) return null;

  const blocks = [...(cfg.schema || []), ...(cfg[lang]?.schema || [])];
  if (!blocks.length) return null;

  return blocks.map((data, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  ));
}
