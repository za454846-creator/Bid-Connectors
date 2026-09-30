"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import SiteImage from "@/components/SiteImage";
const REGISTER_URL = "https://bidconnectors.com/app/register";
const LOGIN_URL = "https://bidconnectors.com/app/login";

// Structure and paths only. Text comes from JSON.
// Only pages that exist are listed (no 404 links).
const productsLinks = [
  { key: "projectIntelligence", path: "/products/project-intelligence" },
  { key: "intelligentLeads", path: "/products/intelligent-leads" },
];

const solutionsLinks = [
  { key: "subcontractors", path: "/solutions/subcontractors" },
  { key: "generalContractors", path: "/solutions/general-contractors" },
  { key: "manufacturers", path: "/solutions/building-product-manufacturers" },
  { key: "suppliers", path: "/solutions/suppliers-and-distributors-solutions" },
  { key: "hospitality", path: "/solutions/hospitality" },
  { key: "serviceProviders", path: "/solutions/service-providers" },
];

const menuItems = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "products", path: "/products", links: productsLinks, featured: { ctaLink: REGISTER_URL } },
  { key: "solutions", path: "/solutions", links: solutionsLinks, featured: { ctaPath: "/pricing" } },
  { key: "projects", path: "/construction-projects" },
  { key: "faq", path: "/faq" },
  { key: "contact", path: "/contact-us" },
  { key: "pricing", path: "/pricing" },
];

const Navbar = () => {
  const { t, isRTL, basePath, localePath, switchPath, switchLanguage, isSwitching } = useLanguage();
  const acc = t.nav.account;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [accountOpen, setAccountOpen] = useState(false);

  const lastScrollY = useRef(0);
  const accountRef = useRef(null);
  const accountToggleRef = useRef(null);

  // Sticky navbar: hides on scroll down, shows on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      if (isOpen) {
        setHidden(false);
      } else if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
        setAccountOpen(false); // hide the dropdown with the navbar
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Account dropdown: close on outside click or Escape
  useEffect(() => {
    if (!accountOpen) return undefined;

    const handleOutside = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setAccountOpen(false);
        accountToggleRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [accountOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenMenu(null);
    setAccountOpen(false);
  };

  const toggleAccount = () => {
    setOpenMenu(null); // close any open mega menu
    setAccountOpen((prev) => !prev);
  };

  // Keeps a real href (SEO / new tab); a normal click plays the animation
  const handleLanguageClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    closeMenu();
    switchLanguage();
  };

  const MegaLink = ({ link, texts }) => (
    <Link
      href={localePath(link.path)}
      className={`bp-mega-item ${basePath === link.path ? "active" : ""}`}
      onClick={closeMenu}
    >
      <span className="bp-mega-item-title">{texts[link.key].name}</span>
      <span className="bp-mega-item-desc">{texts[link.key].desc}</span>
    </Link>
  );

  return (
    <header>
      <nav className={`navbar navbar-expand-lg bp-nav ${scrolled ? "bp-scrolled" : ""} ${hidden ? "bp-nav-hidden" : ""}`}>
        <div className="nav-container d-flex align-items-center justify-content-between w-100">

          <Link href={localePath("/")} className="navbar-brand bp-brand" onClick={closeMenu} dir="ltr" aria-label="Bid Connectors">
            <SiteImage src="/images/brand/bidconnectors-logo.png" alt="Bid Connectors" width="578" height="70" className="bp-brand-logo" />
          </Link>

          <button
            className="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isOpen}
          >
            ☰
          </button>

          {isOpen && <div className="bp-overlay" onClick={closeMenu} />}

          <div className={`navbar-collapse ${isOpen ? "mobile-show" : ""}`}>
            <button className="bp-close" onClick={closeMenu} aria-label={t.nav.closeMenu}>✕</button>

            <ul className="navbar-nav mx-auto">
              {menuItems.map((item) => {
                const label = t.nav.menu[item.key];

                if (!item.links && !item.columns) {
                  return (
                    <li className="nav-item" key={item.key}>
                      <Link
                        href={localePath(item.path)}
                        className={`nav-link bp-link ${basePath === item.path || (item.path !== "/" && basePath.startsWith(`${item.path}/`)) ? "active" : ""}`}
                        onClick={closeMenu}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                }

                const section = t.nav[item.key];
                const featured = section.featured;

                return (
                  <li
                    className="nav-item bp-dropdown"
                    key={item.key}
                    onMouseEnter={() => { if (!isOpen) { setOpenMenu(item.key); setAccountOpen(false); } }}
                    onMouseLeave={() => { if (!isOpen) setOpenMenu(null); }}
                  >
                    <span
                      className={`nav-link bp-link bp-dropdown-toggle ${basePath.startsWith(item.path) ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu((prev) => (prev === item.key ? null : item.key));
                      }}
                      role="button"
                      aria-expanded={openMenu === item.key}
                    >
                      {label}
                      <i className={`bi bi-chevron-down bp-caret ${openMenu === item.key ? "bp-caret-open" : ""}`}></i>
                    </span>

                    <div className={`bp-dropdown-menu bp-mega-menu ${item.wide ? "bp-mega-wide" : ""} ${openMenu === item.key ? "bp-dropdown-menu-open" : ""}`}>
                      {item.columns ? (
                        <div className="bp-mega-columns">
                          {item.columns.map((col) => (
                            <div className="bp-mega-col" key={col.key}>
                              <span className="bp-mega-col-heading">{section.columns[col.key]}</span>
                              {col.links.map((link) => (
                                <MegaLink key={link.key} link={link} texts={section.links} />
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bp-mega-grid">
                          {item.links.map((link) => (
                            <MegaLink key={link.key} link={link} texts={section.links} />
                          ))}
                        </div>
                      )}

                      <div className="bp-mega-featured">
                        <span className="bp-mega-featured-eyebrow">{featured.eyebrow}</span>
                        <h4 className="bp-mega-featured-title">{featured.title}</h4>
                        <p className="bp-mega-featured-desc">{featured.desc}</p>
                        {item.featured.ctaPath ? (
                          <Link href={localePath(item.featured.ctaPath)} className="bp-mega-featured-cta" onClick={closeMenu}>
                            {featured.cta}
                          </Link>
                        ) : (
                          <a href={item.featured.ctaLink} className="bp-mega-featured-cta" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                            {featured.cta}
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-buttons d-flex align-items-center gap-2">
              {/* ---------- Language switch ---------- */}
              <a
                href={switchPath}
                onClick={handleLanguageClick}
                className={`btn bp-lang-btn ${isSwitching ? "is-switching" : ""}`}
                hrefLang={isRTL ? "en" : "ar"}
                lang={isRTL ? "en" : "ar"}
                aria-busy={isSwitching}
              >
                <i className="bi bi-globe2 bp-lang-icon" aria-hidden="true"></i>
                <span className="bp-lang-text">{t.nav.switchLang}</span>
              </a>

              {/* ---------- Account dropdown (Register / Log in) ---------- */}
              <div className={`bp-account ${accountOpen ? "is-open" : ""}`} ref={accountRef}>
                <button
                  type="button"
                  ref={accountToggleRef}
                  className="bp-account-toggle"
                  onClick={toggleAccount}
                  aria-haspopup="menu"
                  aria-expanded={accountOpen}
                  aria-controls="bp-account-menu"
                >
                  <i className="bi bi-person-circle bp-account-icon" aria-hidden="true"></i>
                  <span>{acc.toggle}</span>
                  <i className="bi bi-chevron-down bp-account-caret" aria-hidden="true"></i>
                </button>

                <div
                  id="bp-account-menu"
                  className="bp-account-menu"
                  role="menu"
                  aria-label={acc.menuLabel}
                  aria-hidden={!accountOpen}
                >
                  <div className="bp-account-head">
                    <span className="bp-account-title">{acc.menuTitle}</span>
                    <span className="bp-account-sub">{acc.menuSub}</span>
                  </div>

                  <a
                    href={REGISTER_URL}
                    role="menuitem"
                    className="bp-account-item bp-account-item-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={accountOpen ? 0 : -1}
                    onClick={closeMenu}
                  >
                    <span className="bp-account-item-icon" aria-hidden="true">
                      <i className="bi bi-rocket-takeoff"></i>
                    </span>
                    <span className="bp-account-item-text">
                      <span className="bp-account-item-title">{acc.register.title}</span>
                      <span className="bp-account-item-desc">{acc.register.desc}</span>
                    </span>
                    <i className="bi bi-arrow-right bp-account-item-arrow" aria-hidden="true"></i>
                  </a>

                  <a
                    href={LOGIN_URL}
                    role="menuitem"
                    className="bp-account-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={accountOpen ? 0 : -1}
                    onClick={closeMenu}
                  >
                    <span className="bp-account-item-icon" aria-hidden="true">
                      <i className="bi bi-box-arrow-in-right"></i>
                    </span>
                    <span className="bp-account-item-text">
                      <span className="bp-account-item-title">{acc.login.title}</span>
                      <span className="bp-account-item-desc">{acc.login.desc}</span>
                    </span>
                    <i className="bi bi-arrow-right bp-account-item-arrow" aria-hidden="true"></i>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;