---
title: SanAPI - Top Social Gainers / Losers
author: Santiment Team
---

This returns the projects that have gained or lost the most Social
Volume over the given time window.

Arguments description:

-   *`status`* - one of the following (these are not Strings!):

    - `ALL - shows all of the below
    - `GAINER` - shows only top gainers
    - `LOSER` - shows only top losers
    - `NEWCOMER` - show projects that had no social volume before

-   *`timeWindow`* - number of days that are taken into account, between
    `"2d"` and `"30d"`
-   *`size`* - the length of the Trending Words list
-   *`from`* - a string representation of datetime value according to the
    iso8601 standard, e.g. `"2018-04-16T10:02:19Z"`
-   *`to`* - a string representation of datetime value according to the
    iso8601 standard, e.g. `"2018-04-16T10:02:19Z"`

[**Run in
explorer**](https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20topSocialGainersLosers(from%3A%20%222019-05-09T11%3A25%3A04.894Z%22%2C%20to%3A%20%222019-06-23T11%3A25%3A04.894Z%22%2C%20size%3A%205%2C%20status%3A%20ALL%2C%20timeWindow%3A%20%222d%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20projects%20%7B%0A%20%20%20%20%20%20slug%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20change%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

```js
{
  topSocialGainersLosers(from: "2019-05-09T11:25:04.894Z", to: "2019-06-23T11:25:04.894Z", size: 5, status: ALL, timeWindow: "2d") {
    datetime
    projects {
      slug
      status
      change
    }
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{topSocialGainersLosers(from:\"2019-05-10T00:00:00.000Z\",size:5,status:ALL,timeWindow:\"2d\",to:\"2019-06-23T00:00:00.000Z\"){datetime, projects{slug,status,change}}}" }' \
  https://api.santiment.net/graphql
```
