"use client";

/**
 * HubBenefits  (member benefits)
 * Centered heading + 4 cards with round icons.
 * Text: t.projects.hub.benefits
 */
import { useLanguage } from "@/components/context/LanguageContext";
import SectionHead from "./SectionHead";

const ICONS = ["bi-file-earmark-richtext", "bi-bell", "bi-person-lines-fill", "bi-bookmark-star"];

export default function HubBenefits() {
  const { t } = useLanguage();
  const b = t.projects.hub.benefits;

  return (
    <section className="ph-section ph-benefits" aria-labelledby="ph-benefits-title">
      <div className="container">
        <SectionHead id="ph-benefits-title" eyebrow={b.eyebrow} title={b.title} text={b.text} center />

        <ul className="ph-benefit-grid">
          {b.items.map((item, i) => (
            <li key={item.title} className="ph-benefit">
              <span className="ph-benefit-icon">
                <i className={`bi ${ICONS[i] || "bi-check2"}`} aria-hidden="true"></i>
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
