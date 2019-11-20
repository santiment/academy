import React from 'react'
import  {graphql} from 'gatsby'
import cx from 'classnames'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Markdown from '../components/Markdown/Markdown'
import ArticleInfo from '../components/ArticleInfo/ArticleInfo'
import ArticleHeadings from '../components/ArticleHeadings/ArticleHeadings'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import styles from './article.module.scss'

export default function Template({data, pageContext}) {
  const {markdownRemark: article} = data
  const {breadcrumb: { crumbs }} = pageContext
  return (
    <Layout isShowSidebar={true}>
      <SEO title={`Academy - ${article.frontmatter.title}`} />
      <div className={cx(styles.wrapper, "container")}>
        <Breadcrumb
          crumbs={crumbs}
          crumbLabel={article.frontmatter.title}
        />
        <ArticleInfo {...article.frontmatter} />
        <ArticleHeadings list={article.headings} />
        <Markdown markdown={article.rawMarkdownBody} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        author
      }
      headings(depth: h2) {
        value
        depth
      }
    }
  }
`
