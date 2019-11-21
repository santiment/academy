---
title: Realized Value
author: Santiment Team
# References
#

---

Returns Realized Value of all tokens. Realized Value is based on the
acquisition costs of an asset located in a wallet, estimated by using
the historical price when the asset was last moved. The realized Value
across the whole network is computed by summing the realized values of
all wallets holding tokens at the moment. Projects are referred to by a
unique identifier (slug).

The query returns the full RV as well as the RV for all tokens that are
not in exchange wallets.\
\
[**Run in
explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20realizedValue(from%3A%20%222019-05-10T00%3A00%3A00.000Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22ethereum%22%2C%20to%3A%20%222019-06-23T00%3A00%3A00.000Z%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20nonExchangeRealizedValue%0A%20%20%20%20realizedValue%0A%20%20%7D%0A%7D%0A&variables=)

```js
{
  realizedValue(from: "2019-05-10T00:00:00.000Z", interval: "1d", slug: "ethereum", to: "2019-06-23T00:00:00.000Z") {
    datetime
    nonExchangeRealizedValue
    realizedValue
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{realizedValue(from:\"2019-05-10T00:00:00.000Z\",interval:\"1d\",slug:\"ethereum\",to:\"2019-06-23T00:00:00.000Z\"){datetime, nonExchangeRealizedValue, realizedValue}}" }' \
  https://api.santiment.net/graphql
```
