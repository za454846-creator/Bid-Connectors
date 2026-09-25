/**
 * Helpers for construction project pages: lookups, filters, related projects,
 * URL builders and deterministic formatting (same output on server and browser).
 */
import { PROJECTS, TRADES, SECTORS, STATES, PROJECT_TYPES, STAGES, STATUSES, OWNERSHIP } from "@/data/projects";

export const BASE = "/construction-projects";

// ---------- Lookups ----------
export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);
export const getTrade = (slug) => TRADES.find((t) => t.slug === slug);
export const getSector = (slug) => SECTORS.find((s) => s.slug === slug);
export const getState = (slug) => STATES.find((s) => s.slug === slug);
export const getCity = (stateSlug, citySlug) => getState(stateSlug)?.cities.find((c) => c.slug === citySlug);

// Label in the current language
export const label = (item, lang) => (item ? item[lang] || item.en : "");
export const tradeLabel = (slug, lang) => label(getTrade(slug), lang);
export const sectorLabel = (slug, lang) => label(getSector(slug), lang);
export const typeLabel = (slug, lang) => label(PROJECT_TYPES[slug], lang);
export const stageLabel = (slug, lang) => label(STAGES[slug], lang);
export const statusLabel = (slug, lang) => label(STATUSES[slug], lang);
export const ownershipLabel = (slug, lang) => label(OWNERSHIP[slug], lang);

export const locationLabel = (p, lang) => {
  const st = getState(p.state);
  const ct = getCity(p.state, p.city);
  return `${label(ct, lang)}, ${label(st, lang)}`;
};

// ---------- Filters ----------
export const byTrade = (slug) => PROJECTS.filter((p) => p.trades.includes(slug));
export const bySector = (slug) => PROJECTS.filter((p) => p.sector === slug);
export const byState = (slug) => PROJECTS.filter((p) => p.state === slug);
export const byCity = (stateSlug, citySlug) => PROJECTS.filter((p) => p.state === stateSlug && p.city === citySlug);

// Open projects first (by bid date), then awarded ones
export const sortProjects = (list) =>
  [...list].sort((a, b) => {
    const aw = (a.status === "awarded") - (b.status === "awarded");
    return aw !== 0 ? aw : a.bidDate.localeCompare(b.bidDate);
  });

// Related: same sector / trades / state, strongest match first
export const relatedProjects = (project, limit = 3) =>
  PROJECTS.filter((p) => p.slug !== project.slug)
    .map((p) => ({
      p,
      score:
        (p.sector === project.sector ? 3 : 0) +
        (p.state === project.state ? 2 : 0) +
        p.trades.filter((t) => project.trades.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || a.p.bidDate.localeCompare(b.p.bidDate))
    .slice(0, limit)
    .map((x) => x.p);

// ---------- URLs (without /ar; use localePath() in components) ----------
export const projectUrl = (slug) => `${BASE}/${slug}`;
export const tradeUrl = (slug) => `${BASE}/trade/${slug}`;
export const sectorUrl = (slug) => `${BASE}/sector/${slug}`;
export const stateUrl = (slug) => `${BASE}/location/${slug}`;
export const cityUrl = (stateSlug, citySlug) => `${BASE}/location/${stateSlug}/${citySlug}`;

// Every URL for sitemap / static params
export const allProjectPaths = () => [
  BASE,
  ...TRADES.map((t) => tradeUrl(t.slug)),
  ...SECTORS.map((s) => sectorUrl(s.slug)),
  ...STATES.map((s) => stateUrl(s.slug)),
  ...STATES.flatMap((s) => s.cities.map((c) => cityUrl(s.slug, c.slug))),
  ...PROJECTS.map((p) => projectUrl(p.slug)),
];

// ---------- Formatting (no Intl, so server and browser always match) ----------
const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
};

export const formatDate = (iso, lang) => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  const month = (MONTHS[lang] || MONTHS.en)[m - 1];
  return lang === "ar" ? `${d} ${month} ${y}` : `${month} ${d}, ${y}`;
};

export const formatValue = (usd) => {
  if (usd >= 1e9) return `$${(usd / 1e9).toFixed(2).replace(/\.?0+$/, "")}B`;
  if (usd >= 1e6) return `$${(usd / 1e6).toFixed(1).replace(/\.0$/, "")}M`;
  if (usd >= 1e3) return `$${Math.round(usd / 1e3)}K`;
  return `$${usd}`;
};

// { day: "21", month: "Oct" } for date badges
export const dateParts = (iso, lang) => {
  const [, m, d] = (iso || "").split("-").map(Number);
  if (!m) return { day: "", month: "" };
  return { day: String(d), month: (MONTHS[lang] || MONTHS.en)[m - 1] };
};

// Replace {name} style placeholders in JSON text
export const fill = (text, vars) => (text || "").replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ""));

export { PROJECTS, TRADES, SECTORS, STATES, PROJECT_TYPES, STAGES, STATUSES, OWNERSHIP };
