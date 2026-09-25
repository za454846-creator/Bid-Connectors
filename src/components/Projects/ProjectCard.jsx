"use client";

/**
 * ProjectCard
 * One project in a grid: status, public/private, name, location, value, bid date, trades.
 */
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";
import {
  STATUSES, formatDate, formatValue, locationLabel, ownershipLabel,
  projectUrl, sectorLabel, stageLabel, statusLabel, tradeLabel, fill,
} from "@/lib/projects";

const MAX_TRADES = 3;

export default function ProjectCard({ project }) {
  const { t, lang, isRTL, localePath } = useLanguage();
  const c = t.projects.card;
  const tone = STATUSES[project.status]?.tone || "gray";
  const extra = project.trades.length - MAX_TRADES;

  return (
    <article className="pj-card">
      <div className="pj-card-top">
        <span className={`pj-status pj-status-${tone}`}>{statusLabel(project.status, lang)}</span>
        <span className={`pj-own pj-own-${project.ownership}`}>{ownershipLabel(project.ownership, lang)}</span>
      </div>

      <h3 className="pj-card-title">
        <Link href={localePath(projectUrl(project.slug))} className="pj-card-link">
          {project.name}
        </Link>
      </h3>

      <p className="pj-card-loc">
        <i className="bi bi-geo-alt" aria-hidden="true"></i>
        {locationLabel(project, lang)} · {sectorLabel(project.sector, lang)}
      </p>

      <dl className="pj-card-meta">
        <div>
          <dt>{c.value}</dt>
          <dd><bdi>{formatValue(project.value)}</bdi></dd>
        </div>
        <div>
          <dt>{c.bidDate}</dt>
          <dd>{formatDate(project.bidDate, lang)}</dd>
        </div>
        <div>
          <dt>{c.stage}</dt>
          <dd>{stageLabel(project.stage, lang)}</dd>
        </div>
      </dl>

      <ul className="pj-chips" aria-label={t.projects.detail.trades}>
        {project.trades.slice(0, MAX_TRADES).map((slug) => (
          <li key={slug} className="pj-chip">{tradeLabel(slug, lang)}</li>
        ))}
        {extra > 0 && <li className="pj-chip pj-chip-more">{fill(c.moreTrades, { count: extra })}</li>}
      </ul>

      <span className="pj-card-cta" aria-hidden="true">
        {c.view} <i className={`bi ${isRTL ? "bi-arrow-left" : "bi-arrow-right"}`}></i>
      </span>
    </article>
  );
}
