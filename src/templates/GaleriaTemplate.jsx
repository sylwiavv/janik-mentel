// eslint-disable-next-line no-unused-vars
import React from 'react';
import { graphql } from 'gatsby';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { Box } from '../components/Boxes/Boxes.styles';
import GoBack from '../components/GoBack/GoBack';

const GaleriaTemplate = ({ data: { post: { galeriaTitle, galeriaAsets } } }) => (
  <div>
    <GoBack />
    <Box isGap>
      <SimpleReactLightbox>
        {galeriaAsets.map(({ url }, i) => (
          <SRLWrapper>
            <img key={i} src={url} alt="" />
          </SRLWrapper>
        ))}
      </SimpleReactLightbox>

    </Box>

  </div>
);

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
