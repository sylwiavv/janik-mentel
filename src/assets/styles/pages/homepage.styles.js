import styled from 'styled-components';

export const BoxOnHome = styled.div`
    background-color: #ff6d2a;
`;

export const HeroImage = styled.div`
  background-image: url("${({ imageSource }) => imageSource}");
  background-position: 50% 50%;
  background-size: cover;
  z-index: 2;

  height: ${(props) => (props.height ? props.height : '383px')};
  width: ${(props) => (props.width ? props.width : '250px')};
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
