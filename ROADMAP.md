# SWG Theme CLI Roadmap

The SWG Theme CLI is the official command-line tool for developing, validating, packaging and publishing SWG Themes.

Its primary goals are:

- Improve the developer experience.
- Validate themes before importing them into SWG.
- Package themes for distribution.
- Standardize all SWG Themes.
- Serve as the reference implementation of the SWG Theme Specification.

---

# Sprint 1 — Theme Validator ✅

Current status.

## CLI

```bash
node bin/swg.mjs validate
```

## Validate

- Directory structure
- Configuration files
- Layouts
- Templates
- Documentation

Result:

```text
✔ Theme is SWG Ready.
```

---

# Sprint 2 — Extended Validation

Improve validation quality.

## Environment

Validate:

- Node.js version
- Astro version
- npm version

---

## theme.json

Validate:

- name
- description
- version
- framework
- author
- license
- preview

---

## package.json

Validate:

- scripts
- dependencies
- Astro version

---

## Templates

Validate:

- required templates
- optional templates

---

## Layouts

Validate:

- BaseLayout exists
- Required slots

---

## Components

Validate:

Layout

- Header
- Footer
- Navigation

Sections

- Hero
- CTA
- FAQ
- Benefits Grid

UI

- Button
- Card
- Pagination

---

## Documentation

Validate:

- README
- Installation
- Directory Structure
- License

---

## Assets

Validate:

- preview image
- favicon
- logo (optional)

---

# Sprint 3 — Doctor

New command:

```bash
node bin/swg.mjs doctor
```

Checks:

- Git installed
- Git configured
- Node.js
- npm
- Astro
- SSH
- Theme directory
- Required tools

Output:

```text
✔ Development environment ready.
```

---

# Sprint 4 — Theme Packager

New command:

```bash
node bin/swg.mjs package
```

Steps:

1. Validate theme.
2. Run Astro build.
3. Remove development files.
4. Remove node_modules.
5. Remove src/pages.
6. Generate manifest.
7. Create ZIP archive.

Output:

```text
dist/

my-theme-1.0.0.zip
```

---

# Sprint 5 — Theme Converter

New command:

```bash
node bin/swg.mjs convert
```

Convert an existing Astro theme into an SWG Theme.

Features:

- Analyze project
- Detect layouts
- Detect pages
- Detect components
- Detect assets
- Generate templates
- Generate theme.json
- Generate preview

---

# Sprint 6 — Theme Creator

New command:

```bash
node bin/swg.mjs create
```

Create a new theme from the official starter.

Interactive wizard:

```text
Theme name

Framework

Tailwind
Bootstrap
None

Author

License
```

Result:

```
my-theme/
```

Ready for development.

---

# Sprint 7 — Theme Preview

New command:

```bash
node bin/swg.mjs preview
```

Generate a preview website using demo content.

Output:

```
preview/
```

---

# Sprint 8 — Theme Publish

New command:

```bash
node bin/swg.mjs publish
```

Publish a theme to the SWG Marketplace.

Steps:

- Validate
- Package
- Upload
- Verify
- Publish

---

# Sprint 9 — AI Theme Generator

New command:

```bash
node bin/swg.mjs ai
```

Generate or improve themes using AI.

Examples:

```bash
swg ai create
```

```text
Create a documentation theme using Tailwind CSS.
```

---

```bash
swg ai improve
```

```text
Improve the homepage hero section.
```

---

```bash
swg ai convert
```

```text
Convert this Bootstrap theme to Tailwind.
```

---

# Sprint 10 — CI/CD

GitHub Actions.

Automatically:

- Validate
- Build
- Package
- Publish release

on every tag.

---

# Final CLI

```bash
node bin/swg.mjs validate
node bin/swg.mjs doctor
node bin/swg.mjs package
node bin/swg.mjs convert
node bin/swg.mjs create
node bin/swg.mjs preview
node bin/swg.mjs publish
node bin/swg.mjs ai
```

---

# Design Principles

The SWG Theme CLI follows the same principles as Static Website Generator.

- Small, focused commands.
- Convention over configuration.
- Validate early.
- One official Theme Specification.
- Framework agnostic.
- Astro remains responsible for rendering.
- SWG remains responsible for content and routing.

The CLI serves as the official developer tool for every SWG Theme and is the reference implementation of the SWG Theme Specification.