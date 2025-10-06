---
title: Frequency
author: Ivan
date: 2020-04-06
---

- [Five-minute frequency](#five-minute-frequency)
- [Hourly frequency](#hourly-frequency)
- [Eight-hour frequency](#eight-hour-frequency)
- [Daily frequency](#daily-frequency)

## Five-minute frequency

One value is computed for each 5-minute interval and each asset. The date and
time is taken according to the UTC timezone.

Example: The value of the Transaction Volume metric for Bitcoin on June 10, 2019
will have 288 distinct values for the intervals:

- `2019-06-10 00:00:00 UTC` and `2019-06-10 00:04:59 UTC`
- `2019-06-10 00:05:00 UTC` and `2019-06-10 00:09:59 UTC`
- `2019-06-10 00:10:00 UTC` and `2019-06-10 00:14:59 UTC`
<br/>...<br/>
- `2019-06-10 23:55:00 UTC` and `2019-06-10 23:59:59 UTC`

If the data is needed at daily intervals, different metrics have different
default and proper aggregations that are applied to get this value.

Examples:

- Daily Transaction Volume is the `SUM` of all 5-minute interval transaction
  volumes during the day.
- Daily Price in USD can be either `LAST` or `AVG`

## Hourly frequency

One value is computed for every hour of the day.

Example: The emerging trends are being computed for every round hour in a day.

## Eight-hour frequency

One value is computed for every eight hours of the day.

Example: The binance funding rate metrics are being computed once every eight hours in a day.

## Daily frequency

One value is computed for each day and each asset. The day is taken according to
the UTC timezone.

Example: The value of the Daily Active Addresses metric for Bitcoin on June 10,
2019 will contain the number of distinct addresses for transfers that happened
between 2019-06-10 00:00:00 UTC and 2019-06-10 23:59:59 UTC.
