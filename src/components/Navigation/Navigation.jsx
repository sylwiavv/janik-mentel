import * as React from 'react';
import { useState } from 'react';
import { LogoWrapper, StyledLogo } from '../Logo/Logo';
import {
  OutsideWrapper, Wrapper, StyledNavigation, StyledIconClose, StyledIconHamburger, StyledLink,
} from './Navigation.styles';
import { Box } from '../Boxes/Boxes.styles';

const navigation = [
  {
    name: 'Home',
    href: '/home',
  },
  {
    name: 'Oferta',
    href: '/oferta',
  },
  {
    name: 'Galeria',
    href: '/galeria',
  },
  {
    name: 'Kontakt',
    href: '/kontakt',
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OutsideWrapper isOpen={isOpen}>
      <Wrapper isMobile isOpen={!isOpen}>
        <LogoWrapper isSmall>
          <StyledLogo />
        </LogoWrapper>
        <StyledIconHamburger onClick={toggleNavigation} />
      </Wrapper>
      <Wrapper isColumn isOpen={isOpen}>
        <StyledIconClose onClick={toggleNavigation} />
        <LogoWrapper>
          <StyledLogo />
        </LogoWrapper>
      </Wrapper>
      <StyledNavigation isOpen={isOpen}>
        <Box isGap>
          {
            navigation.map(({ name, href }) => (
              <StyledLink
                key={name}
                onClick={toggleNavigation}
                className={location.pathname.includes(href) ? ' active' : null}
                to={href}
              >
                {name}
              </StyledLink>
            ))
          }
        </Box>

      </StyledNavigation>
    </OutsideWrapper>
  );
};

export default Navigation;
