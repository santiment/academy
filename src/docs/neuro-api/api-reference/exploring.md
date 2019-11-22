---
title: "API Reference"
author: "Santiment team"
date: "2019-09-20"
---

# Exploring the API

Santiment's API is used for one thing: fetching data. This leads to two main questions:

1. What data is available?
2. For which assets is this data available?

The assets are represented by the `Project` GraphQL type and graphql requests containing `project` in the name usually work with this type.

> Note:
>
> If you open the [graphql explorer](https://api.santiment.net/graphiql) and press on `Docs` on the top right corner you can explore all the available queries, mutations, types and some documentation around them.

But before start exploring the API we need to define the following terms:

- **query**: The term refers to the [GraphQL query](https://graphql.org/learn/queries/) and means exactly that - a read operation. In the following example `devActivity` is the query:

```js
{
  devActivity(
    slug: "santiment"
    from: "2019-01-01T00:00:00Z"
    to: "2019-02-01T00:00:00Z"
    interval: "1d") {
      datetime
      activity
    }
}
```

- **metric**: A term with a specific meaning in the context of Santiment's API. A metric is a set of data points with a specific meaning. For example the `daily_active_addresses` metric is represented by pairss of date `D` and a number `N` with the following meaning: The count of the unique addresses `N` that participated in at least one transaction during the day `D`.
