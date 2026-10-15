# Header and navigation

## Sub-features
- Fixed header with the SGargeya mark (ink mark in light, light mark in dark), "Gargeya / Digital CV", four section links, "Personal website", and the theme toggle.
- Theme toggle: click it, expect `document.documentElement.classList.contains('dark')` to flip and `localStorage.theme` to match; after a reload the choice stays. Exactly one header mark is visible in each theme.
- Active section: the link turns full ink and gets one 4px papaya dot under it.
- Below 960px: a menu button opens a modal `<dialog id="mobile-navigation">` with focus containment and Escape to close.

## How to get to it (user POV)
Open `/`. Scroll; the header stays on top. On a phone, press the menu button at the top right.

## Driving it with the browser pane
- `find` "Experience" in the `Primary` nav and click it. Then run `document.querySelector('.desktop-navigation a[aria-current]')?.textContent` and expect `Experience`.
- Phone: `resize_window` `preset: 'mobile'`, click the button with label "Open navigation", expect `document.querySelector('#mobile-navigation').open === true`, press Escape, expect `false`.

## Gotchas
- The active section is computed from scroll position (`top <= 160px`). After a click, smooth scroll takes a moment; read `aria-current` after a short wait.
- At the page bottom the active link is always Contact.
