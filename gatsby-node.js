const webpack = require('webpack')
const path = require(`path`)
const { execSync } = require('child_process')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { onPostBuild } = require('gatsby-plugin-meta-redirect/gatsby-node')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    // node.fileAbsolutePath is used for each file separately
    // if we remove it all updated at values would be the same as this file modified date
    const lastUpdatedAt = execSync(
      `git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`
    ).toString()
    createNodeField({
      node,
      name: 'lastUpdatedAt',
      value: lastUpdatedAt,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { createRedirect } = actions
  createRedirect({
    fromPath: '/metrics/mvrv-ratio/',
    toPath: '/metrics/mvrv/',
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: '/metrics/holders-distribution/',
    toPath: '/metrics/supply-distribution/',
    isPermanent: true,
    redirectInBrowser: true,
  })

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: { slug: node.fields.slug },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        webkit: path.resolve('node_modules/san-webkit/lib'),
      },
    },

    module: {
      rules: [
        {
          test: /\.svelte/,
          use: {
            loader: 'svelte-loader',
          },
        },
      ],
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.MEDIA_PATH': JSON.stringify('/static/webkit'),
        'process.env.ICONS_PATH': JSON.stringify('/static/webkit/icons'),
        'process.env.GQL_SERVER_URL':
          '`https://api${window.location.hostname.includes("stage") ? "-stage" : ""}.santiment.net/graphql`',
      }),
    ],
  })
}

exports.onPostBuild = onPostBuild