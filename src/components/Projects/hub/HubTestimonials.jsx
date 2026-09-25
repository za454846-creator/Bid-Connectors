"use client";

/**
 * HubTestimonials
 * First quote large (featured), the other two small.
 * Text: t.projects.hub.testimonials (sample quotes, replace with real ones)
 */
import { useLanguage } from "@/components/context/LanguageContext";
import SectionHead from "./SectionHead";

const initials = (name) =>
  name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

export default function HubTestimonials() {
  const { t } = useLanguage();
  const tm = t.projects.hub.testimonials;
  const [featured, ...rest] = tm.items;

  const Person = ({ item }) => (
    <figcaption className="ph-person">
      <span className="ph-avatar" aria-hidden="true" dir="ltr">{initials(item.name)}</span>
      <span>
        <strong>{item.name}</strong>
        <small>{item.role}</small>
      </span>
    </figcaption>
  );

  return (
    <section className="ph-section ph-testimonials" aria-labelledby="ph-tm-title">
      <div className="container">
        <SectionHead id="ph-tm-title" eyebrow={tm.eyebrow} title={tm.title} text={tm.text} center />

        <div className="ph-tm-grid">
          <figure className="ph-quote ph-quote-lg">
            <i className="bi bi-quote" aria-hidden="true"></i>
            <blockquote>{featured.quote}</blockquote>
            <Person item={featured} />
          </figure>

          <div className="ph-tm-side">
            {rest.map((item) => (
              <figure className="ph-quote" key={item.name}>
                <blockquote>{item.quote}</blockquote>
                <Person item={item} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
