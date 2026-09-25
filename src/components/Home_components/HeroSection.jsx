"use client";

/**
 * HeroSection
 * Home page hero: headline, CTAs, trust row and an auto-scrolling live activity card.
 * Text: en.json / ar.json -> "hero"   Styles: home.css ("hx-" classes)
 */

import React from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import SiteImage from "@/components/SiteImage";

const HERO_BG = "/images/hero-bgs.webp";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

const TRUST_AVATARS = ["/images/avatar1.webp", "/images/avatar2.webp", "/images/44.jpg"];

// Feed icon and color by item type (independent of language)
const FEED_STYLES = {
  win: { color: "#22c55e", icon: "bi-trophy-fill" },
  sent: { color: "#818cf8", icon: "bi-send-fill" },
  match: { color: "#f59e0b", icon: "bi-stars" },
  estimating: { color: "#a78bfa", icon: "bi-calculator" },
  addendum: { color: "#f472b6", icon: "bi-file-earmark-text" },
};
const DEFAULT_STYLE = { color: "#94a3b8", icon: "bi-person-circle" };

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const hero = t.hero;

  // ~5s per item
  const feedDuration = `${Math.max(hero.feed.length * 5, 20)}s`;

  const renderFeedItem = (item, key) => {
    const style = FEED_STYLES[item.type] || DEFAULT_STYLE;
    return (
      <div className="hx-item" key={key}>
        <div
          className="hx-item-icon"
          style={{ background: `${style.color}1f`, color: style.color }}
          aria-hidden="true"
        >
          <i className={`bi ${style.icon}`}></i>
        </div>
        <div className="hx-item-body">
          <div className="hx-item-top">
            <span className="hx-item-badge" style={{ background: `${style.color}1f`, color: style.color }}>
              {item.badge}
            </span>
            <span className="hx-item-time">{item.time}</span>
          </div>
          <div className="hx-item-title">{item.title}</div>
          <div className="hx-item-sub">{item.sub}</div>
        </div>
      </div>
    );
  };

  return (
    <section className="hx" aria-labelledby="hero-title">
      {/* Background layers */}
      <div className="hx-bg" style={{ backgroundImage: `url(${HERO_BG})` }} aria-hidden="true" />
      <div className="hx-overlay" aria-hidden="true" />
      <div className="hx-grid" aria-hidden="true" />

      <div className="container">
        <div className="hx-inner">

          {/* Text column */}
          <div className="hx-copy">
            <div className="hx-badge">
              <span className="hx-badge-dot" aria-hidden="true"></span>
              <span>{hero.liveBadge}</span>
            </div>

            <h1 id="hero-title" className="hx-title">
              {hero.title}{" "}
              {hero.titleHighlight && <span className="hx-title-highlight">{hero.titleHighlight}</span>}
            </h1>

            <p className="hx-sub">{hero.subtext}</p>

            <div className="hx-actions">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="hx-btn hx-btn-primary">
                <span>{hero.primaryBtn}</span>
                <i className={`bi ${isRTL ? "bi-arrow-left" : "bi-arrow-right"}`} aria-hidden="true"></i>
              </a>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="hx-btn hx-btn-ghost">
                <i className="bi bi-headset" aria-hidden="true"></i>
                <span>{hero.secondaryBtn}</span>
              </a>
            </div>

            {hero.checks && (
              <ul className="hx-checks">
                {hero.checks.map((check, i) => (
                  <li key={i}>
                    <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                    {check}
                  </li>
                ))}
              </ul>
            )}

            {hero.trustText && (
              <div className="hx-trust">
                <div className="hx-avatars" aria-hidden="true">
                  {TRUST_AVATARS.map((src, i) => (
                    <SiteImage key={i} src={src} decorative width="38" height="38" loading="lazy" />
                  ))}
                  <span className="hx-avatars-more">+7K</span>
                </div>
                <div className="hx-trust-text">
                  <span className="hx-stars" aria-hidden="true">★★★★★</span>
                  <span>{hero.trustText}</span>
                </div>
              </div>
            )}
          </div>

          {/* Live activity card */}
          <div className="hx-visual">
            {hero.chip && (
              <div className="hx-chip" aria-hidden="true">
                <i className="bi bi-lightning-charge-fill"></i>
                <span>{hero.chip}</span>
              </div>
            )}

            <div className="hx-card">
              <div className="hx-card-head">
                <div className="hx-dots" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <span className="hx-card-title">{hero.feedTitle}</span>
                <span className="hx-live">
                  <span className="hx-live-dot" aria-hidden="true"></span>
                  {hero.live || hero.justNow}
                </span>
              </div>

              {/* Pauses on hover and focus */}
              <div className="hx-feed" tabIndex={0} aria-label={hero.feedTitle}>
                <div className="hx-feed-track" style={{ "--hx-duration": feedDuration }}>
                  <div className="hx-feed-set">
                    {hero.feed.map((item, i) => renderFeedItem(item, i))}
                  </div>
                  {/* Duplicate set for a seamless loop (hidden from screen readers) */}
                  <div className="hx-feed-set hx-feed-clone" aria-hidden="true">
                    {hero.feed.map((item, i) => renderFeedItem(item, `c${i}`))}
                  </div>
                </div>
              </div>

              <div className="hx-stats">
                <div className="hx-stats-label">{hero.pipeline.label}</div>
                <div className="hx-stats-grid">
                  {hero.pipeline.stats.map((item, i) => (
                    <div className="hx-stat" key={i}>
                      <div className="hx-stat-num">{item.num}</div>
                      <div className="hx-stat-label">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="hx-stats-meta">
                  <span>
                    {hero.pipeline.successRate} <strong className="hx-accent"><bdi>27.3%</bdi></strong>
                  </span>
                  <span>
                    {hero.pipeline.pipelineValue} <strong><bdi>$31.2M</bdi></strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;