---
title: Stock To Flow ratio
author: Tsetso
date: 2020-06-12

headline: "Stock To Flow Ratio (S2F): How It's Used and Calculated"
description: "Discover how to calculate and apply the stock to flow ratio in your trading strategy. Understand the balance between the supply and production rate of an asset to make trading decisions."
---

## Definition
The Stock To Flow (S2F) ratio is a vital indicator provided by Santiment. Defined in the simplest terms, it's a measure of the scarcity or abundance of a specific asset. The stock-to-flow ratio is fundamentally a relationship between the total supply of an asset (the stock) and its production rate (the flow). We measure the stock-to-flow ratio for a given asset as the ratio between the [Total Circulation](/metrics/circulation) of the asset and the daily minted coins multiplied by days in one year.

The 'stock' aspect relates to the existing supply of the asset in circulation, while the 'flow' portion refers to the newly produced assets, usually measured annually.

![Stock to Flow](https://github.com/santiment/academy/assets/24714957/29871977-a860-4fa6-a2e0-a691058a83ff)
Source: https://app.santiment.net/charts/stock-to-flow-ratio-btc-22307

## Applying the Stock to Flow Ratio to Trading

In the trading world, how does the stock-to-flow ratio come into play? A high S2F ratio implies scarcity, meaning there's less production compared to the existing supply. This scarcity could signify a potential price increase due to the limited new supply making its way to the market. On the opposite end, a low stock-to-flow ratio indicates a larger new supply but a smaller demand, possibly leading to a depreciation in the asset's value.

## Making Informed Trading Decisions with the S2F Ratio

As a trader, a high stock-to-flow ratio could be viewed as a buying signal, as the high scarcity could mean potential price appreciation. However, a low S2F might be a selling cue to prevent potential losses from the predicted oversupply.

However, the stock-to-flow ratio shouldn't be the only tool you use when deciding to buy or sell. It should be used alongside other indicators and market analysis methods. Remember to assess overall market sentiment, global economic trends, and particular news or events that could affect price changes of your chosen asset.

In essence, the stock-to-flow should be one tool in a collection used to formulate a comprehensive and robust trading strategy.

---

## Access

Stock To Flow ratio metric is available only in `Custom` plans.

[Restricted Access](/metrics/details/access#restricted-access).

---

## Timebound

[Timebound Metrics](/metrics/details/timebound) available

---

## Measuring Unit

Token/Coin amount

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22stock_to_flow%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: `stock_to_flow` metric is available only for assets that mint new coins on a regular basis.

---

## SanAPI

Available under the `stock_to_flow` name.

```graphql-explorer
{
  getMetric(metric: "stock_to_flow") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
