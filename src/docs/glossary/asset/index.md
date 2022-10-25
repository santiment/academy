---
title: Asset
author: Santiment Team
---
# Asset

An **asset** is any cryptocurrency or crypto token which can be
associated with a price. Example of assets are Bitcoin, Ethereum and
Santiment.

The terms asset and project are used as synonims in most cases.

## Availability

There are different ways to check which assets are supported by the
products in Santiment's platform.

### [Sanpy](https://github.com/santiment/sanpy)

```python
import san
san.get("projects/all")
```

### [SanAPI](https://api.santiment.net)

The following GraphQL query gives a list of all assets

```graphql
{
  allProjects {
    name
    slug
  }
}
```

You can call it with `curl` like that:

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "{ allProjects { name slug }}" }' \
  https://api.santiment.net/graphql
```

### [Sansheets](https://sheets.santiment.net/)

Once you have intalled the plugin use function `=SAN_ALL_PROJECTS()`
to fetch the list of all projects.
