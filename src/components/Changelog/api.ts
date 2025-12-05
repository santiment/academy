import { ApiQuery } from 'san-webkit-next/api'

export const queryMetricsChangelog = ApiQuery((page: number, pageSize: number, searchTerm: string) => ({
  schema: `query metricsChangelog($page: Int, $pageSize: Int, $searchTerm: String) {
    metricsChangelog(
      page: $page
      pageSize: $pageSize
      searchTerm: $searchTerm
    ) {
      entries {
        date
        createdMetrics {
          metric {
            humanReadableName
            metric
            docs {
              link
            }
          }
          eventTimestamp
        }
        deprecatedMetrics {
          metric {
            humanReadableName
            metric
          }
          eventTimestamp
          deprecationNote
        }
      }
      pagination {
        hasMore
        currentPage
        totalDates
        totalPages
      }
    }
  }
`,
  variables: { page, pageSize, searchTerm },
}),
  (gql) => gql.metricsChangelog,
)

export const queryAssetsChangelog = ApiQuery(
  (page: number, pageSize: number, searchTerm: string) => ({
    schema: `query assetsChangelog($page: Int, $pageSize: Int, $searchTerm: String) {
        assetsChangelog(page: $page, pageSize: $pageSize, searchTerm: $searchTerm) {
          entries {
            date
            createdAssets {
              asset {
                name
                ticker
                slug
                logoUrl
                description
                link
              }
              eventTimestamp
            }
            hiddenAssets {
              asset {
                name
                ticker
                slug
              }
              eventTimestamp
              hidingReason
            }
          }
          pagination {
            hasMore
            totalDates
            currentPage
            totalPages
          }
        }
      }
  `,
    variables: { page, pageSize, searchTerm },
  }),
  (gql) => gql.assetsChangelog,
)

