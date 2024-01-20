import styled from 'styled-components';

// export const BoxOnHome = styled.div`
//     background-color: #ff6d2a;
// `;

export const HeroImage = styled.div`
  background-image: url("${({ imageSource }) => imageSource}");
  background-position: 50% 50%;
  background-size: cover;
  z-index: 2;

  height: ${(props) => (props.height ? props.height : '383px')};
  width: ${(props) => (props.width ? props.width : '250px')};

  &.pattern {
    height: 300px;
    width: 300px;
    position: absolute;
    top: 29%;
    z-index: 0;
    opacity: 0.02;
    left: 0;
  }

  //
  // ${({ theme }) => theme.mq.tablet} {
  //   width: 70%;
  // }
  //
  // ${({ theme }) => theme.mq.desktop} {
  //   top: 0;
  //   width: 80%;
  //   height: 75%;
  //   opacity: 1;
  // }
`;
