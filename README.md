This is the source for [**Santiment Knowledge Base site**](https://academy.santiment.net)

## Contributing

### Running locally
  
If you have [yarn](https://classic.yarnpkg.com/en/docs/install/) you can run the app simply:

```bash
yarn
yarn start
```

This is going to run the app on port 8000, so [`localhost:8000`](http://localhost:8000) should be accessible.


### How to add an article

Basically, you can add `.md` (Markdown) file in `src/docs/test.md` or put `index.md` to `src/docs/test` folder.
It will be available at `academy.santiment.net/test` (locally: `localhost:8000/test`)
Also you can put images under that folder

### Custom Components

- Available custom components: `<Resource title="title">Markdown Content</Resource>`, `<Notebox type="note|pin|hand">Markdown Content</Notebox>`
- Disable image automatic bordering: Append `noborder` to image alt, eg: `![noborder](46_connect_wallet_with_mm_sign_v2.png)`

### Add an article into navigation sidebar

If you want to see article not only by direct link, choose category for article, (example: "Metrics")
Categories are available in [`src/docs/navigation.js`](https://github.com/santiment/academy/blob/master/src/docs/navigation.js)

Example: you want to add `Transaction Volume` article.
You should choose: `METRICS` category, add `"Transaction Volume"` to `articles` array.
After that add markdown file `transaction-volume.md` (or transaction-volume/index.md) to `src/docs/metrics/`.

Also, need to add a reference to the article file in category root article (see examples in `src/docs/metrics/index.md`)

> If you can't find appropriate category for your article [write us](mailto:support@santiment.net).

---

### Metadata

A metadata block should be in a yaml notation directly in markdown file.

- Each article should contain a **title** and **description**
- Update **date** field, when you refactor your article.
- **author** name should use existing person from [`src/docs/people.js`](https://github.com/santiment/academy/blob/master/src/docs/people.js). If you use it right - image and person description will appear.

Example of a metadata block inside markdown file:

```yaml
---
title: Daily active addresses metric
description: some description for seo
author: Tzanko Matev
date: 2019-01-01
---
## Some title in article

The number of distinct addresses that ...
```

Note the three dashes before and after metadata. _Don't forget to put them there_.

`h2` for headings in article will be in the fast navigation through the article

---

## Learn More
* [Sanbase](https://app.santiment.net)
* [Insights](https://insights.santiment.net)
* [Sheets](https://sheets.santiment.net)
* [SanR](https://sanr.app)
* [API](https://api.santiment.net)
* [Knowledge Base](https://academy.santiment.net)

## Become a SanDev
We're hiring developers, support people, and product managers all the time. Please check our [open positions](https://santiment.notion.site/Open-positions-f1880de7557b468a80b1465013f311cd)

[Contact us](mailto:jobs@santiment.net)

## Community
Join thousands of members worldwide in our [community server](https://santiment.net/discord).

## Get the Latest News

* [Twitter](https://twitter.com/santimentfeed)
* [Blog](https://insights.santiment.net)
* [Youtube](https://www.youtube.com/channel/UCSzP_Z3MrygWlbLMyrNmMkg)

Any other questions, reach out to us at [support@santiment.net](support@santiment.net). We’d happy to help!
