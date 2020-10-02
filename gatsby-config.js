/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "On Route Education",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.ts`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home`,
        path: `${__dirname}/src/data/home/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/data/pages/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": ["Access-Control-Allow-Origin = '*'"],
        },
      },
    },
  ],
};
