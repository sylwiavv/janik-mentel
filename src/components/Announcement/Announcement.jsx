import * as React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 56px;
  align-items: center;
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: 0;
  text-align: center;
  font-size: 24px;
  background: #fff;

  @media (max-width: 768px) {
    padding: 28px;
    font-size: 18px;
  }
`;

export const Text = styled.p`
  color: #343434;
  margin: 0;
  line-height: 1.4;
  fontSize: ${({ isMobile }) => (isMobile ? '18px' : '24px')};
`;

export const Announcement = () => (
  <Wrapper >
    <Text >
      W dniach <b>16.10 – 31.10.2025</b> zakład
      <br />
      będzie nieczynny z powodu urlopu.
    </Text>
  </Wrapper>
);
