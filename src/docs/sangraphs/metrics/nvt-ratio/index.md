---
title: Sangraphs - NVT Ratio
author: Santiment Team
---

*This metric can be found on the* [*\'Ethereum & ERC20 MVRV\'
page*](https://data.santiment.net/d/4BpXRALik/05-ethereum-and-erc20-mvrv?orgId=1)
*in SANgraphs, along with the MVRV metric which is described in* [*this
article*](/intercom-articles/metrics-explained/sangraphs/metric-mvrv-ratio)*.*

The \'Network Value-to-Transaction\' (NVT) ratio is an asset valuation
metric similar to the P/E ratio traditionally used in equity markets to
gauge a stock's growth potential.

The P/E or \'Price-to-Earnings\' ratio is calculated by dividing the
company's current price per share with its earnings per share. A high
P/E could mean a stock's price is high relative to its earnings and
therefore possibly overvalued. Conversely, a low P/E might indicate that
the current stock price is low relative to earnings and possibly
undervalued.

As crypto assets are not companies we don't know their earnings, so
Transaction Volume is often used as a proxy for the blockchain's
underlying value.

As such, the typical formula for NVT is the following:

*NVT = Daily Market Cap / Daily Transaction Volume*

Since Daily Trx Volume gets rather noisy and often includes duplicate
transactions, it's not an ideal measure of a network's economic
activity. That's why at Santiment we calculate NVT using Daily Trx
Volume, but also by using Daily Token Circulation instead, which filters
out excess transactions and provides a cleaner overview of a
blockchain's daily transaction throughput. You'll find both approaches
plotted on the graph and can choose which one you prefer.

As with P/E, a high NVT indicates that an asset's network valuation is
higher than the value being transmitted on the network. In other words,
the network is expensive relative to how much value it moves, signaling
a potentially overvalued asset.

Conversely, a low NVT denotes an asset that is cheaper per unit of
on-chain transaction volume, signaling a potentially undervalued asset.

NVT is often used as a long-term indicator of an asset's price trends,
rather than a day-to-day valuation metric.
