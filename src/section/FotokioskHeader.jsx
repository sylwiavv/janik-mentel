import React from 'react';
import styled from 'styled-components';
import { Navigation } from '../components/Navigation/Navigation';
import { Box } from '../components/Boxes/Boxes.styles';
import { ButtonWithIcon } from '../components/Button/ButtonWithLink';

const BoxWithImage = styled(Box)`
  background-image: url(https://images.pexels.com/photos/1448645/pexels-photo-1448645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
  min-height: 800px;
  max-height: 500px;
  width: 100%;
  background-position: center;
  background-size: cover;
  margin-bottom: 0;
`;

export const BigTitle = styled.h1`
  color: #d6e6e7;
  font-weight: 900;
  font-size: 48px;
  margin-bottom: 64px;

  ${({ theme }) => theme.mq.mobile} {
    font-size: 32px;
  }
`;

export const BigTitleWrapper = styled(Box)`
  display: block;
  line-height: 1.4em;

  ${({ theme }) => theme.mq.desktop} {
    max-width: 70%;
  }
`;

export const FotokioskHeader = () => (
  <div style={{ background: '#24494e' }} id="fotokiosk">
    <Navigation isNoStandard customColor />
    <Box style={{
      display: 'flex', margin: 'auto', position: 'relative', maxWidth: '1240px', padding: '0 0',
    }}
    >
      <Box style={{ flex: '1', color: '#d6e6e7' }}>
        <BigTitleWrapper>
          <BigTitle>
            Teraz wystarczy tylko kilka kliknięć, aby zamówić swoje ulubione zdjęcia
          </BigTitle>
          {/* <ButtonWithIcon>Zobacz więcej</ButtonWithIcon> */}
          <ButtonWithIcon href="#see-more"><span>Kliknij tutaj, aby zobaczyć więcej</span></ButtonWithIcon>
        </BigTitleWrapper>
      </Box>
      {/* <Box style={{ flex: '2' }}> */}
      {/*  <BoxWithImage /> */}
      {/* </Box> */}
    </Box>
  </div>
);
