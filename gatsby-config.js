module.exports = {
  siteMetadata: {
    title: `KubeDesign Icons`,
    description: `Simply Delightful Icon System (From QingCloud Design Team)`,
    author: `Carlos`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Icons`,
        path: `${__dirname}/src/Icons`,
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
      },
    },
    /* `gatsby-transformer-inline-svg` */
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /Icons/
        }
      }
    },
    'gatsby-plugin-sass',
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/Config`,
      },
    },
  ],
}
