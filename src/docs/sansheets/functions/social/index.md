---
title: Social Data Functions we offer
author: Santiment Team
date: 2023-03-31
---

# Social Data Functions

## SAN_PROJECT_SOCIAL_DATA

##### SAN_PROJECT_SOCIAL_DATA(projectSlug) ⇒ <code>Array</code>

Returns social data for a specified project.

- **Kind**: global function
- **Returns**: <code>Array</code> - of project's social data.
- **Customfunction**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).                                                                                              |

## SAN_SOCIAL_DOMINANCE

##### SAN_SOCIAL_DOMINANCE(projectSlug, from, to, source, interval) ⇒ <code>Array</code>

Returns the social dominance for a slug.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the slug's social dominance.
- **Customfunction**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                                                                                                                 |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                                                                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                                                                                       |
| source      | <code>string</code> | The source of mention counts, one of the following: "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL"                                                                                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                                                                                                                        |

## SAN_SOCIAL_DOMINANCE_AGGREGATED

##### SAN_SOCIAL_DOMINANCE_AGGREGATED(projectSlug, from, to, source, aggregation) ⇒ <code>number</code>

Returns the social dominance for a slug.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated the slug's social dominance.
- **Customfunction**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                                                                                                                 |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                                                                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                                                                                       |
| source      | <code>string</code> | The source of mention counts, one of the following: "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL"                                                                                                        |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                                                                                                                                                                                             |

## SAN_SOCIAL_DOMINANCE_MULTIPLE_SLUGS

##### SAN_SOCIAL_DOMINANCE_MULTIPLE_SLUGS(projectSlugsList, from, to, source, interval) ⇒ <code>Array</code>

Returns the social dominance for a slug.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs
the slug's social dominance.
- **Customfunction**:

| Param            | Type                | Description                                                                                                                                                                            |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".                                                                                                                                                       |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                                                                                     |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                                                                                       |
| source           | <code>string</code> | The source of mention counts, one of the following: "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL"                                                                                                        |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                                                                                                                        |

## SAN_SOCIAL_VOLUME

##### SAN_SOCIAL_VOLUME(projectSlug, from, to, source, interval) ⇒ <code>Array</code>

Returns the social volume for a slug.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the slug's social volume.
- **Customfunction**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                                                                                                                 |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                                                                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                                                                                       |
| source      | <code>string</code> | The source of mention counts, one of the following: "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL"                                                                                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                                                                                                                        |

## SAN_SOCIAL_VOLUME_AGGREGATED

##### SAN_SOCIAL_VOLUME_AGGREGATED(projectSlug, from, to, source, aggregation) ⇒ <code>number</code>

Returns the social volume for a slug.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated the slug's social volume.
- **Customfunction**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                                                                                                                 |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                                                                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                                                                                       |
| source      | <code>string</code> | The source of mention counts, one of the following: "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL"                                                                                                        |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                                                                                                                                                                                             |

## SAN_SOCIAL_VOLUME_MULTIPLE_SLUGS

##### SAN_SOCIAL_VOLUME_MULTIPLE_SLUGS(projectSlugsList, from, to, source, interval) ⇒ <code>Array</code>

Returns the social volume for a slug.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs
the slug's social volume.
- **Customfunction**:

| Param            | Type                | Description                                                                                                                                                                            |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".                                                                                                                                                       |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                                                                                     |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                                                                                       |
| source           | <code>string</code> | The source of mention counts, one of the following: "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL"                                                                                                        |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                                                                                                                        |

## SAN_SOCIAL_VOLUME_PROJECTS

##### SAN_SOCIAL_VOLUME_PROJECTS() ⇒ <code>Array</code>

Returns a list of project slugs for which there is social volume data.

- **Kind**: global function
- **Returns**: <code>Array</code> - of social volume projects.
- **Customfunction**:    


## SAN_WEIGHTED_SOCIAL_SENTIMENT

##### SAN_WEIGHTED_SOCIAL_SENTIMENT(projectSlug, from, to, source, interval) ⇒ <code>Array</code>

Returns the weighted social sentiment for a slug.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the slug's weighted social sentiment.
- **Customfunction**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                                                                                                                 |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                                                                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                                                                                       |
| source      | <code>string</code> | The source of mention counts, one of the following: "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL"                                                                                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                                                                                                                        |

## SAN_WEIGHTED_SOCIAL_SENTIMENT_AGGREGATED

##### SAN_WEIGHTED_SOCIAL_SENTIMENT_AGGREGATED(projectSlug, from, to, source, aggregation) ⇒ <code>number</code>

Returns the weighted social sentiment for a slug.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated the slug's weighted social sentiment.
- **Customfunction**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                                                                                                                 |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                                                                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                                                                                       |
| source      | <code>string</code> | The source of mention counts, one of the following: "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL"                                                                                                        |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                                                                                                                                                                                             |

## SAN_WEIGHTED_SOCIAL_SENTIMENT_MULTIPLE_SLUGS

##### SAN_WEIGHTED_SOCIAL_SENTIMENT_MULTIPLE_SLUGS(projectSlugsList, from, to, source, interval) ⇒ <code>Array</code>

Returns the weighted social sentiment for a slug.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs
the slug's weighted social sentiment.
- **Customfunction**:

| Param            | Type                | Description                                                                                                                                                                            |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".                                                                                                                                                       |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                                                                                     |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                                                                                       |
| source           | <code>string</code> | The source of mention counts, one of the following: "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL"                                                                                                        |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"