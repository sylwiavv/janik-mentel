// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
// import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { Box } from '../components/Boxes/Boxes.styles';
import GoBack from '../components/GoBack/GoBack';
import WSPGallery from '../components/WpsGallery/WpsGallery';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { GalleryContainer } from '../assets/styles/pages/galeria.styles';

const GaleriaTemplate = ({ data: { post: { galeriaAsets, galeriaTitle } } }) => {
  const galleryImageSlides = galeriaAsets.map((slide) => slide.url);
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;
    // console.log(elements);
  }, []);

  return (
    <>
      <GoBack />
      <Box isColumn marginBottom="64px" ref={wrapper}>
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
