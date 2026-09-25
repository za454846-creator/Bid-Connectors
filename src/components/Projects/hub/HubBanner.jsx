"use client";

/**
 * HubBanner
 * Top banner of /construction-projects:
 * left  -> label, heading, text, "Find Projects" + "Book a Demo"
 * right -> image + trust note
 * Text: t.projects.hub.banner
 */
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";
import Breadcrumbs from "@/components/Projects/Breadcrumbs";
import { BASE } from "@/lib/projects";
import SiteImage from "@/components/SiteImage";

// Banner image (path inside public/images/)
const BANNER_IMAGE = "/images/building2.webp";

export default function HubBanner() {
  const { t, localePath } = useLanguage();
  const pj = t.projects;
  const b = pj.hub.banner;

  return (
    <section className="ph-banner" aria-labelledby="ph-title">
      <div className="container">
        <Breadcrumbs items={[{ label: pj.breadcrumbHome, path: "/" }, { label: pj.breadcrumbProjects, path: BASE }]} />

        <div className="ph-banner-cols">
          <div className="ph-banner-copy">
            <span className="ph-eyebrow">{b.eyebrow}</span>
            <h1 id="ph-title" className="ph-title">{b.title}</h1>
            <p className="ph-lead">{b.text}</p>

            <div className="ph-actions">
              <a href="#project-search" className="ph-btn ph-btn-primary">{b.primaryBtn}</a>
              <Link href={localePath("/contact-us")} className="ph-btn ph-btn-light">{b.secondaryBtn}</Link>
            </div>
          </div>

          <div className="ph-banner-media">
            <SiteImage src={BANNER_IMAGE} alt={b.imageAlt} width="640" height="640" className="ph-banner-img" />
            <p className="ph-trust">
              <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
              <span>{b.trust}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
