# Hero and profile summary

## Sub-features
- Warm hero field with glass columns, a central light, grain, and two drifting ambient fields (papaya and sand). Dark mode uses the same layers in warm graphite.
- Name with a papaya period, a two-tone line ("Architecting intelligence." then "Curating art." in grey), the current role, and two buttons (anthracite filled, hairline outline).
- Profile summary under the hero: location, profile links, the Save PDF action, and three evidence points.

## How to get to it (user POV)
Open `/`. The hero fills the first screen.

## Driving it with the browser pane
- Screenshot the first screen in light and dark (`resize_window` `colorScheme`).
- `getComputedStyle(document.querySelector('.hero-period')).color` is `rgb(255, 128, 0)`.
- With reduced motion (`matchMedia('(prefers-reduced-motion: reduce)')`), the ambient fields do not animate.

## Gotchas
- "Save PDF" opens the print dialog. Do not press it in an automated run; it blocks the pane.
