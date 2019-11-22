---
title: Neuro API - Token Circulation
author: Santiment Team
---

Gets the total amount of tokens that have been sent at least once during
each day for given time period. Projects are referred to by a unique
identifier (slug).

This metric is calculated daily, so the interval should be selected
accordingly.

[**Run in
explorer**](https://api.santiment.net/graphiql?query=query%7BtokenCirculation(from%3A%20%222019-05-10T00%3A00%3A00.000Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22ethereum%22%2C%20to%3A%20%222019-06-23T00%3A00%3A00.000Z%22)%20%7B%0A%20%20datetime%0A%20%20tokenCirculation%0A%7D%7D)

```js
{
tokenCirculation(from: "2019-05-10T00:00:00.000Z", interval: "1d", slug: "ethereum", to: "2019-06-23T00:00:00.000Z") {
  datetime
  tokenCirculation

}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{tokenCirculation(from:\"2019-05-10T00:00:00.000Z\",interval:\"1d\",slug:\"ethereum\",to:\"2019-06-23T00:00:00.000Z\"){datetime, tokenCirculation}}" }' \
  https://api.santiment.net/graphql
```
