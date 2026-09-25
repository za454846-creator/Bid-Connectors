"use client";

import React from "react";
import { useLanguage } from "@/components/context/LanguageContext";

import StatsSection from "@/components/Home_components/StatsSection";
import Testimonials from "@/components/Home_components/Testimonials";
import CTASection from "@/components/Home_components/CTASection";
import FaqComponent from "@/components/Home_components/FaqComponent";
import SiteImage from "@/components/SiteImage";

// home.css is required: the four components below are styled there.
// about.css goes last so it can override.
const storyImg = "/images/about_pageimage.webp";
const teamImg1 = "/images/marcus.webp";
const teamImg2 = "/images/elena.webp";
const teamImg3 = "/images/jordan.webp";
const teamImg4 = "/images/nicholas.webp";
const SITE_URL = "https://bidconnectors.com";
const PAGE_PATH = "/about";
const PAGE_IMAGE = "https://bidconnectors.com/og/about.jpg";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

// Language-independent data. Order matches JSON.
// NOTE: Bootstrap Icons has no "bi-hard-hat" icon,
// so "bi-cone-striped" (construction cone) is used.
const VALUE_ICONS = ["bi bi-rocket-takeoff", "bi bi-chat-square-text", "bi bi-cone-striped"];

// TODO: replace the LinkedIn URLs with each person's real profile.
const TEAM_META = [
  { img: teamImg1, linkedin: "https://www.linkedin.com/company/bidconnectors", email: "marcus@bidconnectors.com" },
  { img: teamImg2, linkedin: "https://www.linkedin.com/company/bidconnectors", email: "elena@bidconnectors.com" },
  { img: teamImg3, linkedin: "https://www.linkedin.com/company/bidconnectors", email: "jordan@bidconnectors.com" },
  { img: teamImg4, linkedin: "https://www.linkedin.com/company/bidconnectors", email: "nicholas@bidconnectors.com" },
];

// "{name} on LinkedIn" => "Marcus Webb on LinkedIn"
const fill = (template, name) => template.replace("{name}", name);

function About() {
  const { t, lang } = useLanguage();
  const a = t.about;

  const pageUrl = lang === "ar" ? `${SITE_URL}/ar${PAGE_PATH}` : `${SITE_URL}${PAGE_PATH}`;

  return (
    <>


      {/* Keep className="about-page": solutions.css defines the same
          banner class names for the Subcontractors page. */}
      <main className="about-page">

        {/* ================= BANNER ================= */}
        <section className="about-banner">
          <div className="container">
            <div className="banner-content">
              <h1>
                {a.banner.titleStart} <span>{a.banner.titleHighlight}</span>
              </h1>

              <p>{a.banner.text}</p>

              <a href="#team" className="banner-btn">
                {a.banner.btn} <i className="bi bi-arrow-down" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <StatsSection stats={a.stats} />

        {/* ================= OUR STORY ================= */}
        <section className="our-story-sec">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0">
                <div className="left_content">
                  <h2>{a.story.title}</h2>
                  <p>{a.story.p1}</p>
                  <p>{a.story.p2}</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div className="right_col">
                  <SiteImage src={storyImg} alt={a.story.imgAlt} />

                  <div className="stats-wrapper">
                    <div className="stat-box">
                      <p>{a.story.founded}</p>
                      <h3><bdi>{a.story.foundedValue}</bdi></h3>
                    </div>

                    <div className="divider"></div>

                    <div className="stat-box">
                      <p>{a.story.hq}</p>
                      <h3>{a.story.hqValue}</h3>
                    </div>

                    <div className="divider"></div>

                    <div className="stat-box">
                      <p>{a.story.accounts}</p>
                      <h3 className="highlight"><bdi>{a.story.accountsValue}</bdi></h3>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className="mission-vision-section">
          <div className="container">

            <div className="mission-vision-header">
              <span className="about-badge">{a.mission.badge}</span>
              <h2 className="mission-vision-title">
                {a.mission.titleStart} <span>{a.mission.titleHighlight}</span>
              </h2>
            </div>

            <div className="row g-4 mission-vision-grid">
              <div className="col-lg-6 col-md-6">
                <div className="mission-vision-card h-100">
                  <div className="mission-vision-icon-wrap">
                    <i className="bi bi-bullseye" aria-hidden="true"></i>
                  </div>
                  <h3>{a.mission.missionTitle}</h3>
                  <p>{a.mission.missionText}</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="mission-vision-card h-100">
                  <div className="mission-vision-icon-wrap">
                    <i className="bi bi-eye" aria-hidden="true"></i>
                  </div>
                  <h3>{a.mission.visionTitle}</h3>
                  <p>{a.mission.visionText}</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= CORE VALUES ================= */}
        <section className="core-values-section">
          <div className="container">

            <div className="text-center mb-5">
              <span className="about-badge">{a.values.badge}</span>
              <h2 className="values-title">
                {a.values.titleStart} <span>{a.values.titleHighlight}</span>
              </h2>
              <p className="values-subtitle">{a.values.subtitle}</p>
            </div>

            <div className="row g-4">
              {a.values.items.map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div className="value-card" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="value-icon">
                      <i className={VALUE_ICONS[i] || "bi bi-star"} aria-hidden="true"></i>
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="process-section">
          <div className="container">

            <div className="text-center">
              <span className="about-badge">{a.process.badge}</span>
              <h2 className="section-title">
                {a.process.titleStart} <span>{a.process.titleHighlight}</span>
              </h2>
              <p className="section-desc">{a.process.desc}</p>
            </div>

            <div className="row g-4 process-grid">
              {a.process.steps.map((item, i) => (
                <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                  <div className="process-step" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= TEAM ================= */}
        <section className="team-section" id="team">
          <div className="container">

            <h2 className="section-title">{a.team.title}</h2>

            <div className="team-grid">
              {a.team.members.map((member, i) => {
                const meta = TEAM_META[i] || {};
                return (
                  <div className="team-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                    <SiteImage src={meta.img} alt={member.name} className="team-img" />
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>

                    <div className="social-icons">
                      <a
                        href={meta.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={fill(a.team.linkedinLabel, member.name)}
                      >
                        <i className="bi bi-linkedin" aria-hidden="true"></i>
                      </a>
                      <a
                        href={`mailto:${meta.email}`}
                        aria-label={fill(a.team.emailLabel, member.name)}
                      >
                        <i className="bi bi-envelope" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <Testimonials
          heading={a.testimonials.heading}
          highlight={a.testimonials.highlight}
          subtitle={a.testimonials.subtitle}
          testimonials={a.testimonials.items}
        />

        {/* ================= FAQ ================= */}
        <FaqComponent
          title={a.faq.title}
          highlight={a.faq.highlight}
          description={a.faq.description}
          faqs={a.faq.items}
        />

        {/* ================= CTA ================= */}
        <CTASection
          titleLine1={a.cta.titleLine1}
          titleHighlight={a.cta.titleHighlight}
          subText={a.cta.subText}
          primaryBtnText={a.cta.primaryBtn}
          primaryBtnLink={REGISTER_URL}
          primaryBtnNewTab={true}
          secondaryBtnText={a.cta.secondaryBtn}
          secondaryBtnLink={REGISTER_URL}
          secondaryBtnNewTab={true}
          noteText={a.cta.note}
        />
      </main>
    </>
  );
}

export default About;