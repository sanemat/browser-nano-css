# Browser Nano CSS

## About

🚧 This project is still in development. For now, you can try [Pico CSS](https://picocss.com/) or [MVP.css](https://andybrewer.github.io/mvp/). 🚧

Browser Nano CSS is a lightweight, mobile-first CSS template. It provides simple and clean styles for default HTML elements without requiring extra classes or setup.

## Features

- **Minimal and fast** – Small file size for quick loading.
- **No dependencies** – Works with just a single CSS file.
- **Customizable** – Uses CSS variables for easy styling.
- **Modern browser support** – Works in Chrome, Safari, Firefox, and mobile browsers.

## Installation

### **Using a CDN**

Add this line to your HTML to use Browser Nano CSS:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/browser-nano-css/dist/browser-nano.min.css"
/>
```

### **Using npm**

Install with:

```sh
npm install browser-nano-css
```

Then import it in your project:

```css
@import "browser-nano-css/dist/browser-nano.min.css";
```

## ❌ Not Compatible with CSS Optimization Tools

Browser Nano CSS applies styles directly to HTML elements (e.g., `button {}` instead of `.btn {}`).
Because of this, tools like **PurgeCSS or CSS tree-shaking may remove important styles** if used without proper configuration.

📌 **Recommendation:** Include the full CSS file without using PurgeCSS or similar optimization tools. If you need tree-shaking support, consider another framework that relies on utility classes.

## License

This project is licensed under the MIT License.

## Design

[design doc](./design.md)
