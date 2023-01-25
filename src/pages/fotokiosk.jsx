import * as React from 'react';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { Box } from '../components/Boxes/Boxes.styles';

const fotokiosk = () => (
  <Box isColumn marginBottom="64px" id="fotokiosk">
    <StyledTitle>Foto kiosk</StyledTitle>
    <p>Zapraszamy do obejrzenia zdjęć z sesji zdjęciowych wykonanych przez nasze studio.</p>
  </Box>
);
export default fotokiosk;
