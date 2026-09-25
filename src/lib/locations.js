/**
 * Location helpers for the project filters.
 * Turns the compact list in data/locations.js into { slug, en, ar, cities } objects.
 */
import { COUNTRIES as RAW_COUNTRIES } from "@/data/locations";

// "New York City" -> "new-york-city", "St. Louis" -> "st-louis"
export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const toCity = (city) => {
  const [en, ar] = Array.isArray(city) ? city : [city, ""];
  return { slug: slugify(en), en, ar: ar || en };
};

const toRegion = (countryCode) => ([slug, en, ar, code, cities]) => ({
  slug,
  en,
  ar,
  code,
  country: countryCode,
  cities: cities.map(toCity),
});

export const COUNTRIES = RAW_COUNTRIES.map((c) => ({
  ...c,
  regions: c.regions.map(toRegion(c.code)),
}));

// All states in one flat list
export const REGIONS = COUNTRIES.flatMap((c) => c.regions);

export const getRegion = (slug) => REGIONS.find((r) => r.slug === slug);
export const getRegionCity = (regionSlug, citySlug) =>
  getRegion(regionSlug)?.cities.find((c) => c.slug === citySlug);
