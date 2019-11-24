---
title: Neuro API - Social Dominance
author: Santiment Team
---

Returns the share of the social dominance a given project has over time
in a given social channel.

Arguments description:

-   *`source`* - one of the following:
    - *PROFESSIONAL\_TRADERS\_CHAT\_OVERVIEW* - shows how many times the
    given project has been mentioned in private trader chats
    - *TELEGRAM\_CHATS\_OVERVIEW* - shows how many times the given project
    has been mentioned across all telegram chats, except the project`s
    own community chat (if there is one)
    - *TELEGRAM\_DISCUSSION\_OVERVIEW* - the general volume of messages in
    the project`s community chat (if there is one)
    -*DISCORD\_DISCUSSION\_OVERVIEW*"- shows how many times the given
    project has been mentioned in the discord channels
-   *`slug`* - unique project identifier
-   *`interval`* - an integer followed by one of: `m`, `h`, `d`, `w`
-   *`from`* - a string representation of datetime value according to the
    iso8601 standard, e.g. `"2018-04-16T10:02:19Z"`
-   *`to`* - a string representation of datetime value according to the
    iso8601 standard, e.g. `"2018-04-16T10:02:19Z"`

[**Run in
explorer**](https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20socialDominance(from%3A%20%222019-05-09T11%3A25%3A04.894Z%22%2C%20to%3A%20%222019-06-23T11%3A25%3A04.894Z%22%2C%20slug%3A%20%22ethereum%22%2C%20interval%3A%20%221d%22%2C%20source%3A%20ALL)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20dominance%0A%20%20%7D%0A%7D%0A)

```js
{
  socialDominance(from: "2019-05-09T11:25:04.894Z", to: "2019-06-23T11:25:04.894Z", slug: "ethereum", interval: "1d", source: ALL) {
    datetime
    dominance
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{socialDominance(from:\"2019-05-10T00:00:00.000Z\",slug:\"ethereum\",interval:\"1d\",source:ALL,to:\"2019-06-23T00:00:00.000Z\"){datetime, dominance}}" }' \
  https://api.santiment.net/graphql
```
