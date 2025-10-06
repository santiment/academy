import React from "react"
import cx from "classnames"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ChangelogList from "../../components/ChangelogList/ChangelogList"
import { METRICS_QUERY } from "../../gql/changelog"
import styles from "./changelog.module.scss"
import ArticleFooter from "../../components/ArticleFooter"

const CreatedMetricItem = ({ item }) => {
  const metricName =
    item.metric?.humanReadableName || item.metric?.metric || "—"
  const docsLink = item.metric?.docs?.link
  const timestamp = new Date(item.eventTimestamp).toLocaleString()

  return (
    <>
      <strong>Created</strong> {metricName} — <time>{timestamp}</time>
      {docsLink && (
        <>
          {" — "}
          <a href={docsLink} target="_blank" rel="noreferrer">
            Docs
          </a>
        </>
      )}
    </>
  )
}

const DeprecatedMetricItem = ({ item }) => {
  const metricName =
    item.metric?.humanReadableName || item.metric?.metric || "—"
  const timestamp = new Date(item.eventTimestamp).toLocaleString()

  return (
    <>
      <strong>Deprecated</strong> {metricName} — <time>{timestamp}</time>
      {item.deprecationNote && ` — ${item.deprecationNote}`}
    </>
  )
}

const meta = {
  title: "Metrics | Santiment Academy",
  description:
    "Keep track of development updates, new product features and other items from our changelog",
}

const MetricsPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout isShowSidebar>
      <SEO {...meta} />
      <div className={cx(styles.wrapper, "container")}>
        <Breadcrumb crumbs={crumbs} crumbLabel="Assets" />
        <ChangelogList
          title="Metrics"
          queryDocument={METRICS_QUERY}
          queryRoot="metricsChangelog"
          createdKey="createdMetrics"
          removedKey="deprecatedMetrics"
          pageSize={20}
          renderCreatedItem={item => <CreatedMetricItem item={item} />}
          renderRemovedItem={item => <DeprecatedMetricItem item={item} />}
        />
        <ArticleFooter />
      </div>
    </Layout>
  )
}

export default MetricsPage
