# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Santiment Academy is a Gatsby-powered static documentation site for the Santiment crypto analytics platform, published at https://academy.santiment.net. It contains 325+ Markdown articles across 15+ categories covering metrics, API documentation, product guides, and educational content.

## Commands

```bash
yarn                # Install dependencies (runs patch-package + webkit postinstall)
yarn start          # Start dev server at http://localhost:8000
yarn build          # Create production build in /public
yarn clean          # Clear Gatsby cache (.cache and public/)
yarn format         # Run Prettier on src/**/*.{js,jsx}
yarn serve          # Serve the production build locally
```

Requires Node 14 or 16 (`nvm use 16`). No test suite is configured.

To regenerate the LLM documentation index:
```bash
pip install pyyaml && python scripts/generate_llms_txt.py
```

## Architecture

**Static site generation**: Gatsby 2.x with React 16.x. Markdown files in `src/docs/` are transformed via `gatsby-transformer-remark` and GraphQL, then rendered using `src/templates/article.js`.

**Page creation pipeline** (`gatsby-node.js`):
1. `onCreateNode` — creates slugs from file paths and extracts Git-based last-updated timestamps
2. `createPages` — queries all MarkdownRemark nodes and generates pages using `src/templates/article.js`
3. `onCreateWebpackConfig` — adds the Svelte loader and the `webkit` alias

**Navigation**: Centralized in `src/docs/navigation.js`. Defines category groups (GUIDES, REFERENCES, RESOURCES, GETTING_STARTED), each containing articles with a `slug` and `title`. The Sidebar component consumes these definitions to render the navigation tree. To add an article to the sidebar, add it to the appropriate category array in this file.

**Svelte widgets**: `svelte-widgets/` is a separate Vite/Svelte 5 project that builds web components (AI chat button and input). These are loaded into the Gatsby site as custom elements.

## Content Authoring

Articles live in `src/docs/<category>/` as `.md` files (or `<slug>/index.md` for articles with images). Every article requires YAML frontmatter:

```yaml
---
title: Article Title
description: SEO description
author: Author Name    # Must match an entry in src/docs/people.js
date: YYYY-MM-DD
---
```

Available custom Markdown components:
- `<Resource title="...">Markdown</Resource>` — styled callout block
- `<Notebox type="note|pin|hand">Markdown</Notebox>` — contextual note box
- `<Details>` — collapsible section
- To disable automatic image bordering, append `noborder` to the alt text, e.g., `![noborder](image.png)`

H2 headings automatically generate the in-article quick navigation (table of contents).

## Key Files

- `gatsby-config.js` — plugins, site metadata, and Algolia search configuration
- `gatsby-node.js` — page generation, redirects, and webpack configuration
- `src/docs/navigation.js` — sidebar navigation structure (categories and article lists)
- `src/docs/people.js` — author profiles (name, image, description)
- `src/templates/article.js` — article page template
- `src/components/layout.js` — main layout wrapper (header, sidebar, footer)
- `src/utils/docs.js` — `titleToSlug()` converts navigation titles to filesystem paths

## Code Style

Enforced by Prettier: single quotes, no semicolons, 2-space indentation, trailing commas in ES5 positions, and LF line endings. Components use CSS Modules (`.module.scss`). Responsive breakpoints are handled via the `react-sizes` HOC (`withSizes`).

## GraphQL / API

Apollo Client connects to `api.santiment.net/graphql` (or `api-stage` on staging). The backend URL is detected from `window.location.hostname`, so no environment variable is needed for standard development or production. The `BACKEND_URL` environment variable is available as an override.
