---
title: Deprecated Social Metrics
author: Ivan
date: 2024-05-13
---

## Overview

The social metrics are computed for each media source - twitter, telegram, etc.
For some time the Twitter source was split into multiple sources - `twitter_nft`,
`twitter_news` and `twitter_crypto`.
There is also a combined `twitter` source, which includes data from all sub-sources.
The metrics for these sub-sources have not been computed since April 2023.
Since May 9 2024, the metrics for these sub-sources have been completely removed from the API.

## Deprecated metrics

- sentiment_volume_consumed_twitter_crypto
- sentiment_volume_consumed_twitter_news
- sentiment_volume_consumed_twitter_nft
- sentiment_balance_twitter_crypto
- sentiment_balance_twitter_news
- sentiment_balance_twitter_nft
- sentiment_negative_twitter_crypto
- sentiment_negative_twitter_news
- sentiment_negative_twitter_nft
- sentiment_positive_twitter_crypto
- sentiment_positive_twitter_news
- sentiment_positive_twitter_nft
- social_volume_newsapi_crypto
- social_volume_twitter_crypto
- social_volume_twitter_news
- social_volume_twitter_nft
- social_dominance_newsapi_crypto
- social_dominance_twitter_crypto_1h_moving_average
- social_dominance_twitter_crypto_24h_moving_average
- social_dominance_twitter_news_1h_moving_average
- social_dominance_twitter_news_24h_moving_average
- social_dominance_twitter_nft_1h_moving_average
- social_dominance_twitter_nft_24h_moving_average
- social_dominance_twitter_crypto
- social_dominance_twitter_news
- social_dominance_twitter_nft
