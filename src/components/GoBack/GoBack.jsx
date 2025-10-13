import React from 'react';
import { navigate } from 'gatsby';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import { GoBackWrapper } from './GoBack.styles';

export default function GoBack() {
  return (
    <GoBackWrapper onClick={() => navigate(-1)}>
      <ArrowLeftIcon height="24px" />
      <span>Wróć</span>
    </GoBackWrapper>
  );
}
