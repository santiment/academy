---
title: Asset
author: Santiment Team
---

An **asset** refers to any cryptocurrency or crypto token that can be associated with a price. Examples of assets include Bitcoin, Ethereum, and Santiment.

The terms 'asset' and 'project' are often used interchangeably in most contexts.

## Availability

There are several methods to determine which assets are supported by the products within the Santiment platform.

### [Sanpy](https://github.com/santiment/sanpy)

To use Sanpy, you need to import the `san` module. After importing the module, you can use the `get` method to retrieve data. Here's how you can do it:

```python
import san
san.get("projects/all")
```

### [SanAPI](https://api.santiment.net)

The GraphQL request below retrieves a list of all assets:

```graphql-explorer
{
  allProjects {
    name
    slug
  }
}
```

You can execute this query using `curl` as shown below:

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "{ allProjects { name slug }}" }' \
  https://api.santiment.net/graphql
```

### [Sansheets](https://sheets.santiment.net/)

After installing the plugin, you can utilize the `=SAN_ALL_PROJECTS()` function to retrieve a comprehensive list of all projects.
