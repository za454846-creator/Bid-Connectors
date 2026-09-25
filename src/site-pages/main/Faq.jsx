"use client";

import JsonLd from "@/components/JsonLd";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";

import CTASection from "@/components/Home_components/CTASection";
import FaqComponent from "@/components/Home_components/FaqComponent";

// home.css is required: FaqComponent and CTASection are styled there.
// faq.css goes last so it can override.
const SITE_URL = "https://bidconnectors.com";
const PAGE_PATH = "/faq";
const PAGE_IMAGE = "https://bidconnectors.com/og/faq.jpg";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";
const SUPPORT_PATH = "/contact-us";

function Faq() {
  const { t, lang, isRTL, localePath } = useLanguage();
  const f = t.faqPage;

  const pageUrl = lang === "ar" ? `${SITE_URL}/ar${PAGE_PATH}` : `${SITE_URL}${PAGE_PATH}`;

  // Structured data: questions and answers in the current language
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: f.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Keep className="faq-page": faq.css is scoped to it. */}
      <main className="faq-page">

        {/* Banner */}
        <section className="faq-banner" aria-label={f.bannerLabel}>
          <div className="container">
            <div className="banner-content">
              <span className="faq-eyebrow">{f.eyebrow}</span>

              <h1>
                {f.titleStart} <span>{f.titleHighlight}</span>
              </h1>

              <p>{f.text}</p>

              <Link href={localePath(SUPPORT_PATH)} className="banner-btn">
                {f.btn}{" "}
                <i className={`bi ${isRTL ? "bi-arrow-left" : "bi-arrow-right"}`} aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ list */}
        <FaqComponent
          title={f.list.title}
          highlight={f.list.highlight}
          description={f.list.description}
          faqs={f.items}
        />

        {/* CTA */}
        <CTASection
          titleLine1={f.cta.titleLine1}
          titleHighlight={f.cta.titleHighlight}
          subText={f.cta.subText}
          primaryBtnText={f.cta.primaryBtn}
          primaryBtnLink={localePath(SUPPORT_PATH)}
          secondaryBtnText={f.cta.secondaryBtn}
          secondaryBtnLink={REGISTER_URL}
          secondaryBtnNewTab={true}
          noteText={f.cta.note}
        />
      </main>
    </>
  );
}

export default Faq;