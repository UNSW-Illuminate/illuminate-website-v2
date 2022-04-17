module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins`
        ],
        display: 'swap'
      }
    }
  ],
};