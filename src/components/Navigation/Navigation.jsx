import * as React from "react";
import { useContext } from "react";
import { Link } from "gatsby";
import { bool } from "prop-types";
import { useLocation } from "@reach/router";
import { LogoWrapper, StyledLogo } from "../Logo/Logo";

import {
  OutsideWrapper,
  StyledIconClose,
  StyledIconHamburger,
  StyledNavigation,
  Wrapper,
} from "./Navigation.styles";
import { Box } from "../Boxes/Boxes.styles";
import { NavigationContext } from "../../providers/NavigationProvider";
import { NavigationLinks } from "../NavigationLinks/NavigationLinks";

export const Navigation = ({ isNoStandard, customColor }) => {
  const { isOpen, toggleNavigation } = useContext(NavigationContext);
  const location = useLocation();

  return (
    <OutsideWrapper
      isOpen={isOpen}
      isNoStandard={isNoStandard}
      customColor={customColor}
    >
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
          <NavigationLinks header />
        </Box>
      </StyledNavigation>
    </OutsideWrapper>
  );
};

Navigation.propTypes = {
  isNoStandard: bool,
  customColor: bool,
};
