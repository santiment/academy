---
title: Network Growth metric
author: Santiment Team
---

Essentially, this chart illustrates user adoption over time, and can be
used to identify when the project is gaining - or losing - traction.

![](e0553cbe07ebc5fae995bb3ad585f3a10ed91e2b.png)

Here's a Network Growth graph for [Aragon](https://aragon.org/), which
lets anyone create and manage a decentralized organization on Ethereum.

Between February and December of 2017, the Aragon network grew by 85-750
new addresses each day, and the price loyally followed.

Then, right around the start of 2018, the network growth slowly began to
throttle. It indicated that the Aragon user base was already quite deep,
and wouldn't be able to sustain future price growth.

What happened since speaks for itself.

### SanAPI

This metric is calculated daily, so the interval should be selected
accordingly.

Grouping by interval works by taking the mean of all newly added
addresses in the interval. The default value of the interval is 1 day,
which yields the exact number of new addresses for each day.

[**Run in
explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20networkGrowth(from%3A%20%222019-05-09T11%3A25%3A04.894Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22ethereum%22%2C%20to%3A%20%222019-06-23T11%3A25%3A04.894Z%22)%20%7B%0A%20%20%20%20newAddresses%0A%20%20%20%20datetime%0A%20%20%7D%0A%7D%0A&variables=)

```js
{
  networkGrowth(from: "2019-05-09T11:25:04.894Z", interval: "1d", slug: "ethereum", to: "2019-06-23T11:25:04.894Z") {
    newAddresses
    datetime
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{networkGrowth(from:\"2019-05-09T11:25:04.894Z\",interval:\"1d\",slug:\"ethereum\",to:\"2019-06-23T11:25:04.894Z\"){newAddresses,datetime}}" }' \
  https://api.santiment.net/graphql
```

