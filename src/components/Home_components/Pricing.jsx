"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";
const SALES_PATH = "/contact-us";

// Structure only: links, styles and which features are included.
// Text comes from JSON "pricing.plans" (same feature order).
const PLANS = [
  {
    key: "starter",
    btnStyle: "outline",
    btnLink: REGISTER_URL,
    external: true,
    included: [true, true, true, false, false],
  },
  {
    key: "growth",
    highlight: true,
    btnStyle: "filled",
    btnLink: REGISTER_URL,
    external: true,
    included: [true, true, true, true, true, true],
  },
  {
    key: "enterprise",
    btnStyle: "outline",
    btnLink: SALES_PATH,
    external: false,
    included: [true, true, true, true, true, true],
  },
];

function FeatureIcon({ included }) {
  return (
    <span
      className={`feat-icon ${included ? "feat-icon-yes" : "feat-icon-no"}`}
      aria-hidden="true"
    >
      <i className={included ? "bi bi-check-lg" : "bi bi-x-lg"}></i>
    </span>
  );
}

export default function Pricing() {
  const { t, localePath } = useLanguage();
  const pr = t.pricing;

  return (
    <section className="pricing" aria-label={pr.ariaLabel}>
      <div className="container">

        {/* HEADER */}
        <div className="pricing-header">
          <div className="hero-live-badge mb-4">
            <span className="hero-live-dot"></span>
            <span>{pr.badge}</span>
          </div>

          <h2 className="mt-3">
            {pr.titleStart} <span>{pr.titleHighlight}</span>
          </h2>

          <p>{pr.desc}</p>
        </div>

        {/* CARDS */}
        <div className="pricing-grid">
          {PLANS.map((plan) => {
            const text = pr.plans[plan.key];

            return (
              <div
                key={plan.key}
                className={`pricing_card ${plan.highlight ? "highlight" : ""}`}
              >
                {text.badge && <div className="pricing_card-badge">{text.badge}</div>}

                <h3>{text.name}</h3>
                <p className="desc">{text.desc}</p>

                <div className="price">
                  <bdi>{text.price}</bdi>
                  {text.period && <small>{text.period}</small>}
                </div>

                <ul>
                  {text.features.map((label, i) => {
                    const included = plan.included[i] !== false;
                    return (
                      <li key={i}>
                        <FeatureIcon included={included} />
                        <span className={included ? "" : "disabled"}>{label}</span>
                        <span className="visually-hidden">
                          {" "}{included ? pr.included : pr.notIncluded}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {plan.external ? (
                  <a
                    href={plan.btnLink}
                    className={`plan-cta ${plan.btnStyle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {text.btn}
                  </a>
                ) : (
                  <Link href={localePath(plan.btnLink)} className={`plan-cta ${plan.btnStyle}`}>
                    {text.btn}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}