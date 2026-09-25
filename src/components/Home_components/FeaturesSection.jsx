"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
// Icons and highlight do not depend on language.
// Order must match JSON "items".
const FEATURE_META = [
  { icon: "bi-search" },
  { icon: "bi-file-earmark-text" },
  { icon: "bi-pencil-square", highlight: true },
  { icon: "bi-people" },
  { icon: "bi-shield-check" },
  { icon: "bi-graph-up-arrow" },
];

const FeaturesSection = () => {
  const { t } = useLanguage();
  const f = t.features;

  return (
    <section className="features-wrapper py-5">
      <div className="container text-center mb-5">
        <span className="badge-features mb-3">{f.badge}</span>

        <h2 className="fw-bold mt-3">
          {f.titleStart} <span className="text-orange">{f.titleHighlight}</span> {f.titleEnd}
        </h2>

        <p className="text-secondary mx-auto mt-3" style={{ maxWidth: "600px" }}>
          {f.desc}
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {f.items.map((item, i) => {
            const meta = FEATURE_META[i] || {};
            return (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className={`feature-card ${meta.highlight ? "feature-highlight" : ""}`}>
                  <div className="feature-icon-box mb-3">
                    <i className={`bi ${meta.icon || "bi-check-circle"} ${meta.highlight ? "text-orange" : "text-white"}`}></i>
                  </div>
                  <h3 className="fw-bold mb-3">{item.title}</h3>
                  <p className="feature-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;