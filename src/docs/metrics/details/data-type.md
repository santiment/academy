---
title: Latency
author: Ivan
date: 2020-04-10
---

- [Timeseries Data](#timeseries-data)
- [Histogram Data](#histogram-data)

## Timeseries Data

Timeseries data is a sequence taken at successive equally spaced points in time
(every 5 minutes, every day, every year, etc.).

The metric is represtented as a list of data points, where every point is
represented by a tuple containing a `datetime` an a `value`.

### Example (timeseries data)

The `daily_active_addresses` metric is represented as pairs of date `D` and a
number `N` with the following meaning: The count of the unique addresses `N`
that participated in at least one transaction, either as sender or receiver,
during the day `D`.

The daily active addresses for bitcoin in the period April 01 - April 04 is represented
as the following list:

```json
[
  {
    "datetime": "2020-04-01T00:00:00Z",
    "value": 808416
  },
  {
    "datetime": "2020-04-02T00:00:00Z",
    "value": 803826
  },
  {
    "datetime": "2020-04-03T00:00:00Z",
    "value": 754343
  },
  {
    "datetime": "2020-04-04T00:00:00Z",
    "value": 655906
  }
]
```

## Histogram Data

A histogram is an approximate representation of the distribution of numerical or
categorical data.

The metric is represented as a list of data points, where every point is represented
represented by a tuple containing a `range` an a `value`.

### Example (histogram data)

The `price_histogram` (or `spent_coins_cost`) shows at what price were acquired
the coins/tokens transacted on a given day `D`. The metric is represented as a
list of price ranges and values with the following meaning: Out of all
coins/tokens transacted on day `D`, `value` amount of them were acquired when
the price was in the range `range`.

On April 07, the bitcoins that circulated during that day were 124k and the average
price for the day was \$7307.
Out of all of the 124k bitcoins, 13.8k of them were acquired when the price was
in the range $8692.08 - $10845.62, so they were last moved when the price was higher.
The same logic applies for all of the ranges.

```json
[
  {
    "range": [77.92, 2231.46],
    "value": 141.62
  },
  {
    "range": [2231.46, 4385],
    "value": 109.3
  },
  {
    "range": [4385, 6538.54],
    "value": 8881.84
  },
  {
    "range": [6538.54, 7307.7],
    "value": 98208.83
  },
  {
    "range": [7307.7, 8692.08],
    "value": 2582.64
  },
  {
    "range": [8692.08, 10845.62],
    "value": 13804.97
  },
  {
    "range": [10845.62, 12999.16],
    "value": 130.33
  },
  {
    "range": [12999.16, 15152.7],
    "value": 10.58
  },
  {
    "range": [15152.7, 17306.24],
    "value": 331.73
  },
  {
    "range": [17306.24, 19459.78],
    "value": 34.45
  },
  {
    "range": [19459.78, 21613.32],
    "value": 0.12
  }
]
```
