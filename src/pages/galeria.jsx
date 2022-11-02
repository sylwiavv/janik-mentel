import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { getPageSlug } from '../helpers/getPageSlug';

// eslint-disable-next-line react/prop-types
const Galeria = ({ data: { posts: { nodes } } }) => (
  <>
    {nodes.map((n) => (
      <Link to={getPageSlug(n.title)} key={n.title}>
        {n.title}
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
        posts: allContentfulBlog {
            nodes {
            title
            }
        }
    }`;
export default Galeria;
