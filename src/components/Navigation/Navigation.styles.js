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
  position: ${({ isOpen }) => (isOpen ? 'absolute' : 'static')};
  height: ${({ isOpen }) => (isOpen ? '100%' : 'auto')};

  margin: ${({ theme }) => theme.indents.m} 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  top: 0;
  left: 0;

  ${({ theme }) => theme.mq.tablet} {
    position: static;
    display: flex;
    flex-direction: row;
    height: auto;
  }
`;

export const StyledIconClose = styled(IconClose)`
  display: block;
  margin-left: auto;
  position: absolute;
  top: 8px;
  right: 8px;
  height: 16px;
  width: 16px;
  
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

export const StyledIconHamburger = styled(IconHamburger)`
  height: 24px;
  width: 24px;

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

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;
  text-transform: capitalize;
  position: relative;
  
  &.active {
    font-weight: bold;
    
    &:after {
      content: '';
      background-color: ${({ theme }) => theme.colors.fontColorSecondary_hover};
      position: absolute;
      left: -1px;
      bottom: -4px;
      padding: 2px 4px;
      height: 1px;
      width: 104%;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.fontColor};
      cursor: pointer;
    }
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.fontColorSecondary_hover};
  }
`;
