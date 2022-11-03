// eslint-disable-next-line no-unused-vars
import React from 'react';
import { graphql } from 'gatsby';
import { Box } from '../components/Boxes/Boxes.styles';

const GaleriaTemplate = ({ data: { post: { galeriaTitle, galeriaAsets } } }) =>
// TODO CHANGE A KEY VALUE

  (
    <>
      <h1>{galeriaTitle}</h1>
      <Box isGap>
        {galeriaAsets.map(({ url }, i) => (
          <img key={i} src={url} alt="" />
        ))}
      </Box>

    </>
  );
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
