---
title: Social Data
author: Ivan Ivanov, Ivan Klimuk
date: 2021-11-2
---

## Definition

By **Social data**, we consider a set of crypto-related discussions from the
internet that we collect and store in the form of text documents. It includes
chat conversations, forum posts and comments, tweets, and other pieces of text
(usually pretty short). In addition to the text itself, we also store some
metadata that depends on the data source: user_id, hashtags, chat_title, etc.
The **Social data** serves as a base layer for various statistics and metrics
that we build on top of it.

## How the data is collected
We have a custom data scraper for each of the data sources we track. The
scrapers collect all the new incoming messages/posts/comments in real-time. We
also have a historical scraper to fetch historical text data from the past for
almost all sources. We store the data in a NoSQL database, which enables us to
run full-text search queries on top of it very fast.

## Available Assets

For each data source, we have a curated list of accounts/sub-sources from where
we scrape the data. We collect all the available text documents and don't
separate the incoming data by assets, i.e., the metrics we build on top of the
social data are theoretically available for **any asset** (although in fact, for
projects with a small market capitalization, the level of conversation around
them is usually very low).

## Available data sources

1. **Telegram**

    We track a curated list with over 400 crypto-related Telegram chats. For each
    of them, we have the entire history of the chat.

    In the metric name this source is available as `telegram`. Example: `social_volume_telegram`.

    **Latency**. We collect the messages in real-time (1-2s delay max.)

    **History**. Each chat has its complete historical data; the oldest discussion starts
    at `2016-03-29`.

2. **Twitter**

    We track a curated list with over 4000 crypto-related and NFT-related Twitter accounts. For
    each of them, we collect their tweets, their retweets, and all the replies to
    their tweets.

    In the metric name this source is typed as `twitter`. Example: `social_volume_twitter`.

    **Latency**: We collect all the tweets in real-time. 

    **History**: The historical data starts at `2018-02-13`.

3. **Reddit**

    We track a curated list with over 350 crypto-related subreddits. For each of
    them we collect the posts themselves, as well as all the comments to these
    posts.

    In the metric name this source is typed as `reddit`. Example: `social_volume_reddit`.

    **Latency**: All the posts and comments are collected in real-time (1-2s delay
    max.)

    **History**: The historical data starts at `2016-01-01`.

4. **Bitcointalk**

    We collect all the new public posts from
    [bitcointalk.org](https://bitcointalk.org). We also have the full historical
    data for the whole forum.

    In the metric name this source is typed as `bitcointalk`. Example: `social_volume_bitcointalk`.

    **Latency**: The scraper goes through all the new messages once per 10 seconds.

    **History**: we have collected the entire forum history, starting from
    `2009-11-22`.

5. **Youtube Videos**

    We collect the transcribed text from youtube videos from a manually curated list of channels.

    In the metric name this source is typed as `youtube_videos`. Example: `social_volume_youtube_videos`

    **Latency**: TODO:

    **History**: The historical data starts at TODO:


6. **4chan**

    We collect ... TODO

    In the metric name this source is typed as `4chan`. Example: `social_volume_4chan`

    **Latency**: TODO

    **History**: TODO

7. **Total**

    A combination of all available sources.

    In the metric name this source is typed as `total`. Example: `social_voolume_total`.

