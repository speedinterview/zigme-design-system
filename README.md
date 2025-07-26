# ZigMe Design System

A shared design foundation for all ZigMe applications across the `*.zigme.in` domain.

## 🎨 What's Included

- **Core Styles**: Complete design tokens and CSS variables
- **Tailwind Config**: Base Tailwind configuration for consistency
- **Typography**: Poppins and Inter font system
- **Color System**: Brand colors with dark/light mode support
- **Component Styles**: Base styling for shadcn/ui components

## 🚀 Quick Start

### 1. Install in your ZigMe app

Copy the design system files to your project or host them centrally.

### 2. Import the core styles

In your app's main CSS file (e.g., `src/index.css`):

```css
/* Import ZigMe Design System first */
@import url('./path/to/zigme-design-system/styles/zigme-core.css');

/* Then add any app-specific styles */
@layer components {
  .app-specific-class {
    /* Your custom styles here */
  }
}
```

### 3. Extend the Tailwind config

In your `tailwind.config.ts`:

```typescript
import { zigmeBaseConfig } from './path/to/zigme-design-system/config/tailwind.config.base.js';

export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  ...zigmeBaseConfig,
  theme: {
    ...zigmeBaseConfig.theme,
    extend: {
      ...zigmeBaseConfig.theme.extend,
      // Add app-specific extensions here
    }
  },
  plugins: [
    ...zigmeBaseConfig.plugins,
    require("tailwindcss-animate"),
    // Add app-specific plugins here
  ],
};
```

### 4. Add fonts to your HTML

Copy the contents of `config/fonts.html` into your `index.html` head section.

## 🎨 Using the Design System

### Colors

Use semantic color tokens instead of hardcoded colors:

```tsx
// ✅ Good - Uses design system tokens
<div className="bg-brand-primary text-primary-foreground">
<div className="text-text-body border-border-subtle">

// ❌ Avoid - Hardcoded colors
<div className="bg-blue-600 text-white">
```

### Typography

Typography classes are automatically applied:

```tsx
<h1>Automatic Poppins font and sizing</h1>
<p className="text-body-lg">Large body text</p>
<p className="text-body-sm">Small body text</p>
```

### Shadows and Effects

```tsx
<div className="shadow-card hover-lift">
  Card with consistent shadow and hover effect
</div>
```

## 🔧 Customization

Each app can extend the design system while maintaining consistency:

```css
/* In your app's CSS */
@layer components {
  .app-button {
    @apply bg-brand-primary text-primary-foreground px-4 py-2 rounded-md;
    /* Add app-specific styling */
  }
}
```

## 📱 Apps Using This System

- **speedinterview.zigme.in** - Interview platform
- **tests.zigme.in** - Testing platform  
- **auth.zigme.in** - Authentication hub
- Add your app here...

## 🎯 Design Principles

1. **Consistency**: Same look and feel across all ZigMe apps
2. **Accessibility**: All colors meet WCAG contrast requirements
3. **Flexibility**: Apps can extend without breaking the foundation
4. **Performance**: Optimized font loading and CSS structure
5. **Maintainability**: Single source of truth for design decisions

## 🔄 Updates

When updating the design system:

1. Update the core files in this package
2. Test across all ZigMe apps
3. Communicate changes to all teams
4. Update version numbers

## 🤝 Contributing

To contribute to the ZigMe design system:

1. Propose changes that benefit all apps
2. Ensure backwards compatibility
3. Test across different apps
4. Update documentation

---

**Built for the ZigMe ecosystem** 🚀