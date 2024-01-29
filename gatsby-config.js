/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `scottgruber`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", `gatsby-plugin-image`,
  `gatsby-plugin-sharp`, 'gatsby-plugin-mdx', "gatsby-transformer-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: 'projects',
      path: `${__dirname}/projects`
    }
  },
]
};