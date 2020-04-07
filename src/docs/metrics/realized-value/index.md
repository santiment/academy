---
title: Realized Value
author: Santiment Team
---

Returns Realized Value of all tokens. Realized Value is based on the
acquisition costs of an asset located in a wallet, estimated by using
the historical price when the asset was last moved. The realized Value
across the whole network is computed by summing the realized values of
all wallets holding tokens at the moment. Projects are referred to by a
unique identifier (slug).

The query returns the full RV as well as the RV for all tokens that are
not in exchange wallets.

##### Realized Value

The realized value metric is calculating the acquisition cost of the assets
located in a wallet. Imagine that there is a wallet which has 30 tokens and
these tokens came into the wallet in 3 transactions:

10 tokens came in when the price of the tokens was $5 5 tokens came in when the
price was $15 15 tokens came when the price was \$10 The realized value of the
address is

$$10 × 5 + 5 × 15 + 15 × 10 = 50 + 75 + 150 = \$275$$

This number gives the value of the tokens for this particular token holder and
can be compared to the current market value. If the current price of the token
is below $9.1, then the money this holder paid for acquiring these assets are
more than their current value, while if the price is over $9.1, the value is
greater. That means that if the current price is $10, these tokens are worth
$300 and if the holder sells everything, he will get \$25 profit.

The interesting part is that we can compute the realized value across the whole
network, by summing the realized values of all wallets holding tokens at the
moment. This number gives an estimate of the amount of money the users of the
network spend to acquire their assets. The definition will be:

$$
RV_{network}= \sum_{a \in addresses} RV(a)
$$

[**Run in
explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20realizedValue(from%3A%20%222019-05-10T00%3A00%3A00.000Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22ethereum%22%2C%20to%3A%20%222019-06-23T00%3A00%3A00.000Z%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20nonExchangeRealizedValue%0A%20%20%20%20realizedValue%0A%20%20%7D%0A%7D%0A&variables=>)

```js
{
  realizedValue(from: "2019-05-10T00:00:00.000Z", interval: "1d", slug: "ethereum", to: "2019-06-23T00:00:00.000Z") {
    datetime
    nonExchangeRealizedValue
    realizedValue
  }
}
```
