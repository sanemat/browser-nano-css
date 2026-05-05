## Browser Nano CSS Design Template

### Philosophy

> Write correct HTML. Get a usable, readable screen on mobile. Handle your own layout. Under 2KB.

**Bold/High-contrast + Structural HTML opinions.**

Write semantic HTML and it gets styled well automatically. No classes needed because the HTML structure carries the meaning. Correct HTML is rewarded with good styling.

### Goals

- **Mobile-first**: Looks good on phones and tablets first, then larger screens.
- **Lightweight**: Under 2KB gzipped. Fast loading.
- **Classless**: Styles apply directly to HTML elements. No utility classes.
- **Customizable**: Change basic styles with CSS variables.
- **Bold/High-contrast**: Maximum contrast for readability in sunlight and for accessibility.
- **Structural HTML**: Context-aware styling rewards semantic markup.

### Constraints

- **Browser Compatibility**: Supports modern browsers:
  - Mobile: iPhone Safari, Android Chrome, Android Firefox
  - Desktop: Chrome, Safari, Firefox
- **Minimal CSS features**: Uses only standard, widely-supported CSS features (basic selectors, CSS variables, simple media queries).
- **Size Limit**: Under 2KB gzipped.
- **Not Optimized for Unused CSS Removal**: `browser-nano-css` is not designed for automated CSS reduction tools like tree-shaking or content-based purging. Users should include the full CSS file to ensure proper styling.

### What This Library Covers

- Document elements: headings, paragraphs, lists, links, images, figures, tables
- App UI elements: `button`, `input`, `select`, `textarea`, `label`, `fieldset`
- Structural HTML: `<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`
- Dark mode: automatic via `prefers-color-scheme`

### What This Library Does NOT Cover

- Layout system (no `.flex`, `.container`, `.grid`)
- Component patterns (no modal, card, toast, dropdown)
- Utility classes of any kind

### Design Philosophy

- **Classless**: No utility classes. Style via semantic HTML elements and structure only.
- **Bold/High-contrast**: Text is `#000` on `#fff` (21:1 contrast ratio, exceeds WCAG AAA 7:1). Defensible because of accessibility requirements.
- **Structural opinions**: Elements are styled by their position in the document. `body > header` gets a bottom border; `main` gets max-width and centering; `article` gets a controlled line length.
- **Automatic dark mode**: Respects `prefers-color-scheme` without any configuration.
- **Explicit over implicit**: Important styles (spacing, link visibility, focus outlines) are written explicitly.

### Design Rule Priorities

**High Priority**

1. **Accessibility**: Maximum contrast, readable font size, visible focus rings.
2. **Readability**: Clear font, appropriate line spacing and line length.
3. **Consistency**: Unified colors, spacing, and typography throughout.
4. **Performance**: Minimal styling, no heavy animations or images.
5. **Security**: Ensuring integrity and protection against supply chain attacks.

**Medium Priority**

6. **Spacing**: Clear and balanced margins and padding, adaptable to mobile and desktop.
7. **Intuitiveness**: Elements like buttons and links are clearly identifiable.

**Low Priority (Out of Scope)**

- Complex animations or interactions
- Advanced UI components like modals, carousels, or dropdowns
- Layout systems

### CSS Variable Definitions

```css
:root {
  /* Typography */
  --font-family: system-ui, sans-serif;
  --font-size: 1rem;
  --line-height: 1.6;

  /* Colors: maximum contrast (WCAG AAA) */
  --color-text: #000;
  --color-bg: #fff;
  --color-link: #0055cc;
  --color-border: #767676;

  /* Layout */
  --main-width: 72rem;
  --article-width: 65ch;
}
```

### IDE Support Recommendation

Consider using built-in IDE features for CSS variable autocompletion in popular editors like VSCode, without requiring additional plugins.
