# Browser Nano CSS

> Write correct HTML. Get a usable, readable screen on mobile. Handle your own layout. Under 2KB.

Browser Nano CSS is a lightweight, mobile-first, classless CSS library. It styles standard HTML elements directly — no classes needed. Bold, high-contrast typography makes it readable in sunlight and accessible by default.

## Features

- **Classless** – No utility classes. Write semantic HTML and it looks good automatically.
- **Bold/High-contrast** – Maximum contrast (WCAG AAA) for readability and accessibility.
- **Structural HTML** – `<header>`, `<main>`, `<article>`, `<footer>` get meaningful styles based on their position in the document.
- **Dark mode** – Automatic via `prefers-color-scheme`. No configuration needed.
- **Under 2KB gzipped** – Fast loading, no dependencies.
- **Customizable** – Uses CSS variables for easy overrides.
- **Modern browser support** – Works in Chrome, Safari, Firefox, and mobile browsers.

## Installation

### Using a CDN

Add this line to your HTML to use Browser Nano CSS:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/browser-nano-css/dist/browser-nano.min.css"
/>
```

### Using npm

Install with:

```sh
npm install browser-nano-css
```

Then import it in your project:

```css
@import "browser-nano-css/dist/browser-nano.min.css";
```

## Usage

Just write correct, semantic HTML. No classes required:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="browser-nano.min.css" />
  </head>
  <body>
    <header>
      <h1>My Site</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <h2>Hello</h2>
        <p>Write correct HTML. Get a readable page.</p>
      </article>
    </main>
    <footer><p>&copy; 2025 My Site</p></footer>
  </body>
</html>
```

## ❌ Not Compatible with CSS Optimization Tools

Browser Nano CSS applies styles directly to HTML elements (e.g., `button {}` instead of `.btn {}`).
Because of this, tools like **PurgeCSS or CSS tree-shaking may remove important styles** if used without proper configuration.

📌 **Recommendation:** Include the full CSS file without using PurgeCSS or similar optimization tools.

## License

This project is licensed under the MIT License.

## Design

[design doc](./design.md)
