"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import SiteImage from "@/components/SiteImage";
const projectImg1 = "/images/workflow1.webp";
const projectImg2 = "/images/workflow2.webp";
const projectImg3 = "/images/workflow3.webp";
const projectImg4 = "/images/workflow4.webp";
// Tab order and images do not depend on language
const TABS = [
  { id: "projects", img: projectImg1 },
  { id: "bids", img: projectImg2 },
  { id: "estimating", img: projectImg3 },
  { id: "pipeline", img: projectImg4 },
];

const PlatformSection = () => {
  const { t } = useLanguage();
  const p = t.platform;
  const [activeTab, setActiveTab] = useState("projects");

  const activeMeta = TABS.find((tab) => tab.id === activeTab) || TABS[0];
  const current = p.tabs[activeMeta.id];

  return (
    <section className="platform-section">
      <div className="container">

        {/* Header */}
        <div className="platform-header text-center">
          <span className="badge-features mb-3">{p.badge}</span>

          <h2 className="platform-title mt-3">
            {p.titleStart} <span>{p.titleHighlight}</span>
          </h2>

          <p className="platform-desc">{p.desc}</p>

          {/* Tabs */}
          <div className="platform-tabs d-flex justify-content-center flex-wrap" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`platform-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {p.tabs[tab.id].label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="row align-items-center platform-content">

          {/* Text (right-aligned automatically in RTL) */}
          <div className="col-lg-6">
            <h3 className="platform-subtitle">{current.title}</h3>
            <p className="platform-text">{current.desc}</p>

            <ul className="platform-features">
              {current.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="col-lg-6">
            <div className="platform-image-wrapper">
              <SiteImage src={activeMeta.img} alt={current.alt} className="img-fluid" />
              <div className="platform-notification">🔔 {p.notification}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlatformSection;