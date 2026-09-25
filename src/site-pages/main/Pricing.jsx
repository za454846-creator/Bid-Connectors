"use client";

import JsonLd from "@/components/JsonLd";
import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";

import CTASection from "@/components/Home_components/CTASection";
import FaqComponent from "@/components/Home_components/FaqComponent";

// home.css is required: FaqComponent and CTASection are styled there.
// pricing.css goes last so it can override.
const SITE_URL = "https://bidconnectors.com";
const PAGE_PATH = "/pricing";
const PAGE_IMAGE = "https://bidconnectors.com/og/pricing.jpg";

const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";
const SALES_PATH = "/contact-us";

// Numbers, links and styles only. Text comes from JSON "pricingPage.plans".
const PLANS = [
  {
    key: "starter",
    monthlyPrice: "0",
    yearlyPrice: "0",
    yearlyPerMonth: null,
    btnStyle: "plan-btn-outline",
    btnLink: REGISTER_URL,
    external: true,
    popular: false,
    active: [true, true, true, false, false],
  },
  {
    key: "growth",
    monthlyPrice: "149",
    yearlyPrice: "1,490",
    yearlyPerMonth: "124",
    btnStyle: "plan-btn-primary",
    btnLink: REGISTER_URL,
    external: true,
    popular: true,
    active: [true, true, true, true, true, true],
  },
  {
    key: "enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    yearlyPerMonth: null,
    btnStyle: "plan-btn-outline",
    btnLink: SALES_PATH,
    external: false,
    popular: false,
    active: [true, true, true, true, true, true],
  },
];

function Pricing() {
  const { t, lang, localePath } = useLanguage();
  const p = t.pricingPage;
  const [isYearly, setIsYearly] = useState(false);

  const pageUrl = lang === "ar" ? `${SITE_URL}/ar${PAGE_PATH}` : `${SITE_URL}${PAGE_PATH}`;

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Bid Connectors Subscription Plans",
    description: p.seo.description,
    brand: { "@type": "Brand", name: "Bid Connectors" },
    offers: PLANS.filter((plan) => plan.monthlyPrice !== null).map((plan) => ({
      "@type": "Offer",
      name: p.plans[plan.key].name,
      description: p.plans[plan.key].desc,
      price: plan.monthlyPrice.replace(/,/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    })),
  };

  return (
    <>
      <JsonLd data={pricingSchema} />

      {/* Keep className="pricing-page": pricing.css is scoped to it. */}
      <main className="pricing-page">

        {/* ================= BANNER ================= */}
        <section className="pricing-banner" aria-labelledby="pricing-heading">
          <div className="container">
            <div className="banner-content">
              <span className="pricing-eyebrow">{p.eyebrow}</span>

              <h1 id="pricing-heading">
                {p.titleStart} <span>{p.titleHighlight}</span>
              </h1>

              <p>{p.text}</p>

              <div className="banner-cta-group">
                <a href="#plans" className="banner-btn">
                  {p.btnPlans}
                </a>
                <Link href={localePath(SALES_PATH)} className="banner-btn banner-btn-outline">
                  {p.btnSales}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section className="pricing-section" id="plans" aria-label={p.sectionLabel}>
          <div className="container">

            <div className="pricing-top">
              <h2 className="pricing_heading">{p.heading}</h2>
              <p className="pricing-sub">{p.sub}</p>

              <div className="toggle-wrap" role="group" aria-label={p.billingLabel}>
                <button
                  type="button"
                  className={`toggle-label ${!isYearly ? "active" : ""}`}
                  onClick={() => setIsYearly(false)}
                  aria-pressed={!isYearly}
                >
                  <i className="bi bi-calendar3 toggle-icon" aria-hidden="true"></i>
                  {p.monthly}
                </button>

                <span className={`toggle-switch ${isYearly ? "is-yearly" : ""}`} aria-hidden="true">
                  <span className="toggle-thumb"></span>
                </span>

                <button
                  type="button"
                  className={`toggle-label ${isYearly ? "active" : ""}`}
                  onClick={() => setIsYearly(true)}
                  aria-pressed={isYearly}
                >
                  <i className="bi bi-award toggle-icon" aria-hidden="true"></i>
                  {p.yearly}
                </button>
              </div>
            </div>

            {/* ================= CARDS ================= */}
            <div className="pricing-grid">
              {PLANS.map((plan, i) => {
                const text = p.plans[plan.key];

                return (
                  <div
                    key={plan.key}
                    className={`pricing-plan-card ${plan.popular ? "popular" : ""}`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {plan.popular && <div className="popular-badge">{p.popular}</div>}

                    <h3>{text.name}</h3>
                    <p className="card-desc">{text.desc}</p>

                    <div className="card-price">
                      {plan.monthlyPrice !== null ? (
                        <>
                          <bdi className="price-amount">
                            ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                          </bdi>
                          <span className="price-period">
                            {isYearly ? p.perYear : p.perMonth}
                            {isYearly && plan.yearlyPerMonth && (
                              <> <bdi>{p.yearlyPerMonth.replace("{price}", plan.yearlyPerMonth)}</bdi></>
                            )}
                          </span>
                        </>
                      ) : (
                        <span className="price-custom">{p.custom}</span>
                      )}
                    </div>

                    {text.priceNote && <p className="price-note">{text.priceNote}</p>}

                    {plan.external ? (
                      <a
                        href={plan.btnLink}
                        className={`plan-btn ${plan.btnStyle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {text.btn}
                      </a>
                    ) : (
                      <Link href={localePath(plan.btnLink)} className={`plan-btn ${plan.btnStyle}`}>
                        {text.btn}
                      </Link>
                    )}

                    <div className="divider"></div>

                    <ul className="features-list">
                      {text.features.map((label, idx) => {
                        const active = plan.active[idx] !== false;
                        return (
                          <li key={idx} className={!active ? "disabled" : ""}>
                            <span
                              className={`feat-icon ${active ? "feat-icon-yes" : "feat-icon-no"}`}
                              aria-hidden="true"
                            >
                              {active ? "✓" : "✕"}
                            </span>
                            {label}
                            <span className="visually-hidden">
                              {" "}{active ? p.included : p.notIncluded}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= FAQ ================= */}
        <FaqComponent
          title={p.faq.title}
          highlight={p.faq.highlight}
          description={p.faq.description}
          faqs={p.faq.items}
        />

        {/* ================= CTA ================= */}
        <CTASection
          titleLine1={p.cta.titleLine1}
          titleHighlight={p.cta.titleHighlight}
          subText={p.cta.subText}
          primaryBtnText={p.cta.primaryBtn}
          primaryBtnLink={REGISTER_URL}
          primaryBtnNewTab={true}
          secondaryBtnText={p.cta.secondaryBtn}
          secondaryBtnLink={localePath(SALES_PATH)}
          noteText={p.cta.note}
        />
      </main>
    </>
  );
}

export default Pricing;