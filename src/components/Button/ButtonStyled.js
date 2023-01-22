import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primaryBgColorDark};
  border: 2px solid ${({ theme }) => theme.colors.primaryBgColorDark};
  border-radius: ${({ isCircle }) => (isCircle ? '50%' : '4px')};

  font-weight: 600;
  letter-spacing: .8px;
  padding: ${({ isCircle }) => (isCircle ? '8px' : '16px')};
  max-width: max-content;
  margin-top: 32px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  a {
    color: ${({ theme }) => theme.colors.fontColorSecondary_hover};
    font-weight: 600;
    letter-spacing: .4px;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: -2;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    transition: all .6s;
    z-index: -1;
    width: 0%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primaryBgColorDark};
    cursor: pointer;

    svg {
      fill: ${({ theme }) => theme.colors.primaryBgColorDark};
    }

    a {
      color: ${({ theme }) => theme.colors.primaryBgColorDark};
    }

    &:before {
      width: 100%;
    }
  }
}
`;
