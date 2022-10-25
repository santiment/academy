import React from 'react'
import { graphql } from 'gatsby'
import cx from 'classnames'
import { dateDifferenceInWords } from 'webkit/utils/dates'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Markdown from '../components/Markdown/Markdown'
import ArticleHeadings from '../components/ArticleHeadings/ArticleHeadings'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import ArticleFooter from '../components/ArticleFooter'
import injectCustomMarkdownComponents from '../components/MarkdownCustomComponents'
import styles from './article.module.scss'

const Template = ({ data, pageContext }) => {
  const { markdownRemark: article } = data
  const {
    breadcrumb: { crumbs },
  } = pageContext
  const meta = {
    title: `${article.frontmatter.title} | Santiment Academy`,
    description: `${article.frontmatter.description || ''}`,
  }
  const lastUpdatedAt = dateDifferenceInWords(
    new Date(article.fields.lastUpdatedAt)
  )

  return (
    <Layout isShowSidebar={true}>
      <SEO {...meta} />
      <div className={cx(styles.wrapper, 'container')}>
        <Breadcrumb crumbs={crumbs} crumbLabel={article.frontmatter.title} />
        <ArticleHeadings
          crumbs={crumbs}
          tableOfContents={article.tableOfContents}
        />
        <Markdown
          markdown={injectCustomMarkdownComponents(article.rawMarkdownBody)}
        />
        <ArticleFooter lastUpdatedAt={lastUpdatedAt} />
      </div>
    </Layout>
  )
}

export default Template

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        title
        date
        author
        description
      }
      fields {
        lastUpdatedAt
      }
      tableOfContents(maxDepth: 3)
    }
  }
`
