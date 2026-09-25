"use client";

/**
 * ProjectsHub (/construction-projects and /ar/construction-projects)
 *
 * Sections (each in src/components/Projects/hub/):
 *   1. HubBanner         heading, buttons, image
 *   2. HubFilters        search + filters (50 US states + main cities)
 *   3. Results           project grid
 *   4. WhyBidConnectors
 *   5. HubProcess        "Our process" (4 steps)
 *   6. HubBenefits       member benefits
 *   7. HubTestimonials
 *   8. HubFaq
 *   9. HubCta
 *
 * Text:   Lang/en.json + ar.json -> projects.hub
 * Styles: src/styles/projects-hub.css ("ph-" classes)
 */
import { useLanguage } from "@/components/context/LanguageContext";
import ProjectGrid from "@/components/Projects/ProjectGrid";
import JsonLd from "@/components/JsonLd";
import { PROJECTS, sortProjects, projectUrl, fill } from "@/lib/projects";

import HubBanner from "@/components/Projects/hub/HubBanner";
import HubFilters from "@/components/Projects/hub/HubFilters";
import WhyBidConnectors from "@/components/Projects/hub/WhyBidConnectors";
import HubProcess from "@/components/Projects/hub/HubProcess";
import HubBenefits from "@/components/Projects/hub/HubBenefits";
import HubTestimonials from "@/components/Projects/hub/HubTestimonials";
import HubFaq from "@/components/Projects/hub/HubFaq";
import HubCta from "@/components/Projects/hub/HubCta";
import useProjectFilters from "@/components/Projects/hub/useProjectFilters";

export default function ProjectsHub() {
  const { t, localePath } = useLanguage();
  const h = t.projects.hub;
  const { filters, setFilter, clearFilters, active, results } = useProjectFilters();

  // ItemList schema so Google understands this is a list of projects
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sortProjects(PROJECTS).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://bidconnectors.com${localePath(projectUrl(p.slug))}`,
    })),
  };

  return (
    <main className="pj-page ph-page">
      <JsonLd data={listSchema} />

      <HubBanner />
      <HubFilters filters={filters} setFilter={setFilter} />

      {/* Results */}
      <section className="pj-section ph-results" id="project-results" aria-labelledby="ph-results-title">
        <div className="container">
          <div className="pj-results-bar" aria-live="polite">
            <h2 id="ph-results-title" className="ph-results-count">{fill(h.results, { count: results.length })}</h2>
            {active && (
              <button type="button" className="pj-clear" onClick={clearFilters}>
                <i className="bi bi-x-circle" aria-hidden="true"></i> {h.clear}
              </button>
            )}
          </div>
          <ProjectGrid projects={results} emptyText={h.noResults} />
        </div>
      </section>

      <WhyBidConnectors />
      <HubProcess />
      <HubBenefits />
      <HubTestimonials />
      <HubFaq />
      <HubCta />
    </main>
  );
}
