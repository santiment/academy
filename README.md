This is the source for **[Santiment Knowledge Base site](https://academy.santiment.net)**

## Contributing

### Running locally

We use **pnpm** and **Node v22**. To run the app locally:

```bash
pnpm install
pnpm dev

```

This is going to run the app on port **3000**, so [`localhost:3000`](http://localhost:3000) should be accessible.

### How to add an article

We use **MDX** (.mdx) for all content. The routing is file-system based and located in `src/content/docs/` (or `src/docs/`).

- To create a page at `academy.santiment.net/test`, add `src/docs/test.mdx` or `src/docs/test/index.mdx`.
- Images should be placed in the same folder as the article and referenced relatively.

### Sidebar and Navigation

Navigation is **automatic** based on the file structure. There is no longer a `navigation.md` or `navigation.js` file to update.

- **To show an article in the sidebar**: Use `index.mdx` inside a folder. The folder name determines the category.
- **To hide an article (Direct link only)**:
- Name the file something other than `index.mdx` (e.g., `guide.mdx`).
- Or add `sidebar: { hidden: true }` to the MDX frontmatter of an `index.mdx` file.

### Custom Components

- **Available custom components**: `<Resource title="title">Markdown Content</Resource>`, `<Notebox type="note|pin|hand">Markdown Content</Notebox>`
- **Disable image automatic bordering**: Append `noborder` to image alt, eg: `![noborder](image.png)`

### Generate llms.txt

To update the `llms.txt` file (LLM-readable index of all documentation):

```bash
pip install pyyaml
python scripts/generate_llms_txt.py

```

---

### Metadata

A metadata block (Frontmatter) should be in YAML notation directly at the top of the MDX file.

- **title**: Required.
- **description**: Required for SEO.
- **date**: Update this field when you refactor the article.
- **author**: Name should match a key in [`src/docs/people.js`](<https://www.google.com/search?q=%5Bhttps://github.com/santiment/academy/blob/master/src/docs/people.js%5D(https://github.com/santiment/academy/blob/master/src/docs/people.js)>) to display author bio and image.

Example:

```yaml
---
title: Daily active addresses metric
description: The number of distinct addresses that participated in a transfer.
author: Tzanko Matev
date: 2025-12-21
sidebar:
  hidden: false
---
## Some title in article

The number of distinct addresses that ...
```

`h2` (##) headings will be used to generate the fast navigation (Table of Contents) on the right.

---

## Learn More

- [Sanbase](https://app.santiment.net)
- [Insights](https://insights.santiment.net)
- [Sheets](https://sheets.santiment.net)
- [SanR](https://sanr.app)
- [API](https://api.santiment.net)
- [Knowledge Base](https://academy.santiment.net)

## Become a SanDev

We're hiring developers, support people, and product managers all the time. Please check our [open positions](https://santiment.notion.site/Open-positions-f1880de7557b468a80b1465013f311cd)

[Contact us](mailto:jobs@santiment.net)

## Community

Join thousands of members worldwide in our [community server](https://santiment.net/discord).

## Get the Latest News

- [Twitter](https://twitter.com/santimentfeed)
- [Blog](https://insights.santiment.net)
- [Youtube](https://www.youtube.com/channel/UCSzP_Z3MrygWlbLMyrNmMkg)

Any other questions, reach out to us at [support@santiment.net](mailto:support@santiment.net). We’d happy to help!
