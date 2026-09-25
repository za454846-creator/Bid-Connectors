"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import SiteImage from "@/components/SiteImage";
const avatar1 = "/images/avatar1.webp";
const avatar2 = "/images/avatar2.webp";
const avatar3 = "/images/44.jpg";
// Photo order matches JSON "items"
const PHOTOS = [avatar1, avatar2, avatar3];

// Props are optional: pass custom text for another page,
// otherwise text comes from JSON (current language).
const Testimonials = ({ heading, highlight, subtitle, testimonials }) => {
  const { t, isRTL } = useLanguage();
  const tt = t.testimonials;

  const items =
    testimonials ||
    tt.items.map((item, i) => ({ ...item, photo: PHOTOS[i] }));

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial_content text-center mb-5">
          <span className="badge-features mb-3">{tt.badge}</span>
          <h2 className="mt-3">
            {heading || tt.heading} <span>{highlight || tt.highlight}</span>
          </h2>
          <p className="testimonial-sub">{subtitle || tt.subtitle}</p>
        </div>

        <div className="row g-4">
          {items.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="testimonial-card">
                <div className="stars" aria-label="5/5">★★★★★</div>
                <p className="quote">
                  {isRTL ? "«" : "\u201C"}
                  {item.quote}
                  {isRTL ? "»" : "\u201D"}
                </p>
                <div className="user">
                  <div className="avatar">
                    <SiteImage src={item.photo || avatar1} alt={item.name} />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <small>{item.title}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;