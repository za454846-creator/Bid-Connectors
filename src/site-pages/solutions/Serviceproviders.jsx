"use client";

import JsonLd from "@/components/JsonLd";
import React from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import { buildFaqSchema } from "@/lib/schema";
import FaqComponent from "@/components/Home_components/FaqComponent";
import CTASection from "@/components/Home_components/CTASection";
import StatsSection from "@/components/Home_components/StatsSection";
import SiteImage from "@/components/SiteImage";

const providerHero = "/images/bpm_banner.webp";
const providerImage2 = "/images/bpm1.webp";
const providerImage3 = "/images/bpm2.webp";
const providerImage4 = "/images/bpm3.webp";
const providerImage5 = "/images/bpm4.webp";
const providerTestimonial = "/images/testimonial.webp";
const PAGE_PATH = "/solutions/service-providers";
// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = "https://bidconnectors.com/og/service-providers.jpg";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

const BLOCK_IMAGES = [providerHero, providerImage2, providerImage3, providerImage4, providerImage5];
const STEP_ICONS = ["bi-search", "bi-shield-check", "bi-calculator", "bi-send"];

const ServiceProviders = () => {
  const { t, isRTL } = useLanguage();
  const s = t.serviceProviders;

  return (
    <main className="svp-page">
      <JsonLd data={buildFaqSchema(s.faq.items)} />

      {/* ================= BANNER ================= */}
      <section className="svp-banner" aria-label={s.banner.label}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="svp-eyebrow">{s.banner.eyebrow}</span>
              <h1 className="svp-banner-heading">{s.banner.title}</h1>
              <p className="svp-banner-text">{s.banner.text}</p>
              <div className="svp-banner-actions">
                <a href={REGISTER_URL} className="svp-btn-primary" target="_blank" rel="noopener noreferrer">
                  {s.banner.btn}
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="svp-banner-visual" aria-hidden="true">
                <div className="svp-banner-photo">
                  <SiteImage src={providerHero} alt={s.banner.imgAlt} className="svp-banner-img" />
                </div>
              </div>
              <p className="svp-banner-caption">
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
      <section className="svp-features" aria-label={s.featuresLabel}>
        <div className="container">
          {s.blocks.map((block, index) => (
            <article className={index % 2 === 1 ? "svp-row svp-row-reverse" : "svp-row"} key={index}>
              <div className="svp-text-col">
                <span className="svp-label">{block.label}</span>
                <h2 className="svp-heading">{block.heading}</h2>
                <p className="svp-description">{block.description}</p>
                <ul className="svp-points">
                  {block.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
              <div className="svp-visual-col">
                <div className="svp-mock">
                  <SiteImage src={BLOCK_IMAGES[index]} alt={block.imgAlt} className="svp-img" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="svp-steps" aria-label={s.steps.label}>
        <div className="container">
          <div className="svp-steps-header">
            <span className="svp-steps-eyebrow">{s.steps.eyebrow}</span>
            <h2 className="svp-steps-title">{s.steps.title}</h2>
            <p className="svp-steps-subtitle">{s.steps.subtitle}</p>
          </div>
          <div className="svp-steps-grid">
            {s.steps.items.map((step, index) => (
              <div className="svp-step-card" key={index} style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="svp-step-number">
                  <i className={`bi ${STEP_ICONS[index]}`} aria-hidden="true"></i>
                </div>
                <h3 className="svp-step-title">{step.title}</h3>
                <p className="svp-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER STORY ================= */}
      <section className="svp-story" aria-label={s.story.label}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="svp-eyebrow">{s.story.eyebrow}</span>
              <blockquote className="svp-quote">
                {isRTL ? "«" : "\u201C"}{s.story.quote}{isRTL ? "»" : "\u201D"}
              </blockquote>
              <div className="svp-story-author">
                <strong>{s.story.author}</strong>
                <span>{s.story.role}</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="svp-video-thumb">
                <SiteImage src={providerTestimonial} alt={s.story.imgAlt} />
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

export default ServiceProviders;