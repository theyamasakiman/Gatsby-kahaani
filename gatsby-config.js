module.exports = {
  siteMetadata: {
    title: `Kahaani`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `events`,
        path: `${__dirname}/events`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
