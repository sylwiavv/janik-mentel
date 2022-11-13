import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
    // width: ${({ isSmall }) => (isSmall ? '60px' : '200px')};
  flex-direction: column;
  margin-bottom: ${({ noMarginBottom }) => (noMarginBottom ? '0' : '24px')};
  grid-gap: ${({ isGap }) => (isGap ? '24px' : '')};
  //change
  grid-gap: ${(props) => (props.gap ? props.gap : '')};
  justify-content: ${({ spaceBetween }) => (spaceBetween ? 'space-between' : '')};

  align-items: ${({ isCenter }) => (isCenter ? 'center' : '')};
  height: ${({ height }) => height};


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

    // &:hover {
      //   color: ${({ theme }) => theme.colors.fontColorSecondary_hover};
    // }
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

  .box-with-image {
    width: 30%;
    background-color: gold;
  }

  .box-with-text {
    display: flex;
    flex: 1;
    width: 60%;
    padding-top: 48px;
    background-color: #FF905D;
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
    }

    &:after {
      content: '';
      position: absolute;
      background: #34476c0f;
      top: 0;
      left: 0;
      width: 352px;
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

  //to gallery
  .box-with-images {
    position: relative;

    &:after {
      //content: '';
      //background-color: #e3e5e7;
      //position: absolute;
      //top: 16px;
      //left: 16px;
      //width: 100%;
      //height: 100%;
    }
  }

  &.test {
    //background-color: #ebeff2;
    //padding: 40px 0;
    //position: relative;
    //
    //&:after {
    //  content: '';
    //  position: absolute;
    //  top: 0;
    //  height: 100%;
    //  width: 1200%;
    //  left: -100%;
    //  background-color: #ebeff2;
    //  z-index: -1;
    //}
    align-items: center;
    z-index: 1;
    overflow: hidden;

  }

  .galeria-tytul {
    padding: 8px;
    position: relative;
    margin-left: auto;


    //&:after {
    //  content: '';
    //  border: 8px solid #111e36;
    //  position: absolute;
    //  top: 0%;
    //  width: 120%;
    //  height: 100%;
    //  z-index: 3;
    //}
  }
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
