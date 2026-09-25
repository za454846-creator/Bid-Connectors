"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
// Icon order matches JSON "items"
const ICONS = [
  "bi-diagram-3",
  "bi-clock",
  "bi-cash-stack",
  "bi-check-circle",
  "bi-people",
  "bi-shield-check",
];

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const w = t.whyChoose;

  return (
    <section className="whychoose-section">
      <div className="container">

        {/* Header */}
        <div className="why_choose_content text-center mb-5">
          <span className="badge-features mb-3">{w.badge}</span>
          <h2 className="mt-3">{w.title}</h2>
          <p className="opacity-75">{w.desc}</p>
        </div>

        {/* Grid */}
        <div className="row g-4">
          {w.items.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="whychoose-card">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <i className={`bi ${ICONS[i] || "bi-check-circle"} whychoose-icon`}></i>
                  <h3 className="whychoose-number mb-0"><bdi>{item.number}</bdi></h3>
                </div>
                <h3 className="whychoose-title mt-3">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;