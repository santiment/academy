---
title: Neuro API - Exchange Funds Flow
author: Santiment Team
---

Fetch the flow of funds into and out of known exchange wallets. This
query returns the difference IN-OUT calculated for each interval.

[**Run in
explorer**](https://api.santiment.net/graphiql?variables=%7B%7D&query=query%7BexchangeFundsFlow(from%3A%222019-05-12T09%3A45%3A27.283Z%22%2Cinterval%3A%221d%22%2Cslug%3A%22dragonchain%22%2Cto%3A%222019-06-26T09%3A45%3A27.283Z%22)%7Bdatetime%2CinOutDifference%7D%7D)

```js
{
  exchangeFundsFlow(from: "2019-05-12T09:45:27.283Z", interval: "1d", slug: "dragonchain", to: "2019-06-26T09:45:27.283Z") {
    datetime
    inOutDifference
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{exchangeFundsFlow(from:\"2019-05-12T09:45:27.283Z\",interval:\"1d\",slug:\"dragonchain\",to:\"2019-06-26T09:45:27.283Z\"){datetime,inOutDifference}}" }' \
  https://api.santiment.net/graphql
```
