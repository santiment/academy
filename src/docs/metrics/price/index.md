---
title: History Price metric
author: Santiment Team
---

## Price USD

Get the price in USD for a given asset.

- Available For - All available assets
- Latency - 5 minutes
- Min Interval - 5 minutes
- Access - free

[**Run in explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22price_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-02-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-02-10T01%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

## Price BTC

Get the price in BTC for a given asset.

- Available For - All available assets
- Latency - 5 minutes
- Min Interval - 5 minutes
- Access - free

[**Run in explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22price_btc%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-02-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-02-10T01%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

## Volume USD

Get the trading volume in USD for a given asset.

- Available For - All available assets
- Latency - 5 minutes
- Min Interval - 5 minutes
- Access - free

[**Run in explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22volume_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-02-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-02-10T01%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

## Marketcap USD

Get the marketcap in USD for a given asset.

- Available For - All available assets
- Latency - 5 minutes
- Min Interval - 5 minutes
- Access - free

[**Run in explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22marketcap_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-02-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-02-10T01%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
