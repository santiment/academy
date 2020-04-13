---
title: Coin Spent Cost
author: Ivan
date: 2020-04-10
---

## Definition

For the coins/tokens transacted on a given day, get the price they were acquired
at. The metric does not include:

- Minting/mining/uncle rewards
- Transactions of coins/tokens that were acquired on the same day.

  - Example: There is a transaction `A - 10ETH -> B` and a transaction `B -> 10ETH C` - `B` moves the coins on the same day that they were received. This
    second transaction is not counted.

The number total number of coins/tokens that are counted is equal to the [1-day
circulation](/metrics/circulation) (**not** the [transaction
volume](/metrics/transaction-volume)) **minus** the block rewards/uncle
rewards/mints.

### Example

Let's take a look where do spent coins during the top and low of the October 10,
2020 - April 10, 2020 come from.

---

_Analyzing the local top on February 12, 2020_ ![bitcoin spent coin cost
high](bitcoin-spent-coin-cost-high2.png) The top for that 6-month period
happened on February 12, 2020, when the 1-day circulation was 163.7k bitcoins.
Out of the all bitcoins transferred that day, only around 2.5k were acquired at
a higher price and over 160k, or 98% of the coins transferred, resulted in
profits. This means that most of the transactions during that day resulted in
profits.

---

_Analyzing the local botom on March 16, 2020_ ![bitcoin spent coin cost
low](bitcoin-spent-coin-cost-low2.png) The low for that 6-month period happened
on March 16, 2020, when the 1-day circulation was 328.4k bitcoins. Out of the
all bitcoins transferred that day, only around 7.2k were acquired at a lower
price and over 321k, or 97.8% of the coins transferred, resulted in loss. This
means that most of the transactions during that day resulted in loss.

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

[Five-minute intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22price_histogram%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Available under `price_histogram` names

```graphql
{
  getMetric(metric: "price_histogram") {
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
