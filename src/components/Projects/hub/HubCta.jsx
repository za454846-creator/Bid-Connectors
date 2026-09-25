"use client";

/**
 * HubCta
 * Call to action at the end of the page (paid plans).
 * Text: t.projects.hub.cta
 */
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";
import { LOGIN_URL } from "@/lib/links";
import SiteImage from "@/components/SiteImage";

export default function HubCta() {
  const { t, localePath } = useLanguage();
  const c = t.projects.hub.cta;

  return (
    <section className="ph-section ph-cta-wrap" aria-labelledby="ph-cta-title">
      <div className="container">
        <div className="ph-cta">
          <SiteImage
            src="/images/brand/bidconnectors-mark.png"
            decorative
            width="448"
            height="310"
            className="ph-cta-mark"
            loading="lazy"
          />
          <div className="ph-cta-copy">
            <h2 id="ph-cta-title">{c.title}</h2>
            <p>{c.text}</p>
          </div>
          <div className="ph-cta-actions">
            <Link href={localePath("/pricing")} className="pj-btn pj-btn-primary">{c.primaryBtn}</Link>
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="pj-btn ph-btn-outline">
              <i className="bi bi-box-arrow-in-right" aria-hidden="true"></i> {c.secondaryBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
