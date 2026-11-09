# Repository agent instructions

This repository is the Astro + TypeScript website for tanzyyy-dev.

## Responsibility boundaries

- `AGENTS.md`: implementation workflow, repository conventions, validation, commits, and deployment safety.
- `.agents/skills/portal-design/SKILL.md`: product and UI design requirements only. It must not contain build, test, or deployment procedures.
- Refactoring, documentation cleanup, and typo fixes do **not** authorize visual or responsive behavior changes. Preserve the existing UI unless explicitly requested otherwise.

## Required design guidance

**Before any screen/UI change**, read `.agents/skills/portal-design/SKILL.md` and follow its design constraints. This includes changes to layouts, components, CSS, navigation, responsive behavior, visual assets, and user-facing page structure. Do not begin implementing UI changes before reviewing that file.

For non-UI changes, use the relevant repository conventions; consult the design skill if the change affects the rendered experience.

## Source ownership

- `src/layouts/Base.astro`: header, footer, metadata, locale navigation.
- `src/components/ProjectList.astro`: catalog entries and actions.
- `src/components/ProjectDetail.astro`: detail page content and actions.
- `src/styles/global.css`: styling and responsive rules.
- `src/data/content.ts`: factual project information and localized copy.

## Validation

- For code changes, run `npm run build` when dependencies are available. Report the result and any checks that could not be performed.
- For UI changes, inspect at minimum `320×568`, `375×812`, `768×1024`, and `1440×900` CSS-pixel viewports, and check the affected routes among `/`, `/en/`, `/projects/`, `/en/projects/`, and both project detail routes.
- At 320px, check horizontal overflow, title clipping, navigation overlap, and action accessibility. Check keyboard tab order and visible focus, touch targets, content fidelity, Japanese/English parity, and redundant UI elements.
- **Do not claim visual verification without screenshots or browser inspection.** If a viewport, route, or device could not be inspected, state that limitation.
- For documentation-only changes, verify that file references, paths, and instructions are accurate. No site UI change is needed.
- For major redesigns, present alternatives grounded in the real content and obtain a direction before implementation. For an explicitly requested small UI change, implement the focused change and verify its impact.

## Git commits and deployment safety

- **Commit all files belonging to one logical task in a single commit.** Prepare and review the complete change set before pushing; do not create or push one commit per file.
- **Push once per completed task**, after validation where possible. Avoid rapid consecutive pushes to `main`: each push triggers the GitHub Pages deployment workflow, and overlapping deployments can fail with HTTP 400 (`in progress deployment`).
- If additional fixes are needed, verify the previous deployment has completed before pushing again when practical.
- If the available GitHub tooling only supports one-file-per-commit writes, **do not silently use that approach**. Use a multi-file commit mechanism, or explain the limitation and request approval before proceeding.
- Do not change deployment configuration merely to compensate for unnecessary fragmented commits.

## Working rules

- Keep Japanese as the default site at `/` and English at `/en/`. Maintain parity when editing user-facing content or navigation.
- Use Astro + TypeScript and static output compatible with GitHub Pages.
- Do not invent project screenshots, demo URLs, product claims, or additional projects. Project information is manually maintained in `src/data/content.ts`.
- Make focused changes. Do not alter GitHub Pages settings, GitHub Actions triggers, or deployment configuration unless explicitly requested.
- Keep implementation and UI changes scoped to the request; do not change the deployed site while reorganizing agent instructions.
