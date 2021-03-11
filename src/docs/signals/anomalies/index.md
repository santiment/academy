---
title: Anomalies
author: Vlad
date: 2021-03-11
description: Signal indicating that real value of the metric doesn't fall in the predicted interval
---

## Definition

**Anomalie singal** indicates that real value of the metric doesn't fall in the predicted interval

We used fbprophet which is written by facebook to predict predicted intervals for every metric and every asset.
After that we compare predicted lower and upper values to actual value and if it doesn't fall in the interval then we fire a signal 
