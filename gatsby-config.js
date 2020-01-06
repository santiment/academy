module.exports = {
  siteMetadata: {
    title: `Academy - Santiment Technical Documentation`,
    description: `Collected wisdom about the Santiment products, tools, metrics.`,
    author: `Santiment Team`,
    siteUrl: 'https://academy.santiment.net',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ['BACKEND_URL'],
      },
    },
    {
      resolve: `gatsby-plugin-algolia-docsearch`,
      options: {
        apiKey: "93cdd643257923145fa8093e68b5c453", // required
        indexName: "santiment_academy", // required
        inputSelector: "#search", // required
        debug: true
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'SAN',
        // This is the field under which it's accessible
        fieldName: 'san',
        // URL to query from
        url: 'https://api.santiment.net/graphql',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/docs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2F354D`,
        theme_color: `#2F354D`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
          `gatsby-remark-copy-images`,
        ]
      }
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        useClassNames: true,
      }
     }
  ],
}
