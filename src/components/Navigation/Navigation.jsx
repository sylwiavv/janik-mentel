import * as React from 'react';
import { useState } from 'react';
import { LogoWrapper, StyledLogo } from '../Logo/Logo';
import {
  OutsideWrapper, Wrapper, StyledNavigation, StyledIconClose, StyledIconHamburger, StyledLink,
} from './Navigation.styles';

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
        <ul>
          <li><StyledLink onClick={toggleNavigation} activeClassName="active" to="/home">home</StyledLink></li>
          <li><StyledLink onClick={toggleNavigation} activeClassName="active" to="/oferta">oferta</StyledLink></li>
          <li><StyledLink onClick={toggleNavigation} activeClassName="active" to="/galeria">galeria</StyledLink></li>
          <li><StyledLink onClick={toggleNavigation} activeClassName="active" to="/kontakt">kontakt</StyledLink></li>
        </ul>
      </StyledNavigation>

    </OutsideWrapper>
  );
};

export default Navigation;
