"use client";

import JsonLd from "@/components/JsonLd";
import React from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import { buildFaqSchema } from "@/lib/schema";
import StatsSection from "@/components/Home_components/StatsSection";
import FaqComponent from "@/components/Home_components/FaqComponent";
import CTASection from "@/components/Home_components/CTASection";
import SiteImage from "@/components/SiteImage";
const findImg = "/images/subimg1.webp";
const organizeImg = "/images/subimg2.webp";
const platformImg = "/images/subimg3.webp";
const opportunitiesImg = "/images/subimg4.webp";
const PAGE_PATH = "/solutions/subcontractors";
// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = "https://bidconnectors.com/og/subcontractors.jpg";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";
const LOGIN_URL = "https://bidconnectors.com/bidconnectors/login";

// Order matches JSON "rows" and "steps.items"
const ROW_IMAGES = [findImg, organizeImg, platformImg, opportunitiesImg];
const STEP_ICONS = ["bi-tools", "bi-list-check", "bi-file-earmark-text", "bi-graph-up-arrow"];

function Subcontractors() {
  const { t, isRTL } = useLanguage();
  const s = t.subcontractors;

  // One feature row. Stats follow the first row.
  const renderRow = (row, index) => (
    <div className={index % 2 === 1 ? "fs-row fs-row-reverse" : "fs-row"} key={index}>
      <div className="fs-text-col">
        <span className="fs-label">{row.label}</span>
        <h2 className="fs-heading">{row.heading}</h2>
        <p className="fs-description">{row.description}</p>

        {row.points.length > 0 && (
          <ul className="fs-points">
            {row.points.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        )}

        <div className="fs-actions">
          <a href={REGISTER_URL} className="fs-btn-primary" target="_blank" rel="noopener noreferrer">
            {s.btnDemo}
          </a>
          <a href={LOGIN_URL} className="fs-btn-link" target="_blank" rel="noopener noreferrer">
            {s.btnLearn} <span className="fs-arrow" aria-hidden="true">{isRTL ? "←" : "→"}</span>
          </a>
        </div>
      </div>

      <div className="fs-visual-col">
        <div className="fs-mock">
          <SiteImage src={ROW_IMAGES[index]} alt={row.imgAlt} className="fs-img" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <JsonLd data={buildFaqSchema(s.faq.items)} />

      <main className="sub-page">

        {/* ================= BANNER ================= */}
        <section className="about-banner" aria-label={s.banner.label}>
          <div className="container">
            <div className="banner-content">
              <h1>
                {s.banner.titleStart} <span>{s.banner.titleHighlight}</span>
              </h1>
              <p>{s.banner.text}</p>
              <a href={REGISTER_URL} className="banner-btn" target="_blank" rel="noopener noreferrer">
                {s.banner.btn}{" "}
                <i className={`bi ${isRTL ? "bi-arrow-left" : "bi-arrow-right"}`} aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="fs-section" aria-label={s.featuresLabel}>
          <div className="fs-container">

            {renderRow(s.rows[0], 0)}

            {/* TRUST / STATS */}
            <div className="trust_sec">
              <h2>{s.trust.title}</h2>
              <p>{s.trust.text}</p>
            </div>

            <StatsSection stats={s.stats} />

            {s.rows.slice(1).map((row, i) => renderRow(row, i + 1))}

          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="sub-steps" aria-label={s.steps.label}>
          <div className="container">
            <div className="sub-steps-header">
              <span className="badge-features">{s.steps.eyebrow}</span>
              <h2 className="sub-steps-title">{s.steps.title}</h2>
              <p className="sub-steps-subtitle">{s.steps.subtitle}</p>
            </div>

            <div className="sub-steps-grid">
              {s.steps.items.map((step, index) => (
                <div className="sub-step-card" key={index} style={{ animationDelay: `${index * 0.08}s` }}>
                  <div className="sub-step-icon">
                    <i className={`bi ${STEP_ICONS[index]}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="sub-step-title">{step.title}</h3>
                  <p className="sub-step-desc">{step.desc}</p>
                </div>
              ))}
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
          secondaryBtnLink={LOGIN_URL}
          secondaryBtnNewTab={true}
          noteText={s.cta.note}
        />

      </main>
    </>
  );
}

export default Subcontractors;