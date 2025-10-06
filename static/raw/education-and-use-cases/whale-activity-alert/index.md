---
title: Sanbase Alerts Example - Whale Activity
author: Daria Karpova
date: 2022-04-04
---

Whale activity consists of several related metrics; [Whale transaction volume](https://academy.santiment.net/metrics/whale-transaction-volume/), [Whale transaction count](https://academy.santiment.net/metrics/whale-transaction-count/#description), [Combined Balance of Holders](https://academy.santiment.net/metrics/supply-distribution/combined-balance-of-holders/), [Top Holders](https://academy.santiment.net/metrics/top-holders/#top-holders-balance) and [Amount in Top Holders](https://academy.santiment.net/metrics/amount-in-top-holders/). By closely monitoring the actions of major market players (which, depending on the asset, could be addresses worth $1M or more), you can gain insights to guide your own trading decisions.

Many traders, understandably, are cautious about making decisions during volatile market periods. The risk of buying or selling at inopportune times is significant: will the prices fall? Will they rebound?

At times, the market may appear calm, only for a whale to make a move and rapidly shift the landscape.

Consider the following example.

Between February and March 2021, we observed that whale activity (represented in pink and orange) for YFI often signaled price peaks (shown in green), which were invariably followed by substantial drops. However, starting from April, whale activity and price began to diverge.

![whale-chart](image1.png)

So, what happened next?

In May 2021, YFI's price seemed to be steadily increasing, while whale activity remained stable. Then, on May 8, we noticed a sudden surge in transactions from whales, which coincided with another price peak, followed by a dramatic price drop.

![whale-chart-2](image2.png)

A wise trader could have considered the sudden surge as a possible reason to exit. Though how you choose to act on this information is entirely up to you, it can be just one additional data point that can inform a very valuable decision. Remember, knowledge is power, and timely knowledge is even more so, especially when it comes to trading. Spotting the surge manually requires a lot of manual effort, the smart trader utilizes the alerts feature.

## Setting Up a Whale Transaction Alert

In this guide, we will walk you through the process of setting up a Whale Transaction Alert.

## Step 1: Navigate to Alerts and Choose an Asset to Monitor

You can either select an asset you wish to monitor or use an asset from your existing watchlist.

![alert-select-asset](image3.png)

## Step 2: Selecting Metrics

Navigate to the metrics section and choose your preferred 'Whale Transactions' from the On-Chain metrics set.

![alert-select-metrics-1](image4.png)

![alert-select-metrics-2](image5.png)

Examine the chart thoroughly. In this example, the alert would have been triggered 79 times over a three-month period, which could be excessive.

## Step 3: Fine-Tune Your Conditions

Adjust your conditions until you're satisfied with the potential number of alerts. For example, you might want to switch to the percentage metric that moves up or down compared to the previous 7 days.

In the example below, we've adjusted the conditions to yield a total of 21 alerts over a 3-month period.

![alert-select-condition](image6.png)

## Step 4: Choose Your Preferred Notification Methods and Frequency

![alert-select-notifications](image7.png)

## Step 5: Confirm Alert Name and Create Alert

Ensure you are satisfied with the name of your alert. Once confirmed, click on the 'Create Alert' button. 

![alert-select-condition](image8.png)

Congratulations, you have successfully created an alert!