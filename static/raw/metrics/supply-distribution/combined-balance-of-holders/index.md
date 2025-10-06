---
title: Combined Balance of Holders Metrics
author: Santiment Team
date: 2024-04-01
---

## Definition

The Combined Balance of Holders metric provides a comprehensive overview of the total tokens held by all 
addresses within a specified balance interval. By summing up the token balances across every individual 
address within the designated interval, this metric offers valuable insights into the collective ownership 
concentration or dispersion within the cryptocurrency ecosystem.

Combined Balance of Holders Metrics:
- `holders_distribution_combined_balance_<interval>` - Total tokens held by all addresses within a 
specified balance [interval](/metrics/details/supply_distribution_parameters#available-intervals)
- `percent_of_holders_distribution_combined_balance_<interval>` - The percentage of tokens held by 
all addresses within a specified balance [interval](/metrics/details/supply_distribution_parameters#available-intervals)
- `holders_distribution_combined_balance_over_<threshold>` - Total tokens held by all addresses with balances 
exceeding a specified balance [threshold](/metrics/details/supply_distribution_parameters#available-thresholds)

#### Supply Distribution (by balance of addresses) Bitcoin Chart
<iframe title="Santiment Chart: [0 - 0.001) coins % (BTC), [0.001 - 0.01) coins % (BTC), [0.01 - 0.1) coins % (BTC), [0.1 - 1) coins % (BTC), [1 - 10) coins % (BTC), [10 - 100) coins % (BTC), [100 - 1,000) coins % (BTC), [1,000 - 10,000) coins % (BTC), [10,000 - 100,000) coins % (BTC), [100,000  - 1,000,000) coins % (BTC), [1,000,000 - 10,000,000) coins % (BTC), [10,000,000 - 100,000,000) coins % (BTC), [100,000,000 - 1,000,000,000) coins % (BTC), [1,000,000,000 - infinity) coins % (BTC)" width="100%" height="350" src="https://embed.santiment.net/chart?ps=bitcoin&pt=BTC&emalm=1&df=utc_now-90d&dt=utc_now&emcg=1&wm=percent_of_holders_distribution_combined_balance_0_to_0001%3Bpercent_of_holders_distribution_combined_balance_0001_to_001%3Bpercent_of_holders_distribution_combined_balance_001_to_01%3Bpercent_of_holders_distribution_combined_balance_01_to_1%3Bpercent_of_holders_distribution_combined_balance_1_to_10%3Bpercent_of_holders_distribution_combined_balance_10_to_100%3Bpercent_of_holders_distribution_combined_balance_100_to_1k%3Bpercent_of_holders_distribution_combined_balance_1k_to_10k%3Bpercent_of_holders_distribution_combined_balance_10k_to_100k%3Bpercent_of_holders_distribution_combined_balance_100k_to_1M%3Bpercent_of_holders_distribution_combined_balance_1M_to_10M%3Bpercent_of_holders_distribution_combined_balance_10M_to_100M%3Bpercent_of_holders_distribution_combined_balance_100M_to_1B%3Bpercent_of_holders_distribution_combined_balance_1B_to_inf&wax=0%3B1%3B2&wc=%23FF5B5B%3B%23FFCB47%3B%235275FF%3B%23FF8450%3B%23F47BF7%3B%23785549%3B%23D4E763%3B%23FFDAC5%3B%2337D7BA%3B%23777777%3B%23AC948C%3B%23222222%3B%2314c393%3B%237a859e&ws=%3B%3B%3B%3B%3B%3B%3B%3B%3B%3B%3B%3B%3B" scrolling="no"></iframe>

> Additionally, the above metrics can only be calculated for active holders - holders who have moved coins in the 
> past year. To include only active holders add `active_` prefix (for example: `active_holders_distribution_combined_balance_<interval>`)

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

* `holders_distribution_combined_balance_<interval>` and `holders_distribution_combined_balance_over_<threshold>` - Amount in token
* `percent_of_holders_distribution_combined_balance_<interval>` - Percentage

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

Available for [these assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22holders_distribution_combined_balance_1_to_10%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: All of the metrics are available for the same set of assets.

---

## API

Holders distribution combined balance metrics: `<active_>holders_distribution_combined_balance_<interval>`

```graphql-explorer
{
  getMetric(metric: "holders_distribution_combined_balance_1_to_10") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

Percent of holders distribution combined balance metrics: `<active_>percent_of_holders_distribution_combined_balance_<interval>`

```graphql-explorer
{
  getMetric(metric: "percent_of_holders_distribution_combined_balance_10k_to_100k") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

Holders distribution combined balance over metrics: `<active_>holders_distribution_combined_balance_over_<interval>`

```graphql-explorer
{
  getMetric(metric: "active_holders_distribution_combined_balance_over_1k") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

## Full list of metrics

### Combined balance of holders metrics

<Details>
<Summary>Holders distribution combined balance metrics</Summary>
- holders_distribution_combined_balance_0_to_0.001
- holders_distribution_combined_balance_0.001_to_0.01
- holders_distribution_combined_balance_0.01_to_0.1
- holders_distribution_combined_balance_0.1_to_1
- holders_distribution_combined_balance_1_to_10
- holders_distribution_combined_balance_10_to_100
- holders_distribution_combined_balance_100_to_1k
- holders_distribution_combined_balance_1k_to_10k
- holders_distribution_combined_balance_10k_to_100k
- holders_distribution_combined_balance_100k_to_1M
- holders_distribution_combined_balance_1M_to_10M
- holders_distribution_combined_balance_10M_to_100M
- holders_distribution_combined_balance_100M_to_1B
- holders_distribution_combined_balance_1B_to_inf
- holders_distribution_combined_balance_total
</Details>

<Details>
<Summary>Percent of holders distribution combined balance metrics</Summary>
- percent_of_holders_distribution_combined_balance_0_to_0.001
- percent_of_holders_distribution_combined_balance_0.001_to_0.01
- percent_of_holders_distribution_combined_balance_0.01_to_0.1
- percent_of_holders_distribution_combined_balance_0.1_to_1
- percent_of_holders_distribution_combined_balance_1_to_10
- percent_of_holders_distribution_combined_balance_10_to_100
- percent_of_holders_distribution_combined_balance_100_to_1k
- percent_of_holders_distribution_combined_balance_1k_to_10k
- percent_of_holders_distribution_combined_balance_10k_to_100k
- percent_of_holders_distribution_combined_balance_100k_to_1M
- percent_of_holders_distribution_combined_balance_1M_to_10M
- percent_of_holders_distribution_combined_balance_10M_to_100M
- percent_of_holders_distribution_combined_balance_100M_to_1B
- percent_of_holders_distribution_combined_balance_1B_to_inf
</Details>

<Details>
<Summary>Holders distribution combined balance over metrics</Summary>
- holders_distribution_combined_balance_over_1
- holders_distribution_combined_balance_over_10
- holders_distribution_combined_balance_over_100
- holders_distribution_combined_balance_over_1k
- holders_distribution_combined_balance_over_10k
- holders_distribution_combined_balance_over_100k
- holders_distribution_combined_balance_over_1M
</Details>

### Combined balance of active holders metrics

<Details>
<Summary>Active holders distribution combined balance metrics</Summary>
- active_holders_distribution_combined_balance_0_to_0.001
- active_holders_distribution_combined_balance_0.001_to_0.01
- active_holders_distribution_combined_balance_0.01_to_0.1
- active_holders_distribution_combined_balance_0.1_to_1
- active_holders_distribution_combined_balance_1_to_10
- active_holders_distribution_combined_balance_10_to_100
- active_holders_distribution_combined_balance_100_to_1k
- active_holders_distribution_combined_balance_1k_to_10k
- active_holders_distribution_combined_balance_10k_to_100k
- active_holders_distribution_combined_balance_100k_to_1M
- active_holders_distribution_combined_balance_1M_to_10M
- active_holders_distribution_combined_balance_10M_to_inf
- active_holders_distribution_combined_balance_total
</Details>

<Details>
<Summary>Percent of active holders distribution combined balance metrics</Summary>
- percent_of_active_holders_distribution_combined_balance_0_to_0.001
- percent_of_active_holders_distribution_combined_balance_0.001_to_0.01
- percent_of_active_holders_distribution_combined_balance_0.01_to_0.1
- percent_of_active_holders_distribution_combined_balance_0.1_to_1
- percent_of_active_holders_distribution_combined_balance_1_to_10
- percent_of_active_holders_distribution_combined_balance_10_to_100
- percent_of_active_holders_distribution_combined_balance_100_to_1k
- percent_of_active_holders_distribution_combined_balance_1k_to_10k
- percent_of_active_holders_distribution_combined_balance_10k_to_100k
- percent_of_active_holders_distribution_combined_balance_100k_to_1M
- percent_of_active_holders_distribution_combined_balance_1M_to_10M
- percent_of_active_holders_distribution_combined_balance_10M_to_inf
</Details>

<Details>
<Summary>Active holders distribution combined balance over metrics</Summary>
- active_holders_distribution_combined_balance_over_1
- active_holders_distribution_combined_balance_over_10
- active_holders_distribution_combined_balance_over_100
- active_holders_distribution_combined_balance_over_1k
- active_holders_distribution_combined_balance_over_10k
- active_holders_distribution_combined_balance_over_100k
- active_holders_distribution_combined_balance_over_1M
</Details>