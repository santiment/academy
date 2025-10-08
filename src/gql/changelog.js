import gql from 'graphql-tag'

export const METRICS_QUERY = gql`
  query metricsChangelog($page: Int, $pageSize: Int, $searchTerm: String) {
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
`

export const ASSETS_QUERY = gql`
  query assetsChangelog($page: Int, $pageSize: Int, $searchTerm: String) {
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
`
