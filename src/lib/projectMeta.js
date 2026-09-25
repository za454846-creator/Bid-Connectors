/**
 * Metadata (title / description / canonical / hreflang) for construction project pages.
 * Used by the route files in src/app/(en|ar)/.../construction-projects.
 */
import en from "@/components/Lang/en.json";
import ar from "@/components/Lang/ar.json";
import { customMetadata } from "@/lib/seo";
import {
  BASE, PROJECTS, TRADES, SECTORS, STATES, label, fill, formatDate, formatValue,
  getProject, getTrade, getSector, getState, getCity, byTrade, bySector, byState, byCity,
  typeLabel, sectorLabel, tradeLabel, tradeUrl, sectorUrl, stateUrl, cityUrl, projectUrl,
} from "@/lib/projects";

const T = { en, ar };

export const hubMeta = (lang) =>
  customMetadata(lang, { path: BASE, title: T[lang].projects.seo.hubTitle, description: T[lang].projects.seo.hubDesc });

export const tradeMeta = (lang, slug) => {
  const s = T[lang].projects.seo, name = label(getTrade(slug), lang), count = byTrade(slug).length;
  return customMetadata(lang, { path: tradeUrl(slug), title: fill(s.tradeTitle, { trade: name }), description: fill(s.tradeDesc, { trade: name, count }) });
};

export const sectorMeta = (lang, slug) => {
  const s = T[lang].projects.seo, name = label(getSector(slug), lang), count = bySector(slug).length;
  return customMetadata(lang, { path: sectorUrl(slug), title: fill(s.sectorTitle, { sector: name }), description: fill(s.sectorDesc, { sector: name, count }) });
};

export const stateMeta = (lang, slug) => {
  const s = T[lang].projects.seo, name = label(getState(slug), lang), count = byState(slug).length;
  return customMetadata(lang, { path: stateUrl(slug), title: fill(s.stateTitle, { state: name }), description: fill(s.stateDesc, { state: name, count }) });
};

export const cityMeta = (lang, stateSlug, citySlug) => {
  const s = T[lang].projects.seo;
  const state = label(getState(stateSlug), lang), city = label(getCity(stateSlug, citySlug), lang);
  const count = byCity(stateSlug, citySlug).length;
  return customMetadata(lang, {
    path: cityUrl(stateSlug, citySlug),
    title: fill(s.cityTitle, { city, state }),
    description: fill(s.cityDesc, { city, state, count }),
  });
};

export const projectMeta = (lang, slug) => {
  const s = T[lang].projects.seo, p = getProject(slug);
  const vars = {
    name: p.name,
    city: label(getCity(p.state, p.city), lang),
    state: label(getState(p.state), lang),
    type: typeLabel(p.type, lang),
    sector: sectorLabel(p.sector, lang),
    value: formatValue(p.value),
    bidDate: formatDate(p.bidDate, lang),
    trades: p.trades.map((x) => tradeLabel(x, lang)).join(lang === "ar" ? "، " : ", "),
  };
  return customMetadata(lang, { path: projectUrl(slug), title: fill(s.projectTitle, vars), description: fill(s.projectDesc, vars) });
};

// Static params for "output: export"
export const projectParams = () => PROJECTS.map((p) => ({ slug: p.slug }));
export const tradeParams = () => TRADES.map((x) => ({ trade: x.slug }));
export const sectorParams = () => SECTORS.map((x) => ({ sector: x.slug }));
export const stateParams = () => STATES.map((x) => ({ state: x.slug }));
export const cityParams = () => STATES.flatMap((s) => s.cities.map((c) => ({ state: s.slug, city: c.slug })));
