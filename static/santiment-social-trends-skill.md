---
name: santiment-social-trends
description: "Use this skill whenever the user is interpreting Santiment's Social Trends feature, analysing crypto social signals, or deciding what to do with trending words, social volume spikes, or crowd sentiment data. Triggers include: mentions of 'Social Trends', 'trending words', 'social volume', 'sentiment', 'crowd sentiment', 'bullish/bearish words', or questions like 'is this a buy signal?', 'why is X trending?', 'what does this social spike mean?'. Also use when the user is new to Santiment's social tools and needs to be walked through them, or when they ask about spam detection, Telegram-only pumps, source breakdown, contrarian signals, or cross-referencing social data with price charts. Do NOT use for on-chain metrics, holder analysis, development activity, or token unlocks — only social/sentiment interpretation."
---

# Santiment Social Trends — Power User Guide

This skill encodes expert, non-obvious knowledge about using Santiment's Social Trends feature effectively. Apply it when helping users interpret social signals, spot crowd behaviour patterns, and cross-reference with price action.

---

## Core Philosophy

Social Trends is a **contrarian tool**, not a momentum tool. The crowd is usually wrong at extremes. Your job is to identify when crowd behaviour has reached a peak — in either direction — and interpret what that means for price.

---

## Step 1: Open Social Trends — First Things to Check

### 1a. Trending Words List

The first thing to scan is the **top trending words**. But don't just read the list — immediately check the **source breakdown** for each trending word.

**Spam detection rule:**

- ✅ **Genuine trend** = volume distributed roughly equally across sources (Twitter/X, Telegram, Reddit, Discord)
- 🚨 **Spam / coordinated campaign** = volume dominated almost entirely by **Telegram**

Single-source Telegram dominance is the clearest indicator of artificial pumping or coordinated shilling. Dismiss these signals entirely.

### 1b. The "Small Coin in Top 3" Rule — Strong Top Signal

This is one of the highest-conviction signals on the platform:

> **If a small/obscure coin appears in the top 3 trending words, treat it as a near-certain local top signal.**

When a small cap dominates social attention to that degree, retail euphoria has peaked. The crowd is all-in. This is a contrarian sell signal, not a buy signal.

---

## Step 2: Time Windows to Use

Do not use short time windows for trend analysis. Recommended settings:

| Goal                  | Time Range | Granularity |
| --------------------- | ---------- | ----------- |
| Day-to-day monitoring | 1 month    | 1h          |
| Broader trend context | 3 months   | 4h          |

Shorter windows (24h, 7d) lack the historical baseline needed to judge whether a spike is truly anomalous. Always zoom out first, then zoom in on the spike.

---

## Step 3: Social Volume Analysis

Social Volume = the raw count of mentions. Use it to:

- Identify **when** a spike occurred
- Compare spike magnitude against historical baseline
- Detect divergences (volume spike but no price move = potential signal)

**Key divergence patterns:**

- 📈 Social volume spikes, price doesn't move → price move is likely coming
- 📉 Price moves, social volume doesn't follow → move may lack conviction

---

## Step 4: Word Combinations — Reading Crowd Behaviour

This is the most powerful and underused feature. Instead of tracking an asset, track **competing sentiment words** against each other.

### The Buy vs Sell Signal

Compare social volume of bullish words vs bearish words (e.g. "buy" vs "sell", "moon" vs "dump", "bullish" vs "bearish").

**Interpretation (always contrarian):**

- 🔴 **Strong dominance of bullish words** → crowd euphoria → **contrarian SELL signal**
- 🟢 **Strong dominance of bearish words** → crowd panic → **contrarian BUY signal**

The signal strength is proportional to how lopsided the dominance is. A 70/30 split is a mild signal. A 90/10 split is a strong one.

### What "Strong Dominance" Looks Like

Look for:

- One side consistently above the other for multiple candles (not just a single spike)
- The gap widening, not narrowing
- Absolute volume on the dominant side also elevated (not just the ratio)

---

## Step 5: Always Cross-Reference with Charts

Social Trends findings should **never be acted on in isolation**. After identifying a signal:

1. Open **Charts** for the relevant asset
2. Overlay **Social Volume** metric to confirm the spike timing
3. Check **price action** at the same timestamp — did past similar spikes precede reversals?
4. If signal is contrarian sell: look for chart-level resistance, overbought RSI, or declining volume
5. If signal is contrarian buy: look for support levels, oversold conditions, or accumulation patterns

Social Trends tells you _what the crowd thinks_. Charts tell you _whether the market has already priced it in_.

---

## Common Newcomer Mistakes to Correct

| Mistake                              | Correction                                             |
| ------------------------------------ | ------------------------------------------------------ |
| "This coin is trending = buy signal" | Trending = crowd attention peaked = often the opposite |
| Looking at 24h or 7d windows only    | Use 1 month (1h) or 3 months (4h) for proper baseline  |
| Not checking source breakdown        | Telegram-only spikes are spam — ignore them            |
| Acting on social data without Charts | Always cross-reference price action                    |
| Treating all sentiment equally       | Volume without source context is meaningless           |

---

## Quick Reference: Signal Cheat Sheet

| What you see                         | What it means            | Action                       |
| ------------------------------------ | ------------------------ | ---------------------------- |
| Small coin in top 3 trending         | Retail euphoria peak     | Contrarian sell signal       |
| Top trend is Telegram-only           | Coordinated spam         | Ignore entirely              |
| "Buy" words dominate heavily         | Crowd all-in bullish     | Contrarian sell              |
| "Sell" words dominate heavily        | Crowd panic              | Contrarian buy               |
| Social spike, price flat             | Price move incoming      | Watch closely + check Charts |
| Trend distributed across all sources | Genuine organic interest | Worth investigating          |

---

## Guiding New Users Step by Step

When a new user is exploring Social Trends for the first time, walk them through in this order:

1. **Orient**: Explain that social data is a contrarian tool, not momentum
2. **Spam filter**: Show them how to check source breakdown before trusting any trend
3. **Time window**: Set them to 1 month / 1h before anything else
4. **Top 3 rule**: Teach the small coin = top signal heuristic
5. **Word combinations**: Introduce buy vs sell tracking as an advanced technique
6. **Cross-reference**: Never let them leave Social Trends without opening Charts

Each step should be explained with a concrete example where possible. Ask the user what they're currently seeing on screen so you can give specific guidance rather than generic instructions.
