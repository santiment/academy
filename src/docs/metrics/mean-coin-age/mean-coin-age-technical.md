---
title: Mean Coin Age - Technical Details
author: Tzanko Matev
date: 2021-11-22
---
# Mean Coin Age - Technical Details

## Definition

Recall that a **[coin-age model](/metrics/details/stack-coin-age-model)** allows
us at each given point in time to split all coins into segments where each
segment $x$ has an assigned amount $v_x$ and creation timestamp $ot_x$. The set
of all segments that exist at time $t$ will be denoted by $S_t$.

Then, the formula for computing the mean coin age $MCA(t)$ is:

$$
MCA(t) = \frac{\sum_{x\in S_t} (t-ot_x)v_x}{\sum_{x\in S_t}v_x}
$$

Let us call the quantity in the numerator the **total coin-age** and denote it
by $TCA(t)$. The quantity in the denominator is the _total supply_ existing at
time $t$. We will call it $TS(t)$

## Total supply

We can already compute the coin circulation. For each period $p$, we can
calculate the number of coins that have been active in the last $p$ days. Let us
denote this amount by $Circ_p(t)$.

### Lemma

$$
TS(t) = Circ_p(t)
$$

for $p$ sufficiently large. More precisely, the equality holds if $p$ is larger
than the entire life of the coin.

## Total age

Let's focus on computing the total age of each coin. We have

$$
TCA(t) = t\left(\sum_{x\in S_t} v_x\right) - \sum_{x\in S_t} ot_x = TS(t)t -
TCT(t)
$$

We call the second summand the **total creation timestamp**. If we divide it by
the token supply, we will get the **mean creation timestamp** $MCT(t)$. Hence we
have the following formula:

$$
MCA(t) = t - MCT(t)
$$

In other words, the mean coin-age is equal to the current timestamp minus the
mean creation timestamp.

## Total creation timestamp

According to the theory that we have already developed, we can efficiently
compute the total creation timestamp. It is the metric $M_f(t)$ associated to
the function $f(x,t) = ot_x v_x$.

### Lemma

Let $E$ denote the event stream associated with the coin-age model $S$. Then

$$
\Delta TCT(t) = \sum_{e\in E \\ t_e = t} \sigma_e ot_x v_e
$$

The SQL statement for computing the real-time total creation timestamp delta is

```sql
SELECT
  asset_id,
  dt,
  sum(sigma*odt*amount) as value
FROM {events}
GROUP BY asset_id, dt
```

In practice, we don't use the real-time delta functions. Instead, we use daily
or five-minute deltas. We must construct those functions so that the value of
the daily TCT is the same as the value of the real-time TCT at the start of each
day. For the five-minute analog, a similar condition must hold. We have:

### Lemma

We compute the daily TCT delta using the following SQL:

```sql
SELECT
  asset_id,
  toStartOfDay(dt + 86400) AS daily_dt,
  sum(sigma*odt*amount) AS value
FROM {events}
GROUP BY asset_id, daily_dt
```

We compute the five-minute TCT delta using the following SQL:

```sql
SELECT
  asset_id,
  toStartOfFiveMinutes(dt + 300) AS five_minute_dt,
  sum(sigma*odt*amount) AS value
FROM {events}
GROUP BY asset_id, daily_dt
```

## Mean age computation

From the facts above, we can easily derive the mean coin-age. We first compute
the daily or five-minute $\Delta TCT$. Then we use a cumulative sum to calculate
the daily five-minute total creation timestamp $TCT$. From that, we can
calculate the mean creation timestamp as a _composite metric_ with the SQL
formula:

```sql
total_creation_timestamp/circulation_20y
```

Finally, we can compute the mean coin-age as a composite metric with the SQL
formula:

```sql
dt - mean_creation_timestamp
```

## Relation to age consumed

There is a relation between the total creation timestamp delta and the age
consumed. The formula computes the age consumed (or coin-days destroyed):

$$
AC(t) = \sum_{e\in E \\ t_e = t} -\sigma_e (t-ot_e)v_e
$$

So you have

$$
AC(t) = \Delta TCT(t) - t\sum_{e\in E \\ t_e=t} \sigma_e v_e
$$

The latter summand is the timestamp multiplied by the total supply delta at the
time $t$. If we choose a sufficiently large period $p$, it is also equal to
$\Delta Circ_p(t)$. So if we have already computed the age consumed, we can
compute the delta total creation timestamp as a composite metric:

```sql
age_consumed + dt * circulation_delta_20y
```

However, our age consumed metric is measured in days. If we want the delta TCT
to be measured in seconds the formula is

```sql
age_consumed*86400 + dt*circulation_delta_20y
```

If we want to measure it in days, then we have:

```sql
age_consumed + dt/86400 * circulation_delta_20y
```

In conclusion, once we have age_consumed and circulation, we can compute the
mean coin age using only cumulative sums and composite metrics.
