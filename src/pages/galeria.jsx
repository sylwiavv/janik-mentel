import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { getPageSlug } from '../helpers/getPageSlug';
import { StyledHeading, StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { HeroImage } from '../assets/styles/pages/homepage.styles';
import { Box } from '../components/Boxes/Boxes.styles';
import { GaleryContainer } from '../assets/styles/pages/galeria.styles';

// eslint-disable-next-line react/prop-types
const Galeria = ({ data: { posts: { nodes } } }) => (
  <>
    <StyledHeading>Galeria</StyledHeading>
    <StyledTitle>Galeria</StyledTitle>
    <GaleryContainer>
      {nodes.map((n) => (
        <Box key={n.galeriaTitle} gap="32px" spaceBetween className="test">
          <Box isColumn className="galeria-tytul">
            <h3>{n.galeriaTitle}</h3>
            <Link to={getPageSlug(n.galeriaTitle)} key={n.galeriaTitle}>
              Zobacz więcej
            </Link>
          </Box>
          <Box isGap noMarginBottom className="box-with-images image-container">
            <HeroImage className="image-abs" imageSource={n.galeriaAsets[0].file.url} height="350px" width="800px" />
          </Box>
        </Box>
      ))}
    </GaleryContainer>

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
