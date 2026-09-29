import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

const experiences = [
  {
    id: "edudojo",
    role: "Founder & Lead AI Architect",
    company: "Edudojo.ai",
    date: "May 2026 – Present",
    location: "Remote",
    description: "Building Socratic AI for learning and assessment, shaped around how each learner thinks.",
    highlights: [
      "English and Hindi today, with an architecture designed for more languages.",
      "Developing with Parishkar College (Autonomous) as a 3,000-student research lab, drawing on its director’s expertise in pedagogy and human development.",
      "Building progress tracking for learners, teachers, and evaluators to measure support over time. Individual journeys help teachers and AI tailor its content, approach, and timing.",
    ],
    tags: ["AI architecture", "Generative AI", "Education strategy"],
    link: SITE.edudojo,
  },
  {
    id: "evolve",
    role: "Founding AI Engineer / Member",
    company: "Evvolv",
    date: "Nov 2025 – May 2026",
    location: "London, UK",
    description: "Co-founded and engineered a multi-agent system to automate business workflows for small and medium enterprises.",
    highlights: [],
    tags: ["Multi-agent systems", "n8n", "Business automation"],
    link: null,
  },
  {
    id: "rvs",
    role: "Data Scientist & Automation Specialist",
    company: "RVS Consensus+",
    date: "Jul 2024 – Nov 2025",
    location: "London, UK",
    description: "Built data pipelines and real-time dashboards processing 10M+ transaction rows from SIX, Reuters, and 15+ global Tier-1 banks.",
    highlights: [
      "Standardized Python prototyping and dashboard templates across the team, making the path from idea to demo to production approximately 20× faster.",
      "Automated bank rate-submission operations around mid-month and month-end reporting, saving 5+ hours daily.",
    ],
    tags: ["Python", "SQL", "Data pipelines", "Dash / Plotly"],
    link: null,
  },
  {
    id: "imperial",
    role: "Machine Learning Consultant",
    company: "Imperial College London",
    date: "Jul 2023 – Oct 2023",
    location: "London, UK",
    description: "Developed data-driven control methods for flapping-wing micro-aerial vehicles at the Flapping Wing MAV Lab.",
    highlights: [],
    tags: ["Machine learning", "Robotics", "Control systems"],
    link: null,
  },
] as const;

export default function Ventures() {
  return (
    <section id="ventures" className="cv-section experience-section" aria-labelledby="experience-heading">
      <div className="page-shell section-layout">
        <header className="section-intro">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-heading">Technical depth.<br />{" "}<em>Human intuition.</em></h2>
          <p>From research and financial data to building AI products. A career shaped by making things work for people.</p>
          <a className="text-link section-onward no-print" href="#lab">See what I build <ArrowUpRight size={16} aria-hidden="true" /></a>
        </header>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article key={experience.id} id={"experience-" + experience.id} className={"experience-entry " + (index === 0 ? "experience-current" : "")}>
              <div className="entry-meta">
                <span>{experience.date}</span>
                {index === 0 ? <span className="current-label"><span className="status-dot" aria-hidden="true" /> Current role</span> : <span>{experience.location}</span>}
              </div>
              <h3>
                {experience.link ? <a href={experience.link} target="_blank" rel="noopener noreferrer">{experience.company}<ArrowUpRight size={22} aria-hidden="true" /></a> : experience.company}
              </h3>
              <p className="experience-role">{experience.role}</p>
              <p className="entry-description">{experience.description}</p>
              {experience.highlights.length > 0 && <ul className="experience-highlights">{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
              <ul className="skill-list" aria-label={"Skills at " + experience.company}>{experience.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}

          <article id="experience-mitchells" className="experience-entry experience-human">
            <p className="eyebrow">Alongside the technical work</p>
            <div className="entry-meta"><span>Dec 2022 – Nov 2025</span><span>London, UK</span></div>
            <h3>Working with people, in real time.</h3>
            <p className="experience-role">VIP Bartender · Mitchells &amp; Butlers / Compass Group</p>
            <p className="entry-description">Worked at AllBarOne Leicester Square while pursuing my master’s. A hands-on education in reading a room, teamwork under pressure, and thinking on my feet.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
