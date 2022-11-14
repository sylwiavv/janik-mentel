import * as React from 'react';
import { useState } from 'react';
import { LogoWrapper, StyledLogo } from '../Logo/Logo';
import {
  OutsideWrapper, Wrapper, StyledNavigation, StyledIconClose, StyledIconHamburger, StyledLink,
} from './Navigation.styles';
import { Box } from '../Boxes/Boxes.styles';

export const navigation = [
  {
    name: 'Home',
    href: '/',
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
    document.body.classList.remove('not-scroll');

    if (!isOpen) {
      document.body.classList.add('not-scroll');
    }
  };

  return (
    <OutsideWrapper isOpen={isOpen}>
      <Wrapper isMobile isOpen={!isOpen}>
        <LogoWrapper isSmall isOpen>
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
        <Box isGap noMarginBottom>
          <>
            {
            navigation.map(({ name, href }) => (
              <StyledLink
                key={name}
                onClick={() => toggleNavigation}
                className={((location.pathname.substring(1)).includes(href.substring(1)) && name !== 'Home')
                || (location.pathname.length === 1 && name === 'Home') ? ' active' : null}
                to={href}
              >
                {name}
              </StyledLink>

            ))
          }
          </>
        </Box>

      </StyledNavigation>
    </OutsideWrapper>
  );
};

export default Navigation;
