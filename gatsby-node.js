const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectPage = path.resolve(`src/components/Projects/ArticlePage.js`);
  const result = await graphql(`
    query {
      allSanityProject {
        edges {
          node {
            title
            slug {
              current
            }
            location
            creationDate
            materials
            mainImage {
              asset {
                id
                url
              }
            }
          }
        }
      }
    }
  `);
  result.data.allSanityProject.edges.forEach((edge) => {
    createPage({
      path: `/projects/${edge.node.slug.current}`,
      component: projectPage,
      context: {
        slug: edge.node.slug.current,
      },
    });
  });
};
