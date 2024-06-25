---
title: DeFi
author: Serge Nedashkovsky, Maksim Razhev, Anatoliy
date: 2020-12-24
description: DeFi Metrics
---

### Description

Some of the DeFi-related metrics have their own pages:

**MakerDAO Special Metrics**:
[MakerDAO metrics](/metrics/lending-and-borrowing-protocols/makerdao/)

**Metrics related to DeFi protocols**:
[Flow and balance metrics](/metrics/labeled-balance)

On this page the following metrics are defined:

* `defi_total_value_locked_usd` - Shows total value locked in DeFi projects, available in USD .
* `defi_total_value_locked_eth` - Shows total value locked in DeFi projects, available in ETH.

---

### Access

[Restricted Access](/metrics/details/access#restricted-access).

---

### Measuring Unit

Amount of USD/ETH 

---

### Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

### Frequency

[Hourly Intervals](/metrics/details/frequency#hourly-frequency)

---

### Latency

[Price Latency](/metrics/details/latency#price-latency)

---

### Available Assets

Available for `ethereum`.

---

## SanAPI

Amount of total locked ETH coins is available under the `defi_total_value_locked_eth` name.

```graphql
{
  getMetric(metric: "defi_total_value_locked_eth") {
    timeseriesData(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20
%22defi_total_value_locked_eth%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum
%22%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

Denominated in USD - `defi_total_value_locked_usd`.

```graphql
{
  getMetric(metric: "defi_total_value_locked_usd") {
    timeseriesData(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20
%22defi_total_value_locked_usd%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum
%22%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
