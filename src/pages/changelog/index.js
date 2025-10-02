import React from "react"
import cx from "classnames"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styles from "./changelog.module.scss"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import ArticleHeadings from "../../components/ArticleHeadings/ArticleHeadings"
import ArticleFooter from "../../components/ArticleFooter"
import { dateDifferenceInWords } from "webkit/utils/dates"
import markdownStyles from "../../components/Markdown/Markdown.module.scss"

const ChangelogPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const meta = {
    title: `Changelog | Santiment Academy`,
    description:
      "Keep track of development updates, new product features and other items from our changelog",
  }

  return (
    <Layout isShowSidebar={true}>
      <SEO {...meta} />
      <div className={cx(styles.wrapper, "container")}>
        <Breadcrumb crumbs={crumbs} crumbLabel="Changelog" />
        <ArticleHeadings crumbs={crumbs} tableOfContents="" title="Changelog" />
        <div className={markdownStyles.wrapper}>
          <h1>Development changelog</h1>
          <p>
            Keep track of development updates, new product features and other
            items from our changelog. We update this page every two weeks or
            more frequently.
          </p>
          <ul>
            <li>
              <a href="/changelog/assets">Assets</a>
            </li>
            <li>
              <a href="/changelog/metrics">Metrics</a>
            </li>
          </ul>
        </div>
        <ArticleFooter />
      </div>
    </Layout>
  )
}

export default ChangelogPage
