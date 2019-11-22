---
title: Functions we offer
author: Santiment team
date: 2019-11-04
---

## SAN\_ACTIVE\_ADDRESSES

##### SAN\_ACTIVE\_ADDRESSES(projectSlug, from, to) ⇒ <code>Array</code>
Returns the active addresses for the specified asset, during a given time interval.
Active Addresses" refers to the number of unique addresses that
participated in transactions on a blockchain.

- **Kind**: global function
- **Returns**: <code>Array</code> - of daily active addresses numbers.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_ACTIVE\_DEPOSITS

##### SAN\_ACTIVE\_DEPOSITS(projectSlug, from, to) ⇒ <code>Array</code>
Returns number of unique deposit addresses that have been active for a project.

- **Kind**: global function
- **Returns**: <code>Array</code> - of deposit address numbers.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_AGE\_DESTROYED

##### SAN\_AGE\_DESTROYED(projectSlug, from, to) ⇒ <code>Array</code>
Returns the token's age destroyed

- **Kind**: global function
- **Returns**: <code>Array</code> - of age destroyed values.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_ALL\_PROJECTS

##### SAN\_ALL\_PROJECTS() ⇒ <code>Array</code>
Returns an array of all assets for which Santiment has data.
Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
ETH spent in the last 7 days, ETH spent in the last day.

- **Kind**: global function
- **Returns**: <code>Array</code> - of all projects.
- **Customfunction**:
## SAN\_DAILY\_AVG\_MARKETCAP

##### SAN\_DAILY\_AVG\_MARKETCAP(projectSlug, from, to, currency) ⇒ <code>Array</code>
Returns the daily average marketcap.

- **Kind**: global function
- **Returns**: <code>Array</code> - of daily average marketcaps.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD |

## SAN\_DAILY\_CLOSING\_MARKETCAP

##### SAN\_DAILY\_CLOSING\_MARKETCAP(projectSlug, from, to, currency) ⇒ <code>Array</code>
Returns the daily closing marketcap.

- **Kind**: global function
- **Returns**: <code>Array</code> - of daily closing marketcaps.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD |

## SAN\_DAILY\_CLOSING\_PRICE

##### SAN\_DAILY\_CLOSING\_PRICE(projectSlug, day) ⇒ <code>number</code>
Returns the closing price for a given day.

- **Kind**: global function
- **Returns**: <code>number</code> - closing price.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| day | <code>date</code> | The date to fetch the data. Example: DATE(2018, 9, 20) |

## SAN\_DEV\_ACTIVITY

##### SAN\_DEV\_ACTIVITY(projectSlug, from, to) ⇒ <code>Array</code>
Returns a list of dev activity for a given slug and time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of dev activity.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_EMERGING\_TRENDS

##### SAN\_EMERGING\_TRENDS(size, from, to) ⇒ <code>Array</code>
Returns list of emerging trends and their corresponding trend score.

- **Kind**: global function
- **Returns**: <code>Array</code> - of trending words and their score.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | An integer showing how many words should be included in the top list (max 100). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_ERC20\_PROJECTS

##### SAN\_ERC20\_PROJECTS() ⇒ <code>Array</code>
Returns an array of all ERC20 assets for which Santiment has data.
Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
ETH spent in the last 7 days, ETH spent in the last day and main contract address.

- **Kind**: global function
- **Returns**: <code>Array</code> - of all ERC20 projects.
- **Customfunction**:
## SAN\_ETH\_SPENT\_OVER\_TIME

##### SAN\_ETH\_SPENT\_OVER\_TIME(projectSlug, from, to) ⇒ <code>Array</code>
Returns ETH spent for each interval from the project's team wallet and time period

- **Kind**: global function
- **Returns**: <code>Array</code> - of the ETH, that was spent over a given period of time
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_ETH\_TOP\_TRANSACTIONS

##### SAN\_ETH\_TOP\_TRANSACTIONS(projectSlug, from, to, limit, transactionType) ⇒ <code>Array</code>
Returns top ETH transactions for project's team wallets.

- **Kind**: global function
- **Returns**: <code>Array</code> - of top transactions
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| limit | <code>number</code> | The limit of transactions to be shown. |
| transactionType | <code>string</code> | Available transaction types: ALL, IN, OUT |

## SAN\_EXCHANGE\_BALANCE

##### SAN\_EXCHANGE\_BALANCE(projectSlug, from, to) ⇒ <code>Array</code>
Returns the exchange balance.

- **Kind**: global function
- **Returns**: <code>Array</code> - of exchange balances.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_EXCHANGE\_FUNDS\_FLOW

##### SAN\_EXCHANGE\_FUNDS\_FLOW(projectSlug, from, to) ⇒ <code>Array</code>
Returns the difference between the tokens that were deposited minus
the tokens that were withdrawn from an exchange for a given slug and time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of token deposit/withdraw differences.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_EXCHANGE\_INFLOW

##### SAN\_EXCHANGE\_INFLOW(projectSlug, from, to) ⇒ <code>Array</code>
Returns the exchange inflow.

- **Kind**: global function
- **Returns**: <code>Array</code> - of exchange inflows.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_EXCHANGE\_OUTFLOW

##### SAN\_EXCHANGE\_OUTFLOW(projectSlug, from, to) ⇒ <code>Array</code>
Returns the exchange outflow.

- **Kind**: global function
- **Returns**: <code>Array</code> - of exchange outflows.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_FUNCTIONS

##### SAN\_FUNCTIONS() ⇒ <code>Array</code>
Returns all available functions.

- **Kind**: global function
- **Returns**: <code>Array</code> - of function names.
- **Customfunction**:
## SAN\_GAS\_USED

##### SAN\_GAS\_USED(projectSlug, from, to) ⇒ <code>Array</code>
Returns used Gas by a blockchain.
When you send tokens, interact with a contract or do anything else on the blockchain,
you must pay for that computation. That payment is calculated in Gas.

- **Kind**: global function
- **Returns**: <code>Array</code> - of quantities of gas used.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_GITHUB\_ACTIVITY

##### SAN\_GITHUB\_ACTIVITY(projectSlug, from, to) ⇒ <code>Array</code>
Returns a list of github activity for a given slug and time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of github activity.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_HISTORICAL\_BALANCE

##### SAN\_HISTORICAL\_BALANCE(projectSlug, from, to, address) ⇒ <code>Array</code>
Returns the historical balance for a given ERC20 or ETH address.

- **Kind**: global function
- **Returns**: <code>Array</code> - of balances.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| address | <code>string</code> | ERC20 or ETH address. |

## SAN\_HISTORY\_TWITTER\_DATA

##### SAN\_HISTORY\_TWITTER\_DATA(projectSlug, from, to) ⇒ <code>Array</code>
Returns the historical count of twitter followers.

- **Kind**: global function
- **Returns**: <code>Array</code> - followers count over time.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_LATEST\_PRICE

##### SAN\_LATEST\_PRICE(projectSlug, currency) ⇒ <code>number</code>
Returns the latest price for a given asset in a desired currency.

- **Kind**: global function
- **Returns**: <code>number</code> - latest price.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| currency | <code>string</code> | The currency in which the data should be presented. Either "USD" or "BTC". |

## SAN\_MEAN\_AGE

##### SAN\_MEAN\_AGE(projectSlug, from, to) ⇒ <code>Array</code>
Returns the token's mean age.

- **Kind**: global function
- **Returns**: <code>Array</code> - of mean age values.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_MEAN\_REALIZED\_PRICE

##### SAN\_MEAN\_REALIZED\_PRICE(projectSlug, from, to, currency, timeBound) ⇒ <code>Array</code>
Returns the mean realized price.

- **Kind**: global function
- **Returns**: <code>Array</code> - of mean realized prices.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD |
| timeBound | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days. |

## SAN\_MINERS\_BALANCE

##### SAN\_MINERS\_BALANCE(projectSlug, from, to) ⇒ <code>Array</code>
Returns miners balances over time
Currently only ETH is supported.

- **Kind**: global function
- **Returns**: <code>Array</code> - of balances.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_MINING\_POOLS\_DISTRIBUTION

##### SAN\_MINING\_POOLS\_DISTRIBUTION(projectSlug, from, to) ⇒ <code>Array</code>
Returns the distribution of miners between mining pools.
What part of the miners are using top3, top10 and all the other pools.
Currently only ETH is supported.

- **Kind**: global function
- **Returns**: <code>Array</code> - of distribution ratios.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_MVRV\_LONG\_SHORT\_DIFF

##### SAN\_MVRV\_LONG\_SHORT\_DIFF(projectSlug, from, to, currency) ⇒ <code>Array</code>
Returns the difference between MVRV.

- **Kind**: global function
- **Returns**: <code>Array</code> - of MVRV differences.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD |

## SAN\_MVRV\_RATIO

##### SAN\_MVRV\_RATIO(projectSlug, from, to, currency, timeBound) ⇒ <code>Array</code>
Returns MVRV(Market-Value-to-Realized-Value).

- **Kind**: global function
- **Returns**: <code>Array</code> - of MVRV ratios.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD |
| timeBound | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days. |

## SAN\_NETWORK\_GROWTH

##### SAN\_NETWORK\_GROWTH(projectSlug, from, to) ⇒ <code>Array</code>
Returns the number of new addresses being created on the project network
for a given slug and time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of number of new addresses.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_NEWS

##### SAN\_NEWS(tag, from, to, size) ⇒ <code>Array</code>
Returns the news for given word

- **Kind**: global function
- **Returns**: <code>Array</code> - of news.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>string</code> | Project name, ticker or other crypto related words. |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| size | <code>number</code> | Size limit of the returned results. Default is 10. |

## SAN\_NVT\_RATIO

##### SAN\_NVT\_RATIO(projectSlug, from, to) ⇒ <code>Array</code>
Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Transaction Volume)
Since Daily Transaction Volume gets rather noisy and easy to manipulate
by transferring the same tokens through couple of addresses over and over again,
it’s not an ideal measure of a network’s economic activity.
That’s why we calculate NVT using Daily Trx Volume, but also by using Daily Token Circulation instead,
which filters out excess transactions and provides a cleaner overview of a blockchain’s
daily transaction throughput.

- **Kind**: global function
- **Returns**: <code>Array</code> - of NVT ratios
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_OHLC

##### SAN\_OHLC(projectSlug, from, to) ⇒ <code>Array</code>
Returns the open, high, low, and close price values for the specified asset,
during a given time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of open, high, low, and close price values.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_PRICE\_ABSOLUTE\_CHANGE

##### SAN\_PRICE\_ABSOLUTE\_CHANGE(projectSlug, from, to) ⇒ <code>number</code>
Returns the absolute price change for the specified asset, during a given time interval.

- **Kind**: global function
- **Returns**: <code>number</code> - absolute price change.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_PRICE\_PERCENT\_CHANGE

##### SAN\_PRICE\_PERCENT\_CHANGE(projectSlug, from, to) ⇒ <code>number</code>
Returns the percent price change for the specified asset, during a given time interval.

- **Kind**: global function
- **Returns**: <code>number</code> - price change in percent.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_PRICE\_VOLUME\_DIFF

##### SAN\_PRICE\_VOLUME\_DIFF(currency, projectSlug, from, to) ⇒ <code>Array</code>
Returns the price-volume difference technical indicator for a given asset,
currency and time interval. This indicator measures the difference in trend between price and volume,
specifically when price goes up as volume goes down. Currency can be displayed in either USD or BTC.

- **Kind**: global function
- **Returns**: <code>Array</code> - of price-volume difference technical indicator.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| currency | <code>string</code> | The currency in which the data should be presented. Either "USD" or "BTC". |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_PRICES

##### SAN\_PRICES(projectSlug, from, to) ⇒ <code>Array</code>
Returns the prices for the specified asset, during a given time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of prices.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_PROJECT\_FUNDAMENTALS

##### SAN\_PROJECT\_FUNDAMENTALS(projectSlug) ⇒ <code>Array</code>
Fetch fundamentals for a specified project.

- **Kind**: global function
- **Returns**: <code>Array</code> - of project details.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |

## SAN\_PROJECT\_SOCIAL\_DATA

##### SAN\_PROJECT\_SOCIAL\_DATA(projectSlug) ⇒ <code>Array</code>
Returns social data for a specified project.

- **Kind**: global function
- **Returns**: <code>Array</code> - of project's social data.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |

## SAN\_REALIZED\_VALUE

##### SAN\_REALIZED\_VALUE(projectSlug, from, to, currency, timeBound) ⇒ <code>Array</code>
Returns Realized value - sum of the acquisition costs of an asset located in a wallet.
The realized value across the whole network is computed by summing the realized values
of all wallets holding tokens at the moment.

- **Kind**: global function
- **Returns**: <code>Array</code> - of realized values.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD |
| timeBound | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days. |

## SAN\_SOCIAL\_DOMINANCE

##### SAN\_SOCIAL\_DOMINANCE(projectSlug, from, to, source) ⇒ <code>Array</code>
Returns the % of the social dominance a given project has over time in a given social channel.

- **Kind**: global function
- **Returns**: <code>Array</code> - of dominance.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| source | <code>string</code> | The source, which the dominance is calculated from. Sources are: ALL, TELEGRAM, REDDIT, DISCORD, PROFESSIONAL_TRADERS_CHAT |

## SAN\_SOCIAL\_VOLUME

##### SAN\_SOCIAL\_VOLUME(projectSlug, from, to, socialVolumeType) ⇒ <code>Array</code>
Returns a list of mentions count for a given project and time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of mention counts.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| socialVolumeType | <code>string</code> | The source of mention counts, one of the following: "PROFESSIONAL_TRADERS_CHAT_OVERVIEW", "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "DISCORD_DISCUSSION_OVERVIEW" |

## SAN\_SOCIAL\_VOLUME\_PROJECTS

##### SAN\_SOCIAL\_VOLUME\_PROJECTS() ⇒ <code>Array</code>
Returns a list of project slugs for which there is social volume data.

- **Kind**: global function
- **Returns**: <code>Array</code> - of social volume projects.
- **Customfunction**:
## SAN\_TOKEN\_AGE\_CONSUMED

##### SAN\_TOKEN\_AGE\_CONSUMED(projectSlug, from, to) ⇒ <code>Array</code>
Returns amount of tokens changing addresses, multiplied by the number of blocks
created on the blockchain since they last moved.
Spikes are signal of a large amount of tokens moving after being idle for an extended period of time.

Grouping by interval works by summing all records in the interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of token age consumed numbers.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_TOKEN\_CIRCULATION

##### SAN\_TOKEN\_CIRCULATION(projectSlug, from, to, timeBound) ⇒ <code>Array</code>
Returns token circulation for a given slug and time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of token circulation values.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| timeBound | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days. |

## SAN\_TOKEN\_TOP\_TRANSACTIONS

##### SAN\_TOKEN\_TOP\_TRANSACTIONS(projectSlug, from, to, limit) ⇒ <code>Array</code>
Returns top token transactions for a given slug

- **Kind**: global function
- **Returns**: <code>Array</code> - of top transactions
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| limit | <code>number</code> | The limit of transactions to be shown. |

## SAN\_TOP\_HOLDERS\_PERCENT\_OF\_TOTAL\_SUPPLY

##### SAN\_TOP\_HOLDERS\_PERCENT\_OF\_TOTAL\_SUPPLY(projectSlug, from, to, numberOfHolders) ⇒ <code>Array</code>
Returns the top holders' percent of total supply - in exchanges, outside exchanges and combined.

- **Kind**: global function
- **Returns**: <code>Array</code> - followers count over time.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| numberOfHolders | <code>number</code> | Take top number of holders into account when calculating. |

## SAN\_TRANSACTION\_VOLUME

##### SAN\_TRANSACTION\_VOLUME(projectSlug, from, to) ⇒ <code>Array</code>
Gets the transaction volume for the specified asset, during a given time interval.
Transaction Volume" refers to the total number of tokens within all
transfers that have occurred on a blockchain.

- **Kind**: global function
- **Returns**: <code>Array</code> - of transaction volumes.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

## SAN\_VELOCITY

##### SAN\_VELOCITY(projectSlug, from, to) ⇒ <code>Array</code>
Returns the token's velocity.

- **Kind**: global function
- **Returns**: <code>Array</code> - of token velocity values.
- **Customfunction**:

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

