# Browser Nano CSS — v2 Design

## Philosophy

> Write correct HTML. Get a usable, readable screen on mobile. Handle your own layout. Under 999 bytes.

One strong opinion: **readability on mobile**. We declare colors, font-size, and max-width explicitly — because "readable" is meaningless without owning it. Everything else: we trust the browser.

"Trust the browser" applies only to properties we have not touched. Once we declare a property on an element, we own the consequences — including related properties the browser assumed about our value.

Correct HTML is rewarded with good defaults. No classes needed.

---

## What we do

- Declare colors with WCAG AAA contrast (7:1) as defaults
- Set base font-size to 18px (16px is too small on mobile)
- Set max-width for readable line length (65ch)
- Respect `prefers-color-scheme` automatically
- Style key semantic HTML elements
- Style mobile form UI elements

## What we do NOT do

- Utility classes — none, not even `.visually-hidden`
- Layout — no `.flex`, `.container`, `.grid`
- Context-aware selectors — no `body > header` vs `article > header` distinction
- Font-weight opinions — browser defaults (`bold` for headings) are correct
- `<details>` / `<summary>` — browser default is acceptable
- Component patterns — no modal, card, toast, dropdown
- JavaScript — zero

---

## CSS Variables

Five only. No more.

```css
:root {
  --bg: #fff;
  --text: #000;
  --accent: var(--text);
  --font-size-base: 18px;
  --max-width: 65ch;
}
```

| Variable           | Default       | Purpose                        |
| ------------------ | ------------- | ------------------------------ |
| `--bg`             | `#fff`        | Background color               |
| `--text`           | `#000`        | Text color                     |
| `--accent`         | `var(--text)` | Links and interactive elements |
| `--font-size-base` | `18px`        | Base font size                 |
| `--max-width`      | `65ch`        | Max content width              |

Dark mode hardcodes `--bg: #000` and `--text: #fff`. `--accent` follows `--text` automatically. **If you override `--bg` or `--text`, add your own dark mode rule** — we cannot swap your custom values automatically.

---

## Elements we style

### Document structure

| Element     | What we do                                                      |
| ----------- | --------------------------------------------------------------- |
| `<main>`    | `max-width: var(--max-width)`, centered, `padding-inline: 1rem` |
| `<article>` | `max-width: var(--max-width)`                                   |
| `<nav>`     | Minimal spacing only                                            |

### Typography

| Element               | What we do                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| `<h1>`–`<h6>`         | Size scale. `h5`/`h6` floored at `1em`. `margin-block: 1.5rem 0.5rem`. Weight: browser default. |
| `<p>`, `<ul>`, `<ol>` | `margin-block-end: 1rem`. `line-height` inherited from `body`.                                  |
| `<a>`                 | Underline. Color: `var(--accent)`                                                               |
| `<code>`, `<pre>`     | Monospace, readable, no overflow                                                                |
| `<blockquote>`        | Left border, spacing                                                                            |

### App UI

| Element                             | What we do                                                                                                                                     |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `<button>`                          | Touch-friendly padding, high contrast, cursor, `font-size: var(--font-size-base)`                                                              |
| `<input>`, `<select>`, `<textarea>` | `width: 100%`, border, `font-size: var(--font-size-base)`                                                                                      |
| `<label>`                           | Display block, tap target                                                                                                                      |
| `<fieldset>`                        | Grouping, border                                                                                                                               |
| `<table>`                           | `display: block; overflow-x: auto` — `display: block` is required for `overflow-x` to work on table elements; row/cell formatting is preserved |

---

## Typography

- Font family: `system-ui, sans-serif` — no web fonts, zero network requests
- Base font-size: `18px` — 16px is too small on mobile
- Line-height: `1.6` — readable on mobile
- Font-weight: browser defaults only — we do not override `bold`
- `h5`/`h6` floored at `1em` — smaller than body text breaks mobile readability

---

## Color and contrast

- Default colors (`#000` on `#fff`) pass WCAG AAA (21:1)
- CSS variables allow users to change colors
- If a user changes colors, contrast is their responsibility

---

## Dark mode

Automatic via `prefers-color-scheme: dark`. Hardcodes `--bg: #000` and `--text: #fff` — CSS variables cannot self-reference, so a true swap is not possible. `--accent` follows `--text` automatically — no extra rule needed. No opt-in needed.

> **Customization note:** If you override `--bg` or `--text` with custom colors, you must also add your own `@media (prefers-color-scheme: dark)` block to override them for dark mode.

---

## Size constraint

Under 999 bytes gzipped. Non-negotiable. If we exceed the limit, we cut features — we never raise the limit.

---

## Browser support

- Mobile: iOS Safari, Android Chrome, Android Firefox
- Desktop: Chrome, Safari, Firefox

---

## Out of scope

- JavaScript
- Layout system (`.flex`, `.container`, `.grid`)
- Utility classes of any kind
- Context-aware structural selectors
- `<details>` / `<summary>`
- Component patterns (modal, card, toast, dropdown)

---

## Versioning

- v2 is a clean breaking change (`2.0.0`)
- v1 receives security patches for 6 months, then archived
- No compatibility shims between v1 and v2
