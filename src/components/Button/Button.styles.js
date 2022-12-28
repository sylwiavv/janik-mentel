import styled from 'styled-components';

export const ButtonStyles = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.fontColorSecondary_hover};
    // background-color: ${({ theme }) => theme.colors.fontColorSecondary_hover};
  color: ${({ theme }) => theme.colors.fontColorSecondary_hover};
  font-weight: 600;
  letter-spacing: .4px;
  padding: 8px 16px;
  border-radius: 4px;
  max-width: max-content;
  margin-top: 32px;
  position: relative;
  z-index: 1;

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
    //border-radius: 10rem;
    z-index: -2;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.fontColorSecondary_hover};
    transition: all .6s;
    z-index: -1;
    width: 0%;
  }

  &:hover {
    color: #fff;
    cursor: pointer;

    a {
      color: #fff;
    }

    &:before {
      width: 100%;
    }
  }
}
`;
