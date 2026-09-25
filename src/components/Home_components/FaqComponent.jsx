"use client";

import React, { useState } from "react";
const ChevronIcon = ({ open }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.28s ease",
      flexShrink: 0,
    }}
    aria-hidden="true"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FaqComponent = ({
  title = "Everything you need",
  highlight = "to know.",
  description = "Simple answers to common questions.",
  faqs = [],
  defaultOpenIndex = 0,
}) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      <div className="faq-wrapper">

        {/* Heading */}
        <div className="faq-headline">
          <h2>
            {title}
            <br />
            <em>{highlight}</em>
          </h2>
          <p>{description}</p>
        </div>

        {/* FAQ List */}
        <div className="faq-card">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const contentId = `faq-content-${i}`;

            return (
              <div key={i} className={`faq-item${isOpen ? " open" : ""}`}>
                <div className="faq-accent-line" />

                <button
                  type="button"
                  className="faq-item-header"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(i)}
                >
                  <span className={`faq-number${isOpen ? " active" : ""}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className={`faq-question${isOpen ? " active" : ""}`}>
                    {item.question}
                  </span>

                  <span className={`faq-icon${isOpen ? " active" : ""}`}>
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>

                <div
                  id={contentId}
                  className="faq-body"
                  role="region"
                >
                  <div className="faq-body-inner">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqComponent;