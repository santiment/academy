---
title: Combined Balance of Labeled Holders Metrics
author: Santiment Team
date: 2024-04-01
---

## Definition

The Combined Balance of Labeled Holders provides a comprehensive overview of the total tokens held by all addresses 
with a specific label holding a token across predefined balance intervals. By summing up the token balances of addresses 
with designated labels such as exchange, infrastructure, miner, whale, or all, this metric provides insights into 
the composition and activities of various participant groups. Whether tracking the influence of exchanges, the 
backbone support of infrastructure holders, the mining community, or the presence of large-scale holders (whales), 
this metric enables stakeholders to assess the diversity and concentration of ownership. By analyzing these 
labeled holders across predefined balance intervals, it becomes possible to discern trends, identify patterns, 
and inform strategic decision-making within the cryptocurrency space.

There are two sets of metrics: holders labeled distribution combined balance and holders labeled negative distribution combined balance 
metrics. Holders labeled distribution combined balance metrics encompass all addresses with a specific label, while 
holders labeled negative distribution combined balance metrics exclude all addresses with a specific label.

Combined Balance of Labeled Holders Metrics:
- `holders_labeled_distribution_combined_balance_<interval>` - Total tokens held by all addresses with a specific [label](details/supply_distribution_parameters#available-labels) 
within a specified balance [interval](details/supply_distribution_parameters#available-intervals)
- `holders_labeled_negative_distribution_combined_balance_<interval>` - Total tokens held by all addresses that do not contain a specific 
[negative label](details/supply_distribution_parameters#available-negative-labels), within a specified balance [interval](details/supply_distribution_parameters#available-intervals)

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount in token

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

Available for [these assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22holders_labeled_distribution_combined_balance_1_to_10%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: All of the metrics are available for the same set of assets.

---

## API

Holders labeled distribution combined balance metrics: `holders_labeled_distribution_combined_balance_<interval>`

```graphql
{
  getMetric(metric: "holders_labeled_distribution_combined_balance_1_to_10") {
    timeseriesData(
      selector: {
        slug: "ethereum"
      	label: "miner"
      }
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-10T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```
[Run in explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22holders_labeled_distribution_combined_balance_1_to_10%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%09label%3A%20%22miner%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222024-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Holders labeled negative distribution combined balance metrics: `holders_labeled_negative_distribution_combined_balance_<interval>`

```graphql
{
  getMetric(metric: "holders_labeled_negative_distribution_combined_balance_10_to_100") {
    timeseriesData(
      selector: {
        slug: "ethereum"
      	label: "nonExchange"
      }
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-10T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```
[Run in explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22holders_labeled_negative_distribution_combined_balance_10_to_100%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%09label%3A%20%22nonExchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222024-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

## Full list of metrics

<Details>
<Summary>Holders labeled distribution combined balance metrics</Summary>
- holders_labeled_distribution_combined_balance_0_to_0.001
- holders_labeled_distribution_combined_balance_0.001_to_0.01
- holders_labeled_distribution_combined_balance_0.01_to_0.1
- holders_labeled_distribution_combined_balance_0.1_to_1
- holders_labeled_distribution_combined_balance_1_to_10
- holders_labeled_distribution_combined_balance_10_to_100
- holders_labeled_distribution_combined_balance_100_to_1k
- holders_labeled_distribution_combined_balance_1k_to_10k
- holders_labeled_distribution_combined_balance_10k_to_100k
- holders_labeled_distribution_combined_balance_100k_to_1M
- holders_labeled_distribution_combined_balance_1M_to_10M
- holders_labeled_distribution_combined_balance_10M_to_inf
- holders_labeled_distribution_combined_balance_total
</Details>

<Details>
<Summary>Holders labeled negative distribution combined balance metrics</Summary>
- holders_labeled_negative_distribution_combined_balance_0_to_0.001
- holders_labeled_negative_distribution_combined_balance_0.001_to_0.01
- holders_labeled_negative_distribution_combined_balance_0.01_to_0.1
- holders_labeled_negative_distribution_combined_balance_0.1_to_1
- holders_labeled_negative_distribution_combined_balance_1_to_10
- holders_labeled_negative_distribution_combined_balance_10_to_100
- holders_labeled_negative_distribution_combined_balance_100_to_1k
- holders_labeled_negative_distribution_combined_balance_1k_to_10k
- holders_labeled_negative_distribution_combined_balance_10k_to_100k
- holders_labeled_negative_distribution_combined_balance_100k_to_1M
- holders_labeled_negative_distribution_combined_balance_1M_to_10M
- holders_labeled_negative_distribution_combined_balance_10M_to_inf
- holders_labeled_negative_distribution_combined_balance_total
</Details>
