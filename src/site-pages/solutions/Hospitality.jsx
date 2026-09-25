"use client";

import JsonLd from "@/components/JsonLd";
import React from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import { buildFaqSchema } from "@/lib/schema";
import FaqComponent from "@/components/Home_components/FaqComponent";
import CTASection from "@/components/Home_components/CTASection";
import StatsSection from "@/components/Home_components/StatsSection";
import SiteImage from "@/components/SiteImage";

const hospHero = "/images/hospitality_banner.webp";
const hospImage1 = "/images/hospImage1.webp";
const hospImage2 = "/images/hospImage2.webp";
const hospImage3 = "/images/hospImage3.webp";
const hospTestimonial = "/images/hospTest.webp";
const PAGE_PATH = "/solutions/hospitality";
// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = "https://bidconnectors.com/og/hospitality.jpg";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

const BLOCK_IMAGES = [hospImage1, hospImage2, hospImage3];
const STEP_ICONS = ["bi-geo-alt", "bi-sort-down", "bi-diagram-3", "bi-bell"];

const Hospitality = () => {
  const { t, isRTL } = useLanguage();
  const h = t.hospitality;

  return (
    <main className="hosp-page">
      <JsonLd data={buildFaqSchema(h.faq.items)} />

      {/* ================= BANNER ================= */}
      <section className="hosp-banner" aria-label={h.banner.label}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="hosp-eyebrow">{h.banner.eyebrow}</span>
              <h1 className="hosp-banner-heading">{h.banner.title}</h1>
              <p className="hosp-banner-text">{h.banner.text}</p>
              <div className="hosp-banner-actions">
                <a href={REGISTER_URL} className="hosp-btn-primary" target="_blank" rel="noopener noreferrer">
                  {h.banner.btnPrimary}
                </a>
                <a href={REGISTER_URL} className="hosp-btn-outline" target="_blank" rel="noopener noreferrer">
                  {h.banner.btnSecondary}
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hosp-banner-visual" aria-hidden="true">
                <div className="hosp-banner-photo">
                  <SiteImage src={hospHero} alt={h.banner.imgAlt} className="hosp-banner-img" />
                </div>
              </div>
              <p className="hosp-banner-caption">
                <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
                {h.banner.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsSection stats={h.stats} />

      {/* ================= FEATURE BLOCKS ================= */}
      <section className="hosp-features" aria-label={h.featuresLabel}>
        <div className="container">
          {h.blocks.map((block, index) => (
            <article className={index % 2 === 1 ? "hosp-row hosp-row-reverse" : "hosp-row"} key={index}>
              <div className="hosp-text-col">
                <span className="hosp-label">{block.label}</span>
                <h2 className="hosp-heading">{block.heading}</h2>
                <p className="hosp-description">{block.description}</p>
                {block.points.length > 0 && (
                  <ul className="hosp-points">
                    {block.points.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                )}
              </div>
              <div className="hosp-visual-col">
                <div className="hosp-mock">
                  <SiteImage src={BLOCK_IMAGES[index]} alt={block.imgAlt} className="hosp-img" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FIND CONSTRUCTION PROJECTS ================= */}
      <section className="hosp-steps" aria-label={h.steps.label}>
        <div className="container">
          <div className="hosp-steps-header">
            <span className="hosp-eyebrow">{h.steps.eyebrow}</span>
            <h2 className="hosp-steps-title">{h.steps.title}</h2>
            <p className="hosp-steps-subtitle">{h.steps.subtitle}</p>
          </div>
          <div className="hosp-steps-grid">
            {h.steps.items.map((step, index) => (
              <div className="hosp-step-card" key={index} style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="hosp-step-icon">
                  <i className={`bi ${STEP_ICONS[index]}`} aria-hidden="true"></i>
                </div>
                <h3 className="hosp-step-title">{step.title}</h3>
                <p className="hosp-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY BID CONNECTORS ================= */}
      <section className="hosp-compare" aria-label={h.compare.label}>
        <div className="container">
          <div className="hosp-compare-header">
            <span className="hosp-eyebrow">{h.compare.eyebrow}</span>
            <h2 className="hosp-compare-title">{h.compare.title}</h2>
          </div>
          <div className="hosp-compare-grid">
            <div className="hosp-compare-col hosp-compare-without">
              <h3>{h.compare.withoutTitle}</h3>
              <ul>
                {h.compare.without.map((item, i) => (
                  <li key={i}><i className="bi bi-x-circle" aria-hidden="true"></i>{item}</li>
                ))}
              </ul>
            </div>
            <div className="hosp-compare-col hosp-compare-with">
              <h3>{h.compare.withTitle}</h3>
              <ul>
                {h.compare.with.map((item, i) => (
                  <li key={i}><i className="bi bi-check-circle" aria-hidden="true"></i>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEVER MISS A BEAT ================= */}
      <section className="hosp-tools" aria-label={h.tools.label}>
        <div className="container">
          <div className="hosp-tools-header">
            <span className="hosp-eyebrow">{h.tools.eyebrow}</span>
            <h2 className="hosp-tools-title">{h.tools.title}</h2>
            <p className="hosp-tools-subtitle">{h.tools.subtitle}</p>
          </div>
          <div className="hosp-tools-grid">
            {h.tools.items.map((tool, index) => (
              <div className="hosp-tool-card" key={index} style={{ animationDelay: `${index * 0.08}s` }}>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER STORY ================= */}
      <section className="hosp-story" aria-label={h.story.label}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="hosp-eyebrow">{h.story.eyebrow}</span>
              <blockquote className="hosp-quote">
                {isRTL ? "«" : "\u201C"}{h.story.quote}{isRTL ? "»" : "\u201D"}
              </blockquote>
              <div className="hosp-story-author">
                <strong>{h.story.author}</strong>
                <span>{h.story.role}</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hosp-video-thumb">
                <SiteImage src={hospTestimonial} alt={h.story.imgAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FaqComponent title={h.faq.title} highlight={h.faq.highlight} description={h.faq.description} faqs={h.faq.items} />

      {/* ================= CTA ================= */}
      <CTASection
        titleLine1={h.cta.titleLine1}
        titleHighlight={h.cta.titleHighlight}
        subText={h.cta.subText}
        primaryBtnText={h.cta.primaryBtn}
        primaryBtnLink={REGISTER_URL}
        primaryBtnNewTab={true}
        secondaryBtnText={h.cta.secondaryBtn}
        secondaryBtnLink={REGISTER_URL}
        secondaryBtnNewTab={true}
        noteText={h.cta.note}
      />
    </main>
  );
};

export default Hospitality;