import { ArrowUpRight, MapPin } from "lucide-react";
import PrintButton from "@/components/PrintButton";
import { SITE } from "@/lib/site";
import { projects } from "@/lib/data";

const publications = projects.filter((project) => project.publication);

export default function ProfileSummary() {
  return (
    <aside className="profile-summary" aria-label="Profile at a glance">
      <div className="page-shell profile-summary-inner">
        <p className="profile-location"><MapPin size={16} aria-hidden="true" /> Jaipur, India <span>· Remote</span></p>
        <div className="profile-actions">
          <a className="text-link" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
          <a className="text-link" href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
          <PrintButton />
        </div>
      </div>
      <div className="page-shell profile-evidence no-print" aria-label="Selected career evidence">
        <div className="evidence-item">
          <p className="evidence-label">Published research</p>
          <p className="evidence-value">{publications.length} publications in computer vision</p>
          <p className="evidence-detail">{publications.map((project) => <a key={project.href} href={project.href} target="_blank" rel="noopener noreferrer">{project.publication?.kind}<ArrowUpRight size={13} aria-hidden="true" /></a>)}</p>
        </div>
        <div className="evidence-item">
          <p className="evidence-label">Applied research</p>
          <p className="evidence-value">Imperial College London</p>
          <a className="evidence-detail" href="#experience-imperial">Machine learning for flight control<ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
        <div className="evidence-item">
          <p className="evidence-label">Engineering impact</p>
          <p className="evidence-value">5+ hours saved daily</p>
          <a className="evidence-detail" href="#experience-rvs">Rate-submission workflows at RVS<ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
      </div>
    </aside>
  );
}
