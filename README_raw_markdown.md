# Raw Markdown File Access

This Gatsby site now serves both HTML versions of the documentation (as before) and raw markdown files for programmatic access.

## How it works

During the build process (`gatsby build`), all markdown files from `src/docs/` are automatically copied to `static/docs/` and then to `public/docs/` in the final build.

## Usage

For any page that exists as HTML, you can now access the raw markdown source by adding `/docs/` and `.md` to the path:

### Examples

- **HTML version**: `https://academy.santiment.net/santiment-queries/api-access/`
- **Raw markdown**: `https://academy.santiment.net/docs/santiment-queries/api-access/index.md`

- **HTML version**: `https://academy.santiment.net/metrics/nvt/`  
- **Raw markdown**: `https://academy.santiment.net/docs/metrics/nvt/index.md`

### Pattern

```
HTML URL:     /{path}/
Markdown URL: /docs/{path}/index.md
```

## Manual Update

During development, you can manually update the raw markdown files by running:

```bash
npm run copy-markdown
```

## Implementation Details

- **Script**: `scripts/copy-markdown.js` - Recursively copies all `.md` files from `src/docs/` to `static/docs/`
- **Build Integration**: Added to `gatsby-node.js` in the `onPostBuild` hook
- **NPM Script**: `copy-markdown` command added to `package.json`

This allows users to programmatically access the raw markdown content for automation, parsing, or any other use case that requires the source markdown rather than the rendered HTML. 