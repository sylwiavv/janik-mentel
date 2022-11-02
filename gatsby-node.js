const path = require('path');
const slugify = require('slugify');

exports.onPostBuild = ({ reporter }) => {
  reporter.info('Your Gatsby site has been built!');
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const galeriaTemplate = path.resolve('src/templates/GaleriaTemplate.jsx');
  const result = await graphql(`
    query {
       allContentfulBlog {
            nodes {
            title
            id
            }
        }
    }
  `);
  result.data.allContentfulBlog.nodes.forEach((node) => {
    const slug = `/galeria/${slugify(node.title.toLowerCase())}`;
    createPage({
      path: slug,
      component: galeriaTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
