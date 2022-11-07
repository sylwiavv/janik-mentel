import * as React from 'react';
import { FooterWrapper } from './Footer.styles';
import { StyledLogo } from '../Logo/Logo';
import { Box } from '../Boxes/Boxes.styles';
import { StyledLink } from '../Navigation/Navigation.styles';
import { navigation } from '../Navigation/Navigation';

export const Footer = () => (
  <FooterWrapper>
    <Box className="container">
      <Box isColumn isGap noMarginBottom className="first">
        <StyledLogo className="footer-logo" />
        <Box isColumn noMarginBottom>
          <h3>Janik - Mentel</h3>
          <p>Bernadetta Mentel</p>
          <p>Andrzej Mentel</p>
        </Box>
        <Box isColumn noMarginBottom>
          <p>Jeleśnia, ul. Jana Kazimierza 213</p>
          <p>tel. (33) 86 36 100 lub 503 022 377</p>
          <p>amentel@op.pl</p>
        </Box>
      </Box>
      <Box isColumn noMarginBottom className="links-wrapper">
        <h3>Nawigacja</h3>
        <StyledLink to={navigation[1].href}>{navigation[1].name}</StyledLink>
        <StyledLink to={navigation[2].href}>{navigation[2].name}</StyledLink>
        <StyledLink to={navigation[3].href}>{navigation[3].name}</StyledLink>
      </Box>
    </Box>

  </FooterWrapper>
);
