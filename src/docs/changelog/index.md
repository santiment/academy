---
title: Development changelog
description: Keep track of development updates, new product features and other items from our changelog
author: Santiment Team
---

Keep track of development updates, new product features and other items from our changelog.
We update this page every two weeks.

## July 2020

**`Sanbase`**:
  * New metric | Top transactions table (It's connected metric with Transaction volume)
  * New metric | Bitmex Basis Ratio
  * New metric | Holders distribution (You can add more than one Holders Distributions in your chart layout)
  * You can apply any chart layout from your watchlist
  * We add settings for the watermark for our charts.
  * Webhooks for alerts works with Discord.
  - New metric | Sentiment Weighted
  - On Alerts page we add the featured list of alerts. It's a good examples of usage
  - Add keyboard navigation in all search by assets. ![](https://media.giphy.com/media/lqLdJ505muGP88kXJs/giphy.gif)
  - Fix when search list was empty
  - Add formatting for Exchange Flow Balance metric
  - Fixes for tooltip UX
  - Fixes for Alpha reports
  - Fixes Login/Create an account Flow
  - Shift swapped to CMD + Click for Transactions Table
  - The huge update for Santiment Charts. There is much more flexibility to setup your own dashboard based on Santiment metrics.


## June 2020

**`Sanbase`**:
  * Webhooks for Alerts
  * Dev activity on Desktop now looks better (default MA 7 days)
  * MVRV Long/Short looks better. (Area lines, percents instead of ratio)
  * Add Sentiment Metrics (Finally on Santiment App we have Sentiments :smile: )
  * Add Derivatives Metrics (For BTC & ETH)
  * We rebuild fullscreen for the Chart. It's bigger now
  * Chart becomes bigger
  * Grid on the Chart becomes more granular
  * Chart layouts - small fixes
  * You can open our chart tool right from navigation now
  * Add Frequencies for each metric in "Explanation" sidebar
  * Add Price in BTC & ETH
  * New Alert: MVRV Intraday
  * Many fixes for links and docs
  * New minimap feature: https://www.loom.com/share/8362041e6551404ba7dd092d125dac5d
  * New Select&ZoomIn feature for Sanbase Charts
  * You can edit the calendar as a text.

## May 2020

- **`Sanbase`**: You can setup manually amount of top holders for next metrics

![top-holders](top-holders.png)

- **`Sanbase`**: Add categories for Quick Search

![search](search-categories.png)

- **`Sanbase`**: All projects now have Social Volume metric available.

- **`Sanbase`**: Our chart has 2 Axis support now.

![search](axis.png)

- **`Sanbase`**: Social tool has better suggestions. And some small changes for better UX.

![search](social-suggestions.png)


## April 2020

- **`Sanbase`**: Social tool has a new feature. "Comparing". You can compare any topics and assets by social volume and social dominance.

![search](social-compare.png)

- **`Sanbase`**: You can save your ideas with new feature "templates" and manage them in profile

![search](templates.png)
![search](templates-profile.png)


- **`Sanbase`**: We have a new flow for selecting a datetime interval

![search](calendar.png)

- **`Sanbase`**: You can add an alert for any "text" topic in our social tool.

![search](socsalerts.png)

- **`Sanbase`**: We add very specific metric for Ethereum. Say welcome to Miners Balance

![miners balance](minersBalance.png)

- **`Sanbase`**: New Top Holders metric on Sanbase Charts

![top holders](topHolders.png)

## March 2020

- **`Sanbase`**: We add Twitter % changes 24h, 7d

![twitter changes](twitterChanges.png)

- **`Sanbase`**: You can create alerts right from the chart with shortcuts.

![signals on chart](signalsOnChart.png)

- **`Sanbase`**: ICO price can be visible right on the chart

![ico price](icoPrice.png)

- **`Sanbase`**: Studio supports comparison our metrics and assets now

![comparing](comparing.png)

- **`Sanbase`**: We add a better explanation for our metrics on •Studio•

![explanations](explanations.png)

## February 2020

- **`Sanbase`**: We add time bounds metrics

![timebounds](timebounds.png)

- **`Sansheets`**: `=SAN_MEAN_DOLLAR_INVESTED_AGE` function has been published

- **`Sanbase`**: New look of Santiment Studio. Our chart tool is much ease to use now.
  ![charts](charts.png)

- **`Sanbase`**: First time to see our new feed. Where you can find latest hot events, insights and anomalies in the crypto world.
  And now Santiment has own Indices.
  ![feed](feed.png)

- **`Sanbase`**: It's time to pay with crypto for our tools. https://app.santiment.net/pricing

- **`Sanbase`**: We've updated Sanbase's user profile. And you can track followers.
  ![profile](profile.png)

## January 2020

- **`Sanbase`**: We make fresh new chart's engine for our services. Now our charts become much faster. You can try it on our desktop web app - https://app.santiment.net/

- **`Sanbase`**: Better mobile experience is here. Also you can open our chart in `fullscreen` mode.
  ![mdp](mdp.png)

* **`Sansheets`**:

1. Removed `SAN_NEWS` function.
2. Change order of returned data of `SAN_OHLC` function.
   <br/>

- **`Sanbase/Insights`**: Now you can see an amount of comments per Insight
  ![total_comments](total_comments.png)

- **`Sanbase`**: Small changes of our navigation super menu
  ![insights_dropdown](insights_dropdown.png)

## December 2019

- **`Sanbase`**: Our profile page is live - https://app.santiment.net/profile/120

- **`Sanbase/Insights`**: Let's talk about crypto in our new comments
  ![comments](comments.png)

- **`Sanbase`**: User can toggle the fullscreen mode for our chart.

<br/>

## November 2019

- **`Sanbase`**: Now you can check top trending words on our charts -
  ![trends-chart](trends-chart.png)
  Just hovering the chart and moving the mouse pointer. This works with Social Volume metric.
- **`Sanbase`**: You can use the new search field if you looking for some metric
  ![metrics-search](metrics-search.png)
- **`Sanbase/Sansheets/API`**: Finally we have unified header for all our services (except santiment.net)
  ![header](header.png)
- **`Sanbase Graphs`**: Graphs is the part of Sanbase account and user flow
  ![graphs](graphs.png)

- **`Sansheets`**: New function introduced `=SAN_FUNCTIONS` - returns a list of all the available san functions.

- **`Sanbase.Insights`** Insights has a new widget with a list of assets in this insight.
  ![insights](insights.png)

- **`Sanbase/Sansheets/API`**: Increased the historical access for paid plans:
  Sanbase/Sansheets: Pro plan now gives 5 years of access instead of 3
  API: Basic plan gives 3 years instead of 6 months, Pro: 7 years instead of 1.5 years
- **`Sanbase`**: Now you can download CSV data from our Sanbase's chart tool.
  ![csv](csv.png)

- **`Sansheets`**: Some functions has been introduced:

```
 SAN_DAILY_AVG_MARKETCAP
 SAN_DAILY_CLOSING_MARKETCAP
 SAN_MEAN_REALIZED_PRICE
 SAN_MVRV_LONG_SHORT_DIFF
 SAN_MEAN_AGE
 SAN_VELOCITY
 SAN_EXCHANGE_INFLOW
 SAN_EXCHANGE_OUTFLOW
 SAN_EXCHANGE_BALANCE
 SAN_AGE_DESTROYED
```

<br/>

## October 2019

- **`Sanbase`**: New weekly report for your watchlists. Now you can get hot info about assets from your watchlist in your inbox.
  ![weekly](weekly.png)

- **`Sanbase`**: New beta feature. You can setup simple pricing signal on the chart tool.
  ![signals-on-chart](signals-on-chart.png)

* **`Sanbase`**: Since today on-chain data is available on the charts for EOS
  (discontinued in May 2020), Ripple and Binance Chain. Binance Chain is
  available under the `Binance Native` name and `binance-coin-native` slug. The
  old `Binance/binance-coin` is still pointing to the ERC20 contract. Not all
  the available data is currently displayed, the frontend team is working on
  that.
