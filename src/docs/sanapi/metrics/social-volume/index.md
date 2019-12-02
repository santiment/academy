---
title: Neuro API - Social Volume
author: Santiment Team
---

Returns a list of mentions count for a given project and time interval.

Arguments description:

-   *`slug`* - a string uniquely identifying a project; to find a list of
    all slugs, please check the end of this article
-   *interval* - an integer followed by one of: `m`, `h`, `d`, `w`
-   *`from`* - a string representation of datetime value according to the
    iso8601 standard, e.g. `"2018-04-16T10:02:19Z"`
-   *`to`* - a string representation of datetime value according to the
    iso8601 standard, e.g. `"2018-04-16T10:02:19Z"`
-   *`socialVolumeType`* - the source of mention counts, one of the
    following:
    - `"PROFESSIONAL\_TRADERS\_CHAT\_OVERVIEW"` - shows how many times
    the given project has been mentioned in the professional traders
    chat
    - `"TELEGRAM\_CHATS\_OVERVIEW"` - shows how many times the given
    project has been mentioned across all telegram chats, except the
    project`s own community chat (if there is one)
    - `"TELEGRAM\_DISCUSSION\_OVERVIEW"` - the general volume of
    messages in the project`s community chat (if there is one)
    - `"DISCORD\_DISCUSSION\_OVERVIEW"` - shows how many times the
    given project has been mentioned in the discord channels

[**Run in
explorer**](https://api.santiment.net/graphiql?variables=%7B%7D&query=query%7BsocialVolume(from%3A%222019-05-12T09%3A45%3A27.283Z%22%2Cinterval%3A%221d%22%2Cslug%3A%22dragonchain%22%2CsocialVolumeType%3ATELEGRAM_DISCUSSION_OVERVIEW%2Cto%3A%222019-06-11T09%3A45%3A30.487013Z%22)%7Bdatetime%2CmentionsCount%7D%7D)

```js
{
  socialVolume(from: "2019-05-12T09:45:27.283Z", interval: "1d", slug: "dragonchain", socialVolumeType: TELEGRAM_DISCUSSION_OVERVIEW, to: "2019-06-11T09:45:30.487013Z") {
    datetime
    mentionsCount
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{socialVolume(from:\"2019-05-12T09:45:27.283Z\",interval:\"1d\",slug:\"dragonchain\",socialVolumeType:TELEGRAM_DISCUSSION_OVERVIEW,to:\"2019-06-11T09:45:30.487013Z\"){datetime,mentionsCount}}" }' \
  https://api.santiment.net/graphql
```

*To find all currently available slugs for Social Volume, you can use
the following command:*

#### Social Volume Projects

Returns a list of slugs for which there is social volume data.

[**Run in
explorer**](https://api.santiment.net/graphiql?variables=%7B%7D&query=query%7BsocialVolumeProjects%7D)

```js
{
  socialVolumeProjects
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{socialVolumeProjects}" }' \
  https://api.santiment.net/graphql
```
