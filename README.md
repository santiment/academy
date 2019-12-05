![](./src/images/academy.png)

This is the source for [**Santiment Technical Documentation site**](academy.santiment.net)

## Running locally

If you have yarn you can run the app simply:

```bash
yarn
yarn start
```

This is going to run the app on port 8000, so [`localhost:8000`](http://localhost:8000) should be accessible.

---

## How to add an article

Basically, you can add `.md` (Markdown) file in `src/docs/test.md` or put `index.md` to `src/docs/test` folder.
It will be available at `academy.santiment.net/test` (locally: `localhost:8000/test`)
Also you can put images under thet folder

## Add an article into navigation sidebar

If you want to see article not only by direct link, choose category for article, (example: "Metrics")
Categories are available in `src/docs/navigation.js`

Example: you want to add `Transaction Volume` article.
You should choose: `METRICS` category, add `"Transaction Volume"` to `articles` array.
After that add markdown file `transaction-volume.md` (or transaction-volume/index.md) to `src/docs/metrics/`.

*If you can't find appropriate category for your article, pls, write to @Nastya or someone from frontend. We will discuss it and help with icon*

---

### Metadata
A metadata block should be in a yaml notation directly in markdown file.

Each article should contain a **title** and **description** in its metadata. The title is used to set-up the html title.
Please, update **date** field, when you refactor your article.
Note, that we have `src/docs/people.js` file, that contain **author** name, image, his position (description). (In future - link to Sanbase profile).
If you didn't find author name in that file, pls, add info about him/her.

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

Note the three dashes before and after metadata. *Don't forget to put them there*.

`h2` for headings in article will be in the fast navigation through the article
