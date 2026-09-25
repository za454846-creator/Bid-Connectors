/**
 * SectionHead
 * Section heading block: small orange label, heading, text.
 * center = true -> centered (Process, Benefits, Testimonials)
 */
export default function SectionHead({ id, eyebrow, title, text, center = false }) {
  return (
    <div className={`ph-head${center ? " ph-head-center" : ""}`}>
      {eyebrow && <span className="ph-eyebrow">{eyebrow}</span>}
      <h2 id={id} className="ph-h2">{title}</h2>
      {text && <p className="ph-text">{text}</p>}
    </div>
  );
}
