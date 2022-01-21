import React from 'react'
import  {graphql} from 'gatsby'
import cx from 'classnames'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Markdown from '../components/Markdown/Markdown'
import ArticleInfo from '../components/ArticleInfo/ArticleInfo'
import ArticleHeadings from '../components/ArticleHeadings/ArticleHeadings'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import Reactions from '../components/Reactions/Reactions'
import styles from './article.module.scss'

export default function Template({data, pageContext}) {
  const {markdownRemark: article} = data
  const {breadcrumb: { crumbs }} = pageContext
  const meta = {
    title: `${article.frontmatter.title} | Santiment Academy`,
    description: `${article.frontmatter.description || ''}`,
  }
  return (
    <Layout isShowSidebar={true}>
      <SEO {...meta} />
      <div className={cx(styles.wrapper, "container")}>
        <Breadcrumb
          crumbs={crumbs}
          crumbLabel={article.frontmatter.title}
        />
        <ArticleInfo {...article.frontmatter} />
        <ArticleHeadings list={article.headings} crumbs={crumbs} />
        <Markdown markdown={article.rawMarkdownBody} />
        <Reactions article={article.frontmatter.title} />
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
        date
        author
        description
      }
      headings(depth: h2) {
        value
        depth
      }
    }
  }
`
