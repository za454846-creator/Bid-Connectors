"use client";

/**
 * HubProcess ("Our process")
 * Four numbered steps (a real sequence).
 * Text: t.projects.hub.process
 */
import { useLanguage } from "@/components/context/LanguageContext";
import SectionHead from "./SectionHead";

const ICONS = ["bi-search", "bi-clipboard-data", "bi-unlock", "bi-send-check"];

export default function HubProcess() {
  const { t } = useLanguage();
  const p = t.projects.hub.process;

  return (
    <section className="ph-section ph-process" aria-labelledby="ph-process-title">
      <div className="container">
        <SectionHead id="ph-process-title" eyebrow={p.eyebrow} title={p.title} text={p.text} center />

        <ol className="ph-steps">
          {p.steps.map((s, i) => (
            <li key={s.title} className="ph-step">
              <span className="ph-step-num" aria-hidden="true">{i + 1}</span>
              <i className={`bi ${ICONS[i] || "bi-check2"}`} aria-hidden="true"></i>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
