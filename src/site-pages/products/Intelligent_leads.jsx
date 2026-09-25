"use client";

import JsonLd from "@/components/JsonLd";
import React from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import { buildFaqSchema } from "@/lib/schema";
import FaqComponent from "@/components/Home_components/FaqComponent";
import CTASection from "@/components/Home_components/CTASection";
import StatsSection from "@/components/Home_components/StatsSection";
import SiteImage from "@/components/SiteImage";

const ilHero = "/images/bpm_banner.webp";
const ilImage2 = "/images/bpm1.webp";
const ilImage3 = "/images/bpm2.webp";
const ilTestimonial = "/images/testimonial.webp";
const PAGE_PATH = "/products/intelligent-leads";
// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = "https://bidconnectors.com/og/intelligent-leads.jpg";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

// Order matches JSON
const TIMELINE_IMAGES = [ilHero, ilImage2, ilImage3];
const FEED_TAG_CLASSES = ["il-feed-tag-bidding", "il-feed-tag-design", "il-feed-tag-planning"];
const STEP_ICONS = ["bi-funnel", "bi-sliders", "bi-person-badge", "bi-send-check"];
const TOOL_ICONS = ["bi-bar-chart-line", "bi-diagram-3", "bi-person-check", "bi-arrow-repeat"];

const IntelligentLeads = () => {
  const { t, isRTL } = useLanguage();
  const d = t.intelligentLeads;

  return (
    <main className="il-page">
      <JsonLd data={buildFaqSchema(d.faq.items)} />

      {/* ================= BANNER ================= */}
      <section className="il-banner" aria-label={d.banner.label}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="il-eyebrow">{d.banner.eyebrow}</span>
              <h1 className="il-banner-heading">{d.banner.title}</h1>
              <p className="il-banner-text">{d.banner.text}</p>
              <div className="il-banner-actions">
                <a href={REGISTER_URL} className="il-btn-primary" target="_blank" rel="noopener noreferrer">
                  {d.banner.btnPrimary}
                </a>
                <a href={REGISTER_URL} className="il-btn-outline" target="_blank" rel="noopener noreferrer">
                  {d.banner.btnSecondary}
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="il-feed-widget" aria-hidden="true">
                <div className="il-feed-header">
                  <span className="il-feed-dot"></span>
                  {d.feed.header}
                </div>

                {d.feed.cards.map((card, i) => (
                  <div className={`il-feed-card il-feed-card-${i + 1}`} key={i}>
                    <div className="il-feed-card-top">
                      <span className={`il-feed-tag ${FEED_TAG_CLASSES[i]}`}>{card.tag}</span>
                      <span className="il-feed-time">{card.time}</span>
                    </div>
                    {/* Project names stay in English */}
                    <p className="il-feed-title" dir="ltr">{card.title}</p>
                    <p className="il-feed-meta">{card.meta}</p>
                  </div>
                ))}
              </div>

              <p className="il-banner-caption">
                <i className="bi bi-bar-chart-line" aria-hidden="true"></i>
                {d.banner.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsSection stats={d.stats} />

      {/* ================= FEATURE TIMELINE ================= */}
      <section className="il-features" aria-label={d.featuresLabel}>
        <div className="container">
          <div className="il-timeline">
            {d.timeline.map((item, index) => {
              const isLast = index === d.timeline.length - 1;
              return (
                <article className={`il-timeline-item ${isLast ? "il-timeline-item-last" : ""}`} key={index}>
                  <div className="il-timeline-marker">
                    <span className="il-timeline-num">{String(index + 1).padStart(2, "0")}</span>
                    {!isLast && <span className="il-timeline-line"></span>}
                  </div>
                  <div className="il-timeline-body">
                    <div className="il-timeline-text">
                      <span className="il-label">{item.label}</span>
                      <h2 className="il-heading">{item.heading}</h2>
                      <p className="il-description">{item.description}</p>
                      {item.points.length > 0 && (
                        <ul className="il-points">
                          {item.points.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                      )}
                    </div>
                    <div className="il-timeline-visual">
                      <div className="il-mock il-mock-sm">
                        <SiteImage src={TIMELINE_IMAGES[index]} alt={item.imgAlt} className="il-img" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="il-steps" aria-label={d.steps.label}>
        <div className="container">
          <div className="il-steps-header">
            <span className="il-eyebrow">{d.steps.eyebrow}</span>
            <h2 className="il-steps-title">{d.steps.title}</h2>
            <p className="il-steps-subtitle">{d.steps.subtitle}</p>
          </div>

          <div className="il-stepper">
            {d.steps.items.map((step, index) => (
              <React.Fragment key={index}>
                <div className="il-step-card" style={{ animationDelay: `${index * 0.08}s` }}>
                  <div className="il-step-icon">
                    <i className={`bi ${STEP_ICONS[index]}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="il-step-title">{step.title}</h3>
                  <p className="il-step-desc">{step.desc}</p>
                </div>

                {index < d.steps.items.length - 1 && (
                  <div className="il-step-connector" aria-hidden="true">
                    {/* Arrow follows reading direction */}
                    <i className={`bi ${isRTL ? "bi-chevron-left" : "bi-chevron-right"}`}></i>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WITHOUT vs WITH ================= */}
      <section className="il-compare" aria-label={d.compare.label}>
        <div className="container">
          <div className="il-compare-header">
            <span className="il-eyebrow">{d.compare.eyebrow}</span>
            <h2 className="il-compare-title">{d.compare.title}</h2>
          </div>
          <div className="il-compare-grid">
            <div className="il-compare-col il-compare-without">
              <h3>{d.compare.withoutTitle}</h3>
              <ul>
                {d.compare.without.map((item, i) => (
                  <li key={i}><i className="bi bi-x-circle" aria-hidden="true"></i>{item}</li>
                ))}
              </ul>
            </div>
            <div className="il-compare-col il-compare-with">
              <h3>{d.compare.withTitle}</h3>
              <ul>
                {d.compare.with.map((item, i) => (
                  <li key={i}><i className="bi bi-check-circle" aria-hidden="true"></i>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLATFORM TOOLS ================= */}
      <section className="il-tools" aria-label={d.tools.label}>
        <div className="container">
          <div className="il-tools-header">
            <span className="il-eyebrow">{d.tools.eyebrow}</span>
            <h2 className="il-tools-title">{d.tools.title}</h2>
            <p className="il-tools-subtitle">{d.tools.subtitle}</p>
          </div>
          <div className="il-tools-list">
            {d.tools.items.map((tool, index) => (
              <div className="il-tool-row" key={index} style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="il-tool-icon">
                  <i className={`bi ${TOOL_ICONS[index]}`} aria-hidden="true"></i>
                </div>
                <div className="il-tool-row-text">
                  <h3>{tool.title}</h3>
                  <p>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER STORY ================= */}
      <section className="il-story" aria-label={d.story.label}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="il-eyebrow">{d.story.eyebrow}</span>
              <blockquote className="il-quote">
                {isRTL ? "«" : "\u201C"}{d.story.quote}{isRTL ? "»" : "\u201D"}
              </blockquote>
              <div className="il-story-author">
                <strong>{d.story.author}</strong>
                <span>{d.story.role}</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="il-video-thumb">
                <SiteImage src={ilTestimonial} alt={d.story.imgAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FaqComponent title={d.faq.title} highlight={d.faq.highlight} description={d.faq.description} faqs={d.faq.items} />

      {/* ================= CTA ================= */}
      <CTASection
        titleLine1={d.cta.titleLine1}
        titleHighlight={d.cta.titleHighlight}
        subText={d.cta.subText}
        primaryBtnText={d.cta.primaryBtn}
        primaryBtnLink={REGISTER_URL}
        primaryBtnNewTab={true}
        secondaryBtnText={d.cta.secondaryBtn}
        secondaryBtnLink={REGISTER_URL}
        secondaryBtnNewTab={true}
        noteText={d.cta.note}
      />
    </main>
  );
};

export default IntelligentLeads;