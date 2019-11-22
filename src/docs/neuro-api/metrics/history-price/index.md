---
title: Neuro API - History Price
author: Santiment Team
---
Gets the historical price of an asset in BTC or USD for a given time
period, as well as market cap and volume. Projects are referred to by a
unique identifier (slug).\
\
[**Run in
explorer**](https://api.santiment.net/graphiql?query=query%7BhistoryPrice(from%3A%20%222019-05-10T00%3A00%3A00.000Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22bitcoin%22%2C%20to%3A%20%222019-06-23T00%3A00%3A00.000Z%22)%20%7B%0A%20%20datetime%0A%20%20marketcap%0A%20%20priceBtc%0A%20%20priceUsd%0A%20%20volume%0A%7D%7D)

```js
{
  historyPrice(from: "2019-05-10T00:00:00.000Z", interval: "1d", slug: "bitcoin", to: "2019-06-23T00:00:00.000Z") {
    datetime
    marketcap
    priceBtc
    priceUsd
    volume
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{historyPrice(from:\"2019-05-10T00:00:00.000Z\",interval:\"1d\",slug:\"ethereum\",to:\"2019-06-23T00:00:00.000Z\"){datetime, marketcap, priceBtc, priceUsd, volume}}" }' \
  https://api.santiment.net/graphql
```
