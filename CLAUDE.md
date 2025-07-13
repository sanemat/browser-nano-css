# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Browser Nano CSS is a lightweight, mobile-first CSS template that provides clean styles for default HTML elements without requiring extra classes. The project focuses on minimalism, fast loading, and ease of use.

## Development Commands

### Build and Development
- `npm run build` - Clean and process CSS, then run checksums and size check
- `npm run dev` - Start development mode with file watching and local server
- `npm run watch` - Watch CSS files and rebuild on changes
- `npm run serve` - Start local development server

### CSS Processing
- `npm run process-css` - Process CSS with PostCSS and generate minified output
- `npm run clean` - Remove all files from dist directory

### Quality and Testing
- `npm test` - Run format checks (this is the primary test command)
- `npm run format:check` - Check code formatting with Prettier and package.json sorting
- `npm run format` - Auto-fix formatting issues
- `npm run size:check` - Verify CSS file is under 2KB gzipped (fails build if exceeded)
- `npm run size` - Show current gzipped size of CSS file

### Release
- `npm run changelog` - Generate changelog using conventional commits
- `npm run git:tag` - Create git tag based on package.json version

## Architecture

### Source Structure
- `src/browser-nano.css` - Main CSS source file with design tokens and component styles
- `postcss.config.js` - PostCSS configuration using cssnano for minification
- `tools/size.js` - CLI tool for checking gzipped CSS file size (2KB limit)

### Build Process
The build process transforms `src/browser-nano.css` into `dist/browser-nano.min.css` using PostCSS with cssnano for minification. The build automatically generates checksums (SHA256/SHA384) and verifies the file size stays under 2KB gzipped.

### Design Philosophy
- Element-based styling (no utility classes)
- CSS variables for customization
- Mobile-first responsive design
- Size-constrained (under 2KB gzipped)
- Not compatible with CSS purging tools due to element-based selectors

### Key Constraints
- Must maintain under 2KB gzipped size
- Uses only standard CSS features for broad browser support
- Styles apply directly to HTML elements, not classes
- Target browsers: Chrome, Safari, Firefox (desktop and mobile)