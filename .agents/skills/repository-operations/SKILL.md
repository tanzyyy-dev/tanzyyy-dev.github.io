---
name: repository-operations
description: Git and GitHub operations for the tanzyyy-dev website. Use before making commits, pushing, creating or merging pull requests, or changing GitHub Pages deployment workflows.
---

# Repository and deployment operations

## Commit and push discipline

- Keep changes focused; review the complete diff and confirm unrelated files have not changed.
- **One logical task = one commit.** Do not create one commit per file.
- Push once after preparing the complete task. A push to `main` triggers the GitHub Pages workflow.
- Avoid overlapping Pages deployments; check the preceding deployment's status before an additional push when practical.
- If a tool only offers one-file-per-commit writes, use a multi-file commit mechanism or explain the limitation before proceeding.
- Never modify GitHub Actions triggers, Pages settings, or deployment configuration to work around avoidable fragmented commits.

## Report actual outcomes

- Verify the remote branch points to the new commit after pushing or merging.
- Check the relevant GitHub Actions run when a Pages deployment was triggered; distinguish queued, running, failed, and successful.
- Do not claim the deployed website has been visually verified unless it was actually inspected.
