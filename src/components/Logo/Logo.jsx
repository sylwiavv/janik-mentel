import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/icons-components/logo_janik-mentel.svg';

export const StyledLogo = styled(({ isSmall, ...props }) => <Logo {...props} />)`
  // width: ${({ isSmall }) => (isSmall ? '60px' : '200px')};
  // height: ${({ isSmall }) => (isSmall ? '60px' : '200px')};
  width: 100%;
  height: auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: ${({ isSmall }) => (isSmall ? '120px' : '200px')};
  position: relative;
  z-index: 10;
  //position: absolute;
  //top: 24px;
  //

  ${({ theme }) => theme.mq.mobile} {
    //position: absolute;
    width: 80px;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    //position: absolute;
    width: 120px;
  }
`;
