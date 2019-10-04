const Markdown = `# Daily Active Addresses

![Daily Active Addresses for
Zilliqa](https://santiment-discourse-uploads.s3.dualstack.eu-central-1.amazonaws.com/original/1X/0ce7d2cf9b9322a25fcc13c3a5e2ccedd59b14d0.png)

## Definition

The number of distinct addresses that participated in a transfer for
the given [asset](/asset/) in any given day. Each
address is counted only once for the day. Both the senders and the
receivers of the asset are counted.

## Measuring Unit
Addresses

## Frequency - Daily

One value is computed for each day and each asset. The day is taken
according to the UTC timezone. So for example the value of the metric
for BTC and June 10, 2019 will contain the number of distinct
addresses for transfers that happened between 2019-06-10 00:00:00 UTC
and 2019-06-10 23:59:59 UTC.

## Computation time

The computation starts around 00:30 UTC each day. The final value of
this metric is generally available around 00:40 UTC.

We also compute intermediate values. That means the number of
addresses from the start of the day in UTC until the time the
computation is ran. The intermediate computations start at 06:30 UTC,
12:30 UTC, 18:30 UTC. The intermediate values are generally available
around 10 minutes after the computation starts.

*Note:* Since our Bitcoin latency is generally larger than 30 minutes
and can go up to 2 hours, the value computed at 00:30 UTC might not be
final. In that case the value computed at 6:30 UTC will be final.

## [Latency](/metric-latency/)

For most assets latency is around 40 minutes. For Bitcoin the latency
for the final value is usually 6 hours and 40 minutes. At 00:40 UTC
you will get an approximate value which will exclude the addresses in
the last up to 3 blocks.

## Available assets

This metric is computed for Bitcoin, Ethereum, EOS, Ripple and all
ERC20 tokens.

## How to access

### [SANGraphs](https://data.santiment.net)

You can access the metric on the [On-chain metrics
V2](https://data.santiment.net/d/iYmn0EGZk/00-on-chain-metrics-v2?utm_source=discourse&amp;utm_medium=post&amp;utm_campaign=reference&amp;utm_content=https://community.santiment.net/t/daily-active-addresses/2652)
dashboard.

### [Sanbase](https://app.santiment.net)

The metric is available on our charts:
<iframe frameborder="0" height="340" src="https://app.santiment.net/chart?from=2019-04-02T21%3A00%3A00.000Z&interval=12h&isShowAnomalies=true&metrics=historyPrice,mean_dollar_invested_age&scale=time&slug=maker&title=Maker%20%28MKR%29&to=2019-10-03T21%3A00%3A00.000Z&viewOnly=true"></iframe>

### [Neuro](https://neuro.santiment.net/)

The metric is available on Neuro

### SANSheets (TODO)

## Availability

|           | Free               | Basic              | Pro                | Premium            | Enterprise         |
| --------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| Sanbase   | ✔ | ✔ | ✔ | ✔ | ✔ |
| SANGraphs | ✔ | ✔ | ✔ | ✔ | ✔ |
| Neuro     | ✔ | ✔ | ✔ | ✔ | ✔ |
| SANSheets | ✔ | ✔ | ✔ | ✔ | ✔ |
`

export default Markdown
