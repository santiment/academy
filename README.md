![](./src/images/academy.png)

This is the source for [**Santiment Technical Documentation site**](academy.santiment.net)

## Running locally

If you have yarn you can run the app simply:

```bash
yarn
yarn start
```

This is going to run the app on port 8000, so [`localhost:8000`](http://localhost:8000) should be accessible.

## How to add an article

Basically, you can add `.md` (Markdown) file in `src/docs/test.md` and it will be available at `academy.santiment.net/test` (locally: `localhost:8000/metrics`)
Also you can put images there, but much better to serve them somewhere.

## Add an article into navigation

If you want to see article not only by direct link, choose category and block for article, because we have a special structure for academy site.
Categories and blocks are available in `src/docs/navigation.js`

Example: you want to add `Transaction Volume` article.
You should choose: `METRICS` category and `onchain` block, add `"Transaction Volume"` to `articles` array. After that add markdown file `transaction-volume.md` to `src/docs/metrics/on-chain/`.

If you can't find appropriate category and block for your article, pls, add them in the same way as existing.
If your article is the first in a block - make sure, that `.md` file for category` and for block are existing. If not, please create them too with a summary and link to your article inside. See existing examples in `Metrics` category.


### Metadata
A metadata block should be in a yaml notation directly in markdown file.

Each article should contain a **title** in its metadata. The title is used to set-up the html title.
Please, update **date** field, when you refactor your article.
Note, that we have `src/docs/people.js` file, that contain **author** name, image, his position (description). (In future - link to Sanbase profile).
If you didn't find author name in that file, pls, add info about him/her.

Here's an example of a metadata block inside markdown file:

```yaml
---
title: Daily active addresses metric
author: Tzanko Matev
date: 2019-01-01
---

## Some title in article

The number of distinct addresses that ...
```

Note the three dashes before and after metadata. *Don't forget to put them there*.

