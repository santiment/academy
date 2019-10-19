import React from 'react'
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

export const articleQuery = graphql`
  query ArticleByTitle($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      frontmatter {
      date
      author
      title
    }
    headings(depth: h2) {
      value
      depth
    }
    rawMarkdownBody
    }
  }
`
