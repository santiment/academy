---
title: SanAPI - Token Age Consumed
author: Santiment Team
---

Fetch Token Age Consumed for a project within a given time period,
grouped by interval. Projects are referred to by a unique identifier
(slug).

Each transaction has an equivalent token age record. The token age is
calculated by multiplying the number of tokens moved by the number of
blocks in which they appeared. Spikes in Token Age Consumed could
indicate large transactions or movement of tokens that have been held
for a long time.

Grouping by interval works by summing all burn rate records in the
interval.

[**Run in
explorer**](https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20tokenAgeConsumed(from%3A%20%222019-04-12T09%3A45%3A27.283Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22dragonchain%22%2C%20to%3A%20%222019-05-26T09%3A45%3A27.283Z%22)%20%7B%0A%20%20%20%20tokenAgeConsumed%0A%20%20%20%20datetime%0A%20%20%7D%0A%7D)

```js
{
  tokenAgeConsumed(from: "2019-04-12T09:45:27.283Z", interval: "1d", slug: "dragonchain", to: "2019-05-26T09:45:27.283Z") {
    tokenAgeConsumed
    datetime
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{tokenAgeConsumed(from:\"2019-04-12T09:45:27.283Z\",interval:\"1d\",slug:\"dragonchain\",to:\"2019-05-26T09:45:27.283Z\"){tokenAgeConsumed,datetime}}" }' \
  https://api.santiment.net/graphql
```
