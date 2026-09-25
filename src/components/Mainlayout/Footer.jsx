"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";
import SiteImage from "@/components/SiteImage";
// Structure and paths only. Text comes from the JSON "footer" section.
// Every page of the site is linked here.
const LOGIN_URL = "https://bidconnectors.com/bidconnectors/login";
const REGISTER_URL = "https://bidconnectors.com/bidconnectors/register";

// Footer contact: same email for both languages, phone per language
const CONTACT_EMAIL = "info@bidconnectors.com";
const PHONES = {
  en: { label: "+1 (214) 556-2605", tel: "+12145562605" },
  ar: { label: "+968 7900 5409", tel: "+96879005409" },
};

const COLUMNS = [
  {
    key: "company",
    links: [
      { key: "home", path: "/" },
      { key: "about", path: "/about" },
      { key: "pricing", path: "/pricing" },
      { key: "contact", path: "/contact-us" },
    ],
  },
  {
    key: "solutions",
    links: [
      { key: "subcontractors", path: "/solutions/subcontractors" },
      { key: "generalContractors", path: "/solutions/general-contractors" },
      { key: "manufacturers", path: "/solutions/building-product-manufacturers" },
      { key: "suppliers", path: "/solutions/suppliers-and-distributors-solutions" },
      { key: "hospitality", path: "/solutions/hospitality" },
      { key: "serviceProviders", path: "/solutions/service-providers" },
    ],
  },
  {
    key: "products",
    links: [
      { key: "projects", path: "/construction-projects" },
      { key: "projectIntelligence", path: "/products/project-intelligence" },
      { key: "intelligentLeads", path: "/products/intelligent-leads" },
    ],
  },
  {
    key: "support",
    links: [
      { key: "faq", path: "/faq" },
      { key: "contact", path: "/contact-us" },
      { key: "login", href: LOGIN_URL },
      { key: "register", href: REGISTER_URL },
    ],
  },
];

const Footer = () => {
  const { t, isRTL, localePath } = useLanguage();
  const f = t.footer;
  const phone = isRTL ? PHONES.ar : PHONES.en;

  // Arrow follows reading direction
  const arrow = isRTL ? "⋘" : "⋙";

  return (
    <footer className="footer">
      <div className="container">

        {/* TOP SECTION */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <Link href={localePath("/")} className="navbar-brand bp-brand" dir="ltr" aria-label="Bid Connectors">
              <SiteImage src="/images/brand/bidconnectors-logo-light.png" alt="Bid Connectors" width="578" height="70" className="footer-brand-logo" loading="lazy" />
            </Link>
            <p>{f.about}</p>

            <ul className="footer-contact">
              <li>
                <i className="bi bi-envelope" aria-hidden="true"></i>
                <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr">{CONTACT_EMAIL}</a>
              </li>
              <li>
                <i className="bi bi-telephone" aria-hidden="true"></i>
                <a href={`tel:${phone.tel}`} dir="ltr">{phone.label}</a>
              </li>
            </ul>
          </div>

          {/* LINKS */}
          <nav className="footer-links" aria-label={f.navLabel}>
            {COLUMNS.map((col) => (
              <div key={col.key}>
                <h3>{f.columns[col.key]}</h3>
                {col.links.map((link) => {
                  const content = (
                    <>
                      <span className="footer-arrow" aria-hidden="true">{arrow}</span>
                      <span>{f.links[link.key]}</span>
                    </>
                  );
                  return link.href ? (
                    <a key={link.key} href={link.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <Link key={link.key} href={localePath(link.path)}>
                      {content}
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>

        </div>

        {/* DIVIDER */}
        <div className="divider"></div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            © <bdi>{new Date().getFullYear()}</bdi> {f.rights}
          </p>

          {/* Technical badges are the same in every language */}
          <div className="badges" dir="ltr">
            <span>SOC 2</span>
            <span>AES-256</span>
            <span>99.99%</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;