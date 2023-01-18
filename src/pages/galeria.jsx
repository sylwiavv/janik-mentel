import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { getPageSlug } from '../helpers/getPageSlug';
import { StyledHeading, StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { HeroImage } from '../assets/styles/pages/homepage.styles';
import { Box } from '../components/Boxes/Boxes.styles';
import { GalleryContainer } from '../assets/styles/pages/galeria.styles';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';

// eslint-disable-next-line react/prop-types
const Galeria = ({ data: { posts: { nodes } }, data }) => (
  <>
    <StyledHeading>Galeria</StyledHeading>
    <Box isColumn marginBottom="64px">
      <StyledTitle>Galeria</StyledTitle>
      <p>Zapraszamy do obejrzenia zdjęć z sesji zdjęciowych wykonanych przez nasze studio.</p>
    </Box>
    <GalleryContainer paddingRight="260px">
      {nodes.map((n) => (
        <Link key={n.id} to={getPageSlug(n.galeriaTitle)}>
          <Box className="page-link" key={n.galeriaTitle} gap="32px" spaceBetween>
            <HeroImage className="pattern" imageSource={data.homepage.publicURL} />
            <Box isColumn className="page-link__txt" noMarginBottom>
              <h3>{n.galeriaTitle}</h3>
              <Box gap="8px" className="page-link__link" isCenter noMarginBottom>
                <span>
                  Zobacz więcej (add hover)
                </span>
                <ArrowRightIcon height="24px" />
              </Box>

            </Box>
            <Box className="page-link__img" isGap noMarginBottom>
              <div className="page-link__img-inner">
                <img src={n.galeriaAsets[0].file.url} alt="" />
              </div>
              {/* <HeroImage className="image-abs" imageSource={n.galeriaAsets[0].file.url} height="350px" width="800px" /> */}
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
