---
name: astro-development
description: Implement and verify the tanzyyy-dev Astro and TypeScript website. Use for code changes, refactoring, builds, tests, dependency updates, and technical checks. UI requirements and GitHub operations have separate skills.
---

# Astro development and verification

## Project conventions

- Use Astro + TypeScript, generating static output compatible with GitHub Pages.
- Keep Japanese at `/` and English at `/en/`. Maintain equivalent content and navigation across languages.
- Keep project facts and localized content in `src/data/content.ts`. Never invent project screenshots, demo URLs, project claims, or new projects.
- Update repository and demo links only after verifying that the destination exists and is the correct published target; never infer URLs from proposed migrations.
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
- Do not run local browser previews or generate viewport screenshots as routine verification. Perform visual inspection only when explicitly requested.
- For UI changes, review the affected routes, responsive CSS, keyboard focus, touch controls, and Japanese/English parity in the code.
- **Never claim visual verification without actual browser or screenshot inspection.**
- For documentation-only edits, check paths, references, and scope; a website build is not a substitute for document consistency checks.
