"use client";

import JsonLd from "@/components/JsonLd";
import React, { useState } from "react";
import { useLanguage } from "@/components/context/LanguageContext";

// home.css for shared tokens/components, contact.css last so it can override.
const SITE_URL = "https://bidconnectors.com";
const PAGE_PATH = "/contact-us";
const PAGE_IMAGE = "https://bidconnectors.com/og/contact.jpg";

// Form posts to public/contact.php (sends the email on cPanel)
const FORM_ENDPOINT = "/contact.php";

const CONTACT = {
  phones: ["+1 (614) 555-0142", "+1 (614) 555-0188"],
  emails: ["info@bidconnectors.com", "sales@bidconnectors.com"],
  address: {
    street: "250 East Broad Street",
    locality: "Columbus",
    region: "OH",
    postalCode: "43215",
    country: "US",
  },
};

const addressLine = `${CONTACT.address.street}, ${CONTACT.address.locality}, ${CONTACT.address.region} ${CONTACT.address.postalCode}`;

// Map is derived from the address so the two can't drift apart.
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(addressLine)}&output=embed`;

const EMPTY_FORM = { name: "", email: "", phone: "", message: "", website: "" };

const ContactUs = () => {
  const { t, lang } = useLanguage();
  const c = t.contact;
  const fm = c.form;

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const pageUrl = lang === "ar" ? `${SITE_URL}/ar${PAGE_PATH}` : `${SITE_URL}${PAGE_PATH}`;

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: c.seo.title,
    url: pageUrl,
    inLanguage: lang,
    about: {
      "@type": "Organization",
      name: "Bid Connectors",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: CONTACT.phones[0],
          contactType: "customer service",
          email: CONTACT.emails[0],
          availableLanguage: ["English", "Arabic"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.address.street,
        addressLocality: CONTACT.address.locality,
        addressRegion: CONTACT.address.region,
        postalCode: CONTACT.address.postalCode,
        addressCountry: CONTACT.address.country,
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      if (!FORM_ENDPOINT) {
        throw new Error("FORM_ENDPOINT is not configured");
      }

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        // Also send which language the message came from
        body: JSON.stringify({ ...formData, language: lang }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      setFormData(EMPTY_FORM);
      setStatus("sent");
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <>
      <JsonLd data={contactSchema} />

      {/* Keep className="contact-page": contact.css is scoped to it. */}
      <main className="contact-page">

        {/* ================= BANNER ================= */}
        <section className="contact-banner" aria-labelledby="contact-heading">
          <div className="container">
            <div className="banner-inner">
              <span className="contact-eyebrow">{c.eyebrow}</span>

              <h1 id="contact-heading">
                {c.titleStart} <span>{c.titleHighlight}</span>
              </h1>

              <p>{c.text}</p>

              <a href="#contact-form" className="banner-btn">
                {c.btn} <i className="bi bi-arrow-down" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="contact-section" aria-label={c.sectionLabel}>
          <div className="container">

            {/* ---------- Info cards ---------- */}
            <div className="cards-grid">

              <div className="contact-card">
                <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                <h2>{c.cards.phone}</h2>
                <p>
                  {CONTACT.phones.map((phone) => (
                    <React.Fragment key={phone}>
                      {/* Phone number always left-to-right */}
                      <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} dir="ltr">{phone}</a>
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="contact-card">
                <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                <h2>{c.cards.email}</h2>
                <p>
                  {CONTACT.emails.map((email) => (
                    <React.Fragment key={email}>
                      <a href={`mailto:${email}`} dir="ltr">{email}</a>
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="contact-card">
                <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                <h2>{c.cards.address}</h2>
                {/* US postal address stays in English */}
                <p dir="ltr">
                  {CONTACT.address.street}
                  <br />
                  {CONTACT.address.locality}, {CONTACT.address.region}{" "}
                  {CONTACT.address.postalCode}
                </p>
              </div>

            </div>

            {/* ---------- Form + map ---------- */}
            <div className="contact-grid">

              <div className="form-wrapper" id="contact-form">
                <h2>{fm.title}</h2>
                <p className="form-intro">{fm.intro}</p>

                <div aria-live="polite">
                  {status === "sent" ? (
                    <div className="form-status form-status-success">
                      <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                      <h3>{fm.successTitle}</h3>
                      <p>{fm.successText}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>

                      {status === "error" && (
                        <p className="form-error">
                          <i className="bi bi-exclamation-triangle-fill" aria-hidden="true"></i>
                          <span>
                            {fm.errorText}{" "}
                            <a href={`mailto:${CONTACT.emails[0]}`}>
                              <bdi>{CONTACT.emails[0]}</bdi>
                            </a>
                            .
                          </span>
                        </p>
                      )}

                      <div className="form-group">
                        <label htmlFor="contact-name" className="visually-hidden">
                          {fm.nameLabel}
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={fm.namePlaceholder}
                          autoComplete="name"
                          dir="auto"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-email" className="visually-hidden">
                          {fm.emailLabel}
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={fm.emailPlaceholder}
                          autoComplete="email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-phone" className="visually-hidden">
                          {fm.phoneLabel}
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={fm.phonePlaceholder}
                          autoComplete="tel"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-message" className="visually-hidden">
                          {fm.messageLabel}
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={fm.messagePlaceholder}
                          dir="auto"
                          required
                        />
                      </div>

                      {/* Spam trap: hidden from people, must stay empty */}
                      <div className="visually-hidden" aria-hidden="true">
                        <label htmlFor="contact-website">Website</label>
                        <input
                          id="contact-website"
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      <button type="submit" className="submit-btn" disabled={sending}>
                        {sending ? (
                          <>
                            <span className="spinner" aria-hidden="true"></span>
                            {fm.sending}
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-fill" aria-hidden="true"></i>
                            {fm.submit}
                          </>
                        )}
                      </button>

                    </form>
                  )}
                </div>
              </div>

              <div className="map-wrapper">
                <iframe
                  title={c.mapTitle}
                  src={`${MAP_SRC}&hl=${lang}`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;