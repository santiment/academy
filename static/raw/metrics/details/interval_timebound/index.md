---
title: Interval Timebound
author: Ante
date: 2022-06-01
---

- [Definition](#definition)

## Definition

Typically metrics are computed by taking into account all coins/tokens.

For some metrics, it makes sense also to compute a derivation of them on the
subset of coins/tokens that have been moved at least once no longer than X
and no less than Y days/years ago.

UTXO blockchains naturally define the age of a coin, but this is not true for
account-based blockchains. To define the age of a coin in account-based
blockchains we developed our own [Coin Age
Model](/metrics/details/stack-coin-age-model)

Interval Timebound metrics names are formed from the original metric name plus a
interval timebound suffix. Available interval timebound suffixes are:

- `0d_1d` - 0 to 1 day
- `1d_7d` - 1 to 7 days
- `7d_30d` - 7 to 30 days
- `30d_60d` - 1 to 2 months
- `60d_90d` - 2 to 3 months
- `90d_180d` - 3 to 6 months
- `180d_365d` - 6 months to 1 year
- `365d_2y` - 1 to 2 years
- `2y_3y` - 2 to 3 years
- `3y_5y` - 3 to 5 years
- `5y_10y` - 5 to 10 years
- `10y_20y` - 10 to 20 years

Examples:

- realized_cap_hodl_waves_3y_to_5y - The Realized Cap HODL Waves metric is
  computed by considering only the coins/tokens that were active in the past
  5 years but not less than 3 years.
- spent_coins_age_band_60d_to_90d - The number of tokens transacted at least once
  on a given day that are older than 60 days but not more than 90 days.
