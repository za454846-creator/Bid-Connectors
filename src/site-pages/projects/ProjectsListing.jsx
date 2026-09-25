"use client";

/**
 * ProjectsListing
 * One template for: /trade/[trade], /sector/[sector], /location/[state], /location/[state]/[city]
 * Props: kind ("trade" | "sector" | "state" | "city"), slug, citySlug (city only)
 */
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";
import ProjectGrid from "@/components/Projects/ProjectGrid";
import Breadcrumbs from "@/components/Projects/Breadcrumbs";
import {
  BASE, TRADES, SECTORS, STATES, label, fill, sortProjects,
  getTrade, getSector, getState, getCity, byTrade, bySector, byState, byCity,
  tradeUrl, sectorUrl, stateUrl, cityUrl,
} from "@/lib/projects";

export default function ProjectsListing({ kind, slug, citySlug }) {
  const { t, lang, localePath } = useLanguage();
  const pj = t.projects;

  // What this page is about
  let title, eyebrow, text, projects, crumbs, related, relatedTitle, cities = null;
  const home = { label: pj.breadcrumbHome, path: "/" };
  const hub = { label: pj.breadcrumbProjects, path: BASE };

  if (kind === "trade") {
    const tr = getTrade(slug);
    const name = label(tr, lang);
    title = fill(pj.seo.tradeTitle, { trade: name });
    eyebrow = pj.listing.tradeEyebrow;
    text = fill(pj.listing.tradeText, { trade: name });
    projects = byTrade(slug);
    crumbs = [home, hub, { label: name, path: tradeUrl(slug) }];
    related = TRADES.filter((x) => x.slug !== slug).map((x) => ({ key: x.slug, label: label(x, lang), path: tradeUrl(x.slug) }));
    relatedTitle = pj.listing.otherTrades;
  } else if (kind === "sector") {
    const se = getSector(slug);
    const name = label(se, lang);
    title = fill(pj.seo.sectorTitle, { sector: name });
    eyebrow = pj.listing.sectorEyebrow;
    text = fill(pj.listing.sectorText, { sector: name });
    projects = bySector(slug);
    crumbs = [home, hub, { label: name, path: sectorUrl(slug) }];
    related = SECTORS.filter((x) => x.slug !== slug).map((x) => ({ key: x.slug, label: label(x, lang), path: sectorUrl(x.slug) }));
    relatedTitle = pj.listing.otherSectors;
  } else {
    const st = getState(slug);
    const stateName = label(st, lang);
    eyebrow = pj.listing.locationEyebrow;
    if (kind === "city") {
      const cityName = label(getCity(slug, citySlug), lang);
      title = fill(pj.seo.cityTitle, { city: cityName, state: stateName });
      text = fill(pj.listing.cityText, { city: cityName, state: stateName });
      projects = byCity(slug, citySlug);
      crumbs = [home, hub, { label: stateName, path: stateUrl(slug) }, { label: cityName, path: cityUrl(slug, citySlug) }];
    } else {
      title = fill(pj.seo.stateTitle, { state: stateName });
      text = fill(pj.listing.stateText, { state: stateName });
      projects = byState(slug);
      crumbs = [home, hub, { label: stateName, path: stateUrl(slug) }];
    }
    cities = { title: fill(pj.listing.citiesIn, { state: stateName }), list: st.cities.map((c) => ({ ...c, count: byCity(slug, c.slug).length })) };
    related = STATES.filter((x) => x.slug !== slug).map((x) => ({ key: x.slug, label: label(x, lang), path: stateUrl(x.slug) }));
    relatedTitle = pj.listing.otherStates;
  }

  return (
    <main className="pj-page">
      <section className="pj-hero pj-hero-sm">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="pj-eyebrow">{eyebrow}</span>
          <h1 className="pj-title">{title}</h1>
          <p className="pj-lead">{text}</p>
          <p className="pj-count">
            <i className="bi bi-collection" aria-hidden="true"></i> {fill(pj.listing.count, { count: projects.length })}
          </p>

          {cities && (
            <div className="pj-city-row">
              <span className="pj-city-row-title">{cities.title}:</span>
              {cities.list.map((c) => (
                <Link
                  key={c.slug}
                  href={localePath(cityUrl(slug, c.slug))}
                  className={`pj-pill ${kind === "city" && c.slug === citySlug ? "is-active" : ""}`}
                  aria-current={kind === "city" && c.slug === citySlug ? "page" : undefined}
                >
                  {label(c, lang)} <small>({c.count})</small>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pj-section">
        <div className="container">
          <ProjectGrid projects={sortProjects(projects)} emptyText={pj.hub.noResults} />

          <div className="pj-related-links">
            <h2 className="pj-h2">{relatedTitle}</h2>
            <div className="pj-pills">
              {related.map((r) => (
                <Link key={r.key} href={localePath(r.path)} className="pj-pill">
                  {r.label}
                </Link>
              ))}
            </div>
            <Link href={localePath(BASE)} className="pj-back">
              <i className="bi bi-grid" aria-hidden="true"></i> {pj.listing.viewAll}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
