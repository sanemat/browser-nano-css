# Browser Nano CSS

> Write correct HTML. Get a usable, readable screen on mobile. Handle your own layout. Under 999 bytes.

A lightweight, classless CSS file. Style semantic HTML elements directly — no utility classes, no setup.

## Features

- **Classless** — no classes required, correct HTML is rewarded
- **Mobile-first** — 18px base font, readable line length, touch-friendly controls
- **Dark mode** — automatic via `prefers-color-scheme`, no opt-in needed
- **Tiny** — under 999 bytes gzipped
- **Customizable** — five CSS variables, nothing more

## Installation

### CDN

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/browser-nano-css@2/dist/browser-nano.min.css"
/>
```

### npm

```sh
npm install browser-nano-css
```

```css
@import "browser-nano-css/dist/browser-nano.min.css";
```

## CSS Variables

```css
:root {
  --bg: light-dark(#fff, #000);
  --text: light-dark(#000, #fff);
  --accent: light-dark(#0645d2, #8ab4f8);
  --font-size-base: 18px;
  --max-width: 65ch;
}
```

Override any variable in your own stylesheet:

```css
:root {
  --accent: #0066cc;
}
a:visited {
  color: #551a8b; /* match your theme */
}
```

## What gets styled

- Typography: `h1`–`h6`, `p`, `ul`, `ol`, `a`, `code`, `pre`, `blockquote`
- Structure: `main`, `article`, `nav`
- Forms: `button`, `input` (text-like types), `select`, `textarea`, `label`, `fieldset`
- Table: `overflow-x: auto` for mobile scroll
- Focus: `:focus-visible` keyboard focus indicator using `--accent` — applies to all `<input>` types, not just text-like

## What does NOT get styled

- `header`, `footer`, `aside` — handle your own layout
- No utility classes — not even `.visually-hidden`
- No component patterns — no modal, card, dropdown

## Migration from v1

v2 is a clean breaking change. Remove any utility classes (`.flex`, `.container`, `.visually-hidden`, etc.) from your HTML. Write semantic elements instead. That is the entire migration.

## Not compatible with CSS purging tools

Styles apply directly to HTML elements (`button {}`, not `.btn {}`). PurgeCSS and similar tools will remove needed styles. Include the full CSS file without purging.

## License

MIT

## Design

[design.md](./design.md)
