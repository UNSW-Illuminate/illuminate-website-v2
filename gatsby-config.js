module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "xx4hw8hu",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        token:
          "skqYlL3dpaUP60SQFFjAtQZGGvGvw5VTAODtZqdd2y274rfvOVDZ8ishGbrry8TcQgHlPfJjUjuK5fqbAH4LE62v7mIY1q5avaBSLZpUDCrZeA78PmlsdgZp8KsfyYE3yIPjKHddem5F8aARlJRjALjuaaSSsHOKyxsoBQFktdorwq4xtuON",
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        // graphqlTag: "default",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logoWithBg.png",
      },
    },
  ],
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
