---
title: Deprecated DeFi
author: Serge Nedashkovsky, Maksim Razhev, Anatoliy
date: 2020-12-24
description: DeFi Metrics
---

<Notebox type="note">
Note: The underlying data for metrics is no longer supported.
**Although data remains accessible through the API, we do not recommend its use.**
</Notebox>

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

```graphql-explorer
{
  getMetric(metric: "defi_total_value_locked_eth") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    )
  }
}
```

Denominated in USD - `defi_total_value_locked_usd`.

```graphql-explorer
{
  getMetric(metric: "defi_total_value_locked_usd") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    )
  }
}
```
