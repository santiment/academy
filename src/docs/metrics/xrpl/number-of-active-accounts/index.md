---
title: Number of active accounts
author: Boris
date: 2023-03-13
description: Accounts with movement in the last 30/60/90days
---

## Description

Number of active accounts is computed on top of balances table. First, we calculate delta changes then delta changes that has to be canceled in the future and in the end sum both and run cumulative sum over final delta metric.
To calculate delta changes we sum all signs from the transformed balances table which have `oldDt` not older than 30 days from `dt` ( `dt - oldDt < 30 days`). 

Let’s say address A sends 1 XRP to address B on 2020-01-01, and it received 1 XRP 1 year before.

```sql
sign:             -1
dt:               2020-01-01 00:00:00
amount:           1
oldDt:            2019-01-01 00:00:00
issuerCurrency:   XRP
address:          Address A

sign:             1
dt:               2020-01-01 00:00:00
amount:           0
oldDt:            2020-01-01 00:00:00
issuerCurrency:   XRP
address:          Address A

sign:             -1
dt:               2020-01-01 00:00:00
amount:           0
oldDt:            NULL
issuerCurrency:   XRP
address:          Address B

sign:             1
dt:               2020-01-01 00:00:00
amount:           1
oldDt:            2020-01-01 00:00:00
issuerCurrency:   XRP
address:          Address B
```

Delta for `2020-01-01` would be 2 because we won’t count -1. If `Address A` received 1 XRP any time later than `2019-12-01` we would sum -1 for `Address A` so the delta for `2020-01-01` would be 1. This is due to all addresses that moved funds in last 30 days are already counted in some delta in last 30 days.
Next, we compute delta cancels metric, which cancels each delta in 30 days. If the delta on `2020-01-01` is 2, the corresponding delta cancels is -2 but for `2020-01-31`, because those 2 addresses shouldn’t be active anymore in 30 days if they didn’t send/receive any XRP in the last 30 days.
To get the final delta metric, both delta changes and delta cancels are summed up.
Finally, we run cumulative sums to get a rolling active address metric.

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount of accounts

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily frequency](/metrics/details/frequency/#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22active_addresses_30d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

### SanAPI

Available under the `active_addresses_30d`, `active_addresses_60d`, `active_addresses_90d` name.

```graphql
{
  getMetric(metric: "active_addresses_30d") {
    timeseriesData(
      slug: "xrp"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "30d"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**]()
