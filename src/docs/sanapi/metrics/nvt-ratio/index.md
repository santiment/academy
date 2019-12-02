---
title: SanAPI - NVT Ratio
author: Santiment Team
---

Returns the NVT (Network-Value-to-Transactions) Ratio at each interval
over a given time period. Projects are referred to by a unique
identifier (slug).

NVT Ratio can be applied to crypto in multiple ways. This implementation
takes the market cap of an asset as the network value and either the
Token Circulation or the Transaction Volume as a measurement of
Transactions, hence two returns.

[**Run in
explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20nvtRatio(from%3A%20%222019-05-10T00%3A00%3A00.000Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22ethereum%22%2C%20to%3A%20%222019-06-23T00%3A00%3A00.000Z%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20nvtRatioCirculation%0A%20%20%20%20nvtRatioTxVolume%0A%20%20%7D%0A%7D%0A&variables=)

```js
{
  nvtRatio(from: "2019-05-10T00:00:00.000Z", interval: "1d", slug: "ethereum", to: "2019-06-23T00:00:00.000Z") {
    datetime
    nvtRatioCirculation
    nvtRatioTxVolume
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{nvtRatio(from:\"2019-05-10T00:00:00.000Z\",interval:\"1d\",slug:\"ethereum\",to:\"2019-06-23T00:00:00.000Z\"){datetime, nvtRatioCirculation, nvtRatioTxVolume}}" }' \
  https://api.santiment.net/graphql
```
