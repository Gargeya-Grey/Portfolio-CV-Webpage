"use client";

import { Fragment, useState } from "react";
import { ArrowUpRight, Mic2, Smartphone } from "lucide-react";
import { projects, type Project, type ProjectType } from "@/lib/data";
import { SITE } from "@/lib/site";

const filters = [
  { value: "all", label: "All work" },
  { value: "repo", label: "Code & tools" },
  { value: "academic", label: "Research" },
  { value: "writing", label: "Writing" },
] as const;

const projectLabels: Record<ProjectType, string> = {
  repo: "Open source",
  academic: "Research",
  writing: "Technical writing",
};

// Lead the index with published work; keep every entry available in each filter.
const indexedProjects = [
  ...projects.slice(2).filter((project) => project.publication),
  ...projects.slice(2).filter((project) => !project.publication),
];

export default function Lab() {
  const [filter, setFilter] = useState<"all" | ProjectType>("all");
  const matches = (project: Project) => filter === "all" || project.type === filter;
  const visibleCount = projects.filter(matches).length;

  return (
    <section id="lab" className="cv-section projects-section" aria-labelledby="projects-heading">
      <div className="page-shell">
        <header className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2 id="projects-heading">Ideas, <em>made tangible.</em></h2></div>
          <p>Independent tools, research, and writing.<br />From experiments to published work.</p>
        </header>
        <div className="project-toolbar no-print">
          <div className="project-filters" role="group" aria-label="Filter projects">
            {filters.map((item) => <button key={item.value} type="button" aria-pressed={filter === item.value} onClick={() => setFilter(item.value)}>{item.label}</button>)}
          </div>
          <p className="project-count" role="status">{visibleCount} {visibleCount === 1 ? "entry" : "entries"}</p>
        </div>

        <div className="featured-projects" data-filter-hidden={!projects.slice(0, 2).some(matches)}>
          {projects.slice(0, 2).map((project, index) => (
            <article key={project.title} className="project-card" data-filter-hidden={!matches(project)}>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-card-link">
                <div className="project-card-top">
                  <span className="project-platform">{index === 0 ? <Mic2 size={18} aria-hidden="true" /> : <Smartphone size={18} aria-hidden="true" />}{index === 0 ? "Desktop dictation" : "Android voice keyboard"}</span>
                  <ArrowUpRight className="project-arrow" size={23} aria-hidden="true" />
                </div>
                <h3>{index === 0 ? "Odicto" : "Odicto Mobile"}</h3>
                <p className="entry-description">{project.description}</p>
                {project.contribution && <p className="project-contribution"><span>My contribution</span>{project.contribution}</p>}
                <ul className="skill-list" aria-label="Technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <span className="project-action">Explore the code <ArrowUpRight size={15} aria-hidden="true" /></span>
              </a>
            </article>
          ))}
        </div>

        <div className="project-list">
          {indexedProjects.map((project) => (
            <article key={project.title} className={"project-row" + (project.publication ? " project-publication" : "")} data-filter-hidden={!matches(project)}>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <div className="project-row-title">
                  <span className="project-kind">{project.publication ? <>{project.publication.kind} <span aria-hidden="true">·</span> {project.publication.year}</> : projectLabels[project.type]}</span>
                  <h3>{project.title}</h3>
                  {project.publication && <span className="publication-link">{project.publication.kind === "Journal paper" ? "Read paper" : "Read chapter"} <span aria-hidden="true">↗</span></span>}
                </div>
                <div className="project-row-details">
                  {project.publication && <>
                    <p className="publication-authors">
                      {project.publication.authors.map((author, index, authors) => (
                        <Fragment key={author}>
                          {index > 0 && (index === authors.length - 1 ? " & " : ", ")}
                          {author === SITE.name ? <strong>{author}</strong> : author}
                        </Fragment>
                      ))}
                    </p>
                    <p className="publication-venue"><cite>{project.publication.venue}</cite><span>{project.publication.details}</span></p>
                  </>}
                  <p className="project-row-description">{project.description}</p>
                </div>
                <ArrowUpRight size={20} className="project-arrow" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <div className="projects-onward no-print">
          <p>More of what I’m making, thinking, and exploring.</p>
          <a className="text-link" href={SITE.website + "/playground"} target="_blank" rel="noopener noreferrer">Visit my Playground <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
