---
title: Understanding Crypto Market Cycles Through Lending Metrics
author: Santiment Team
date: 2025-04-03
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/UCFW6OGo3Sk?si=TvC8-mruV0A53t-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Introduction

The cryptocurrency market moves in cycles of expansion and contraction. While
many traders focus on price action or social sentiment, lending and borrowing
metrics provide unique insights into market conditions. These metrics can help
identify market extremes - both the overheated periods where caution is needed
and the cooling periods that might signal buying opportunities.

This article explains key frameworks for analyzing crypto market conditions
through decentralized finance (DeFi) lending data. Below, we'll look at how to
spot market tops and bottoms using lending rates, debt levels, and liquidation
events.

## What is DeFi Lending and Borrowing?

DeFi lending and borrowing platforms allow users to lend and borrow digital
assets without traditional financial intermediaries like banks. They use smart
contracts - self-executing code on blockchains - to automate lending processes
and enforce agreement terms between parties.

On these platforms:

- Lenders deposit digital assets and earn interest
- Borrowers use assets as collateral to get loans in stablecoins or other
  cryptocurrencies

[These protocols](/metrics/lending-and-borrowing-protocols/)
offer more flexibility, accessibility, and transparency than traditional
finance. However, they come with risks such as smart contract vulnerabilities,
market volatility, and potential liquidations.

## Framework 1: [The "Value of Money" Metric](https://app.santiment.net/charts/FT0jzE8N__sCl)

### The Concept

The first framework examines interest rates on lending platforms like Aave and
Compound. These rates reflect supply and demand for capital in crypto markets.

When borrowing demand increases, interest rates rise. Extreme interest rate
spikes often signal market tops, while flat or low rates may indicate market
bottoms.

This framework reflects an analysis of the behaviour of market participants,
where the determination of the value of money is a direct expression of general
market sentiment.

### Key Indicators

1. **Stable Coin Supply Rate**: The amount of interest earned when depositing
   stablecoins like USDC or DAI
2. **Borrowing Rate**: The interest paid when borrowing these assets
3. **Supply/Borrow Ratio**: The relationship between available capital and
   borrowed amounts

### How to Interpret the Data

![noborder](./image1.png)

- **Market Top Signals**: Interest rates above 10-15% suggest overheated
  conditions where borrowers are willing to pay high costs to gain leverage
- **Market Cooling**: Falling interest rates indicate decreasing demand for
  leverage
- **Market Bottom Signals**: Sustained low, flat rates (3-4%) for several weeks
  suggest reduced speculation and possible bottoming conditions

The most reliable signal isn't just high rates but when rates rise quickly and
substantially above baseline levels. Similarly, the bottoming process typically
isn't complete until rates remain flat for 2-4 weeks.

For determining 'value for money' you can use [this ready-to-use dashboard](https://app.santiment.net/charts/FT0jzE8N__sCl)

## Framework 2: [The "Blood on the Streets" Liquidation Metric](https://app.santiment.net/charts/De_wFHJh__sCl)

### The Concept

Liquidations occur when borrowers' collateral value falls below required
thresholds. These forced collateral sales create market pressure and often
signal capitulation events.

Large liquidation spikes combined with decreasing total debt can mark potential
market bottoms.

### Key Indicators

1. **Total Liquidations**: The dollar value of positions forcibly closed
2. **Total Debt Changes**: Increases or decreases in the total borrowed amount
3. **Repayments**: Voluntary debt reduction by borrowers (distinct from
   liquidations)

### Types of Leveraged Positions

Most liquidations come from two types of positions:

1. **Long Leverage**: Borrowing stablecoins against crypto assets to buy more
   crypto
2. **Short Positions**: Borrowing crypto against stablecoins to sell and bet on
   price decreases

Long liquidations are more common and typically occur during market drops,
while short liquidations happen during sharp upward moves.

### How to Interpret the Data

![noborder](./image2.png)

- **Large Liquidation Events**: Significant liquidation spikes often mark local
  bottoms
- **Concurrent Debt Reduction**: When liquidations coincide with total debt
  decreases, the signal strengthens
- **Support Levels**: Price levels where major liquidations occur often become
  support in ranging markets

For optimal entry points, look for the combination of large liquidations AND
significant debt reduction. The largest liquidation events of the past cycle
(August 2024) preceded substantial rallies.

To monitor liquidations you can use [this ready-to-use dashboard](https://app.santiment.net/charts/De_wFHJh__sCl)

## Complementary Metrics

These additional metrics enhance the analysis:

### 1. Total Open Interest

Total [open
interest](/metrics/open-interest)
measures the total value of outstanding futures contracts. High open interest
during price increases often signals excessive leverage and impending
corrections.

### 2. Funding Rates

[Funding rates](/metrics/funding-rates-aggregated)
show the premium between perpetual futures and spot prices:

- Positive rates: Longs pay shorts (bullish sentiment)
- Negative rates: Shorts pay longs (bearish sentiment)

Negative funding rates often precede bounces as short liquidations can fuel
upward momentum.

## Practical Application Framework

To apply these insights effectively:

1. **Monitor Heat Signals**:
    * Track stable coin lending rates for signs of market overheating (>10%)
    * Watch for extreme borrowing demand spikes

2. **Identify Cooling Conditions**:
    - Look for declining interest rates
    - Wait for rates to flatten for 2-4 weeks

3. **Confirm Capitulation**:
    - Large liquidation events
    - Significant debt reduction following liquidations
    - Negative funding rates (shorts paying longs)

4. **Adjust Strategy Based on Market Phase**:
    - In strong uptrends: Consider adding positions after liquidation events
    - In choppy ranges: Wait for price to hold support at liquidation levels
      before entering

## Conclusion

Lending and borrowing metrics offer powerful insights into market psychology
and leverage conditions. By tracking interest rates, debt levels, and
liquidation events, traders can identify potential market extremes more
effectively than through price action alone.

These metrics help answer key questions:

- Is market demand for leverage rational or irrational?
- Have we seen enough pain to mark a potential bottom?
- Is the market cooling enough to consider re-entry?

While no indicators are perfect, this lending-focused framework provides
additional perspective beyond traditional technical analysis, helping traders
make more informed decisions throughout market cycles.
