"use client";

/**
 * HubFaq
 * <details> accordion (works without JS) + FAQPage schema.
 * Text: t.projects.hub.faq
 */
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";
import JsonLd from "@/components/JsonLd";

export default function HubFaq() {
  const { t, localePath } = useLanguage();
  const fq = t.projects.hub.faq;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fq.items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  return (
    <section className="ph-section ph-faq" aria-labelledby="ph-faq-title">
      <JsonLd data={schema} />
      <div className="container ph-split">
        <div className="ph-split-head">
          <span className="ph-eyebrow">{fq.eyebrow}</span>
          <h2 id="ph-faq-title" className="ph-h2">{fq.title}</h2>
          <p className="ph-text">{fq.text}</p>
          <Link href={localePath("/contact-us")} className="ph-link">
            {fq.contact} <i className="bi bi-arrow-right-short ph-flip" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="ph-faq-list">
          {fq.items.map((q, i) => (
            <details key={q.question} name="ph-faq" open={i === 0}>
              <summary>
                <span>{q.question}</span>
                <i className="bi bi-plus-lg" aria-hidden="true"></i>
              </summary>
              <p>{q.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
