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
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@images": "src/assets/images",
          "@styles": "src/assets/styles",
          "@components": "src/components",
          "@containers": "src/containers",
          "@pages": "src/pages",
          "@templates": "src/templates",
        },
        extensions: ["js", "jsx", "scss"],
      },
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beauty Salon SUGINO`,
        short_name: `スギノ美容室`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    `gatsby-plugin-sass`,
    // {
    //   resolve: "gatsby-source-microcms",
    //   options: {
    //     apiKey: process.env.MICROCMS_API_KEY,
    //     serviceId: "sugino",
    //     apis: [
    //       {
    //         endpoint: "news",
    //       },
    //       { endpoint: "category" },
    //     ],
    //   },
    // },
  ],
}
