import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { getPageSlug } from '../helpers/getPageSlug';

// eslint-disable-next-line react/prop-types
const Galeria = ({ data: { posts: { nodes } } }) => (
  <>

    {console.log(nodes)}
    {nodes.map((n) => (
      <Link to={getPageSlug(n.galeriaTitle)} key={n.galeriaTitle}>
        {n.galeriaTitle}
      </Link>
    ))}
    <h1>Galeria Page</h1>
    <p>Zuzia & Michał</p>
    <p>Kasia & Jakub</p>
    <Link to="/home">Go home</Link>
  </>
);

export const query = graphql`
    query {
        posts: allContentfulGaleria {
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
    }`;
export default Galeria;
