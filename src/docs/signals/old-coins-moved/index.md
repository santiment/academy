---
title: Old Coins Moved
author: Alex
date: 2021-12-08
description: Signal indicating a large portion of old coins were moved.
---
# Old Coins Moved

## Definition

**Old Coins Moved Signal** indicates that an outstanding amount of old coins were moved.

In order to identify "outstanding" transfer for each transfer it's burn age is computed. Burn age is the amount of tokens changing address on a certain transfer, multiplied by the time since they last moved. After that for each asset **top-10 transfers by age over 30 days are considered**. If the new given transfer's burn age is greater than the top-10 value, the transfer marked as "outstanding".