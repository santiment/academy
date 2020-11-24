---
title: How to create a correlation matrix as Cryptowatch.io has?
author: Yura Zatsepin
---

Let's show a sample how powerfull and easy to use Google Sheets Integration of
Santiment data. In this article you will understand how to create a correlation
matrix as Cryptowatch has and a good bonus. You can make a correlation matrix not only for top 5 assets, but for any
crypto assets.

> Correlation: Positively correlated variables tend to move together, negatively correlated variables move inversely to each other,
> and uncorrelated variables move independently of each other.

> The Pearson Correlation Coefficient quantifies the estimated strength of the linear association between two variables.
> It ranges from +1 to -1: +1 indicates a perfect positive linear correlation,
> -1 a perfect negative linear correlation, 0 indicates no linear correlation.

To make own correlation matrix you have to resolve 3 steps:
* Fetch pricing data for last 7 days (in case if you want to see correlation
    last 7 days)
* Calculate correlation coefficient
* Organize good visualization for the resulted matrix

[Full sample you can see here](https://docs.google.com/spreadsheets/d/1UcgTvueFeDtv9k2xb2zwFLXtsAnUzy1JsN0KIHvC40I/edit?usp=sharing)

## How to fetch pricing data

It's very easy to do, you need to use SAN functions as in the formula field. ```=SAN_PRICES("bitcoin", TODAY() - 7, TODAY())```

![](how-to-fetch-financial-data.png)

## How to calculate correlations

Google sheets has inhouse function for The Pearson Correlation.
```=CORREL()```
You only should to select the right group of cells with pricing data

![](how-to-calculate-correl.png)

## Make a good visualization

I suggest you this structure of the matrix, you can check the image below.

![](make-a-nice-matrix.png)

# Recap

Using Sansheets (Google Sheets Integration of Santiment data) is very handy
and flexible. You can organize your own research based on on-chain, social,
financial data without any python/julia code. The sample for this article was
created during 10 minutes.

[Final sample you can see here](https://docs.google.com/spreadsheets/d/1UcgTvueFeDtv9k2xb2zwFLXtsAnUzy1JsN0KIHvC40I/edit?usp=sharing)
