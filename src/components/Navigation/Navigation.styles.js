import styled from 'styled-components';
import { Link } from 'gatsby';
import IconClose from 'assets/icons-components/icon_close.svg';
import IconHamburger from 'assets/icons-components/icon_hamburger.svg';

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: ${({ isMobile }) => (isMobile ? 'space-between' : 'center')};
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
  margin: ${({ isMobile }) => (isMobile ? '0' : '')};
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    justify-content: flex-start;
    margin: 0;
  }
`;

export const OutsideWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  top: 0;
  left: 0;
  padding: 24px;

  z-index: 10;
  width: 100%;

  position: ${({ isOpen }) => ((isOpen) ? 'fixed' : 'absolute')};
  position: ${({ isNoStandard, isOpen }) => ((isNoStandard && !isOpen) ? 'static' : 'absolute')};

  height: ${({ isOpen }) => (isOpen ? '100%' : 'auto')};

  transition: ${({ isOpen }) => (isOpen ? 'background-color, .4s' : 'none')};

  background-color: ${({
    isNoStandard,
    customColor,
    isOpen,
    theme,
  }) => (((isNoStandard && !customColor && !isOpen) || isOpen) ? theme.colors.primaryBgColorDark : 'transparent')};


  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: row;
    height: auto;
  }
`;

export const StyledIconClose = styled(IconClose)`
  display: block;
  margin-left: auto;
  position: absolute;
  top: 32px;
  right: 28px;
  height: 16px;
  width: 16px;

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

export const StyledIconHamburger = styled(IconHamburger)`
  height: 24px;
  width: 24px;

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

export const StyledNavigation = styled.nav`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;

    ${({ theme }) => theme.mq.tablet} {
      flex-direction: row;
    }

    li {
      &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.indents.s};
      }

      ${({ theme }) => theme.mq.tablet} {
        flex-direction: row;

        &:not(:first-child) {
          margin-left: ${({ theme }) => theme.indents.l};
        }
      }
    }
  }
`;
// #2294d7
export const StyledLink = styled(Link)`
    // color: ${({ theme }) => theme.colors.fontColor};
  color: ${({ theme }) => theme.colors.white};
!important;
  font-size: 16px;
  //font-weight: bold;
  letter-spacing: .6px;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  transition: background-color, .4s;

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    padding: 2px 4px;
    background: linear-gradient(to left, rgba(250, 128, 114, 0) 50%, ${({ theme }) => theme.colors.white} 50%) right;
    background-size: 200%;
    transition: .4s ease-out;
    width: 0%;
  }

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    width: max-content;

    &:after {
      padding: 2px 4px;
      width: 100%;
      height: 1px;
      background-position: left;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.whiteHover};
  }
`;
