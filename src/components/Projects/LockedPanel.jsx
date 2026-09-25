"use client";

/**
 * LockedPanel
 * Shows WHAT is available after login (labels only). The actual plans, specs,
 * contacts, bidder list, addenda and takeoff are never part of the public page.
 */
import { useLanguage } from "@/components/context/LanguageContext";

import { LOGIN_URL, REGISTER_URL } from "@/lib/links";

const ICONS = [
  "bi-file-earmark-richtext", "bi-journal-text", "bi-person-lines-fill", "bi-people",
  "bi-folder2-open", "bi-file-earmark-plus", "bi-telephone", "bi-rulers",
];

export default function LockedPanel() {
  const { t } = useLanguage();
  const l = t.projects.detail.locked;

  return (
    <section className="pj-locked" aria-labelledby="pj-locked-title">
      <span className="pj-eyebrow">
        <i className="bi bi-lock-fill" aria-hidden="true"></i> {l.eyebrow}
      </span>
      <h2 id="pj-locked-title" className="pj-locked-title">{l.title}</h2>
      <p className="pj-locked-text">{l.text}</p>

      <ul className="pj-locked-list">
        {l.items.map((item, i) => (
          <li key={i}>
            <i className={`bi ${ICONS[i] || "bi-file-earmark"}`} aria-hidden="true"></i>
            <span>{item}</span>
            <i className="bi bi-lock-fill pj-locked-lock" aria-hidden="true"></i>
          </li>
        ))}
      </ul>

      <div className="pj-locked-actions">
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="pj-btn pj-btn-primary">
          {l.register}
        </a>
        <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="pj-btn pj-btn-ghost">
          <i className="bi bi-box-arrow-in-right" aria-hidden="true"></i> {l.login}
        </a>
      </div>
      <p className="pj-locked-note">{l.note}</p>
    </section>
  );
}
