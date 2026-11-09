---
name: portal-design
description: Product and UI design requirements for the tanzyyy-dev project catalog. Use for changes to information hierarchy, page layout, navigation, visual styling, responsive behavior, and accessibility.
---

# Portal UI design specification

This document defines **user-facing design requirements only**. Implementation workflow, validation procedures, and deployment rules belong in the root `AGENTS.md`.

## 1. Product and content hierarchy

**Product type:** a small software/project catalog for visitors who may not know GitHub. It is **not** a personal-brand landing page.

The first screen should answer, in this order:
1. What projects are available?
2. What does the featured project do?
3. Where can I see its details or use it?

For each project, prioritize: **visual → project title → one-sentence description → primary action**. Category/platform and repository link are secondary. A source-code link is not a substitute for a demo; if no demo exists, show a truthful availability message only where relevant.

Current catalog has **one project**. Do not render search, filters, sorting, pagination, ratings, counts-as-social-proof, a separate featured section duplicating the list, or an empty promotional hero. Introduce discovery controls only when content volume makes them useful.

Use the information hierarchy of a conventional software directory (e.g. 窓の杜), and give genuine project visuals prominence (as in game catalogs such as Playdate). **Do not copy either site's branding or layout.** The schnauzer is a brand asset, not a site-wide color instruction.

## 2. Layout contract

These values define the **current UI baseline**, not a claim that the visual identity is finally approved. Preserve them unless a different design direction is explicitly selected.

| Element | Desktop / wide | Mobile / narrow |
| --- | --- | --- |
| Content width | `max-width: 1040px`; 24px side gutter | 16px side gutter |
| Main content top padding | 34px | 23px |
| Main heading | 25px | 22px |
| Project presentation | Two columns: visual `1.15fr`, info `1fr` | Single column: visual, then info |
| Project visual | 16:10 aspect ratio; do not stretch actual screenshots | 16:10 unless the real artwork requires a different ratio |
| Project info | Category, title, summary, actions | Same content order; primary action full width |
| Responsive switch | `max-width: 720px` | At or below 720px |
| Navigation | Visible text links | Visible text links, wrapping as necessary; no hamburger for three links |

**No fixed-height viewport composition.** Natural vertical scrolling is allowed on phones and detail pages. Reduce blank space instead of shrinking text or clipping content to fit one screen.

The homepage and project-list page must not add a generic slogan above the actual work. Project details may be longer when they contain real descriptions, screenshots, controls, or instructions.

## 3. Typography, color, and spacing baseline

The following **existing values** describe the visual baseline to preserve until a different direction is explicitly selected:

- Font stack: system UI with Japanese fallbacks; base line-height `1.65`.
- Main text `#252525`; page background `#fafaf8`; muted text approximately `#555–#666`; separators `#d7d7d3`.
- Focus outline: `3px solid #1764c0`, offset `3px`; never remove it.
- Project title: `clamp(24px, 3vw, 35px)` on desktop, `25px` on mobile.
- Project summary: `16px` desktop, `15px` mobile; keep a readable line length.
- Main column gap: `clamp(24px, 4vw, 54px)`; mobile project gap `19px`.
- Primary action minimum height `46px`; other interactive targets should aim for at least `44×44px` with adequate separation.

**Do not introduce a new palette, display font, rounded-card system, shadows, gradients, decorative badges, or animation as filler.** Any new visual direction must be grounded in real project content.

## 4. Component behavior

### Header
- Brand links to the locale's home page.
- Show Projects, About, and language switch without hiding primary navigation.
- The language switch should point to the equivalent route, not reset visitors to an unrelated page.
- On mobile, wrapping is preferable to tiny tap targets or horizontal overflow.

### Project listing
- One entry per real project, not a second decorative hero plus the same item below.
- The artwork is a link to the detail page. Title and explicit detail action also link there.
- Do not present typographic placeholder artwork as a real game screenshot.
- Keep the source-code link visually secondary. If a live demo becomes available, decide its priority based on the visitor's goal.
- Never show controls that cannot meaningfully change the current result set.

### Project details
- Back link, title, concise description, project visual, available actions, then substantive details.
- Unavailable demos must not render as clickable actions.
- Avoid repeating identical descriptions or large decorative gaps.
- If real screenshots are added, use correct aspect ratio and descriptive alt text.

### Shared structure
- Keep Japanese (`/`) and English (`/en/`) equivalent in navigation and content hierarchy.
- Preserve real links, canonical URLs, hreflang, metadata, and favicon.
- Use semantic landmarks and visible keyboard focus.

## 5. Non-negotiable anti-patterns

| Reject | Replace with |
| --- | --- |
| Generic full-screen hero with a vague slogan | Direct heading and actual project entry |
| Repeated featured card and identical project list | Single canonical presentation of each project |
| Empty filters, sorting, fake counts, popularity | No control until it solves a real discovery problem |
| Rounded cards/gradients/pills used just to look modern | Borders, spacing, typography, and actual project imagery |
| Desktop layout squeezed onto a phone | Reflow to a single column and reorder by visitor priority |
| Artificial viewport-height fit | Readable content and natural scrolling |
| Invented demo/screenshot/project data | Honest placeholder or explicit unavailable state |
