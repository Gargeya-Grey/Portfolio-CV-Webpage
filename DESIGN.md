# Digital CV design direction

This is the professional, shareable overview of Gargeya's work at `cv.sgargeya.com`. The companion personal website (`sgargeya.com`) is the broader home for his projects, writing, and interests.

## Visual identity & palette

The CV uses an **Architectural Atelier & Stagecraft** direction pairing high-contrast editorial typography with a theatrical obsidian/alabaster palette (`app/globals.css`).

- **Typography (`app/layout.tsx`):**
  - `Instrument Sans` carries display headings, UI controls, and body copy (`font-weight: 500`, tracking `-0.038em` to `-0.048em` on headlines).
  - `Instrument Serif` (italic) acts as the editorial counterpoint in headings (`h1 em, h2 em, h3 em`), the hero signature, and dossier/telemetry figures (`.evidence-num` with positive letter spacing and `lining-nums tabular-nums`).
  - `IBM Plex Mono` marks real metadata: dates, section indices, telemetry labels, and location/counts.
- **Light mode (Warm Alabaster):** `--paper: #faf9f6`, `--paper-raised: #ffffff`, `--sage: #f2f0eb`, `--ink: #111113`, `--ink-2: #52525b`, hairlines `--rule: #e4e1da`, and accent `--leaf: #e85d04` / `--leaf-ink: #b54200`.
- **Dark mode (Deep Obsidian):** `--paper: #09090b`, `--paper-raised: #111115`, `--sage: #0d0d11`, `--ink: #f4f3ef`, `--ink-2: #a1a1aa`, specular rims (`--surface-rim`), and luminous amber accents (`--leaf: #ff922b` / `--leaf-ink: #ffb366`).
- **Theme toggle (`components/ThemeToggle.tsx`):** Uses the View Transitions API (`document.startViewTransition`) with a single-phase circular iris reveal blooming from the click origin (`600ms`, `cubic-bezier(0.65, 0, 0.35, 1)`), freezing element transitions via `.theme-transitioning` so snapshots capture cleanly. Respects `prefers-reduced-motion: reduce`, persists in `localStorage.theme`, and falls back to the system preference via the init script in `app/layout.tsx`.
- **Navigation (`components/Navigation.tsx`):** Frosted pill bar with a GPU-composited gliding active indicator (`.nav-active-pill`) positioned from cached section offsets so scrolling never triggers layout thrashing.

## The hero stage (`components/Hero.tsx`, `components/HeroStage.tsx`)

- Framed with an editorial sans identity line (`AI Engineer · Founder · Humanist`), display heading, serif-paired signature, current role link, bio, and dual CTAs.
- Backdrop layers (`HeroStage.tsx`): overhead Fresnel beam, damped pointer-following spotlight (`--mx, --my`, skipped on touch devices), precision `28px` radial dot matrix (ambient perimeter + spotlight-lit amber dots), counter-rotating Vernier astrolabe SVG dials (paused automatically via `IntersectionObserver` when scrolled off-screen), horizon hairline, and fine grain.

## CV structure

1. **Hero (`#bio`):** Introduction, current role at Edudojo.ai, and direct paths to experience and contact.
2. **Profile summary (`components/ProfileSummary.tsx`):** Location, LinkedIn/GitHub/Print actions, and three linked evidence cards (`01` published computer vision research, `02` Imperial flight-control research, `03` RVS operational impact).
3. **Experience (`#ventures`, `components/Ventures.tsx`):** Sticky numbered intro (`01`), highlighted current role card (`Edudojo.ai`), chronological experience (`Evvolv`, `RVS Consensus+`, `Imperial College London`), and hospitality interlude.
4. **Education (`#education`, `components/Education.tsx`):** Two-column monograph cards (`QMUL`, `UPES`).
5. **Selected work (`#lab`, `components/Lab.tsx`):** 30-day build telemetry strip (`39B` tokens processed, `635` authored PRs merged, `853` commits authored), filterable project toolbar (`All work`, `Code & tools`, `Research`, `Writing`), featured voice tools (`Odicto`, `Odicto Mobile`), and ruled research/repository index.
6. **Contact & footer (`#contact`, `components/Footer.tsx`):** Obsidian stage band with direct email + clipboard copy feedback, social links, and `sgargeya.com` portal card.

## Performance & print

- Zero runtime animation library overhead: `ScrollProgress.tsx` uses CSS `animation-timeline: scroll()` with a passive `rAF` fallback; below-the-fold sections use `content-visibility: auto` on screen and reset to `content-visibility: visible` in `@media print`.
- `@media print` renders a light A4 monograph, strips decorative chrome and telemetry, keeps entries intact, and exposes all filtered projects.
