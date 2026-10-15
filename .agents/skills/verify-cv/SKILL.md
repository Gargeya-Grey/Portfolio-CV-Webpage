---
name: verify-cv
description: Launch the digital CV (Next.js, cv.sgargeya.com) locally and drive it the way a reader does, in light and dark, at desktop and 375px, and in print. Use to prove any visual, content or interaction change to the CV before reporting it done.
---

# Verify the CV

The surface is one public web page (`/`) plus a 404 page. Drive it with the Claude desktop app's built-in browser (`mcp__Claude_Browser__*`). There is no test suite and no sign-in.

## Launch

1. Install once per checkout: `npm ci`. `postinstall` applies `patches/` with patch-package.
2. Start the server with `preview_start` and the name `cv` (`.claude/launch.json`: `npx next dev -p 3108`). The personal website uses port 3107, so both can run at once.
3. Ready = `http://localhost:3108/` shows the heading "Gargeya Sharma." (`find` with query `Gargeya Sharma`).

For a production check, run `npx next build` in the shell (about 1 minute). It must end with the route table and no error.

## Doctor

In a tab on `http://localhost:3108` run with `javascript_tool`:

```js
({ h1: document.querySelector('h1')?.textContent, font: getComputedStyle(document.body).fontFamily.slice(0, 40), paper: getComputedStyle(document.documentElement).getPropertyValue('--paper').trim() })
```

- `h1` is missing: the page did not render; read `preview_logs` with `level: 'error'`.
- `paper` is not `#f7f6f3` (light) or `#151413` (dark, `html.dark`): the stylesheet did not load or the tokens changed.

## Drive

- Open your own tab (`tabs_create`, then `navigate` with that `tabId`) when other agents may share the pane.
- Sections and their anchors: `#bio` (hero), `#ventures` (experience), `#education`, `#lab` (projects, with filters), `#contact` (inverted band and footer). Feature files in `features/` give the details.
- Dark mode: the header button labelled "Switch to dark mode" / "Switch to light mode" sets `html.dark` and saves `localStorage.theme`. Without a saved value, the system setting decides (`resize_window` with `colorScheme`). To test the system path, first run `localStorage.removeItem('theme')` and reload. Clear `localStorage.theme` when you finish, so the next run starts from the system setting.
- Phone width: `resize_window` with `preset: 'mobile'` (375 x 812). Reset with `preset: 'desktop'` when done.
- Print: the browser pane has no print preview and cannot emulate print media. Check print by reading the `@media print` block in `app/globals.css`, and, when print matters, ask the owner to save a PDF from a real browser (Ctrl+P). Say in the report that print was not checked in the pane.
- Prefer `read_page` / `find` for text and structure; take a screenshot for every visual claim.

## Evidence

A proof has, for each changed section: a screenshot in light and in dark at desktop width, one at 375px, and the action you drove (for example "pressed the Research filter; the count read 3 entries"). Screenshots stay in the session transcript. Name the sections you did not check and why. The page has no write actions; the only side effect is the clipboard (Copy email).

## Cleanup

`preview_stop` with the server id that `preview_start` returned. Close the tabs you created (`tabs_close`). Reset any `resize_window` size and colour scheme you set.
