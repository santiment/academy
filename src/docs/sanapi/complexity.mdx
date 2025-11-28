---
title: API Complexity
author: Santiment Team
date: 2023-05-09
---

## Overview

API queries for metrics, such as [this NVT example](/metrics/nvt#sanapi), can
potentially yield extensive results (ranging from thousands to hundreds of thousands of
data points). They may also generate queries that scan the entire
database, thereby consuming substantial resources. This could potentially
expose the system to DoS attacks.

To prevent such scenarios, every GraphQL request is analyzed before execution.
The **complexity** of each query is calculated, and if it exceeds a certain
threshold, the API server rejects it and returns an error without executing the
query. Generally, the complexity is proportional to the number of data points
and the size of the time interval included in the result.

The complexity calculation considers the following factors:

- Number of data points returned - **N**. For instance, fetching 30 days of
  data at daily intervals results in 30 data points.
- Number of fields in a data point - **F**. Most metrics include two fields:
  **datetime** and **value**.
- Years time range span - **Y**. If the request uses a large interval (like 30
  days), the number of data points is small. However, the time range spans
  several years. The query still needs to read and aggregate a lot of data in
  the database.
- Metric weight - **W**. Most metrics are stored in specialized fast data
  storage, so they have a smaller weight (0.3). The remaining metrics have a
  weight of 1.
- Weighted number of assets - **A**. In case of returning data for many assets (timeseriesDataPerSlugJson API),
  the number of assets multiplied by a weight of 0.1, minimum of 1. In case of returning
  data for a single asset, the weight is 1.
- Subscription plan tier - **S**. The higher the user's plan, the larger the
  complexity limit (3 for Basic, 5 for Pro, 7 for Premium). As the complexity
  threshold is constant, the computed complexity is divided by **S**. This
  means that the same query executed by a Pro user will have a complexity five
  times smaller than the same query executed by a Free user.

Given the above-defined values, the complexity is calculated using the
following formula:

$$
Complexity(Q) := \dfrac{N(Q) * F(Q) * Y(Q) * W(Q) * A(Q)}{S(Q)}
$$

In this formula, Q represents the query being analyzed, and N(Q)...S(Q) are the described values computed for that query.

## Example

Let's examine how to calculate the complexity when a Business PRO subscription user executes the following query:

```graphql-explorer
{
  getMetric(metric: "price_usd") {
    timeseriesDataPerSlugJson(
      selector: { slugs: ["bitcoin", "ethereum", "xrp"] }
      from: "utc_now-1500d"
      to: "utc_now"
      interval: "30m"
    )
  }
}
```

- `N(Q) = 1500 * 24 * 2 = 72000` - The time range spans 3650 days and the interval is set to 1 hour.
- `F(Q) = 2` - The data points count in practice is 4, but it is explicitly set to 2, so it mimics the behavior
  of `timeseriesDataJson` which returns just a list of `datetime` and `value`.
- `Y(Q) = 2` - Computed as: `max(diff(2025-04-24, 2021-03-16, "years"), 2) / 2`, where `/` is integer division
- `S(Q) = 5` - The SanAPI PRO plan offers complexity limits that are 5 times higher than those of the SanAPI Free plan.
- `A(Q) = 1` - The API call returns data for 3 assets, so the value is `max(1, 3\*0.1) = 1`
  - if the number of assets was 50, then the weight would be `max(1, 50*0.1) = max(1, 5) = 5`

The complexity of the query, Q, is calculated as follows:

$$
Complexity(Q) = \frac{72000 * 2  * 2 * 0.3 * 1}{5} = 17280
$$

The complexity threshold is 50000, so this query is valid and the API server
will execute it. If a SanAPI Free user attempts to execute this query, S(Q)
will equal 1 and the complexity will be 86400. This will trigger the
following error:

```
Operation is too complex:
complexity is 86400 and maximum is 50000
```

<Notebox type="none">
**Read next: [Supported Blockchains](/sanapi/supported-blockchains)**
</Notebox>
