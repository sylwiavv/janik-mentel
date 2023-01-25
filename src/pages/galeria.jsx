import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Logo from 'assets/icons-components/logo_janik-mentel-dark.svg';
import { getPageSlug } from '../helpers/getPageSlug';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { Box } from '../components/Boxes/Boxes.styles';
import { GalleryContainer } from '../assets/styles/pages/galeria.styles';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';

const Galeria = ({ data: { posts: { nodes } }, data }) => (
  <>
    <Box isColumn marginBottom="64px" id="galeria">
      <StyledTitle>Galeria</StyledTitle>
      <p>Zapraszamy do obejrzenia zdjęć z sesji zdjęciowych wykonanych przez nasze studio.</p>
    </Box>
    <GalleryContainer
      paddingRight="200px"
    >
      {nodes.map((n) => (
        <Link key={n.id} to={getPageSlug(n.galeriaTitle)}>
          <Box className="page-link" key={n.galeriaTitle} gap="32px" spaceBetween>
            {/* <HeroImage className="pattern" imageSource={data.homepage.publicURL} /> */}
            <Logo className="logo" />
            <Box isColumn className="page-link__txt" noMarginBottom>
              <h3>{n.galeriaTitle}</h3>
              <Box gap="8px" className="page-link__link" isCenter noMarginBottom>
                <span>
                  Zobacz więcej
                </span>
                <ArrowRightIcon height="24px" />
              </Box>
            </Box>
            <Box className="page-link__img" isGap noMarginBottom>
              <div className="page-link__img-inner">
                <img src={n.galeriaAsets[0].file.url} alt="" loading="lazy" className="first" />
              </div>
            </Box>
          </Box>
        </Link>
      ))}
    </GalleryContainer>
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
        },
           homepage: file(relativePath: {regex: "/homepage\/icon_pattern.svg/"}) {
            publicURL
        }
    }
`;

export default Galeria;
