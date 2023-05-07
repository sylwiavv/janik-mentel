import React from 'react';
import styled from 'styled-components';
import { Box } from '../components/Boxes/Boxes.styles';

const STEPS = [
  { number: '01', title: 'Pobierz aplikacje' },
  { number: '02', title: 'Wybierz zdjęcia' },
  { number: '03', title: 'Obierz zamówienie' },
];

export const CardsWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  grid-gap: 32px;
  font-size: 2.4rem;
  margin-bottom: 0;
  position: absolute;
  right: 4px;
  top: 72px;

  ${({ theme }) => theme.mq.mobile} {
    position: static;
    margin-bottom: 24px;
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-top: 24px;
    top: 104px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    margin-top: 32px;
    top: 0;
  }

`;

export const SingleCard = styled(Box)`
  background-color: #f7b73c;

  padding: 16px;
  margin-top: auto;
  display: flex;
  justify-content: end;
  margin-bottom: 0;


  ${({ theme }) => theme.mq.mobile} {
    max-width: 144px;
    max-height: 144px;
    padding: 8px;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 200px;
    height: 200px;
  }

  h3 {
    color: #ca901e;
    font-weight: 900;
    margin: 16px 0;
    position: relative;
    z-index: 1;
  }

  p {
    color: #0c0804;
    font-weight: 500;

    ${({ theme }) => theme.mq.mobile} {
      font-size: 18px;
    }
  }
`;

export const FotokioskCards = () => (
  <CardsWrapper>
    {STEPS.map(({ number, title }) => (
      <SingleCard key={number} isColumn>
        <h3>{number}</h3>
        <p>{title}</p>
      </SingleCard>
    ))}
  </CardsWrapper>
);
