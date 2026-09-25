"use client";

/**
 * useProjectFilters
 * Filter form state + filtered project list for ProjectsHub.
 */
import { useMemo, useState } from "react";
import { PROJECTS, sortProjects } from "@/lib/projects";
import { getRegion, getRegionCity } from "@/lib/locations";

export const EMPTY_FILTERS = { q: "", trade: "", state: "", city: "", sector: "", status: "", ownership: "" };

export default function useProjectFilters() {
  const [filters, setFilters] = useState(EMPTY_FILTERS);

  // Changing the state resets the city
  const setFilter = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value, ...(key === "state" ? { city: "" } : {}) }));

  const clearFilters = () => setFilters(EMPTY_FILTERS);
  const active = Object.values(filters).some(Boolean);

  const results = useMemo(() => {
    const f = filters;
    const q = f.q.trim().toLowerCase();
    return sortProjects(
      PROJECTS.filter((p) => {
        if (f.trade && !p.trades.includes(f.trade)) return false;
        if (f.state && p.state !== f.state) return false;
        if (f.city && p.city !== f.city) return false;
        if (f.sector && p.sector !== f.sector) return false;
        if (f.status && p.status !== f.status) return false;
        if (f.ownership && p.ownership !== f.ownership) return false;
        if (q) {
          const st = getRegion(p.state);
          const ct = getRegionCity(p.state, p.city);
          const hay = [p.name, st?.en, st?.ar, ct?.en, ct?.ar].join(" ").toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      })
    );
  }, [filters]);

  return { filters, setFilter, clearFilters, active, results };
}
