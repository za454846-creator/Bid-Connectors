"use client";

import JsonLd from "@/components/JsonLd";
import React from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import { buildFaqSchema } from "@/lib/schema";
import FaqComponent from "@/components/Home_components/FaqComponent";
import CTASection from "@/components/Home_components/CTASection";
import StatsSection from "@/components/Home_components/StatsSection";
import SiteImage from "@/components/SiteImage";

const piHero = "/images/bpm_banner.webp";
const piImage2 = "/images/bpm1.webp";
const piImage3 = "/images/bpm2.webp";
const piTestimonial = "/images/testimonial.webp";
const PAGE_PATH = "/products/project-intelligence";
// TODO: upload a real 1200x630 share image and point this at it.
const OG_IMAGE = "https://bidconnectors.com/og/project-intelligence.jpg";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

// Order matches JSON
const TIMELINE_IMAGES = [piHero, piImage2, piImage3];
const FEED_TAG_CLASSES = ["pi-feed-tag-bidding", "pi-feed-tag-design", "pi-feed-tag-planning"];
const STEP_ICONS = ["bi-broadcast", "bi-patch-check", "bi-diagram-3", "bi-bell"];
const TOOL_ICONS = ["bi-collection", "bi-building", "bi-person-check", "bi-bell"];

const ProjectIntelligence = () => {
  const { t, isRTL } = useLanguage();
  const d = t.projectIntelligence;

  return (
    <main className="pi-page">
      <JsonLd data={buildFaqSchema(d.faq.items)} />

      {/* ================= BANNER ================= */}
      <section className="pi-banner" aria-label={d.banner.label}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="pi-eyebrow">{d.banner.eyebrow}</span>
              <h1 className="pi-banner-heading">{d.banner.title}</h1>
              <p className="pi-banner-text">{d.banner.text}</p>
              <div className="pi-banner-actions">
                <a href={REGISTER_URL} className="pi-btn-primary" target="_blank" rel="noopener noreferrer">
                  {d.banner.btnPrimary}
                </a>
                <a href={REGISTER_URL} className="pi-btn-outline" target="_blank" rel="noopener noreferrer">
                  {d.banner.btnSecondary}
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="pi-feed-widget" aria-hidden="true">
                <div className="pi-feed-header">
                  <span className="pi-feed-dot"></span>
                  {d.feed.header}
                </div>

                {d.feed.cards.map((card, i) => (
                  <div className={`pi-feed-card pi-feed-card-${i + 1}`} key={i}>
                    <div className="pi-feed-card-top">
                      <span className={`pi-feed-tag ${FEED_TAG_CLASSES[i]}`}>{card.tag}</span>
                      <span className="pi-feed-time">{card.time}</span>
                    </div>
                    {/* Project names stay in English */}
                    <p className="pi-feed-title" dir="ltr">{card.title}</p>
                    <p className="pi-feed-meta">{card.meta}</p>
                  </div>
                ))}
              </div>

              <p className="pi-banner-caption">
                <i className="bi bi-broadcast" aria-hidden="true"></i>
                {d.banner.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsSection stats={d.stats} />

      {/* ================= FEATURE TIMELINE ================= */}
      <section className="pi-features" aria-label={d.featuresLabel}>
        <div className="container">
          <div className="pi-timeline">
            {d.timeline.map((item, index) => {
              const isLast = index === d.timeline.length - 1;
              return (
                <article className={`pi-timeline-item ${isLast ? "pi-timeline-item-last" : ""}`} key={index}>
                  <div className="pi-timeline-marker">
                    <span className="pi-timeline-num">{String(index + 1).padStart(2, "0")}</span>
                    {!isLast && <span className="pi-timeline-line"></span>}
                  </div>
                  <div className="pi-timeline-body">
                    <div className="pi-timeline-text">
                      <span className="pi-label">{item.label}</span>
                      <h2 className="pi-heading">{item.heading}</h2>
                      <p className="pi-description">{item.description}</p>
                      {item.points.length > 0 && (
                        <ul className="pi-points">
                          {item.points.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                      )}
                    </div>
                    <div className="pi-timeline-visual">
                      <div className="pi-mock pi-mock-sm">
                        <SiteImage src={TIMELINE_IMAGES[index]} alt={item.imgAlt} className="pi-img" />
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
      <section className="pi-steps" aria-label={d.steps.label}>
        <div className="container">
          <div className="pi-steps-header">
            <span className="pi-eyebrow">{d.steps.eyebrow}</span>
            <h2 className="pi-steps-title">{d.steps.title}</h2>
            <p className="pi-steps-subtitle">{d.steps.subtitle}</p>
          </div>

          <div className="pi-stepper">
            {d.steps.items.map((step, index) => (
              <React.Fragment key={index}>
                <div className="pi-step-card" style={{ animationDelay: `${index * 0.08}s` }}>
                  <div className="pi-step-icon">
                    <i className={`bi ${STEP_ICONS[index]}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="pi-step-title">{step.title}</h3>
                  <p className="pi-step-desc">{step.desc}</p>
                </div>

                {index < d.steps.items.length - 1 && (
                  <div className="pi-step-connector" aria-hidden="true">
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
      <section className="pi-compare" aria-label={d.compare.label}>
        <div className="container">
          <div className="pi-compare-header">
            <span className="pi-eyebrow">{d.compare.eyebrow}</span>
            <h2 className="pi-compare-title">{d.compare.title}</h2>
          </div>
          <div className="pi-compare-grid">
            <div className="pi-compare-col pi-compare-without">
              <h3>{d.compare.withoutTitle}</h3>
              <ul>
                {d.compare.without.map((item, i) => (
                  <li key={i}><i className="bi bi-x-circle" aria-hidden="true"></i>{item}</li>
                ))}
              </ul>
            </div>
            <div className="pi-compare-col pi-compare-with">
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
      <section className="pi-tools" aria-label={d.tools.label}>
        <div className="container">
          <div className="pi-tools-header">
            <span className="pi-eyebrow">{d.tools.eyebrow}</span>
            <h2 className="pi-tools-title">{d.tools.title}</h2>
            <p className="pi-tools-subtitle">{d.tools.subtitle}</p>
          </div>
          <div className="pi-tools-list">
            {d.tools.items.map((tool, index) => (
              <div className="pi-tool-row" key={index} style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="pi-tool-icon">
                  <i className={`bi ${TOOL_ICONS[index]}`} aria-hidden="true"></i>
                </div>
                <div className="pi-tool-row-text">
                  <h3>{tool.title}</h3>
                  <p>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER STORY ================= */}
      <section className="pi-story" aria-label={d.story.label}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="pi-eyebrow">{d.story.eyebrow}</span>
              <blockquote className="pi-quote">
                {isRTL ? "«" : "\u201C"}{d.story.quote}{isRTL ? "»" : "\u201D"}
              </blockquote>
              <div className="pi-story-author">
                <strong>{d.story.author}</strong>
                <span>{d.story.role}</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pi-video-thumb">
                <SiteImage src={piTestimonial} alt={d.story.imgAlt} />
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

export default ProjectIntelligence;