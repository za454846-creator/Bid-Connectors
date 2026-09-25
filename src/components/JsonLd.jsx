"use client";

import { useLanguage } from "@/components/context/LanguageContext";

// Structured data (Google rich results), rendered into the static HTML.
export default function JsonLd({ data }) {
  const { lang } = useLanguage();
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...data, inLanguage: lang }) }}
    />
  );
}
