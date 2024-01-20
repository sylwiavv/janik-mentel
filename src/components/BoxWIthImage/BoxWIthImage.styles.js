import styled from 'styled-components';
import { Box } from '../Boxes/Boxes.styles';

export const BoxWIthImageStyles = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  position: relative;
  padding: 32px 0;
  margin-bottom: 64px;
  width: 100%;
  background-image: linear-gradient(to right, #eaecf3, #eaecf3, #eaecf3, #eaecf3, #eaecf3, #ebedf4, #eceef4, #edeff5, #eff1f7, #f1f3f8, #f3f5fa, #f5f7fb);

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 32px 0;
    grid-template-rows: unset;
  }

  grid-gap: 32px;


  h2 {
    text-transform: uppercase;
  }

  .box-wrapper {
    grid-column: 1;
    grid-row: 1/1;
    overflow: hidden;
    position: relative;

    height: 300px;
    width: 100%;

    ${({ theme }) => theme.mq.tablet} {
      grid-column: 2;
    }

    ${({ theme }) => theme.mq.desktop} {
      height: 500px;
      width: 500px;
    }
  }

  .text-box {
    padding: 0 32px;
    flex-direction: column;
    margin: auto;
    grid-column: 1;
    grid-row: 2/2;


    ${({ theme }) => theme.mq.tablet} {
      grid-row: 1;
      padding: 0 40px;
    }
  }

  .text-wrapper {
    display: flex;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  .box-image {
    height: 100%;
    width: 100%;
    background-position: 5% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;

    &.first {
      left: -4px;
      clip-path: polygon(0 0, 78% 0, 36% 100%, 0% 100%);
      background-image: url(https://images.ctfassets.net/la3u3xr7tdjs/5ic80OAUStvQPKdOlO2ybH/407615b0f4c2f9712639fb917f6eb38c/M___M__2069.jpg);
    }

    &.second {
      right: -4px;
      clip-path: polygon(100% 0, 78% 0, 36% 100%, 100% 100%);
      background-position: 50% 50%;
      background-image: url(" ${({ imageSource }) => imageSource} ");
      background-image: url(https://images.ctfassets.net/la3u3xr7tdjs/5wvXirhJ9WeAPrMEEV7Jiu/5cacde8d520528c8110fb12f13957d51/D___Z_0012.jpg);
    }
  }
}`;

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  ${Box} {
    margin-bottom: 48px;
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);

    ${Box} {
      margin-bottom: 32px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 48px;
    padding: 48px 0;
  }
`;
