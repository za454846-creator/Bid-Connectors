"use client";

import JsonLd from "@/components/JsonLd";
import React from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import FaqComponent from "@/components/Home_components/FaqComponent";
import CTASection from "@/components/Home_components/CTASection";
import StatsSection from "@/components/Home_components/StatsSection";
import SiteImage from "@/components/SiteImage";
const bannerImg = "/images/bpm_banner.webp";
const featureImg1 = "/images/bpm1.webp";
const featureImg2 = "/images/bpm2.webp";
const featureImg3 = "/images/bpm3.webp";
const featureImg4 = "/images/bpm4.webp";
const featureImg5 = "/images/building5.webp";
const testimonialImg = "/images/sub_testimonial.webp";
const SITE_URL = "https://bidconnectors.com";
const PAGE_PATH = "/solutions/building-product-manufacturers";

// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = "https://bidconnectors.com/og/building-product-manufacturers.jpg";

const REGISTER_URL = "https://bidconnectors.com/app/register";
const LOGIN_URL = "https://bidconnectors.com/app/login";

// Images and icons do not depend on language. Order matches JSON.
const BLOCK_IMAGES = [featureImg1, featureImg2, featureImg3, featureImg4, featureImg5];
const STEP_ICONS = ["bi-ui-checks-grid", "bi-geo-alt", "bi-bell", "bi-arrow-left-right"];

const Buildingproductmanufctures = () => {
  const { t, lang, isRTL } = useLanguage();
  const m = t.manufacturers;

  const pageUrl = lang === "ar" ? `${SITE_URL}/ar${PAGE_PATH}` : `${SITE_URL}${PAGE_PATH}`;

  const testimonialSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    inLanguage: lang,
    reviewBody: m.story.quote,
    author: { "@type": "Person", name: m.story.author, jobTitle: m.story.role },
    itemReviewed: { "@type": "Organization", name: "Bid Connectors" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: m.faq.items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <JsonLd data={testimonialSchema} />
      <JsonLd data={faqSchema} />

      <main className="bpm-page">

        {/* ================= BANNER ================= */}
        <section className="bpm-banner" aria-label={m.banner.label}>
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <span className="bpm-eyebrow">{m.banner.eyebrow}</span>
                <h1 className="bpm-banner-heading">{m.banner.title}</h1>
                <p className="bpm-banner-text">{m.banner.text}</p>
                <div className="bpm-banner-actions">
                  <a
                    href={REGISTER_URL}
                    className="bpm-btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {m.banner.btn}
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="bpm-banner-visual" aria-hidden="true">
                  <div className="bpm-banner-photo">
                    <SiteImage src={bannerImg} alt={m.banner.imgAlt} className="bpm-banner-img" />
                  </div>
                </div>
                <p className="bpm-banner-caption">
                  <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
                  {m.banner.caption}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <StatsSection stats={m.stats} />

        {/* ================= FEATURE BLOCKS ================= */}
        <section className="bpm-features" aria-label={m.featuresLabel}>
          <div className="container">
            {m.blocks.map((block, index) => (
              <article
                className={`bpm-row ${index % 2 === 1 ? "bpm-row-reverse" : ""}`}
                key={index}
              >
                <div className="bpm-text-col">
                  <span className="bpm-label">{block.label}</span>
                  <h2 className="bpm-heading">{block.heading}</h2>
                  <p className="bpm-description">{block.description}</p>
                  <ul className="bpm-points">
                    {block.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="bpm-visual-col">
                  <div className="bpm-mock">
                    <SiteImage src={BLOCK_IMAGES[index]} alt={block.imgAlt} className="bpm-img" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="bpm-steps" aria-label={m.steps.label}>
          <div className="container">
            <div className="bpm-steps-header">
              <span className="bpm-eyebrow">{m.steps.eyebrow}</span>
              <h2 className="bpm-steps-title">{m.steps.title}</h2>
              <p className="bpm-steps-subtitle">{m.steps.subtitle}</p>
            </div>

            <div className="bpm-steps-grid">
              {m.steps.items.map((step, index) => (
                <div
                  className="bpm-step-card"
                  key={index}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="bpm-step-icon">
                    <i className={`bi ${STEP_ICONS[index] || "bi-check-circle"}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="bpm-step-title">{step.title}</h3>
                  <p className="bpm-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CUSTOMER STORY ================= */}
        <section className="bpm-story" aria-label={m.story.label}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="bpm-eyebrow">{m.story.eyebrow}</span>
                <figure className="m-0">
                  <blockquote className="bpm-quote">
                    {isRTL ? "«" : "\u201C"}
                    {m.story.quote}
                    {isRTL ? "»" : "\u201D"}
                  </blockquote>
                  <figcaption className="bpm-story-author">
                    <strong>{m.story.author}</strong>
                    <span>{m.story.role}</span>
                  </figcaption>
                </figure>
              </div>

              <div className="col-lg-6">
                <div className="bpm-video-thumb testimonialImg">
                  <SiteImage src={testimonialImg} alt={m.story.imgAlt} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <FaqComponent
          title={m.faq.title}
          highlight={m.faq.highlight}
          description={m.faq.description}
          faqs={m.faq.items}
        />

        {/* ================= CTA ================= */}
        <CTASection
          titleLine1={m.cta.titleLine1}
          titleHighlight={m.cta.titleHighlight}
          subText={m.cta.subText}
          primaryBtnText={m.cta.primaryBtn}
          primaryBtnLink={REGISTER_URL}
          primaryBtnNewTab={true}
          secondaryBtnText={m.cta.secondaryBtn}
          secondaryBtnLink={LOGIN_URL}
          secondaryBtnNewTab={true}
          noteText={m.cta.note}
        />

      </main>
    </>
  );
};

export default Buildingproductmanufctures;