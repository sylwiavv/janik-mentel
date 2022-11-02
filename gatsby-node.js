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
       allContentfulGaleria {
         nodes {
            galeriaTitle
            id
            galeriaAsets {
               file {
                   url
               }
            }
         }
        }
    }
  `);
  result.data.allContentfulGaleria.nodes.forEach((node) => {
    const slug = `/galeria/${slugify(node.galeriaTitle.toLowerCase())}`;
    createPage({
      path: slug,
      component: galeriaTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
