import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Logo from 'assets/icons-components/logo_janik-mentel-dark.svg';
import { getPageSlug } from '../helpers/getPageSlug';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { Box } from '../components/Boxes/Boxes.styles';
import { GalleryContainer } from '../assets/styles/pages/galeria.styles';
import { ArrowRightIcon } from '../components/icons/ArrowRightIcon';

const Galeria = ({ data: { posts: { nodes } } }) => (
  <Box isColumn style={{ maxWidth: '990px', margin: '0 auto', padding: '0px 16px' }}>
    <Box isColumn id="galeria" style={{ width: '100%' }}>
      <StyledTitle>Galeria</StyledTitle>
      <p>Zapraszamy do obejrzenia zdjęć z sesji zdjęciowych wykonanych przez nasze studio.</p>
    </Box>

    <GalleryContainer
      paddingRight="0"
      style={{ width: '100%' }}
    >
      {nodes.map((n) => (
        <Link key={n.id} to={getPageSlug(n.galleryTitle)}>
          <Box className="page-link" key={n.galleryTitle} gap="32px" spaceBetween>
            {/* <HeroImage className="pattern" imageSource={data.homepage.publicURL} /> */}
            <Logo className="logo" />
            <Box isColumn className="page-link__txt" noMarginBottom>
              <h3>{n.galleryTitle}</h3>
              <Box gap="8px" className="page-link__link" isCenter noMarginBottom>
                <span>
                  Zobacz więcej
                </span>
                <ArrowRightIcon height="24px" />
              </Box>
            </Box>
            <Box className="page-link__img" isGap noMarginBottom>
              <div className="page-link__img-inner">
                <img src={n.galleryAssets[0].file.url} alt="" loading="lazy" className="first" />
              </div>
            </Box>
          </Box>
        </Link>
      ))}
    </GalleryContainer>
  </Box>
);
export const query = graphql`
    query {
        posts: allContentfulGallery {
         nodes {
            galleryTitle
            id
            galleryAssets {
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
