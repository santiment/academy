---
title: Access Plans - Special Restrictions
author: Ivan
date: 2020-04-08
---

Some metrics have **special** restrictions. They do not follow the time
restrictions of the product plans but their own.

## Realized Value and MVRV metrics

Those restrictions hold for any metric that contains "**mvrv**" or
"**realized_value**" in its canonical name, like `mvrv_usd`, `mvrv_usd_7d`,
`realized_value`, `realized_value_1d`, etc.

### Free Plan

- 1 year historical data
- Last 30 days of the data is cut-off

### Basic Plan

- 2 years of historical data
- Last 14 days of the data is cut-off

### Pro Plan

- Full historical access
- Realtime data is not cut-off

## Age Consumed Metrics

The following special restrictions hold for any metric that contains
"**age_consumed**" or "**age_destroyed**" in its canonical name.

### Free Plan

- Full historical access
- Last 30 day of the data is cut-off

### Basic Plan

- Full historical access
- Realtime data is not cut-off

### Pro Plan

- Full historical access
- Realtime data is not cut-off
