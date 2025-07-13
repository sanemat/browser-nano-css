## Browser Nano CSS Design Template

### Goals

- **Mobile-first**: Looks good on phones and tablets first, then larger screens.
- **Lightweight**: Very small file size, fast loading.
- **Easy to Use**: Just add one CSS file from a CDN. No complicated setup.
- **Customizable**: Change basic styles easily using CSS variables.
- **Simple HTML**: Use basic HTML tags without adding many classes.
- **Security-Focused**: Ensures integrity and trustworthiness of distributed files.

### Constraints

- **Browser Compatibility**: Supports modern browsers:
  - Mobile: iPhone Safari, Android Chrome, Android Firefox
  - Desktop: Chrome, Safari, Firefox
- **Minimal CSS features**: Uses only standard, widely-supported CSS features (basic selectors, CSS variables, simple media queries).
- **Size Limit**: Aims for less than 2KB compressed CSS size.
- **Not Optimized for Unused CSS Removal**: `browser-nano-css` is not designed for automated CSS reduction tools like tree-shaking or content-based purging. Users should include the full CSS file to ensure proper styling.

#### Design Philosophy

- **Respect browser and OS defaults, clarify intent**
  We stay close to the native look and behavior of modern browsers and devices.
  This makes the design feel familiar, lightweight, and fast.
  We allow natural differences between environments — for example, tap vs. click, or hover vs. no hover — because these match user expectations.
  But when a default may cause confusion, reduce readability, or break layout consistency, we write it clearly to show the intent.

- **Explicit over Implicit**
  Important styles (like spacing, link visibility, or focus outlines) are written explicitly.
  This helps with readability, consistent layout across browsers, and easier customization.
  Writing styles clearly also makes the CSS easier to understand and trust.

> In short: we follow browser defaults where it makes sense, allow natural differences across devices, and declare what truly matters.

- **Minimal Utility Classes**

  We include almost no utility classes by default.
  This is on purpose — to keep the CSS small, readable, and flexible.
  Instead of learning many class names, users are encouraged to write their own CSS for layout and styling.

  We only include structural helpers like `.container` and `.flex`,
  and accessibility helpers like `.visually-hidden` and `.focusable:focus`.

### Design Rule Priorities

**High Priority**

1. **Consistency**: Unified colors, spacing, and typography throughout.
2. **Accessibility**: High contrast, readable font size, and screen reader compatibility.
3. **Readability**: Clear font, appropriate line spacing, and length.
4. **Performance**: Minimal styling, no heavy animations or images.
5. **Security**: Ensuring integrity and protection against supply chain attacks.

**Medium Priority**

6. **Spacing**: Clear and balanced margins and padding, adaptable to mobile and desktop.
7. **Intuitiveness**: Elements like buttons and links clearly identifiable and easy to interact with.

**Low Priority (Out of Scope)**

- Complex animations or interactions
- Advanced UI components like modals, carousels, or dropdowns

### Out of Scope (Things We Will Not Do)

- **Complex JavaScript**: No JavaScript included. Only HTML and CSS.
- **Advanced Components**: No complex UI elements like modals, carousels, or dropdowns.
- **Full CSS Reset**: Only minimal resets (box-sizing and margins/padding reset).
- **Old Browser Support**: Will not support older browsers such as Internet Explorer or outdated mobile browsers.
- **Extensive Customization**: Advanced customization options (like theming systems) will not be provided, just simple CSS variable overrides.

### CSS Variable Definitions for Developer Experience

To enhance developer experience and provide clarity:

```css
:root {
  /* Typography */
  --font-family-base: system-ui, sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.5;

  /* Colors: Base */
  --color-text: #333;
  --color-background: #fff;
  --color-link: #0066ff;

  /* Colors: UI element */
  --color-border: #ccc;
  --color-focus-ring: var(--color-link);

  /* Spacing */
  --spacing-small: 0.5rem;
  --spacing-medium: 1rem;

  /* Radius */
  --border-radius: 4px;
}
```

### IDE Support Recommendation

Consider using built-in IDE features for CSS variable autocompletion in popular editors like VSCode, without requiring additional plugins.
