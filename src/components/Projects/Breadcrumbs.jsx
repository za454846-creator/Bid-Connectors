"use client";

/**
 * Breadcrumbs
 * Visible trail + BreadcrumbList structured data for Google.
 * items: [{ label, path }] (path without /ar; last item is the current page)
 */
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";
import JsonLd from "@/components/JsonLd";

const SITE = "https://bidconnectors.com";

export default function Breadcrumbs({ items }) {
  const { localePath } = useLanguage();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE}${localePath(item.path)}`,
    })),
  };

  return (
    <nav className="pj-crumbs" aria-label="Breadcrumb">
      <JsonLd data={schema} />
      <ol>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path}>
              {last ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={localePath(item.path)}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
