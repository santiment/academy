---
title: Timebound
author: Ivan
date: 2022-04-12
---

- [Definition](#definition)
- [Examples](#examples)
  - [circulation_1d](#circulation_1d)

## Definition

Typically metrics are computed by taking into account all coins/tokens.

For some metrics, it makes sense also to compute a derivation of them on the
subset of coins/tokens that have been moved at least once no longer than X
days/years ago.

UTXO blockchains naturally define the age of a coin, but this is not true for
account-based blockchains. To define the age of a coin in account-based
blockchains we developed our own [Coin Age
Model](/metrics/details/stack-coin-age-model)

Timebound metrics names are formed from the original metric name plus a
timebound suffix. Available timebound suffixes are:

- `_1d` - 1 day
- `_7d` - 7 days
- `_30d` - 30 days
- `_60d` - 2 months
- `_180d` - 6 months
- `_365d` - 1 year
- `_2y` - 2 years
- `_3y` - 3 years
- `_5y` - 5 years
- `_10y` - 10 years

Examples:

- mvrv_usd_30d - The MVRV metric is computed by considering only the
  coins/tokens that were active in the past 30 days.
- circulation_3y - The number of tokens transacted at least once in the past 3
  years. If a coin/token is considered dead/lost (sent to graveyard address, the
  owner lost private key, etc.), such circulation can approximate total supply
  minus lost/dead coins.

## Examples

### circulation_1d

The `circulation_1d` metric counts the number of coins/tokens that participated
in on-chain transactions in the past 24 hours.

On one particular day, Alice sends 20 ETH to Bob, Bob sends 10 ETH to Charlie
and Charlie sends 5 ETH to Dean.

```bash
Alice  -- 20 ETH -->  Bob
                      |
                    10 ETH
                      |
                      v
Dean <-- 5  ETH -- Charlie
```

In this scenario the transaction volume is 20 + 10 + 5 = 35 ETH, but the ETH in
circulation is 20 ETH.

This difference can be explained as having twenty \$1 bills. Alice sends all of
them to Bob, Bob sends 10 of the received bills to Charlie, and Charlie sends 5
of them to Dean. There are 20 dollars in circulation total in this case.

One of the most valuable properties of circulation is that it is immune to
mixers and gives a much better view of the actual amount of tokens that are
being transacted on-chain.
