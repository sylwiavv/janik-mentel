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

const galleryImages = [
  {
    img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    img: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    img: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    img: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    img: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    img: 'https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];
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
