---
name: astro-development
description: Implement and verify the tanzyyy-dev Astro and TypeScript website. Use for code changes, refactoring, builds, tests, dependency updates, and technical checks. UI requirements and GitHub operations have separate skills.
---

# Astro development and verification

## Project conventions

- Use Astro + TypeScript, generating static output compatible with GitHub Pages.
- Keep Japanese at `/` and English at `/en/`. Maintain equivalent content and navigation across languages.
- Keep shared translations in `src/data/content.ts`, common project types in `src/data/types.ts`, and project facts in `src/data/projects/{games,contents,tools}/{slug}.ts`. Never invent project screenshots, demo URLs, project claims, or new projects.
- Update repository and demo links only after verifying that the destination exists and is the correct published target; never infer URLs from proposed migrations.
- Refactoring, typo fixes, and documentation cleanup do not authorize visual, responsive, or other unrelated behavior changes. If UI behavior or appearance must change, also read `portal-design/SKILL.md`.

## Source map

- `src/layouts/Base.astro`: shared layout and metadata; composes the shared header and footer.
- `src/components/ProjectList.astro` and `ProjectCard.astro`: project listing and its cards.
- `src/components/ProjectDetail.astro` and `GameInfoCard.astro`: project detail and game information card.
- `src/styles/global.css`: styling and responsive rules.
- `src/data/content.ts`: shared translations.
- `src/data/types.ts`: shared and category-specific project types.
- `src/data/projects/`: category indexes and one file per work.
- `src/data/games.ts`: backwards-compatible game API.
- `src/pages/`: Japanese and English routes.

## Component reuse and refactoring

- Before adding page markup or a new UI component, inspect existing shared components and reuse an appropriate one instead of duplicating its structure or behavior.
- Shared site chrome belongs in `src/components/SiteHeader.astro`, `SiteFooter.astro`, and `Breadcrumbs.astro`; pages should consume them through the existing layout or component API rather than copying their markup.
- Project listing cards use `src/components/ProjectCard.astro`; game detail metadata uses `src/components/GameInfoCard.astro`. Keep localized content and project facts sourced from `src/data/`, not duplicated in components.
- Prefer passing typed Astro props to reusable components. Do not extract a component solely because a block of markup is long; extract when it represents a stable, independently reusable responsibility.
- Keep shared behavior (including sticky positioning) consistent across routes unless a page-specific exception is explicitly required. Place genuinely shared rules in shared CSS; scope page-specific rules deliberately.
- Refactor one component family at a time. Preserve HTML semantics, styles, responsive behavior, accessibility, and Japanese/English parity; avoid opportunistic redesigns or unrelated cleanup.
- After each refactor, review the changed files and verify the build before proceeding to another component family. Report unverified visual behavior accurately.

## Verification

- Run `npm run build` for code changes when dependencies are available. Report any failed or unrun checks rather than claiming verification.
- Do not run local browser previews or generate viewport screenshots as routine verification. Perform visual inspection only when explicitly requested.
- For UI changes, review the affected routes, responsive CSS, keyboard focus, touch controls, and Japanese/English parity in the code.
- **Never claim visual verification without actual browser or screenshot inspection.**
- For documentation-only edits, check paths, references, and scope; a website build is not a substitute for document consistency checks.
