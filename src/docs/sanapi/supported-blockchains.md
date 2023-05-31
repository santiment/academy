---
title: Supported Blockchains
author: Santiment Team
date: 2023-05-31
---

| Bitcoin            | Ethereum           | XRPL               |
| ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: |

| BNB Chain          | Bitcoin Cash       | Litecoin           |
| ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: |

| Cardano            | Dogecoin           | Polygon            |
| ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: |

| Avalanche (ERC20)  | Optimism           | Arbitrum           |
| ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: |

To see the type of metrics available for each of the blockchains open [the GraphiQL Explorer](https://api.santiment.net/graphiql?variables=&query=%7B%0A++getAvailableBlockchains+%7B%0A++++blockchain%0A++++slug%0A++++infrastructure%0A++++createdOn%0A++++hasLabelMetrics%0A++++hasMinersMetrics%0A++++hasExchangeMetrics%0A++++hasTopHoldersMetrics%0A++++hasPureOnchainMetrics%0A++++hasOnchainFinancialMetrics%0A++%7D%0A%7D%0A)