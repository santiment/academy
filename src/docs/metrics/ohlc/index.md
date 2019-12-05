---
title: OHLC metric
author: Santiment Team
---

Fetch open, high, low close price values for a given slug and time
interval. Projects are referred to by a unique identifier (slug).

This metric is calculated daily, so the interval should be selected
accordingly.

[**Run in
explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20ohlc(from%3A%20%222019-05-10T00%3A00%3A00.000Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22bitcoin%22%2C%20to%3A%20%222019-06-23T00%3A00%3A00.000Z%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20openPriceUsd%0A%20%20%20%20highPriceUsd%0A%20%20%20%20lowPriceUsd%0A%20%20%20%20closePriceUsd%0A%20%20%7D%0A%7D%0A&variables=)

```js
{
  ohlc(from: "2019-05-10T00:00:00.000Z", interval: "1d", slug: "bitcoin", to: "2019-06-23T00:00:00.000Z") {
    datetime
    openPriceUsd
    highPriceUsd
    lowPriceUsd
    closePriceUsd
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{ohlc(from:\"2019-05-10T00:00:00.000Z\",interval:\"1d\",slug:\"bitcoin\",to:\"2019-06-23T00:00:00.000Z\"){datetime, openPriceUsd, highPriceUsd, lowPriceUsd, closePriceUsd}}" }' \
  https://api.santiment.net/graphql
```
