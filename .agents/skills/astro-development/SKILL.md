---
name: astro-development
description: Implement and verify the tanzyyy-dev Astro and TypeScript website. Use for code changes, refactoring, builds, tests, dependency updates, and technical checks. UI requirements and GitHub operations have separate skills.
---

# Astro development and verification

## Project conventions

- Use Astro + TypeScript, generating static output compatible with GitHub Pages.
- Keep Japanese at `/` and English at `/en/`. Maintain equivalent content and navigation across languages.
- Keep project facts and localized content in `src/data/content.ts`. Never invent project screenshots, demo URLs, project claims, or new projects.
- Do not redirect existing source links to `tanzyyy-dev` until the associated migration is actually complete.
- Refactoring, typo fixes, and documentation cleanup do not authorize visual, responsive, or other unrelated behavior changes. If UI behavior or appearance must change, also read `portal-design/SKILL.md`.

## Source map

- `src/layouts/Base.astro`: shared layout, navigation, footer, and metadata.
- `src/components/ProjectList.astro`: project listing.
- `src/components/ProjectDetail.astro`: project detail.
- `src/styles/global.css`: styling and responsive rules.
- `src/data/content.ts`: project information and translations.
- `src/pages/`: Japanese and English routes.

## Verification

- Run `npm run build` for code changes when dependencies are available. Report any failed or unrun checks rather than claiming verification.
- If a UI change is made, inspect these viewports: `320×568`, `375×812`, `768×1024`, `1440×900` (CSS pixels).
- Check affected routes, including `/`, `/en/`, `/projects/`, `/en/projects/`, and project detail routes where relevant.
- At narrow widths, check overflow, clipped titles, navigation overlap, and access to actions. Check keyboard focus, touch controls, content fidelity, and language parity.
- **Never claim visual verification without browser or screenshot inspection.** State which checks were not possible.
- For documentation-only edits, check paths, references, and scope; a website build is not a substitute for document consistency checks.
