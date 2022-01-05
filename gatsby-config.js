/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config()

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Beauty Salon SUGINO`,
    description: `三重県松阪市にあるレトロで小さな美容室「Beauty Salon SUGINO」のホームページです。`,
    lang: `ja`,
    siteUrl: `https://example.netlify.app`,
    locate: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXX`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: "sugino",
        apis: [
          {
            endpoint: "news",
          },
          { endpoint: "category" },
        ],
      },
    },
  ],
}
