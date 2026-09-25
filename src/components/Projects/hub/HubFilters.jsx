"use client";

/**
 * HubFilters
 * Filter form below the banner: search, state and city (searchable),
 * trade, sector, status, public/private.
 */
import { useMemo } from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import { TRADES, SECTORS, STATUSES, OWNERSHIP, label } from "@/lib/projects";
import { COUNTRIES, getRegion } from "@/lib/locations";
import SearchSelect from "./SearchSelect";

// Simple labeled <select>
const Select = ({ id, value, onChange, labelText, allText, options }) => (
  <label className="pj-field" htmlFor={id}>
    <span>{labelText}</span>
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">{allText}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  </label>
);

export default function HubFilters({ filters, setFilter }) {
  const { t, lang } = useLanguage();
  const pj = t.projects;
  const h = pj.hub;

  // State dropdown, grouped by country
  const stateGroups = useMemo(
    () =>
      COUNTRIES.map((c) => ({
        label: label(c, lang),
        options: c.regions.map((r) => ({
          value: r.slug,
          label: label(r, lang),
          hint: c.code === "us" ? r.code : undefined,
          // Typing a country or city name also finds the state (e.g. "Dallas")
          keywords: [r.en, r.ar, r.code, c.en, c.ar, ...r.cities.flatMap((ct) => [ct.en, ct.ar])],
        })),
      })),
    [lang]
  );

  // City dropdown: cities of the selected state
  const cityGroups = useMemo(() => {
    const region = getRegion(filters.state);
    if (!region) return [];
    return [{ options: region.cities.map((c) => ({ value: c.slug, label: label(c, lang), keywords: [c.en, c.ar] })) }];
  }, [filters.state, lang]);

  const toOptions = (list) => list.map((x) => ({ value: x.slug, label: label(x, lang) }));
  const mapOptions = (obj) => Object.entries(obj).map(([k, v]) => ({ value: k, label: label(v, lang) }));

  return (
    <section className="ph-filters-wrap" id="project-search" aria-labelledby="ph-filters-title">
      <div className="container">
        <div className="ph-filters" role="search">
          <div className="ph-filters-head">
            <h2 id="ph-filters-title">{h.filterTitle}</h2>
            <p>{h.filterText}</p>
          </div>

          <div className="ph-filters-grid">
            <label className="pj-field ph-field-q" htmlFor="pj-q">
              <span>{h.searchLabel}</span>
              <div className="pj-search">
                <i className="bi bi-search" aria-hidden="true"></i>
                <input
                  id="pj-q"
                  type="search"
                  value={filters.q}
                  onChange={(e) => setFilter("q", e.target.value)}
                  placeholder={h.searchPlaceholder}
                />
              </div>
            </label>

            <SearchSelect
              id="pj-state"
              labelText={h.locationLabel}
              value={filters.state}
              onChange={(v) => setFilter("state", v)}
              groups={stateGroups}
              allLabel={h.allStates}
              searchPlaceholder={h.stateSearch}
              noMatchText={h.noMatch}
            />

            <SearchSelect
              id="pj-city"
              labelText={pj.filters.city}
              value={filters.city}
              onChange={(v) => setFilter("city", v)}
              groups={cityGroups}
              allLabel={filters.state ? h.allCities : h.cityHint}
              searchPlaceholder={h.citySearch}
              noMatchText={h.noMatch}
              disabled={!filters.state}
            />

            <Select id="pj-trade" labelText={pj.filters.trade} allText={h.all}
              value={filters.trade} onChange={(v) => setFilter("trade", v)} options={toOptions(TRADES)} />

            <Select id="pj-sector" labelText={pj.filters.sector} allText={h.all}
              value={filters.sector} onChange={(v) => setFilter("sector", v)} options={toOptions(SECTORS)} />

            <Select id="pj-status" labelText={pj.filters.status} allText={h.all}
              value={filters.status} onChange={(v) => setFilter("status", v)} options={mapOptions(STATUSES)} />

            <Select id="pj-own" labelText={pj.filters.ownership} allText={h.all}
              value={filters.ownership} onChange={(v) => setFilter("ownership", v)} options={mapOptions(OWNERSHIP)} />
          </div>
        </div>
      </div>
    </section>
  );
}
