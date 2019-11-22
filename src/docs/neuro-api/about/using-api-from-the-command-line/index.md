---
title: Using the Neuro API from the command line
author: Santiment Team
# References
#

---

Our API can be also accessed from the command line. The endpoint is:
`https://api.santiment.net`

You can use the following \'curl\' command after replacing the
placeholder \'**\<YOUR\_OWN\_QUERY\>**\' with your query:

    curl \
      -X POST \
      -H "Content-Type: application/json" \
      --data '{ "query": "query{<YOUR_OWN_QUERY>}" }' \
      https://api.santiment.net/graphql

\
For clarification, here is an example for Transaction Volume:

    curl \
      -X POST \
      -H "Content-Type: application/json" \
      --data '{ "query": "query{transactionVolume(from:\"2018-12-09T11:25:04.894Z\",interval:\"1d\",slug:\"dragonchain\",to:\"2018-12-23T11:25:04.894Z\"){datetime,transactionVolume}}" }' \
      https://api.santiment.net/graphql

Adding an API key {#adding-an-api-key .intercom-align-left data-post-processed="true"}
-----------------

You can add an API key to your query by adding the following line after
the third line:

    -H "Authorization: Apikey <YOUR_OWN_API_KEY>"\

Again, you need to replace the placeholder
\'**\<YOUR\_OWN\_API\_KEY\>**\' with your actual key.

The full query would look like this:

    curl \
      -X POST \
      -H "Content-Type: application/json" \
      -H "Authorization: Apikey <YOUR_OWN_API_KEY>"\
      --data '{ "query": "query{<YOUR_OWN_QUERY>}" }' \
      https://api.santiment.net/graphql

For clarification, here is an example for Transaction Volume:

    curl \
      -X POST \
      -H "Content-Type: application/json" \
      -H "Authorization: Apikey <upc2ohhxds6qv5ra35elpfpt7jmc7264_x7vjos6h6lwt9zwczsm3boayuqx4vo7s>"\
      --data '{ "query": "query{transactionVolume(from:\"2018-12-09T11:25:04.894Z\",interval:\"1d\",slug:\"dragonchain\",to:\"2018-12-23T11:25:04.894Z\"){datetime,transactionVolume}}" }' \
      https://api.santiment.net/graphql

*The above is not a working API key.*
