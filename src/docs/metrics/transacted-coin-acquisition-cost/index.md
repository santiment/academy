---
title: Transacted Coin Acquisition Cost
author: Ivan
date: 2021-11-19
description: Track from what price range are coming the coins/tokens moved on a given day
---

## Definition

For the coins/tokens transacted on a given day, get the price they were acquired
at. Any movement of coins/tokens on-chain is treated as an acquisition. The
metric does not include:

- Minting/mining/uncle rewards.
- Transactions of coins/tokens that were acquired on the same day. This would
  handle most situation with deposit/withdrawal addresses.
  - Example: There are two transactions on the same day: `A - 10ETH -> B` and `B
    -> 10ETH C` - `B` moves the coins on the same day that they were received.
    This second transaction is not counted.

The total number of coins/tokens that are counted is equal to the [1-day
circulation](/metrics/circulation) (**not** the [transaction
volume](/metrics/transaction-volume)) **minus** the block rewards/uncle
rewards/mints.

The metric returns a list of prices ranges and a number of coins/tokens that
were last time moved when the price was in that range. The ranges have even
length with the exception of the range that contains the queried day price. This
range is split around that price, resulting in two ranges. This has the benefit
of knowing exactly how many coins/tokens were last time moved when the price was
above or below the queried day price.

### Example

Let's take a look at what prices were aquired the bitcoins transacted on 09 November 2021 when bitcoin reached an all time high of over $68,000:

- `[$low - $high]` - `number of bitcoins`
- `[$0        - $16,886.13]` - ` 9,497.95 `
- `[$16,886.13 - $33,772.26]` - `1290.67`
- `[$33,772.26 - $50,658.39]` - `14,159.67`
- `[$50,658.39 - $59,987.51]` - `2711.52`
- `[$59,987.51 - ∞]` - `178,339.76`

It is clear that when the price is at its all time high all of the sellers are profiting but some are profiting much more than others. The majority of the bitcoins were last time moved when the price was in the range $59.9k-$57.5k. But there are 9,497.95 bitcoins that moved last when the price was under $16.9k.

### Example

Let's take a look at what prices were aquired the bitcoins transacted on 20 July 2021 when bitcoin reached a local minimum of around $29,000, after reaching to over $64,000 just 3 months before that:
- `[$low - $high]` - `number of bitcoins`
- `[$0 - $15880.41]` -  `13586.16`
- `[$15880.41 - $29842.86]` -  `694.53`
- `[$29842.86 - $31760.82]` -  `52818.93`
- `[$31760.82 - $47641.23]` -  `41785.33`
- `[$47641.23 - $63521.64]` -  `4693.35`
- `[$63521.64 -  ∞]` - `146.27`

Looking at this data we concule that majority of the bitcoins, around 99.9k or around 87% of all bitcoins transacted, were last moved when the price was higher. This would mean that most of transactions on that day resulted in a loss.

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

Number coins/tokens per price range

---

## Data Type

[Histogram Data](/metrics/details/data-type#histogram-data)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22price_histogram%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Available under `price_histogram` and `spent_coins_cost` metric names. Both metrics return exactly the same data.

```graphql
{
  getMetric(metric: "spent_coins_cost") {
    histogramData(
      slug: "santiment"
      from: "2020-04-07T00:00:00Z"
      to: "2020-04-08T00:00:00Z"
      interval: "1d"
      limit: 10
    ) {
      values {
        ... on FloatRangeFloatValueList {
          data {
            range
            value
          }
        }
      }
    }
  }
}
```

**[Run in Explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22price_histogram%22)%20%7B%0A%20%20%20%20histogramData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-08T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20%20%20limit%3A%2010%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20values%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20FloatRangeFloatValueList%20%7B%0A%20%20%20%20%20%20%20%20%20%20data%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20range%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
