# How to write Academy articles

## High-level file structure

![File Structure](./file_structure.png)

All pages seen on the website are located inside src/docs/.
For example all metrics articles are located inside src/docs/metrics/, pages about
Sanbase are inside src/docs/sanbase/, etc.

This structure is not extremely important for the visualization, but one should keep
discipline when deciding where to put a new article. It should be created inside the
most appropriate directory, or if such directory is missing - crate a new directory.

## Article-level file structure

When creating a new article, do the following steps:

- Decide on the article title. For the purpose of the example let's choose 'Trading and Transaction Volume'
- Locate the most appropriate directory where the article
- Create a new folder named `trading-and-transaction-volume` inside it. This directory name is important
  and should reflect the name of the article itself. Usually it is the `snake-case` version of the title.
  This directory name is important as we'll use it when we create links to that article.
- Create an `index.md` file inside that directory. The name is important. This will be the main/index page of
  the article.

## Contents of the index.md file

### Header

Always start with the header structure, which looks like this:

```
---
title: Trading and Transaction Volume
author: Santiment Team
date: 2025-05-13
---
```

![Header fields](./title_and_date.jpg)

The `title` and `date` fields are displayed on the article page, as seen in the screenshot.

The `title` field will be transformed to an h1 HTML tag in the final page.
One page should have one h1 tag, holding the title. In Markdown this is usually represented
as a line starting with `#`, like:

`# Trading and Transaction Volume`.

As this is done automatically by us by defining the title, we should **not** use `# title` anywhere in the article thereafter.

Do not define the title second time with markdown!

### Youtube Video

If some video from our channel needs to be added, go to the youtube video and copy the `iframe`
that is produced when you click Share->Embed
![noborder](./embed_youtube_video_1.png)

Paste the copied iframe right after the header definition, if you wish to have the video right after the title on the final page.

### Subsections

As our title is defined in the header, all main subsections are defined as:

```
## Title of subsection 1
```

These subsections are shown as h2 titles in the HTML (smaller titles than the main title).
They are also shown in the right sidebar/map of the article.

![noborder](./subsections.png)

You can use `###`, `####`, etc. to further nest subsections.

You should be consistent -- all top-level subsections should be `##` and the subsections of these subsections should
be `###`, and so on.

### Links and images

#### Links

Markdown link syntax is: `[Link Text](Link URL)`. The link URL can be:

- External (link to sanbase) -- the full URL must be provided. Example: `[Sanbase](https://app.santment.net)`
- Internal -- point to some other page of Academy. These paths are relative. Relative paths allow you to link to stage
  pages on stage and to prod pages on prod. Do not use full paths when linking to other Academy pages!

  Example: `[NVT article](/resources/metrics/nvt)`. The root of the relative path is the `/src/docs/` directory.

  Standard relative path syntax works: `./` points to the current directory and `../` points to the parent directory.

The same rules apply to linking from other pages to your new article page.
If our example `Trading and Transaction Volume` article is located in the `Education and Use Cases` directory, then
the following syntax will create a link to our article: `[Trading and Transaction Volume](/guides/education-and-use-cases/trading-and-transaction-volume/)`

#### Images

Markdown image syntax is `![noborder](Image path)`.

In almost all cases the image file is located in the same directory as the `index.md` file. If the image `img.png` is located
in the same directory, then the following syntax will add it `![noborder](./img.png)`. The `./` is the above-mentioned way to point
to the current directory.

Note: The `noborder` is Academy-specific and it removes borders from images. By default we prefer to not have borders.

Prefer adding the images to the directory of your article instead of using images hosted on some other server.

## Add the article to the navigation

The final thing we need to do is to put our new article in the left navigation bar in the appropriate place.

To do this, open the `/src/docs/navigation.js` file.

Locate the JS variable that points to the parent directory that holds your article.

Existing variables are: `export const GETTING_STARTED`, `export const REFERENCES`, `export const GUIDES`, etc.

These variables hold a dictionary with a few notable key-value pairs.

- `title: 'Education and Use cases'` - The title of the group of links in the sidebar.
- `articles: [ ... ]` - Holds the list of articles in that group. Your task is to add the article here.

There are two ways of adding articles. Follow the same convention as the rest of the articles defined in that group.

### Option 1

```js
{
  slug: 'alerts on Sanbase',
  title: 'Sanbase Alerts - Age Consumed example',
}
```

- `slug` refers to the name of the directory of the article. When the `slug` is lowercased and spaces are replaced with `-` it must match the name of the directory you created.
- `title` shows how the article will be named in the sidebar. The title can be different form the slug.

### Option 2

If the slug and title match, then you can just write the title as a string: `Trading and Transaction Volume`

![noborder](./navigation.png)
