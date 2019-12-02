---
title: Neuro API - Percentage of Token Supply on Exchanges
author: Santiment Team
---

Returns what percent of the total token supply is on exchanges. Projects
are referred to by a unique identifier (slug).

[**Run in
explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20percentOfTokenSupplyOnExchanges(from%3A%20%222019-05-09T11%3A25%3A04.894Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22maker%22%2C%20to%3A%20%222019-06-23T11%3A25%3A04.894Z%22)%20%7B%0A%20%20%20%20percentOnExchanges%0A%20%20%20%20datetime%0A%20%20%7D%0A%7D%0A&variables=)

```js
{
  percentOfTokenSupplyOnExchanges(from: "2019-05-09T11:25:04.894Z", interval: "1d", slug: "maker", to: "2019-06-23T11:25:04.894Z") {
    percentOnExchanges
    datetime
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{percentOfTokenSupplyOnExchanges(from:\"2019-05-10T00:00:00.000Z\",interval:\"1d\",slug:\"maker\",to:\"2019-06-23T00:00:00.000Z\"){datetime, percentOnExchanges}}" }' \
  https://api.santiment.net/graphql
```
