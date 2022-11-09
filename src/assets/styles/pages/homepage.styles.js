import styled from 'styled-components';

export const BoxOnHome = styled.div`
    background-color: #ff6d2a;
`;

export const HeroImage = styled.div`
  background-image: url("${({ imageSource }) => imageSource}");
  background-position: 50% 50%;
  background-size: cover;
  height: 100%;
  width: auto;
  min-width: 100px;
  z-index: 2;

  width: 250px;
  height: 383px;
  
  //position: absolute;
  //top: 50%;
  //transform: translateY(-50%);
  //left: 72px;
  //width: 90%;
  //height: 60%;
  ////position: absolute;
  //z-index: -1;
  //top: 15%;
  //right: 0;
  // opacity: 0.7;
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
