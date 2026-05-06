# CLAUDE.md

## Commands

- `npm test` - Format check + HTML validation (primary test)
- `npm run format` - Auto-fix formatting (run after editing CSS or HTML)
- `npm run build` - Clean, process CSS, checksums, size check
- `npm run size:check` - Verify under 999 bytes gzipped
- `npm run changelog` - Generate changelog (conventional commits)
- `npm run git:tag` - Create git tag from package.json version

## Constraints

- **999 bytes gzipped limit** — build fails if exceeded; if we exceed it, cut features, never raise the limit
- Element-based selectors only (no utility classes); not compatible with CSS purging tools
- Standard CSS only; targets Chrome, Safari, Firefox

## Philosophy

> Write correct HTML. Get a usable, readable screen on mobile. Handle your own layout. Under 999 bytes.

"Trust the browser" — only for properties we have not touched. Once we declare a property, we own all consequences.
CSS additions must justify their bytes. See `design.md` for full rationale.
