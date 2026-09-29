# Digital CV design direction

This is the professional, shareable overview of Gargeya's work. The companion personal website is the broader home for his projects, writing, and interests. They share an identity while serving different reading needs.

## Shared identity

The reference is the companion project's `docs/personal-world-design.md` and its implemented typography, rather than its older Edudojo-branded root design file.

- Instrument Serif for the name and short editorial headings; Manrope for career records, body copy, and controls.
- Navy ink `#142936`, readable teal `#08796d`, cool paper `#f3f6f5`, and mint `#83dfc1` on the dark contact surface.
- Fine rules, generous spacing, modest corners, and different layouts for experience, education, and projects.
- A clear route to `sgargeya.com` in the header and contact section, plus the personal site's `/playground` from the project index.

## The hero is the anchor

Preserve the original background layers in `components/Hero.tsx`: the `#e9fcfc` field, glass columns, central light and blur, SVG grain, and the two ambient colour fields. Their styles live under `.hero-columns` and `.ambient-blob*` in `app/globals.css`. Typography and navigation can evolve around this background.

## CV structure

1. Name, role, personal introduction, and direct paths to experience and contact.
2. Location, professional profiles, and the browser's print/save-PDF action, followed by three linked evidence points: published computer vision research, Imperial flight-control research, and time saved in RVS operations.
3. A continuous career chronology with a distinct current role. All entries remain in normal document flow.
4. Academic qualifications in two columns, stacking on phones.
5. Two featured tools explain the user benefit and Gargeya's contribution. Published research leads the subsequent compact project index. Code, research, and writing filters change the screen view; printing always includes every project.
6. Direct email, professional links, and an invitation to the wider personal website.

Career dates, organizations, achievements, project destinations, and qualifications come from the existing CV content and the user's corrections. This redesign is not an independent verification of those claims.

Published research uses the same ruled rows as the project index, with the exact publication title, type and year, coauthor credits, venue details, a short plain-language summary, and a DOI destination. The two 2022 publication records were checked against Crossref; they sit alongside the existing MSc research code under Research. Publication metadata lives with its entry in `lib/data.ts`.

The opening states the professional focus in learning, assessment, and automation while retaining the theatre identity. RVS metrics are scoped using the user's clarification: approximately 20 times faster from idea through demo to production after standardizing Python prototyping and dashboard templates across the team; 5+ hours saved daily in bank rate-submission operations around mid-month and month-end reporting. These are user-reported outcomes, not independently audited benchmarks. Edudojo remains work in development, and the 3,000-student college is described as a research setting rather than a count of paying or active users.

## Interaction and reading

- Native scrolling, section links, a skip link, visible keyboard focus, and a modal navigation menu with focus containment and Escape dismissal.
- Content is rendered on the server and remains readable without JavaScript. JavaScript enables filters, active section tracking, the menu, copying, and printing.
- Reduced motion disables ambient and entrance animation and smooth scrolling.
- Responsive layouts support narrow phones through wide desktops without horizontal overflow.
- Print styling removes decorative navigation and marketing headings, keeps records together, and exposes all filtered projects.

## Code map

`app/globals.css` owns the visual tokens, layouts, responsive rules, and print styles. `components/Hero.tsx`, `Ventures.tsx`, `Education.tsx`, and `Lab.tsx` own the main sections. `Navigation.tsx`, `ProfileSummary.tsx`, `PrintButton.tsx`, and `Footer.tsx` provide the surrounding actions. Project data lives in `lib/data.ts`; canonical contact and profile links live in `lib/site.ts`.

Verification evidence is local and ignored by Git: the original redesign checks are under `run/cv-redesign/`, the publication additions and Edudojo corrections under `run/cv-research/`, and the positioning and three-page print refinement under `run/cv-positioning/`.
