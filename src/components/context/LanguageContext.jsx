"use client";

/**
 * LanguageContext
 * English / Arabic state for the whole site: current language, text (t),
 * direction (isRTL), language-aware links (localePath) and the switch animation.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import en from "@/components/Lang/en.json";
import ar from "@/components/Lang/ar.json";

const dictionaries = { en, ar };

// Must match the curtain animation durations in rtl.css
const COVER_MS = 420;
const REVEAL_MS = 520;

// English and Arabic use separate root layouts, so switching is a full page load.
// This key hands the transition to the new page so the reload is not visible.
const HANDOFF_KEY = "bc-lang-switch";

const LanguageContext = createContext(null);

// "/ar/about" => "/about", "/ar" => "/" (also "/ar/about.html", "/index.html")
export const stripLangPrefix = (pathname) =>
  (pathname || "/")
    .replace(/\.html$/, "")
    .replace(/\/index$/, "/")
    .replace(/^\/ar(?=\/|$)/, "")
    .replace(/\/+$/, "") || "/";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function LanguageProvider({ lang, children }) {
  const pathname = usePathname();
  const isRTL = lang === "ar";
  const basePath = stripLangPrefix(pathname);

  const [transition, setTransition] = useState(null); // null | { target }
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  // Arriving from a language switch: restore the reading position, then reveal the page
  useEffect(() => {
    const html = document.documentElement;
    let data = null;
    try {
      data = JSON.parse(sessionStorage.getItem(HANDOFF_KEY) || "null");
      sessionStorage.removeItem(HANDOFF_KEY);
    } catch (e) {
      /* storage unavailable */
    }
    if (!html.classList.contains("lang-arriving")) return undefined;

    if (data && typeof data.ratio === "number" && data.ratio > 0) {
      const max = html.scrollHeight - window.innerHeight;
      window.scrollTo(0, Math.round(max * data.ratio));
    }

    let done;
    const frame = requestAnimationFrame(() => {
      html.classList.add("lang-arriving-out");
      done = setTimeout(() => {
        html.classList.remove("lang-arriving", "lang-arriving-out");
        html.removeAttribute("data-arrive-to");
      }, REVEAL_MS);
    });

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(done);
    };
  }, []);

  // Same page in the other language
  const switchPath = isRTL ? basePath : basePath === "/" ? "/ar" : `/ar${basePath}`;

  const switchLanguage = useCallback(() => {
    if (transition) return;
    const target = switchPath + (typeof window !== "undefined" ? window.location.search + window.location.hash : "");

    if (prefersReducedMotion()) {
      window.location.assign(target);
      return;
    }

    // Save target language and scroll position for the next page
    const to = isRTL ? "en" : "ar";
    try {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      sessionStorage.setItem(HANDOFF_KEY, JSON.stringify({ to, ratio }));
    } catch (e) {
      /* storage blocked: the switch still works, just without the handoff */
    }

    setTransition({ target: to });
    timer.current = setTimeout(() => window.location.assign(target), COVER_MS);
  }, [transition, isRTL, switchPath]);

  const value = useMemo(() => {
    const localePath = (path) => {
      if (!path || /^https?:\/\//.test(path)) return path;
      const clean = path.startsWith("/") ? path : `/${path}`;
      if (lang === "en") return clean;
      return clean === "/" ? "/ar" : `/ar${clean}`;
    };

    return {
      lang,
      isRTL,
      t: dictionaries[lang],
      basePath,
      localePath,
      switchPath,
      switchLanguage,
      isSwitching: Boolean(transition),
    };
  }, [lang, isRTL, basePath, switchPath, switchLanguage, transition]);

  return (
    <LanguageContext.Provider value={value}>
      {children}

      {transition && (
        <div className={`lang-overlay is-in to-${transition.target}`} aria-hidden="true">
          <div className="lang-overlay__inner">
            <span className="lang-overlay__brand" dir="ltr">
              Bid <span>Connectors</span>
            </span>
            <span className="lang-overlay__label" lang={transition.target}>
              {transition.target === "ar" ? "العربية" : "English"}
            </span>
            <span className="lang-overlay__bar" />
          </div>
        </div>
      )}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}