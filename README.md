# SWG Theme

The official Astro Theme Starter for **Static Website Generator (SWG)**.

This repository provides the reference implementation of the SWG Theme Specification.

## Features

- Astro
- Theme specification compliant
- Reusable layouts
- Reusable templates
- Demo content
- Ready for SWG import

## Requirements

- Node.js 20+
- npm

# Directory Structure

The SWG Theme Starter follows a standardized directory structure.

```
swg-theme/

├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── templates/
│
├── astro.config.mjs
├── package.json
├── theme.json
├── tsconfig.json
└── README.md
```

---

# Directory Reference

## public/

Static files such as:

- images
- icons
- favicon
- fonts

**Required**

---

## src/assets/

Theme assets used during the Astro build.

Examples:

- images
- illustrations
- svg files

**Optional**

---

## src/components/

Reusable Astro components.

Examples:

- Header
- Footer
- Hero
- Button
- Card

**Required**

---

## src/layouts/

Shared page layouts.

Every SWG Theme must provide:

```
BaseLayout.astro
```

**Required**

---

## src/pages/

The Astro entry points used during local theme development.

These files allow the theme to run as a standalone Astro project using:

```bash
npm run dev
```

and

```bash
npm run build
```

During the SWG Theme import process, the original `src/pages/` directory is **not imported**.

Instead, SWG installs its own standardized pages that provide the official routing for:

- Homepage
- Pages
- Blog
- Documentation
- Search
- 404
- RSS (optional)
- Sitemap (optional)

<blockquote>
This guarantees that every imported theme shares the same routing and build pipeline.

</blockquote>

**Required for local development**

**Replaced during SWG import**

---

## src/styles/

Global stylesheets.

Examples:

```
base.css
theme.css
```

**Optional**

---

## src/templates/

Templates render SWG content.

Examples:

```
Homepage.astro
Page.astro

BlogIndex.astro
BlogCategory.astro
BlogArticle.astro

DocsIndex.astro
DocsCategory.astro
DocsArticle.astro
```

**Required**

---

# Root Files

## astro.config.mjs

Astro configuration.

**Required**

---

## package.json

Node dependencies and scripts.

**Required**

---

## theme.json

SWG Theme metadata.

**Required**

---

## tsconfig.json

TypeScript configuration.

**Required**

---

## README.md

Theme documentation.

Highly recommended.

---

# Required Files

The following files are required by every SWG Theme.

```
astro.config.mjs
package.json
theme.json
src/layouts/BaseLayout.astro
src/templates/Homepage.astro
src/templates/Page.astro
src/templates/BlogIndex.astro
src/templates/BlogCategory.astro
src/templates/BlogArticle.astro
src/templates/DocsIndex.astro
src/templates/DocsCategory.astro
src/templates/DocsArticle.astro
```

---

# Optional Directories

```
src/assets/
src/styles/
public/
```

These directories may be omitted if not used by the theme.

## Installation

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

If you are working on a remote server:

```bash
npm run dev -- --host
```

or use an SSH tunnel:

```bash
ssh -L 4321:localhost:4321 user@server
```

Open:

```
http://localhost:4321
```

## Build

```bash
npm run build
```

## License

MIT
