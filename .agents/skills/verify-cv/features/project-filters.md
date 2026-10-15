# Project filters

## Sub-features
- Filter buttons All, Code, Research, Writing (only kinds with entries). The one in use is full ink with a papaya dot under it (`aria-pressed="true"`).
- A live count ("N entries") and two featured cards (Odicto, Odicto Mobile) above a ruled index.
- Print always shows every project, whatever the filter.

## How to get to it (user POV)
Scroll to "Projects" (`#lab`) and press a filter.

## Driving it with the browser pane
- `find` "Research" in the group "Filter projects" and click it.
- Expect `document.querySelector('.project-count').textContent` to change and `document.querySelectorAll('.project-row:not([data-filter-hidden="true"])').length` to match its number minus visible featured cards.
- Click "All" to restore.

## Gotchas
- Hidden entries use `data-filter-hidden="true"` and `display: none`; they stay in the DOM.
