import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { getPageSlug } from '../helpers/getPageSlug';
import { StyledHeading, StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';

// eslint-disable-next-line react/prop-types
const Galeria = ({ data: { posts: { nodes } } }) => (
  <>
    <StyledHeading>Galeria</StyledHeading>
    <StyledTitle>Galeria</StyledTitle>
    {nodes.map((n) => (
      <Link to={getPageSlug(n.galeriaTitle)} key={n.galeriaTitle}>
        {n.galeriaTitle}
      </Link>
    ))}
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
