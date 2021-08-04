/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Suseendhar",
    description: "Suseendhar's Portfolio",
    author: "@suseendharlal",
    twitterUsername: "@SuseendharL",
    image: "/twitter-img.png",
    siteUrl: "https://suseendhar.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // {
    //   resolve: `gatsby-plugin-tawk.to`,
    //   options: {
    //     tawkId: "5f59ffd1f0e7167d000f11cc",
    //   },
    // },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#f04a26`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-suseendharlal-in`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         variants: [`400`, `700`],
    //       },
    //       {
    //         family: `Open Sans`,
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
}
