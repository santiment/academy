import React from "react"
import { Query, ApolloConsumer } from "react-apollo"
import Button from "@santiment-network/ui/Button"
import markdownStyles from "../Markdown/Markdown.module.scss"
import { mergeEntries } from "./utils"
import styles from "./ChangelogList.module.scss"
import PageLoader from "../../components/Loader/PageLoader"

const ChangelogList = ({
  title,
  queryDocument,
  queryRoot,
  createdKey,
  removedKey,
  pageSize = 10,
  variables,
  renderCreatedItem,
  renderRemovedItem,
}) => {
  const baseVars = { page: 1, pageSize, ...(variables || {}) }
  const [entries, setEntries] = React.useState(null)
  const [pagination, setPagination] = React.useState(null)
  const [loadingMore, setLoadingMore] = React.useState(false)

  const prime = data => {
    const root = data && data[queryRoot]

    setEntries(root?.entries || [])
    setPagination(root?.pagination || null)
  }

  const loadMore = async client => {
    if (!pagination?.hasMore || loadingMore) return
    setLoadingMore(true)

    try {
      const res = await client.query({
        query: queryDocument,
        variables: { ...baseVars, page: (pagination.currentPage || 1) + 1 },
        fetchPolicy: "no-cache",
      })

      const next = res?.data?.[queryRoot]

      if (next) {
        setEntries(prev =>
          mergeEntries(prev || [], next.entries || [], createdKey, removedKey)
        )
        setPagination(next.pagination || null)
      }
    } finally {
      setLoadingMore(false)
    }
  }

  return (
    <div className={markdownStyles.wrapper}>
      <h1>{title}</h1>

      <ApolloConsumer>
        {client => (
          <Query
            query={queryDocument}
            variables={baseVars}
            fetchPolicy="no-cache"
            onCompleted={prime}
          >
            {({ data, loading, error }) => {
              const root = data && data[queryRoot]
              const initialEntries = root?.entries || []
              const initialPag = root?.pagination || null

              const readyEntries = entries ?? initialEntries
              const readyPag = pagination ?? initialPag

              if (loading && !entries)
                return (
                  <div className={styles.loaderWrapper}>
                    <PageLoader text="Loading" className={styles.loader} />
                  </div>
                )

              if (error) return <div>Error: {error.message}</div>

              return (
                <>
                  {!readyEntries || readyEntries.length === 0 ? (
                    <div>No changes yet.</div>
                  ) : (
                    <div className={styles.entriesWrapper}>
                      {readyEntries.map(group => (
                        <section key={group.date}>
                          <h3>{new Date(group.date).toLocaleDateString()}</h3>

                          <ul>
                            {(group[createdKey] || []).map((item, i) => (
                              <li key={`c-${group.date}-${i}`}>
                                {renderCreatedItem(item, group)}
                              </li>
                            ))}
                          </ul>

                          <ul>
                            {(group[removedKey] || []).map((item, i) => (
                              <li key={`r-${group.date}-${i}`}>
                                {renderRemovedItem(item, group)}
                              </li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  )}

                  {readyPag?.hasMore ? (
                    <Button
                      variant="fill"
                      accent="positive"
                      disabled={loadingMore}
                      onClick={() => loadMore(client)}
                    >
                      {loadingMore ? "Loading…" : "Load more"}
                    </Button>
                  ) : null}
                </>
              )
            }}
          </Query>
        )}
      </ApolloConsumer>
    </div>
  )
}

export default ChangelogList
