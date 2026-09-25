"use client";

import JsonLd from "@/components/JsonLd";
import React from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import { buildFaqSchema } from "@/lib/schema";
import FaqComponent from "@/components/Home_components/FaqComponent";
import CTASection from "@/components/Home_components/CTASection";
import StatsSection from "@/components/Home_components/StatsSection";
import SiteImage from "@/components/SiteImage";

const supplierHero = "/images/bpm_banner.webp";
const supplierImage2 = "/images/bpm1.webp";
const supplierImage3 = "/images/bpm2.webp";
const supplierImage4 = "/images/bpm3.webp";
const supplierImage5 = "/images/bpm4.webp";
const supplierTestimonial = "/images/testimonial.webp";
const PAGE_PATH = "/solutions/suppliers-and-distributors-solutions";
// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = "https://bidconnectors.com/og/suppliers-distributors.jpg";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

const BLOCK_IMAGES = [supplierHero, supplierImage2, supplierImage3, supplierImage4, supplierImage5];
const STEP_ICONS = ["bi-box-seam", "bi-search", "bi-file-earmark-check", "bi-exclamation-triangle"];

const Suppliersdistributors = () => {
  const { t, isRTL } = useLanguage();
  const s = t.suppliers;

  return (
    <main className="sd-page">
      <JsonLd data={buildFaqSchema(s.faq.items)} />

      {/* ================= BANNER ================= */}
      <section className="sd-banner" aria-label={s.banner.label}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="sd-eyebrow">{s.banner.eyebrow}</span>
              <h1 className="sd-banner-heading">{s.banner.title}</h1>
              <p className="sd-banner-text">{s.banner.text}</p>
              <div className="sd-banner-actions">
                <a href={REGISTER_URL} className="sd-btn-primary" target="_blank" rel="noopener noreferrer">
                  {s.banner.btn}
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sd-banner-visual" aria-hidden="true">
                <div className="sd-banner-photo">
                  <SiteImage src={supplierHero} alt={s.banner.imgAlt} className="sd-banner-img" />
                </div>
              </div>
              <p className="sd-banner-caption">
                <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
                {s.banner.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsSection stats={s.stats} />

      {/* ================= FEATURE BLOCKS ================= */}
      <section className="sd-features" aria-label={s.featuresLabel}>
        <div className="container">
          {s.blocks.map((block, index) => (
            <article className={index % 2 === 1 ? "sd-row sd-row-reverse" : "sd-row"} key={index}>
              <div className="sd-text-col">
                <span className="sd-label">{block.label}</span>
                <h2 className="sd-heading">{block.heading}</h2>
                <p className="sd-description">{block.description}</p>
                <ul className="sd-points">
                  {block.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
              <div className="sd-visual-col">
                <div className="sd-mock">
                  <SiteImage src={BLOCK_IMAGES[index]} alt={block.imgAlt} className="sd-img" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="sd-steps" aria-label={s.steps.label}>
        <div className="container">
          <div className="sd-steps-header">
            <span className="sd-eyebrow">{s.steps.eyebrow}</span>
            <h2 className="sd-steps-title">{s.steps.title}</h2>
            <p className="sd-steps-subtitle">{s.steps.subtitle}</p>
          </div>
          <div className="sd-steps-grid">
            {s.steps.items.map((step, index) => (
              <div className="sd-step-card" key={index} style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="sd-step-icon">
                  <i className={`bi ${STEP_ICONS[index]}`} aria-hidden="true"></i>
                </div>
                <h3 className="sd-step-title">{step.title}</h3>
                <p className="sd-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER STORY ================= */}
      <section className="sd-story" aria-label={s.story.label}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="sd-eyebrow">{s.story.eyebrow}</span>
              <blockquote className="sd-quote">
                {isRTL ? "«" : "\u201C"}{s.story.quote}{isRTL ? "»" : "\u201D"}
              </blockquote>
              <div className="sd-story-author">
                <strong>{s.story.author}</strong>
                <span>{s.story.role}</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sd-video-thumb">
                <SiteImage src={supplierTestimonial} alt={s.story.imgAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FaqComponent title={s.faq.title} highlight={s.faq.highlight} description={s.faq.description} faqs={s.faq.items} />

      {/* ================= CTA ================= */}
      <CTASection
        titleLine1={s.cta.titleLine1}
        titleHighlight={s.cta.titleHighlight}
        subText={s.cta.subText}
        primaryBtnText={s.cta.primaryBtn}
        primaryBtnLink={REGISTER_URL}
        primaryBtnNewTab={true}
        secondaryBtnText={s.cta.secondaryBtn}
        secondaryBtnLink={REGISTER_URL}
        secondaryBtnNewTab={true}
        noteText={s.cta.note}
      />
    </main>
  );
};

export default Suppliersdistributors;