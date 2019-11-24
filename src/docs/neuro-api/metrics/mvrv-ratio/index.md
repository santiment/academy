---
title: Neuro API - MVRV Ratio
author: Santiment Team
---

Fetch the MVRV ratio for a project, grouped by interval. Projects are
referred to by a unique identifier (slug).

To find a more in-depth explanation about Realized Value and the MVRV
ratio metric in general, please check [this
article](/sangraphs/metrics/mvrv-ratio).

This metric is calculated daily, so the interval should represent whole
days.

Grouping by interval works by taking the mean of all daily results the
interval.

[**Run in
explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20mvrvRatio(from%3A%20%222019-05-09T11%3A25%3A04.894Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22maker%22%2C%20to%3A%20%222019-06-23T11%3A25%3A04.894Z%22)%20%7B%0A%20%20%20%20ratio%0A%20%20%20%20datetime%0A%20%20%7D%0A%7D%0A)

```js
{
  mvrvRatio(from: "2019-05-09T11:25:04.894Z", interval: "1d", slug: "maker", to: "2019-06-23T11:25:04.894Z") {
    ratio
    datetime
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{mvrvRatio(from:\"2019-05-09T11:25:04.894Z\",interval:\"1d\",slug:\"maker\",to:\"2019-06-23T11:25:04.894Z\"){ratio,datetime}}" }' \
  https://api.santiment.net/graphql
```
