import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  margin-bottom: ${({ noMarginBottom }) => (noMarginBottom ? '0' : '24px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '')};
  grid-gap: ${({ isGap }) => (isGap ? '24px' : '')};
  //change
  grid-gap: ${(props) => (props.gap ? props.gap : '')};
  justify-content: ${({ spaceBetween }) => (spaceBetween ? 'space-between' : '')};

  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
  justify-content: ${({ isStart }) => (isStart ? 'start' : '')};
  height: ${({ height }) => height};

  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  opacity: 1;
  transition: opacity, .10s;


  &:hover {
    cursor: ${(props) => (props.isButton ? props.isButton : '')};
  }

  .text-box {
    flex-direction: row;
  }

  p {
    margin: 0;
  }

  h3 {
    font-weight: bold;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 40px;
    font-weight: 600;
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
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
  }

  .box-with-image {
    padding: 16px;
    position: relative;
    height: 522px;

    &:after {
      content: '';
      background-color: rgb(158 158 158 / 15%);

      position: absolute;
      width: 266px;
      top: 0;
      left: 0;
      height: 100%;
    }
  }

  .box-image {
    display: flex;
    justify-content: space-between;
    width: 100%;
    grid-gap: 24px;
  }

  &.out {
    padding: 64px;
    position: relative;

    ${({ theme }) => theme.mq.mobile} {
      padding: 32px;
      margin-bottom: 72px;
    }

    &:after {
      content: '';
      position: absolute;
      background: #34476c0f;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 1;
      width: 266px;
    }
  }

  &.text-about {
    padding: 16px 40px;

    ${({ theme }) => theme.mq.mobile} {
      padding: 0;
    }
  }

  .box-image {
    display: flex;
    grid-gap: 24px;
  }


  .no-opacity {
    opacity: 0;
  }
`;

export const BoxWithIcon = styled(Box)`
  display: flex;
  //align-items: center;
  grid-gap: 24px;
  //flex-direction: column;
  flex: 1;
  border-radius: 4px;
  //background-color: #ffffff;
  margin-top: 0;

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
  border-radius: 20%;
  padding: 8px;
  width: 40px;
  //margin-bottom: 40px;

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 40px;
  }


  svg {
    height: auto;
  }
`;
