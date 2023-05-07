// eslint-disable-next-line no-unused-vars
import React from 'react';
import { graphql } from 'gatsby';
// import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { Box } from '../components/Boxes/Boxes.styles';
import GoBack from '../components/GoBack/GoBack';
import WSPGallery from '../components/WpsGallery/WpsGallery';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { GalleryContainer } from '../assets/styles/pages/galeria.styles';

const GaleriaTemplate = ({ data: { image: { galleryAssets, galleryTitle } } }) => {
  const galleryImageSlides = galleryAssets.map((slide) => slide.url);

  return (
    <Box isColumn style={{ maxWidth: '1220px', margin: '64px auto', padding: '0px 16px' }}>
      <GoBack />
      <Box isColumn marginBottom="64px">
        <StyledTitle>{galleryTitle}</StyledTitle>
        <p>Zapraszamy do obejrzenia wybranych zdjęć z tej wyjątkowej sesji zdjęciowej.</p>
      </Box>
      <GalleryContainer>
        <WSPGallery
          galleryImages={galleryImageSlides}
        />
      </GalleryContainer>
    </Box>
  );
};

export const query = graphql`
    query($id: String) {
      image: contentfulGallery(id: {eq: $id}) {
        id
        galleryTitle
            galleryAssets {
            url
            }
        }
    }
`;

export default GaleriaTemplate;
