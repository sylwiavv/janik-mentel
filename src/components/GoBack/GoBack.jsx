import React from 'react';
import { navigate } from 'gatsby';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import { Box } from '../Boxes/Boxes.styles';

export default function GoBack() {
  return (
    <Box isButton="pointer" gap="16px" alignItems="center" flexDirection="row" isStart onClick={() => navigate(-1)}>
      <ArrowLeftIcon height="24px" />
      <span>Wróć</span>
    </Box>
  );
}
