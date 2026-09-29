import { projects } from "@/lib/data";
import { SITE } from "@/lib/site";

export const SEO = {
  title: `${SITE.name} | AI Engineer, Founder & AI Architect`,
  description: `${SITE.name}, AI engineer and founder of Edudojo.ai. Building AI systems for learning, assessment, and automation. Explore research, projects, and experience.`,
  image: {
    // Change the version when replacing artwork so social crawlers see a new URL.
    url: "/og-image.png?v=glass-20260929",
    width: 1730,
    height: 909,
    type: "image/png",
    alt: "Gargeya Sharma — AI engineer, founder, and theatre artist. Architecting intelligence. Curating art. Navy editorial typography beside a mint glass sculpture.",
  },
} as const;

const personId = `${SITE.origin}/#person`;

// Describe the same profile and credited publications that visitors can read.
// Do not use the logo or social banner as a Person profile photograph.
export const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE.origin}/#profile`,
  url: SITE.origin,
  name: SEO.title,
  description: SEO.description,
  inLanguage: "en",
  mainEntity: {
    "@type": "Person",
    "@id": personId,
    name: SITE.name,
    url: SITE.origin,
    description: "AI engineer, founder, and theatre artist building AI systems for learning, assessment, and automation.",
    jobTitle: "Founder & Lead AI Architect",
    worksFor: {
      "@type": "Organization",
      name: "Edudojo.ai",
      url: SITE.edudojo,
    },
    homeLocation: {
      "@type": "Place",
      name: "Jaipur, India",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Queen Mary University of London" },
      { "@type": "CollegeOrUniversity", name: "University of Petroleum & Energy Studies" },
    ],
    knowsAbout: [
      "Artificial intelligence",
      "Large language models",
      "Computer vision",
      "Reinforcement learning",
      "Multi-agent systems",
      "Workflow automation",
    ],
    sameAs: [SITE.website, SITE.linkedin, SITE.github, SITE.x],
  },
  hasPart: projects.flatMap((project) => {
    const publication = project.publication;
    if (!publication) return [];

    return [{
      "@type": publication.kind === "Journal paper" ? "ScholarlyArticle" : "Chapter",
      "@id": project.href,
      name: project.title,
      headline: project.title,
      url: project.href,
      description: project.description,
      author: publication.authors.map((name) => ({
        "@type": "Person",
        ...(name === SITE.name ? { "@id": personId } : {}),
        name,
      })),
      isPartOf: {
        "@type": publication.kind === "Journal paper" ? "Periodical" : "Book",
        name: publication.venue,
      },
    }];
  }),
};
