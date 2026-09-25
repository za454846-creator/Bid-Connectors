"use client";

/**
 * ProjectGrid
 * Responsive grid of ProjectCard, with an empty state.
 */
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects, emptyText }) {
  if (!projects.length) {
    return (
      <div className="pj-empty">
        <i className="bi bi-search" aria-hidden="true"></i>
        <p>{emptyText}</p>
      </div>
    );
  }
  return (
    <div className="pj-grid">
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}
