# Search and social discovery

The canonical CV is `https://cv.sgargeya.com`. It is a single profile page; experience, education, and projects are sections, not separate sitemap entries.

## Source map

| Concern | Source |
| --- | --- |
| Search title, description, social image, profile and publication data | `lib/seo.ts` |
| Canonical URL and professional profile links | `lib/site.ts` |
| Open Graph, Twitter, and shared document metadata | `app/layout.tsx` |
| Indexing and preview permissions; server-rendered JSON-LD | `app/page.tsx` |
| Crawl rules and sitemap discovery | `app/robots.ts` |
| Canonical page inventory | `app/sitemap.ts` |
| Approved banner | `public/og-image.png` |

The banner is 1730 × 909 pixels. Its versioned metadata URL changes when the artwork changes. Open Graph and Twitter use the same image, description, and accessible image text. Declared dimensions must match the file.

## Search and AI answers

The visible page supplies the name, professional focus, current role, education, linked projects, and publication credits in the initial HTML. `ProfilePage` and `Person` structured data describe those same facts and connect the professional profiles. Publication records reuse `lib/data.ts`, preserve all coauthor credits, and point to the original DOI destinations.

The home page permits indexing and snippets. The 404 page remains `noindex` and does not inherit the profile JSON-LD. The sitemap contains only the canonical CV. No synthetic update dates or unsupported accomplishments are added.

Google's [AI search guidance](https://developers.google.com/search/docs/appearance/ai-features) applies the same SEO foundations to AI Overviews and AI Mode; it does not require a special AI file or schema. The profile follows the [ProfilePage guidance](https://developers.google.com/search/docs/appearance/structured-data/profile-page), and its JSON-LD uses the [Next.js serialization guidance](https://nextjs.org/docs/app/guides/json-ld). These measures support understanding and eligibility; rankings and inclusion remain external outcomes.

## Verification and release

Run `npm run lint` and the production build before release. Inspect the resulting HTML and both metadata routes. After deployment, check the public home page, `robots.txt`, `sitemap.xml`, image content type and dimensions, and 404 status. Confirm the served robots file too: Cloudflare can add managed content alongside the application's rules. Requests with crawler user agents are useful diagnostics, but do not establish how verified crawler IPs or every CDN region will be treated.

The configured production integration publishes `main` from GitHub to the Cloudflare Worker `portfolio`. Search Console/Bing Webmaster Tools indexing and social-platform recrawls are separate from deployment. Existing shared posts may keep a cached preview until their platform fetches the page again.

Local evidence for the 2026-09-29 update is retained in the ignored `run/social-preview-01a0ed8f/` directory: the generation prompt, approved proposal, previous banner, build logs, and verification results. The banner was created with the built-in image-generation tool. The deployed site depends only on `public/og-image.png`; it does not depend on the local evidence directory.
