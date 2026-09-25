"use client";

/**
 * ProjectDetail  (/construction-projects/[slug])
 * Public facts only. Plans, specs, contacts, bidder list, addenda and takeoff
 * are shown as locked items (LockedPanel) and are never in the page HTML.
 */
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";
import Breadcrumbs from "@/components/Projects/Breadcrumbs";
import LockedPanel from "@/components/Projects/LockedPanel";
import ProjectGrid from "@/components/Projects/ProjectGrid";
import {
  BASE, STATUSES, getProject, getState, getCity, label, relatedProjects,
  formatDate, formatValue, typeLabel, sectorLabel, stageLabel, statusLabel, ownershipLabel,
  tradeLabel, tradeUrl, sectorUrl, stateUrl, cityUrl,
} from "@/lib/projects";

import { REGISTER_URL } from "@/lib/links";

export default function ProjectDetail({ slug }) {
  const { t, lang, localePath } = useLanguage();
  const pj = t.projects;
  const d = pj.detail;
  const p = getProject(slug);
  const st = getState(p.state);
  const ct = getCity(p.state, p.city);
  const tone = STATUSES[p.status]?.tone || "gray";

  const facts = [
    { k: d.location, v: (
      <>
        <Link href={localePath(cityUrl(p.state, p.city))}>{label(ct, lang)}</Link>,{" "}
        <Link href={localePath(stateUrl(p.state))}>{label(st, lang)}</Link>
      </>
    ) },
    { k: d.projectType, v: typeLabel(p.type, lang) },
    { k: d.sector, v: <Link href={localePath(sectorUrl(p.sector))}>{sectorLabel(p.sector, lang)}</Link> },
    { k: d.value, v: <bdi>{formatValue(p.value)}</bdi> },
    { k: d.bidDate, v: formatDate(p.bidDate, lang) },
    { k: d.stage, v: stageLabel(p.stage, lang) },
    { k: d.ownership, v: ownershipLabel(p.ownership, lang) },
    { k: d.owner, v: p.owner ? <bdi>{p.owner}</bdi> : <span className="pj-muted"><i className="bi bi-lock-fill" aria-hidden="true"></i> {d.ownerHidden}</span> },
    { k: d.lastUpdated, v: formatDate(p.lastUpdated, lang) },
  ];

  return (
    <main className="pj-page">
      {/* Banner */}
      <section className="pjd-hero">
        <div className="pjd-hero-grid" aria-hidden="true"></div>
        <div className="container pjd-hero-inner">
          <Breadcrumbs
            items={[
              { label: pj.breadcrumbHome, path: "/" },
              { label: pj.breadcrumbProjects, path: BASE },
              { label: label(st, lang), path: stateUrl(p.state) },
              { label: p.name, path: `${BASE}/${p.slug}` },
            ]}
          />

          <div className="pjd-head">
            <div className="pjd-head-copy">
              <div className="pj-badges">
                <span className={`pj-status pj-status-${tone}`}>{statusLabel(p.status, lang)}</span>
                <span className={`pj-own pj-own-${p.ownership}`}>{ownershipLabel(p.ownership, lang)}</span>
                <span className="pj-own">{typeLabel(p.type, lang)}</span>
              </div>
              <h1 className="pjd-title" dir="auto">{p.name}</h1>
              <p className="pjd-meta">
                <span><i className="bi bi-geo-alt" aria-hidden="true"></i> {label(ct, lang)}, {label(st, lang)}</span>
                <span><i className="bi bi-buildings" aria-hidden="true"></i> {sectorLabel(p.sector, lang)}</span>
                <span><i className="bi bi-clock-history" aria-hidden="true"></i> {d.lastUpdated}: {formatDate(p.lastUpdated, lang)}</span>
              </p>
            </div>

            <div className="pjd-actions">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="pj-btn pj-btn-primary">
                <i className="bi bi-unlock" aria-hidden="true"></i> {d.locked.register}
              </a>
              <Link href={localePath(BASE)} className="pj-btn pjd-btn-ghost">
                <i className="bi bi-grid" aria-hidden="true"></i> {d.backToAll}
              </Link>
            </div>
          </div>

          {/* Key numbers */}
          <dl className="pjd-stats">
            <div className="pjd-stat pjd-stat-accent">
              <dt>{d.value}</dt>
              <dd><bdi>{formatValue(p.value)}</bdi></dd>
            </div>
            <div className="pjd-stat">
              <dt>{d.bidDate}</dt>
              <dd>{formatDate(p.bidDate, lang)}</dd>
            </div>
            <div className="pjd-stat">
              <dt>{d.stage}</dt>
              <dd>{stageLabel(p.stage, lang)}</dd>
            </div>
            <div className="pjd-stat">
              <dt>{d.trades}</dt>
              <dd><bdi>{p.trades.length}</bdi></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pj-section">
        <div className="container pj-detail">
          <div className="pj-detail-main">
            <h2 className="pj-h2">{d.overview}</h2>
            <dl className="pj-facts">
              {facts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>

            <h2 className="pj-h2">{d.trades}</h2>
            <ul className="pj-chips pj-chips-lg">
              {p.trades.map((slugT) => (
                <li key={slugT}>
                  <Link href={localePath(tradeUrl(slugT))} className="pj-chip">{tradeLabel(slugT, lang)}</Link>
                </li>
              ))}
            </ul>

            <h2 className="pj-h2">{d.scope}</h2>
            <p className="pj-scope">{p.scope[lang] || p.scope.en}</p>

            <LockedPanel />
          </div>

          <aside className="pj-detail-side">
            <div className="pj-side-card">
              <div className="pj-side-row">
                <span>{d.value}</span>
                <strong><bdi>{formatValue(p.value)}</bdi></strong>
              </div>
              <div className="pj-side-row">
                <span>{d.bidDate}</span>
                <strong>{formatDate(p.bidDate, lang)}</strong>
              </div>
              <h3 className="pj-side-title">{d.sideTitle}</h3>
              <p className="pj-side-text">{d.sideText}</p>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="pj-btn pj-btn-primary pj-btn-block">
                {d.locked.register}
              </a>
              <Link href={localePath(BASE)} className="pj-back">
                <i className="bi bi-grid" aria-hidden="true"></i> {d.backToAll}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="pj-section pj-related">
        <div className="container">
          <h2 className="pj-h2">{d.related}</h2>
          <ProjectGrid projects={relatedProjects(p)} emptyText="" />
        </div>
      </section>
    </main>
  );
}
