import { ArrowUpRight } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="cv-section education-section" aria-labelledby="education-heading">
      <div className="page-shell">
        <header className="section-heading">
          <div><p className="eyebrow">Education</p><h2 id="education-heading">A foundation of <em>curiosity.</em></h2></div>
          <p>The theory behind the practice.</p>
        </header>
        <div className="education-grid">
          <article className="education-entry">
            <div className="entry-meta"><span>Sep 2022 – Sep 2023</span><span>London, UK</span></div>
            <p className="qualification">Distinction</p>
            <h3>M.S. in Artificial Intelligence</h3>
            <p className="institution">Queen Mary University of London</p>
            <p className="entry-description">Deep learning, computer vision, and large language models. Dissertation on unsupervised machine translation using visual signals as rewards for reinforcement learning.</p>
            <a className="text-link" href="https://github.com/Gargeya-Grey/MSc-Artificial-Intelligence" target="_blank" rel="noopener noreferrer">Explore the research <ArrowUpRight size={16} aria-hidden="true" /></a>
          </article>
          <article className="education-entry">
            <div className="entry-meta"><span>Jun 2018 – Aug 2022</span><span>Dehradun, India</span></div>
            <p className="qualification">8.77 CGPA · With Honors</p>
            <h3>B.Tech. in Computer Science</h3>
            <p className="institution">University of Petroleum &amp; Energy Studies</p>
            <p className="entry-description">Specialized in Cyber Security and Forensics; independently studied machine learning and deep learning. Student Placement Representative in the final year.</p>
            <ul className="skill-list" aria-label="Undergraduate focus"><li>Computer science</li><li>Cyber security</li><li>Machine learning</li></ul>
          </article>
        </div>
      </div>
    </section>
  );
}
