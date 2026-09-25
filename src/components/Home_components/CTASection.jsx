"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";

const isInternal = (href) => typeof href === "string" && href.startsWith("/");

const CTASection = ({
  titleLine1,
  titleHighlight,
  subText,
  primaryBtnText,
  primaryBtnLink,
  primaryBtnNewTab = false,
  secondaryBtnText,
  secondaryBtnLink,
  secondaryBtnNewTab = true,
  noteText,
}) => {
  const { isRTL } = useLanguage();
  const arrow = isRTL ? "←" : "→";

  // Picks the right element for the button (internal Link / new tab / normal link)
  const renderButton = (href, newTab, className, children) => {
    if (newTab) {
      return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    if (isInternal(href)) {
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  };

  return (
    <section className="cta-section">
      <div className="cta-glow"></div>

      <div className="cta-container">
        <h2 className="cta-title">
          <span>{titleLine1}</span>
          <br />
          <span className="highlight">{titleHighlight}</span>
        </h2>

        <p className="cta-subtext">{subText}</p>

        <div className="cta-buttons">
          {renderButton(primaryBtnLink, primaryBtnNewTab, "btn-primary", (
            <>
              {primaryBtnText} <span aria-hidden="true">{arrow}</span>
            </>
          ))}

          {renderButton(secondaryBtnLink, secondaryBtnNewTab, "btn-secondary", (
            <>
              {!secondaryBtnNewTab && <span aria-hidden="true">☎</span>} {secondaryBtnText}
            </>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CTASection;
