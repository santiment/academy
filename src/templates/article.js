import React from 'react'
import  {graphql} from 'gatsby'
import cx from 'classnames'
import Layout from '../components/layout'
import Markdown from '../components/Markdown/Markdown'
import ArticleInfo from '../components/ArticleInfo/ArticleInfo'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import styles from './article.module.scss'

export default function Template({data, pageContext}) {
  const {markdownRemark: article} = data
  const {breadcrumb: { crumbs }} = pageContext
  return (
    <Layout isShowSidebar={true}>
      <div className={cx(styles.wrapper, "container")}>
        <Breadcrumb
          crumbs={crumbs}
          crumbLabel={article.frontmatter.title}
        />
        <ArticleInfo {...article.frontmatter} />
        <Markdown markdown={article.rawMarkdownBody} />
      </div>
    </Layout>
  )
}
//
// export const articleQuery = graphql`
//   query ArticleByTitle($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path} }) {
//       frontmatter {
//       date
//       author
//       title
//     }
//     headings(depth: h2) {
//       value
//       depth
//     }
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        author
      }
    }
  }
`
