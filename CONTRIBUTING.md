# Contributing

Thank you for contributing to the **Static Website Generator (SWG) Theme Starter**.

Our goal is to provide a clean, modern and maintainable Astro starter that serves as the foundation for all SWG themes.

Before opening a Pull Request, please read the guidelines below.

---

# Philosophy

SWG themes should be:

- Simple
- Predictable
- Easy to understand
- Easy to extend
- Easy to maintain

When in doubt:

> Prefer simplicity over cleverness.

---

# Architecture

The project follows a simple structure.

```
src/

├── assets/
├── components/
│
│   ├── forms/
│   ├── layout/
│   ├── marketing/
│   ├── navigation/
│   └── sections/
│
├── layouts/
├── pages/
├── styles/
└── templates/
```

## Layouts

Layouts only contain the HTML document.

A layout should never contain:

- Header
- Footer
- Navigation
- Sections

Example:

```
<html>
<head>
<body>

<slot />

</body>
</html>
```

---

## Templates

Templates define page structure.

Example:

```
Homepage

↓

Header

↓

Hero

↓

Features

↓

FAQ

↓

Footer
```

Templates should remain easy to read.

---

## Sections

Sections represent large content blocks.

Examples:

- Hero
- FAQ
- CTA
- Features Grid
- Benefits Grid

A section may use multiple components internally.

---

## Components

Components are reusable UI elements.

Examples:

- Button
- Card
- Container
- Navigation
- CodeBlock

Avoid large business logic inside components.

---

# Styling

The starter uses:

- Tailwind CSS
- Minimal custom CSS

Keep `base.css` as small as possible.

Do **not** recreate Tailwind utilities in CSS.

---

# Icons

Use **Lucide Icons** only.

Do not use:

- Emoji
- Bootstrap Icons
- Font Awesome
- Heroicons

Lucide is the official icon library for SWG.

---

# UI Guidelines

The default theme should remain:

- Clean
- Modern
- Minimal
- Professional

Avoid:

- Heavy gradients
- Glassmorphism everywhere
- Excessive animations
- Decorative effects

Whitespace is preferred over visual noise.

---

# Accessibility

Every contribution should consider accessibility.

Use:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper heading hierarchy
- Sufficient color contrast

---

# Responsive Design

All components should work on:

- Mobile
- Tablet
- Desktop

Always design mobile-first.

---

# Code Style

Keep components small.

Prefer:

```
Component

↓

Small helper components
```

over large monolithic files.

---

# Validation

Before committing, always run:

```bash
npm run validate
```

Verify the project builds successfully:

```bash
npm run build
```

---

# Packaging

Create a distributable theme package using:

```bash
npm run package
```

---

# Pull Requests

Please keep pull requests focused.

Small improvements are preferred over large unrelated changes.

Include:

- Clear description
- Screenshots (if UI changes)
- Motivation

---

# Design Principles

We value:

- Consistency
- Simplicity
- Readability
- Maintainability

The starter should feel like a standard Astro project.

Avoid introducing SWG-specific complexity unless it clearly benefits every theme.

---

Thank you for helping improve the SWG Theme Starter.