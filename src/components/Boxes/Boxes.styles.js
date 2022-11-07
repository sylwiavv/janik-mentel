import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
    // width: ${({ isSmall }) => (isSmall ? '60px' : '200px')};
  flex-direction: column;
  margin-bottom: ${({ noMarginBottom }) => (noMarginBottom ? '0' : '24px')};
  grid-gap: ${({ isGap }) => (isGap ? '24px' : '')};
  align-items: ${({ isCenter }) => (isCenter ? 'center' : '')};

  .text-box {
    flex-direction: row;
  }

  p {
    margin: 0;
  }

  h3 {
    font-weight: bold;
  }

  span {
    margin-right: 4px;
  }

  img {
    height: 200px;
    width: auto;
  }

  a {
      // color: ${({ theme }) => theme.colors.fontColor};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.fontColorSecondary_hover};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
  }
`;

export const BoxWithIcon = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 24px;

  h3 {
    font-weight: 500;
    margin: 0 0 8px 0;
  }

  ul {
    margin-top: 16px;
  }
`;

export const IconBox = styled.div`
  display: flex;
  height: 40px;
  margin-right: auto;
  background-color: #f7f9fa;;
  border-radius: 20%;
  padding: 8px;
  width: 40px;
  margin-bottom: 40px;
  
  svg {
    height: auto;
  }
`;
