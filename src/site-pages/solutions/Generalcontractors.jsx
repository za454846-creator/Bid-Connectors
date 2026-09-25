"use client";

import JsonLd from "@/components/JsonLd";
import React from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import { buildFaqSchema } from "@/lib/schema";
import FaqComponent from "@/components/Home_components/FaqComponent";
import CTASection from "@/components/Home_components/CTASection";
import StatsSection from "@/components/Home_components/StatsSection";
import SiteImage from "@/components/SiteImage";

const generalContractorsHero = "/images/Hero_gen-contractors.webp";
const generalContractorsImage2 = "/images/General_Contractor_find.webp";
const generalContractorsImage3 = "/images/buiding.webp";
const generalContractorsImage4 = "/images/building4.webp";
const generalContractorsTestimonial = "/images/testimonial.webp";
const PAGE_PATH = "/solutions/general-contractors";
// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = "https://bidconnectors.com/og/general-contractors.jpg";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

// Order matches JSON "blocks" and "steps.items"
const BLOCK_IMAGES = [generalContractorsHero, generalContractorsImage2, generalContractorsImage3, generalContractorsImage4];
const STEP_ICONS = ["bi-file-earmark-plus", "bi-funnel", "bi-send", "bi-clipboard-check"];

const Generalcontractors = () => {
  const { t, isRTL } = useLanguage();
  const g = t.generalContractors;

  return (
    <main className="gc-page">
      <JsonLd data={buildFaqSchema(g.faq.items)} />

      {/* ================= BANNER ================= */}
      <section className="gc-banner" aria-label={g.banner.label}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="gc-eyebrow">{g.banner.eyebrow}</span>
              <h1 className="gc-banner-heading">{g.banner.title}</h1>
              <p className="gc-banner-text">{g.banner.text}</p>
              <div className="gc-banner-actions">
                <a href={REGISTER_URL} className="gc-btn-primary" target="_blank" rel="noopener noreferrer">
                  {g.banner.btn}
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="gc-banner-visual" aria-hidden="true">
                <div className="gc-banner-photo">
                  <SiteImage src={generalContractorsHero} alt={g.banner.imgAlt} className="gc-banner-img" />
                </div>
              </div>
              <p className="gc-banner-caption">
                <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
                {g.banner.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsSection stats={g.stats} />

      {/* ================= FEATURE BLOCKS ================= */}
      <section className="gc-features" aria-label={g.featuresLabel}>
        <div className="container">
          {g.blocks.map((block, index) => (
            <article className={index % 2 === 1 ? "gc-row gc-row-reverse" : "gc-row"} key={index}>
              <div className="gc-text-col">
                <span className="gc-label">{block.label}</span>
                <h2 className="gc-heading">{block.heading}</h2>
                <p className="gc-description">{block.description}</p>
                <ul className="gc-points">
                  {block.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
              <div className="gc-visual-col">
                <div className="gc-mock">
                  <SiteImage src={BLOCK_IMAGES[index]} alt={block.imgAlt} className="gc-img" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="gc-steps" aria-label={g.steps.label}>
        <div className="container">
          <div className="gc-steps-header">
            <span className="gc-eyebrow">{g.steps.eyebrow}</span>
            <h2 className="gc-steps-title">{g.steps.title}</h2>
            <p className="gc-steps-subtitle">{g.steps.subtitle}</p>
          </div>
          <div className="gc-steps-grid">
            {g.steps.items.map((step, index) => (
              <div className="gc-step-card" key={index} style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="gc-step-icon">
                  <i className={`bi ${STEP_ICONS[index]}`} aria-hidden="true"></i>
                </div>
                <h3 className="gc-step-title">{step.title}</h3>
                <p className="gc-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY THEY TRUST US ================= */}
      <section className="gc-whyus" aria-label={g.whyUs.label}>
        <div className="container">
          <div className="gc-whyus-inner">
            <span className="gc-whyus-eyebrow">{g.whyUs.eyebrow}</span>
            <h2 className="gc-whyus-title">{g.whyUs.title}</h2>
            <p className="gc-whyus-text">{g.whyUs.text}</p>
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER STORY ================= */}
      <section className="gc-story" aria-label={g.story.label}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="gc-eyebrow">{g.story.eyebrow}</span>
              <blockquote className="gc-quote">
                {isRTL ? "«" : "\u201C"}{g.story.quote}{isRTL ? "»" : "\u201D"}
              </blockquote>
              <div className="gc-story-author">
                <strong>{g.story.author}</strong>
                <span>{g.story.role}</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gc-video-thumb">
                <SiteImage src={generalContractorsTestimonial} alt={g.story.imgAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FaqComponent title={g.faq.title} highlight={g.faq.highlight} description={g.faq.description} faqs={g.faq.items} />

      {/* ================= CTA ================= */}
      <CTASection
        titleLine1={g.cta.titleLine1}
        titleHighlight={g.cta.titleHighlight}
        subText={g.cta.subText}
        primaryBtnText={g.cta.primaryBtn}
        primaryBtnLink={REGISTER_URL}
        primaryBtnNewTab={true}
        secondaryBtnText={g.cta.secondaryBtn}
        secondaryBtnLink={REGISTER_URL}
        secondaryBtnNewTab={true}
        noteText={g.cta.note}
      />
    </main>
  );
};

export default Generalcontractors;