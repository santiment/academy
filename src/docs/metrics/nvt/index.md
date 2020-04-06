---
title: NVT
author: Santiment Team
---

_This metric can be found on the_ [_`Ethereum & ERC20 MVRV`
page_](https://data.santiment.net/d/4BpXRALik/05-ethereum-and-erc20-mvrv?orgId=1)
_in Sandata, along with the MVRV metric which is described in_ [_this
article_](/metrics/mvrv)_._

The `Network Value-to-Transaction` (NVT) ratio is an asset valuation
metric similar to the P/E ratio traditionally used in equity markets to
gauge a stock's growth potential.

The P/E or `Price-to-Earnings` ratio is calculated by dividing the
company's current price per share with its earnings per share. A high
P/E could mean a stock's price is high relative to its earnings and
therefore possibly overvalued. Conversely, a low P/E might indicate that
the current stock price is low relative to earnings and possibly
undervalued.

As crypto assets are not companies we don't know their earnings, so
Transaction Volume is often used as a proxy for the blockchain's
underlying value.

As such, the typical formula for NVT is the following:

_NVT = Daily Market Cap / Daily Transaction Volume_

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

### SanAPI

Returns the NVT (Network-Value-to-Transactions) Ratio at each interval
over a given time period. Projects are referred to by a unique
identifier (slug).

NVT can be applied to crypto in multiple ways. This implementation
takes the market cap of an asset as the network value and either the
Token Circulation or the Transaction Volume as a measurement of
Transactions, hence two returns.

[**Run in
explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20nvtRatio(from%3A%20%222019-05-10T00%3A00%3A00.000Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22ethereum%22%2C%20to%3A%20%222019-06-23T00%3A00%3A00.000Z%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20nvtRatioCirculation%0A%20%20%20%20nvtRatioTxVolume%0A%20%20%7D%0A%7D%0A&variables=>)

```js
{
  nvtRatio(from: "2019-05-10T00:00:00.000Z", interval: "1d", slug: "ethereum", to: "2019-06-23T00:00:00.000Z") {
    datetime
    nvtRatioCirculation
    nvtRatioTxVolume
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{nvtRatio(from:\"2019-05-10T00:00:00.000Z\",interval:\"1d\",slug:\"ethereum\",to:\"2019-06-23T00:00:00.000Z\"){datetime, nvtRatioCirculation, nvtRatioTxVolume}}" }' \
  https://api.santiment.net/graphql
```
