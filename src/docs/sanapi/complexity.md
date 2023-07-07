---
title: API Complexity
author: Santiment Team
date: 2023-05-09
---

## Overview

Metric API queries like [this NVT example](/metrics/nvt/index.md#sanapi)
can potentially produce huge results (hundreds of thousands or millions of data
points) or produce queries that scan the whole database and spend too many
resources. Allowing such behavior opens the doors to DoS attacks.

In order to guard against such behavior, every GraphQL request is analyzed
before being executed. The **complexity** for every query is computed, and if it
goes above the threshold, the API server rejects it and returns an error without executing it.
Roughly speaking, the complexity is proportional to the number of data points and the size of
the time interval included in the result.

More accurately, the complexity computation takes into consideration the
following:
- Number of data points returned - **N**. Fetching 30 days of data at daily
  intervals results in 30 data points.
- Number of fields in a data point - **F**. For most metrics, this includes two
  fields: **datetime** and **value**.
- Metric weight - **W**. Most of the metrics are stored in specialized fast data
  storage, so they have a smaller weight (0.3). The rest of the metrics have a
  weight of 1.
- Years time range span - **Y**. If the request is using a big interval (like 30
  days) the number of data points is small. However, the time range spans
  several years. The query still needs to read and aggregate a lot of data in
  the database.
- Subscription plan tier - **S**. The higher the user's plan, the bigger the
  complexity limit is (3 for Basic, 5 for Pro, 7 for Premium). As the complexity
  threshold is constant, the computed complexity is divided by **S**. This has
  the effect that the same query executed by a Pro user will have a 5 times
  smaller complexity than the same query executed by a Free user.

With the above-defined values, the complexity is computed by the following
formula: 
$$
Complexity(Q) := \dfrac{N(Q) * F(Q) * W(Q) * Y(Q)}{S(Q)}
$$
where Q
is the query that is being analyzed, and N(Q)...S(Q) are the described values
computed on that query.


## Example

Let us see how to compute the complexity when a SanAPI PRO subscription user
executes the following query.
```graphql
{
  getMetric(metric: "price_usd"){
    timeseriesData(slug: "bitcoin" from: "utc_now-3650d" to: "utc_now" interval: "1h"){
      datetime
      value
    }
  }
}
```

- `N(Q) = 3750 * 24 = 90000` - The time range is 3650 days and the interval is 1
hour.
- `F(Q) = 2` - Every data point contains two fields - **datetime** and **value**.
- `W(Q) = 0.3`
- `Y(Q) = 4` - Computed as: max(2022-2012, 2) / 2
- `S(Q) = 5` - The SanAPI PRO plan has 5 times higher complexity limits compared to SanAPI Free.

$$
Complexity(Q) = \frac{90000 * 2 * 0.3 * 4}{5} = 43200
$$

The complexity threshold is 50000, so this query passes and the
API server executes it. If a SanAPI Free user executes this query, S(Q) = 1 and
the complexity will be over 210000. This will result in the following error:
```
Operation is too complex: complexity is 210241 and maximum is 50000
```
