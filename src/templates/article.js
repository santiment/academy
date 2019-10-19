import React from 'react'
import  {graphql} from 'gatsby'
import Layout from '../components/layout'
import Markdown from '../components/Markdown/Markdown'

export default function Template({data}) {
  const {markdownRemark: article} = data
  return (
    <Layout isShowSidebar={true}>
      <Markdown markdown={article.rawMarkdownBody} />
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
      }
    }
  }
`
