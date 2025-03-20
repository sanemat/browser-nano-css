## Browser Nano CSS Design Template

### Goals
- **Mobile-first**: Looks good on phones and tablets first, then larger screens.
- **Lightweight**: Very small file size, fast loading.
- **Easy to Use**: Just add one CSS file from a CDN. No complicated setup.
- **Customizable**: Change basic styles easily using CSS variables.
- **Simple HTML**: Use basic HTML tags without adding many classes.

### Constraints
- **Browser Compatibility**: Supports modern browsers:
  - Mobile: iPhone Safari, Android Chrome, Android Firefox
  - Desktop: Chrome, Safari, Firefox
- **Minimal CSS features**: Uses only standard, widely-supported CSS features (basic selectors, CSS variables, simple media queries).
- **Size Limit**: Aims for less than 2KB compressed CSS size.

### Design Rule Priorities

**High Priority**
1. **Consistency**: Unified colors, spacing, and typography throughout.
2. **Accessibility**: High contrast, readable font size, and screen reader compatibility.
3. **Readability**: Clear font, appropriate line spacing, and length.
4. **Performance**: Minimal styling, no heavy animations or images.

**Medium Priority**
5. **Spacing**: Clear and balanced margins and padding, adaptable to mobile and desktop.
6. **Intuitiveness**: Elements like buttons and links clearly identifiable and easy to interact with.

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
  /* Colors */
  --color-primary: #0066ff;
  --color-text: #333333;

  /* Spacing */
  --spacing-small: 0.5rem;
  --spacing-medium: 1rem;
}

```

### IDE Support Recommendation

Consider using built-in IDE features for CSS variable autocompletion in popular editors like VSCode, without requiring additional plugins.

