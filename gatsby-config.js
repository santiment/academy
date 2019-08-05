module.exports = {
  siteMetadata: {
    title: `Neuro - Crypto’s Most Comprehensive API`,
    description: `Raw data access to on-chain, social media, development activity and pricing information for 1000+ crypto assets. Unlimited historical and real time data. Backtest strategies, build custom signals, DIY dashboards and much more with the most all-inclusive crypto API on the market.`,
    author: `Santiment Team`,
    siteUrl: 'https://neuro.santiment.net'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["BACKEND_URL"],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SAN",
        // This is the field under which it's accessible
        fieldName: "san",
        // URL to query from
        url: "https://api.santiment.net/graphql",
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#5275FF`,
        theme_color: `#5275FF`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
