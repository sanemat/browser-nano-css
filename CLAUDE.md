# CLAUDE.md

## Commands

- `npm test` - Format check + HTML validation (primary test)
- `npm run format` - Auto-fix formatting (run after editing CSS or HTML)
- `npm run build` - Clean, process CSS, checksums, size check
- `npm run size:check` - Verify under 2KB gzipped
- `npm run changelog` - Generate changelog (conventional commits)
- `npm run git:tag` - Create git tag from package.json version

## Constraints

- **999 bytes gzipped limit** — build fails if exceeded
- Element-based selectors only (no utility classes); not compatible with CSS purging tools
- Standard CSS only; targets Chrome, Safari, Firefox
