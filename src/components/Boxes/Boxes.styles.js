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

    @media (max-width: 768px) {
      margin-bottom: 24px;
    }
  }

  span {
    margin-right: 4px;
  }

  //img {
  //  height: 200px;
  //  width: auto;
  //}

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
  }

  //About section
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
      background-image: linear-gradient(to right, #eaecf3, #eaecf3, #eaecf3, #eaecf3, #eaecf3, #ebedf4, #eceef4, #edeff5, #eff1f7, #f1f3f8, #f3f5fa, #f5f7fb);

      top: 0;
      left: 0;
      height: 100%;
      z-index: -1;
      width: 266px;

      ${({ theme }) => theme.mq.desktop} {
        background: #34476c0f;
      }
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
`;

export const BoxWithIcon = styled(Box)`
  display: flex;
  grid-gap: 24px;
  flex: 1;
  border-radius: 4px;
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

  ${({ theme }) => theme.mq.mobile} {
    margin-bottom: 40px;
  }

  svg {
    height: auto;
  }
`;
