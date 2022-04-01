const webpack = require('webpack')
const path = require(`path`)
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
    fromPath: '/metrics/mvrv/',
    toPath: '/metrics/mvrv-ratio/',
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
      }),
    ],
  })
}

exports.onPostBuild = onPostBuild
