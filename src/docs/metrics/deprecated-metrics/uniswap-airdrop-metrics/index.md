---
title: Deprecated Uniswap Airdrop Metrics
author: Filip
date: 2024-04-01
---

<Notebox type="note">
Note: The Airdrop occurred in September 2020, and there are no more claims. 
**Although data remains accessible through the API, we do not recommend its use.**
</Notebox>

## Definition

The Uniswap Airdrop Metrics provide insights into the distribution of tokens resulting from the Uniswap 
protocol's decentralized exchange activity. This airdrop, which took place in September 2020, allocated 
tokens to users based on their past interactions with the Uniswap platform.

Uniswap Airdrop Metrics:
- `uniswap_total_lp_claims_amount` - write_description
- `uniswap_user_claims_count` - write_description
- `uniswap_user_claims_amount` - write_description
- `uniswap_lp_claims_amount` - write_description
- `uniswap_total_claims_percent` - write_description
- `uniswap_total_claims_amount` - write_description
- `uniswap_top_claimers` - write_description
- `uniswap_claims_amount` - write_description
- `uniswap_claims_count` - write_description
- `uniswap_total_user_claims_amount` - write_description
- `uniswap_lp_claims_count` - write_description
- `uniswap_total_claims_count` - write_description
- `uniswap_total_user_claims_count` - write_description
- `uniswap_total_lp_claims_count` - write_description

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

write_description

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-minute frequency](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

`uniswap`

---

## API

```graphql
{
  getMetric(metric: "uniswap_claims_amount") {
    timeseriesData(
      slug: "uniswap"
      from: "2020-09-15T00:00:00Z"
      to: "2020-10-01T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```
[Run in explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22uniswap_claims_amount%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22uniswap%22%0A%20%20%20%20%20%20from%3A%20%222020-09-15T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-10-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
