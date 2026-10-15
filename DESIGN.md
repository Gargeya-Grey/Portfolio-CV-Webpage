# Digital CV design direction

This is the professional, shareable overview of Gargeya's work. The companion personal website is the broader home for his projects, writing, and interests. They share an identity while serving different reading needs.

## Shared identity

The CV uses the personal website's design system: the Edudojo design family in the site's own colours, McLaren papaya on warm graphite. The reference is `W:\Personal-Brand-Website\DESIGN.md` and the token block in its `app/field.css`. When the website changes a token, copy the value into the token block at the top of `app/globals.css`; never change a colour in a component.

- Instrument Sans for headings, text and controls (headings weight 500, tracking -0.035em to -0.045em). IBM Plex Mono for dates only. Do not reintroduce Instrument Serif or Manrope.
- An `<em>` in a heading is the sentence's second tone: upright, in `--ink-2`. Never an italic accent.
- Warm paper `#f7f6f3`, ink `#1b1a18`, muted ink `#5e5a55`, hairlines `#e3e0da`, the warm wash `--sage` `#f1ede7`, and the anthracite filled button `--forest`.
- Papaya `--leaf` `#ff8000` is a signal: dots, the hero's period, the progress bar, focus on the dark band. It is never small text; orange text uses `--leaf-ink` `#b04a00`.
- Navigation and project filters use the website's grammar: muted labels, full ink on hover, one 4px papaya dot under the one in use. Section labels carry a 6px papaya dot.
- The current role is the one raised object (white, 20px radius), like the website's "now" card. The contact section is the website's inverted band (`--band`).
- Dark mode uses the website's soft dark values. A toggle in the header (a 6px square with a hairline, as on the website) switches it and saves the choice in `localStorage.theme`. Without a saved choice, the system setting decides. An init script in `app/layout.tsx` sets `html.dark` before the first paint. Dark mode applies to screens only; print stays light.
- The brand mark is the website's dot G, copied from its `public/brand/` into `public/logo/` (transparent `sgargeya-mark-on-*.svg` for page chrome, tiles for icons). `app/icon.svg` and `app/apple-icon.png` are the website's own files. Regenerate the mark on the website, then copy; never hand-edit a cut.
- A clear route to `sgargeya.com` in the header and contact section, plus the personal site's `/playground` from the project index.

## The hero is the anchor

Keep the hero's layers in `components/Hero.tsx`: the field, glass columns, central light and blur, SVG grain, and the two ambient colour fields. Owner decision, 15 October 2026: the layers stay, in the family colours. The field is warm paper (`--hero-field`), the ambient fields are papaya and sand, and dark mode lowers each layer. The grain is a CSS background image, not a live SVG filter, so the browser draws it once instead of on every repaint. Their styles live under `.hero-field`, `.hero-light`, `.hero-grain`, `.hero-columns` and `.ambient-blob*` in `app/globals.css`.

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

Prove a change with the verification skill in `.agents/skills/verify-cv/` (launch, light and dark, 375px, the feature map). Earlier verification evidence is local and ignored by Git: the original redesign checks are under `run/cv-redesign/`, the publication additions and Edudojo corrections under `run/cv-research/`, and the positioning and three-page print refinement under `run/cv-positioning/`.
