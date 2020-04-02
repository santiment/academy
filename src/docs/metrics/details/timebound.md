---
title: Timebound
author: Ivan
date: 2020-04-02
---

- [Definition](#definition)
- [Examples](#price-latency)
- [Development Activity Latency](#development-activity-latency)

## Definition

Normally metrics are computed with taking into account all coins/tokens.

For some metrics it makes sense to also compute a derivation of them on the
subset of coins/tokens, that were moved at least once no longer than X
days/years ago.

UTXO blockchain naturally define the age of a coin, but this is not true for
account-based blockchains. In order to define the age of a coin in account-based
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
- `_10y` - 10 yers

Examples:

- mvrv_usd_30d - The MVRV metric computed by considering only the coins/tokens
  that were active in the past 30 days.
- circulation_3y - The number of tokens that were transacted at least once in
  the past 3 years. If a coin/token is considered dead/lost (sent to graveyard
  address, owner lost private key, etc.) such circulation can serve as an
  approximation of total supply minus lost/dead coins.

## Examples

### circulation_1d

The `circulation_1d` metric counts the number of coins/tokens that participated
in on-chain transactions in the past 24 hours.

In one particular day Alice sends 20 ETH to Bob, Bob sends 10 ETH to Charlie and
Charlie sends 5 ETH to Dean.

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

This can be explained as having twenty \$1 bills. Alice sends all of them to
Bob, Bob sends 10 of the received bills to Charlie and Charlie sends 5 of them
to Dean. There are 20 dollars in circulation total in this case.

One of the most useful properities of Circulation is that it is immune to mixers
and gives a much better view of the actual amount of tokens that are being
transacted on-chain.
