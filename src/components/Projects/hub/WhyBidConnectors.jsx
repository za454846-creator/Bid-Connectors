"use client";

/**
 * WhyBidConnectors
 * Heading left (sticky on desktop), reasons list right.
 * Text: t.projects.hub.why
 */
import { useLanguage } from "@/components/context/LanguageContext";

const ICONS = ["bi-patch-check", "bi-funnel", "bi-folder2-open", "bi-person-lines-fill"];

export default function WhyBidConnectors() {
  const { t } = useLanguage();
  const w = t.projects.hub.why;

  return (
    <section className="ph-section ph-why" aria-labelledby="ph-why-title">
      <div className="container ph-split">
        <div className="ph-split-head">
          <span className="ph-eyebrow">{w.eyebrow}</span>
          <h2 id="ph-why-title" className="ph-h2">{w.title}</h2>
          <p className="ph-text">{w.text}</p>
        </div>

        <ul className="ph-reasons">
          {w.items.map((item, i) => (
            <li key={item.title}>
              <i className={`bi ${ICONS[i] || "bi-check2-circle"}`} aria-hidden="true"></i>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
