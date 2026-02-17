---
title: Charts
author: David U.
date: 2026-02-09
description: A handbook for the Sanbase charts system
---

# The Charts Handbook

[↑ Back to top](#the-charts-handbook)

## Table of Contents

- [Overview](#overview)
    - [Purpose](#purpose)
    - [What's New](#whats-new)
- [Getting Started](#getting-started)
    - [Selecting an Asset](#selecting-an-asset)
    - [Chart Display Settings](#chart-display-settings)
    - [The Sidebar](#the-sidebar)
    - [Adding Metrics](#adding-metrics)
    - [Combining Metrics](#combining-metrics)
- [Step-by-Step Guides](#step-by-step-guides)
    - [Formula Interface Guide](#formula-interface-guide)
    - [Creating and Backtesting Strategies](#creating-and-backtesting-strategies)
- [Before and After Comparison Images](#before-and-after-comparison-images)

## Overview

The Charts upgrade is live! Here’s all you need to know.

### Purpose

We've upgraded our [chart system](https://app.santiment.net/charts) to deliver a more powerful, intuitive, and user-friendly experience for cryptocurrency analysis and trading. This upgrade significantly improves the overall user experience (UX) through a redesigned interface and updated controls. It equips our community of traders and investors with cutting-edge capabilities to more easily navigate volatile crypto markets, spot opportunities, and execute data-driven strategies effectively.

### What’s New

- Chart zoom and view controls updated to be more intuitive, aligning with other popular chart tools.
- New custom formula interface to replace combined metrics and offer more abilities for advanced users.
- Sidebar for quick access to recently viewed or saved chart layouts.
- Metrics selection now completely contained within the charts themselves, not the sidebar like before.
- Global asset selection control change & ability to lock metrics

## Getting Started

This section is broken into subsections with explanations, screenshots, and animated images for how to do various actions.

### Selecting an Asset

When opening charts you will see a single asset/metric combination on the top left corner: BTC, price. Click on BTC and a menu will appear where you may select an asset of your choice.

![changeasset.gif](attachment:85e25173-4ff8-48e6-b62d-342839e6e548:changeasset.gif)

### Chart Display Settings

1. Changing color and other display settings for a specific metric: simply click on the metric and utilize the popup menu.
    
    ![displaysettingsnewcharts.gif](attachment:7813e7a5-bf65-4f8c-ab4b-03d524f24dbe:displaysettingsnewcharts.gif)
    
2. New Drag mode to adjust the scale of the chart on both x and y axis or to move the current view left or right along the timeline.
    
    ![drag mode.gif](attachment:f8adfe76-7b45-46c3-b4d6-44289a54a094:drag_mode.gif)
    
3. Shift mode lets you quickly analyze percentage changes in price, volume, or other metrics directly on the chart.
    
    ![shift mode.gif](attachment:993a19f1-ec31-457c-a417-1632bc5a98f9:shift_mode.gif)
    
4. Zoom mode let’s you select and zoom into a specific time range within your current view.
    
    ![zoommode.gif](attachment:73192f32-8df5-40a2-a4c3-da6e2921d66c:zoommode.gif)
    
5. Hide metrics from the chart using the eye icon to the right of each metric listed within the chart on the top right.
    
    ![chrome_2026-01-20_15-53-51.png](attachment:30ee41f1-4950-4442-8fd7-615dbb4c87ec:chrome_2026-01-20_15-53-51.png)
    
6. Timeline below the chart allows you to select the time-period manually with sliders.
    
    ![timelineslider.gif](attachment:f444f097-82d2-410c-b28f-48fcf9908480:timelineslider.gif)
    
7. Global time and granularity scale selector is at the very bottom, it adjusts all charts and metrics contained within the layout.
    
    ![image.png](attachment:e7e73181-ed57-4c1a-9ee4-a97fad53e1a7:image.png)
    
8. Hovering with your mouse over the chart displays a small menu at the bottom center of the chart. This allows you to add or remove charts and to move them up or down within the layout.
    
    ![image.png](attachment:0bb14e31-cb3b-464b-b63e-85441f12ff9b:image.png)
    

### The Sidebar

The sidebar is a new addition that makes it easy to switch back and forth between different chart layouts. It links to the charts explorer page and includes a search field for accessibility. Below, the menu contains recently viewed layouts at the top and saved layouts further down.

![image.png](attachment:903e8645-18d7-4335-98a1-9fac8753667b:image.png)

### Adding Metrics

On the top left of the chart there is a button to “Add metric”

![image.png](attachment:30bb277c-0cd9-47b3-980c-36286dc0282b:image.png)

Select one of three options

![image.png](attachment:f5fbdcfb-1ef1-464b-b307-908ae19f6765:image.png)

**Asset Interface**

Select from a list of over 3,000 crypto assets—covered above in the “Selecting and Asset” section.

**Traditional Finance Interface**

Select from a list of popular tradfi assets. Metrics in this category are limited to price-only.

![image.png](attachment:781b4b0c-0bf6-4f5d-8e88-401d6a697e0d:image.png)

**Formulas Interface**

See guide below.

Notes

- Metrics can only be added one by one.

### Combining Metrics

The “Combined metrics” interface is gone in this new version of charts, however, creating them is still possible through the formulas interface.

**Method 1**

Step 1: Add metrics you want to combine, one by one, to the chart.

Step 2: Go to formulas interface

![image.png](attachment:71ec170d-b633-4a97-95de-c776eaace160:image.png)

Step 3: Create formula with variables defined in the “Chart Metrics” tab on the top left.
Below is an example of creating a ratio of exchange flows combined metric.
The metrics added are represented as m1, m2, and m3.
Step 4: Input your formula into the Formula field and click "Save".

![chrome_ZmZ2QURwu1.png](attachment:9dd55aab-fc66-44fe-86bd-4c3c5d0164ed:chrome_ZmZ2QURwu1.png)

Note:

- When changing the asset in your chart, the combined metric created with this method will change automatically.

**Method 2**

Create the combined metric using your own defined variables using the “api_metrics” function.

![ERF2 method 2.png](attachment:895b10e8-fc75-417c-82b9-9179d803c254:ERF2_method_2.png)

Guidelines:

1. Look up metrics on [Santiment Academy.](https://academy.santiment.net/metrics)
2. Define the variables, each on their own line using the format: 
A1 = api_metric(”metric”, {slug: “asset”})
Note: the formula will appear for you, so you will only need to input the “metric” and “asset” of your choice.
3. Define the formula in a line below using the format:
”name of combined metric” = formula

Note:

- When switching to a different asset on the chart, your “slugs” in the combined metrics using method 2 will not change automatically. You will need to go into the variable and change the asset manually. To get around this, use the `selector_from` function.

**Changing the Formula for a Combined Metric or Formula-Based Metric**

Simply click on the formula button on the left side of the metric directly above the chart. 
See image below:

![image.png](attachment:a5f4afea-ed6a-4962-9b8c-3d79bd739f65:image.png)

## Guides

### Formula Interface Guide

![image.png](attachment:1959e774-ff30-4f72-ae42-5d38c3f9863e:image.png)

![chrome_2026-01-14_11-25-21.png](attachment:3f2b3045-040a-4f9c-82be-b7e2dbbcb966:chrome_2026-01-14_11-25-21.png)

The Formula Interface is a powerful tool that allows users to create personalized metrics, trading strategies, or conditional signals. These custom formulas allow you to combine existing chart metrics, define custom variables, apply mathematical functions, and be able to do so with a handy drag-and-drop UX. Once created, the formula is added as a new metric to your chart, where it can be visualized alongside price data. This interface is ideal for:

- Calculating more specific technical indicators (e.g., moving averages or RSI).
- Building trading strategies (e.g., buy/sell alerts based on conditions).
- Back-testing trading strategies.
- Creating composite metrics 
(e.g., Net Exchange Flow = Exchange Inflow - Outflow / Inflow + Outflow).
- Defining and visualizing “signals” (eg. see when MVRV spikes 15%+ within 24hrs)

**Accessing the Interface**

1. Click the "Add Metric" button.
2. Choose the "Formula" option.
3. The interface will pop up with fields for Name, Formula, and lists of available Chart Metrics and Functions.

**Formula Name**

- Purpose: Provide a descriptive name for your custom formula. This name will appear in the chart legend and metric list.
- Best Practices: Use clear, concise names like "ZEC_30Day_SMA" or "RSI_Buy_Signal". Avoid special characters except underscores.
- Example: "ZEC_Price_SMA_30"

**Formula**

- Purpose: This is the primary field where you define the mathematical expression or logic. The formula can reference chart metrics (as variables like m1), functions from the list, custom variables, and basic operators (`+, -, *, /`, etc.).
- Validation: As you type, the system checks for validity. A green "Formula is valid" message appears when the syntax is correct; errors will highlight issues like unmatched parentheses, undefined or improperly named variables, and more.
- Supported Syntax:
    - Arithmetic operators: `+, -, *, /, ^`
    - Comparison operators: `>, <, >=, <=, ==, !=` (useful for signals)
    - Logical operators: `AND, OR, NOT` (for conditional logic)
    - Parentheses for grouping: `(expression)`
    - Conditional statements: Use ternary-like syntax, e.g., 
    `if(condition, true_value, false_value)`
- Example: `sma(m1, 30)` creates a 30-interval simple moving average of the price metric.

**Chart Metrics**

- Purpose: This section lists metrics already added to your current chart, available as variables in your formula. Each metric includes a description and variable name (e.g., m1 for the first metric).
- How It Works: Metrics are auto-populated based on your chart. For instance:
    - m1 ZEC - Price: Represents the current price of Zcash (ZEC) in USD. Use as m1 in formulas.
    - m2 ZEC Mean Dollar Invested Age: A calculated metric like the average age of dollars invested in ZEC.
- Adding Metrics: If a needed metric isn't listed, close the interface, add it to the chart first, then reopen.
- Example Usage: In the formula, reference m1 for price data, e.g., `rsi(m1, 14)` for a 14-period RSI.

**Functions**

- Purpose: A library of built-in functions for technical analysis, math, and data manipulation. Hover over a function for a tooltip with parameters and description.
- Available Functions:
    - sma(source, period): Simple Moving Average. Example: sma(m1, 30) averages the price over 30 periods.
    - ema(source, period): Exponential Moving Average. Weights recent data more heavily.
    - rsi(source, period): Relative Strength Index. Measures momentum; typically 14 periods.
    - atr(source, period): Average True Range. Volatility indicator.
    - z_score(source, period): Z-Score. Standardizes values for anomaly detection.
    - pow(base, exponent): Raises base to the exponent power.
    - log(value): Natural logarithm.
    - exp(value): Exponential function (e^value).
    - absolute(value): Absolute value.
    - shift(source, periods): Shifts the data series by the specified periods (positive for lag, negative for lead).
    - diff(source):  Difference between current and previous value. 
    e.g., diff(m1) computes price change period-over-period.
    - cumprod(source): Cumulative product of the series. Useful for compounded returns.
    - cumsum(source): Cumulative sum of the series. 
    e.g., cumsum(volume) tracks running total volume.
    - api_metric(metric_type, asset): Fetches API metric data for a given asset.
    - selector_from(asset): Creates or references an asset selector for use in other functions.
    - if(condition, true_value, false_value): Conditional evaluation.
    e.g., if(rsi(m1, 14) > 70, 1, 0) flags overbought conditions.
    - backtest(strategy_logic): Simulates a strategy over historical data and returns performance metrics (may output equity curve, signals, or stats depending on implementation).
- Advanced Usage: Define local variables in the formula for clarity, 
e.g., x1 = api_metric("price_usd", "zcash"). 
Note that local variables cannot contain spaces or special characters.

**Creating a Custom Formula: Step-by-Step**

1. Enter a Name for your formula.
2. In the Formula field, start by referencing a chart metric (e.g., m1).
3. Apply functions as needed (e.g., sma(m1, 30)).
4. Optionally, define local variables for complex formulas, like x1 = api_metric("price_usd", "zcash"); sma(x1, 30).
5. Test validity – ensure "Formula is valid" appears.
6. Click Save to add the metric to your chart.
7. Close if you need to cancel or edit later.

Examples
Simple Metric: 30-Period SMA of Price

- Name: ZEC_30_SMA
- Formula: `sma(m1, 30)`
- Result: Adds a smooth line on the chart showing the 30-period average price of ZEC.

Trading Strategy: RSI-Based Buy Signal

- Name: RSI_Buy_Signal
- Formula: `if(rsi(m1, 14) < 30 , 1 , 0)`
- Result: Plots a line on the chart where conditions are met.

Composite Metric: Z-Score of Volume

- Assume m3 is a volume metric added to the chart.
- Name: ZEC_Volume_ZScore
- Formula: `z_score(m3, 20)`
- Result: Highlights unusual volume spikes relative to the past 20 periods.

Advanced with API: Cross-Asset Comparison

- Name: ZEC_vs_BTC_Price_Ratio
- Formula: `x1 = api_metric("price_usd", "zcash")
x2 = api_metric("price_usd", "bitcoin"); x1 / x2`
- Result: Plots the price ratio of ZEC to BTC.

**Best Practices and Tips**

- Start Simple: Begin with basic functions before combining them.
- Performance: Avoid overly complex formulas with many API calls.
- Debugging: If invalid, check for typos in variable names (case-sensitive, spaces, or special characters) or missing parameters in functions.
- Units and Scaling: Ensure metrics are in compatible units (e.g., don't divide price by volume without normalization).
- Signals: For buy/sell signals, use conditional logic to output values like 1 (buy), -1 (sell), or 0 (neutral). These can trigger chart annotations.
- Compatibility: Formulas work on various timeframes (e.g., 1-hr to daily charts), adjust periods accordingly.

**Troubleshooting**

- Invalid Formula: Double-check syntax, parentheses, and referenced variables. Ensure all metrics are added to the chart.
- No Data: If a metric returns null, verify the asset selector or slug (e.g., "zcash") and API availability.
- Error Messages: Common issues include "Undefined variable" (add the metric) or "Invalid function" (check spelling).
- Contact Support: If issues persist, click the green “Help and Feedback” button provide a screenshot of the interface and your formula for assistance. Alternatively, share the issue in our discord server.

### Creating and Backtesting Strategies

1. **Come up with a strategy idea**
    
    I have a assumption, that I want to open long position when price > 30 day moving average, and exit when it’s not.
    
2. **Add needed metrics**
    - [ ]  BTC price - named as `m1`
    - [ ]  BTC 30 day moving average - named as `m2` 
    Create using the formula interface using the `sma` function to define the specific metric. 
    See image below for reference.
    
    ![image.png](attachment:61b76a7f-6135-4156-837a-fd1851b0733c:image.png)
    
    1. **Save the new metric and add a new one to the chart, go to the formulas interface again**
    2. **Specify the strategy using the `backtest` function**
    details in next section.

### Backtesting the Strategy

1. **Understand the `backtest` function**
    
    It accepts 3 parameters, separated by commas: 
    
    - price_data - the asset price we want to backtest on, in this case, BTC price
    - signals - this will determine our positions: direction and size
    - options - we will ignore this for now
    
    ![image.png](attachment:8a8a7cf7-d8cf-4714-baf6-aafce0417604:image.png)
    
2. **Design the signal**
    
    Remember our strategy?
    
    ```
    1. if price > 30 day moving average, we go all in, to open long position
    
    2. Else, we hold no position
    ```
    
    which will be translated into:
    
    ![image.png](attachment:40519a73-55f9-4934-a2b4-4a5f1d43c409:image.png)
    
    `if` function also accepts 3 parameters:
    
    - condition
    - The return value, if the condition stands - in this case it’s 1, meaning we use 100% of our position
    - The return value, if the condition fails - in this case it’s 0, meaning we use 0% of our position - meaning we are doing absolute nothing
    
    > Note: this explanation is just to make life a bit easier. Back to the origin, the `if` function is just used to return values in different situation, and can return any numbers. Only when it goes into `backtest` function, that’s when numbers get associated with position size.
    > 
    
    ```
    1 means 100% long position
    0 means no position
    -1 means 100% short position
    
    0.5 means 50% long position
    -0.3 means 30% short position
    
    ```
    
3. **Create the backtest function**

Now we have everything.

- [ ]  First parameter: `m1`, which is the BTC price
- [ ]  Second parameter: `m3`, which is the if condition statement, we created in step 3
- [ ]  Third parameter, the scary long brackets, we ignore it for now

Press save, now we have a curve shows our net value!

1. **(Optional) Clean the chart**
    
    ![image.png](attachment:1d9d591e-09a6-47ce-b7e5-3a215323567c:image.png)
    

In the top left corner of the graph, we can hide our intermediate metrics, to make it look a bit clean.

![image.png](attachment:75b2cc69-7ed9-4ce1-a0da-d45501285ae9:image.png)

## Old vs New Comparison Images

**Former charts default screen**

![image.png](attachment:83b13f72-fafe-4449-8986-928b49671f2c:image.png)

**New charts default screen**   (won’t have until launch)

<image>

**Former gobal asset selector vs new global asset selector**

![chrome_2026-01-26_10-36-18.gif](attachment:495046d0-bc35-43f5-b28a-e08c6b0f5462:chrome_2026-01-26_10-36-18.gif)

**Former add metric flow vs new add metric flow**

![formervsnewmetricsadd.gif](attachment:59a32691-61f9-4851-a24f-b13babac0959:formervsnewmetricsadd.gif)

**Former chart display settings vs new chart display settings**

![formervsnewchartdisplay.gif](attachment:0772e5a6-6aea-47f8-bc8e-52a468de7e37:formervsnewchartdisplay.gif)
