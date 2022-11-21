// eslint-disable-next-line no-unused-vars
import React from 'react';
import { graphql } from 'gatsby';
// import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { Box } from '../components/Boxes/Boxes.styles';
import GoBack from '../components/GoBack/GoBack';
import WpsGallery from '../components/WpsGallery/WpsGallery';
import WSPGallery from '../components/WpsGallery/WpsGallery';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { GalleryContainer } from '../assets/styles/pages/galeria.styles';

const GaleriaTemplate = ({ data: { post: { galeriaAsets, galeriaTitle } } }) => {
  const galleryImageSlides = galeriaAsets.map((slide) => slide.url);
  return (
    <>
      <GoBack />
      <Box isColumn marginBottom="64px">
        <StyledTitle>{galeriaTitle}</StyledTitle>
        <p>Zapraszamy do obejrzenia wybranych zdjęć z tej wyjątkowej sesji zdjęciowej.</p>
      </Box>
      <GalleryContainer>
        <WSPGallery
          galleryImages={galleryImageSlides}
        />
      </GalleryContainer>
    </>
  );
};

// TODO CHANGE A KEY VALUE

export const query = graphql`
    query($id: String) {
      post: contentfulGaleria(id: {eq: $id}) {
        id
        galeriaTitle
            galeriaAsets {
            url
            }
        }
    }
`;

export default GaleriaTemplate;
