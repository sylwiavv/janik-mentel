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
    height: 500px;
    width: 500px;
    position: relative;

    ${({ theme }) => theme.mq.tablet} {
      grid-column: 2;
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
    background-position: 58% 58%;
    //padding-bottom: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;

    &.first {
      left: -4px;
      clip-path: polygon(0 0, 78% 0, 36% 100%, 0% 100%);
      background-image: url(https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80);
    }

    &.second {
      right: -4px;
      clip-path: polygon(100% 0, 78% 0, 36% 100%, 100% 100%);
      background-position: 50% 40%;
      background-image: url(https://images.unsplash.com/photo-1519379169146-d4b170447caa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80);

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
