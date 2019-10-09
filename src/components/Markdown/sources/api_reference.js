const Markdown = `# API Reference

This page contains a reference of all the APIs provided by Santiment.

## Authentication

Some of the APIs require to have a valid API key, belonging to an account with a
paid subscription to access all the data. The API key can be generated on your
[Account Settings](https://app.santiment.net/account#api-keys) page.

After that you need to pass the API key as an additional HTTP header
\`Authorization: Apikey <YOUR_OWN_API_KEY>\`. An example how to do that using curl:

\`\`\`bash
curl \
  -X POST \
  -H "Content-Type: application/graphql" \
  -H "Authorization: Apikey <YOUR_OWN_API_KEY>"\
  --data '<YOUR_OWN_QUERY>' \
  https://api.santiment.net/graphql
\`\`\`

## Errors

In case something is not correct with the request, the API will return an error. The API
requests should always return status code 200, even if there was an error processing the
request. An error response is going to include a description of the error that occured.
For example here is what will happen if the query passed to the API is not valid:

\`\`\`bash
$ curl \
  -X POST \
  -H "Content-Type: application/graphql" \
  --data '{transactionVolume' \
  https://api.santiment.net/graphql | jq .

{
  "errors": [
    {
      "message": "An unknown error occurred during parsing: no function clause matching in Absinthe.Phase.Parse.format_raw_parse_error/1"
    }
  ]
}
\`\`\`

If your query is missing some argument, that should be described in the error response:

\`\`\`bash
$ curl \
  -X POST \
  -H "Content-Type: application/graphql" \
  --data '{ transactionVolume(slug:"santiment", from:"2019-01-01T00:00:00Z") { datetime transactionVolume }}' \
  https://api.santiment.net/graphql | jq .

{
  "errors": [
    {
      "locations": [
        {
          "column": 3,
          "line": 1
        }
      ],
      "message": "In argument \"to\": Expected type \"DateTime!\", found null."
    }
  ]
}
\`\`\`

If the query does not return status code 200, then something else is happening. Here are some of the options:

1. 429 - you are being rate limited. Reduce the amount of requests you are doing
1. 502 - an internal error has occured. Let us know at [https://santiment.net/discord](https://santiment.net/discord)
at the #support channel

## Live API Explorer

Santiment API uses [GraphQL](https://graphql.org). This is an alternative to REST,
which allows a lot of flexibility in the way the data is requested. You can request
exactly the data you need and also easily batch requests together.

There is a live explorer, where you can run queries directly from the browser. The
explorer is accessible here: [https://api.santiment.net/graphiql](https://api.santiment.net/graphiql)

Here is an example of running a query and seeing the results directly in the browser:

[https://api.santiment.net/graphiql?query=%7B%0A%20%20transactionVolume(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-03-01T00%3A00%3A00Z%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20transactionVolume%0A%20%20%7D%0A%7D](https://api.santiment.net/graphiql?query=%7B%0A%20%20transactionVolume(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-03-01T00%3A00%3A00Z%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20transactionVolume%0A%20%20%7D%0A%7D)

## Running requests with \`curl\`

You can run requests with curl by passing the GraphQL query as the body of the request. Here is an exmaple how to run the \`transactionVolume\` query:


\`\`\`bash
curl \
  -X POST \
  -H "Content-Type: application/graphql" \
  --data '{ transactionVolume(slug:"santiment", from:"2019-01-01T00:00:00Z", to:"2019-03-01T00:00:00Z") { datetime transactionVolume }}' \
  https://api.santiment.net/graphql
\`\`\`

## Glossary

There are some terms used in this document. Here is a list and discription of them:

1. \`slug\` - this is an ID we use in the API to identify projects. You can find the slug
of the projects by using the \`allProjects\` API
1. \`ISO 8601 format\` - this is the date time format used in the API. The format is \`<year>-<month>-<day>T<hour>:<minute>:<seconds>Z\`. For example Jan 10th 2019 12:34:56 is \`2019-01-10T12:34:56Z\`
1. \`API key\` - this is your API key for accessing the premium features in the API. See the \`Authentication\` section for more details


## Available APIs

### Transaction volume

**Tier: Free**

**Max lag: 3 block confirmation**

**Max resolution: 5min**

Tracks the sum of all on-chain transactions done during a day for a given asset.

Parameters:

| Parameter | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| slug      | The slug of the project                                                |
| from      | From which date to return the volume in ISO 8601 format                |
| to        | Till which date to return the volume in ISO 8601 format                |
| interval  | The intervals that should be returned. Default is \`1d\`, which is daily |


The query looks like this:

\`\`\`js
{
  transactionVolume(
    slug:"santiment",
    from:"2019-01-01T00:00:00Z",
    to:"2019-03-01T00:00:00Z") {

    datetime
    transactionVolume
  }
}
\`\`\`

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20transactionVolume(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-03-01T00%3A00%3A00Z%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20transactionVolume%0A%20%20%7D%0A%7D)**


Supported assets:

| Bitcoin            | Ethereum           | ERC-20             | Ripple | EOS | EOS tokens |
| ------------------ | ------------------ | ------------------ | ------ | --- | ---------- |
| ✔ | ✔ | ✔ | WIP    | WIP | WIP        |

See also [getMetric](#the-getmetric-api) where you can find the same metric with support for more assets.

### Daily active addresses

**Tier: Free**

**Max lag: 1 day**

**Max resolution: daily**

Tracks the number of unique addresses that make transfers on-chain on a daily basis.

Parameters:

| Parameter | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| slug      | The slug of the project                                                |
| from      | From which date to return the active addresses in ISO 8601 format      |
| to        | Till which date to return the active addresses in ISO 8601 format      |
| interval  | The intervals that should be returned. Default is \`1d\`, which is daily |


The query looks like this:

\`\`\`js
{
  dailyActiveAddresses(
    slug:"santiment",
    from:"2019-01-01T00:00:00Z",
    to:"2019-03-01T00:00:00Z") {

    datetime
    activeAddresses
  }
}
\`\`\`

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20dailyActiveAddresses(%0A%20%20%20%20slug%3A%22santiment%22%2C%0A%20%20%20%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%0A%20%20%20%20to%3A%222019-03-01T00%3A00%3A00Z%22)%20%7B%0A%20%20%20%20%0A%20%20%20%20datetime%0A%20%20%20%20activeAddresses%0A%20%20%7D%0A%7D%0A)**


Example with curl:

\`\`\`bash
curl \
  -X POST \
  -H "Content-Type: application/graphql" \
  --data '{ dailyActiveAddresses(slug:"santiment", from:"2019-01-01T00:00:00Z", to:"2019-03-01T00:00:00Z") { datetime activeAddresses }}' \
  https://api.santiment.net/graphql
\`\`\`

Supported assets:

| Bitcoin            | Ethereum           | ERC-20             | Ripple | EOS | EOS tokens |
| ------------------ | ------------------ | ------------------ | ------ | --- | ---------- |
| ✔ | ✔ | ✔ | WIP    | WIP | WIP        |

See also [getMetric](#the-getmetric-api) where you can find the same metric with support for more assets.


### The getMetric API

**Tier: depends on the metric requested**

**Max lag: 6 hours**

**Max resolution: depends on the metric. Most of the metrics are daily**

The \`getMetric\` API gives a unified API for many different metrics across the whole universe of supported assets.
The query allows to get metadata about a given metric and asset, as well as fetch the values of the metric in a
nice unified way.

Currently the metrics are updated 4 times a day. We are working on reducing this interval.

Supported assets:

| Bitcoin            | Ethereum           | ERC-20             | Ripple             | EOS                | EOS tokens         |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |


#### timeseriesData

To fetch the values for a given metric, slug and time interval you can use the \`timeseriesData\` subquery of the \`getMetrics\` API.

Parameters:

| Parameter   | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| slug        | The slug of the project                                                      |
| from        | From which date to return the values in ISO 8601 format                      |
| to          | Till which date to return the values in ISO 8601 format                      |
| interval    | The intervals that should be returned. Default is \`1d\`, which is daily       |
| aggregation | The aggregation to be used when fetching data for longer intervals. Optional |

The \`aggregation\` parameter is optional and if not provided - every metric has a default one that fits best. You can see the default aggregation function using the [metadata](#metadata) query.

Example:

\`\`\`js
{
  getMetric(metric:"transaction_volume") {
    timeseriesData(slug:"santiment", from:"2019-01-01T00:00:00Z", to:"2019-09-01T00:00:00Z", interval:"7d", aggregation:SUM) {
      datetime
      value
    }
  }
}
\`\`\`

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22transaction_volume%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-09-01T00%3A00%3A00Z%22%2C%20interval%3A%227d%22%2C%20aggregation%3ASUM)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)**


If you change the \`aggregation\` parameter to \`AVG\` it will return the average transaction volume over each 7 day interval. You can see how this API can be quite powerful and flexible.

#### getAvailableSlugs

The \`getMetric\` API supports a large list of assets identified by their slug. You can fetch the universe of available slugs like this:

\`\`\`js
{
  getAvailableSlugs
}
\`\`\`

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%09getAvailableSlugs%0A%7D%0A)**


#### getAvailableMetrics

The set of available metrics is not the same for each asset. We are trying to have all metrics for all assets, but this is not always possible. In order to find, which are the available metrics for a given asset you can use the \`projectBySlug\` query, like this:

\`\`\`js
{
  projectBySlug(slug:"santiment") {
    availableMetrics
  }
}
\`\`\`

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20projectBySlug(slug%3A%22santiment%22)%20%7B%0A%20%20%20%20availableMetrics%0A%20%20%7D%0A%7D)**

#### availableSince

To fetch the date from which a given metric starts do the following:

\`\`\`js
{
  getMetric(metric:"transaction_volume") {
    availableSince(slug:"santiment")
  }
}
\`\`\`

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22transaction_volume%22)%20%7B%0A%20%20%20%20availableSince(slug%3A%22santiment%22)%0A%20%20%7D%0A%7D%0A)**

#### metadata

Each metric has some metadata describing what is the minimal resolution it can be fetched for and what is the default aggregation which will be used when getting the metric for higher resolution. The aggregations types are:

* \`SUM\` - the sum of all the values from the larger interval
* \`AVG\` - the average of the values in the larger interval
* \`MEDIAN\` - the median of all the values from the larger interval
* \`FIRST\` - the first value in the larger interval
* \`LAST\` - the last value in the larger interval
* \`MAX\` - the max value in the larger interval
* \`MIN\` - the min value in the larger interval
* \`ANY\` - any value falling in the larger interval

To get the metadata of a metric do the following:

\`\`\`js
{
  getMetric(metric:"transaction_volume") {
    metadata {
      minInterval
      defaultAggregation
    }
  }
}
\`\`\`

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22transaction_volume%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20minInterval%0A%20%20%20%20%20%20defaultAggregation%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)**


### Github Activity

**Tier: free**

**Max lag: a few hours**

**Max resolution: 1min**

Returns the number of GitHub events generated by a given project repositories. Each project has one or more repositories/organizations that are tracked. A longer description of how the activity is being tracked can be found in this article: [Tracking GitHub activity of crypto projects — introducing a better approach](https://medium.com/santiment/tracking-github-activity-of-crypto-projects-introducing-a-better-approach-9fb1af3f1c32)

Parameters:

| Parameter | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| slug      | The slug of the project                                                |
| from      | From which date to return the activity in ISO 8601 format              |
| to        | Till which date to return the activity in ISO 8601 format              |
| interval  | The intervals that should be returned. Default is \`1d\`, which is daily |

Example:

\`\`\`js
{
  githubActivity(slug:"santiment", from:"2019-01-01T00:00:00Z", to:"2019-06-01T00:00:00Z", interval:"1d") {
    datetime
    activity
  }
}
\`\`\`

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20githubActivity(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-06-01T00%3A00%3A00Z%22%2C%20interval%3A%221d%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20activity%0A%20%20%7D%0A%7D)**

### Dev Activity

**Tier: free**

**Max lag: a few hours**

**Max resolution: 1min**

Returns the number of GitHub events generated by a given project repositories that are connected with development actions. Each project has one or more repositories/organizations that are tracked. A longer description of how the activity is being tracked can be found in this article: [Tracking GitHub activity of crypto projects — introducing a better approach](https://medium.com/santiment/tracking-github-activity-of-crypto-projects-introducing-a-better-approach-9fb1af3f1c32)

The difference with the [githubActivity](#github-activity) API is that the actions counted in this API exclude events that are considered non-development related. These are:

* Comments on issues
* Issues created and closed
* Creating of forks
* Comments on commits
* People following an issue
* Downloading releases
* Watching a repository
* Project management events

This metric becomes useful if you compare projects that use the github functionality for project management and issue tracking. They are going to have larger \`githubActivity\`, compared to projects that use github only for code, as they will generate a lot of events related to issues and tasks.

Parameters:

| Parameter | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| slug      | The slug of the project                                                |
| from      | From which date to return the activity in ISO 8601 format              |
| to        | Till which date to return the activity in ISO 8601 format              |
| interval  | The intervals that should be returned. Default is \`1d\`, which is daily |

Example:

\`\`\`js
{
  devActivity(slug:"santiment", from:"2019-01-01T00:00:00Z", to:"2019-06-01T00:00:00Z", interval:"1d") {
    datetime
    activity
  }
}
\`\`\`

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20devActivity(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-06-01T00%3A00%3A00Z%22%2C%20interval%3A%221d%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20activity%0A%20%20%7D%0A%7D)**
`

export default Markdown
