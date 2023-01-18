import * as React from 'react';
import { useContext } from 'react';
import Link from 'gatsby-link';
import { LogoWrapper, StyledLogo } from '../Logo/Logo';
import {
  OutsideWrapper,
  StyledIconClose,
  StyledIconHamburger,
  StyledLink,
  StyledNavigation,
  Wrapper,
} from './Navigation.styles';
import { Box } from '../Boxes/Boxes.styles';
import { NavigationContext } from '../../providers/NavigationProvider';

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
  const { isOpen, setIsOpen, toggleNavigation } = useContext(NavigationContext);

  return (
    <OutsideWrapper isOpen={isOpen}>
      <Wrapper isMobile isOpen={!isOpen}>
        <LogoWrapper isSmall isOpen>
          <Link to="/">
            <StyledLogo />
          </Link>
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
            {navigation.map(({ name, href }) => (
              <StyledLink
                key={name}
                onClick={() => setIsOpen(false)}
                className={((location.pathname.substring(1)).includes(href.substring(1)) && name !== 'Home')
                                || (location.pathname.length === 1 && name === 'Home') ? ' active' : null}
                to={href}
              >
                {name}
              </StyledLink>

            ))}
          </>
        </Box>
      </StyledNavigation>
    </OutsideWrapper>
  );
};

export default Navigation;
