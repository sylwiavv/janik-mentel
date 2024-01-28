import styled from 'styled-components';

export const CarouselContainer = styled.div`
  background: #ffffff;
  position: relative;
  mix-blend-mode: unset;
  display: flex;
  height: 100vh;
  margin-bottom: 124px;

  ${({ theme }) => theme.mq.mobile} {
    height: ${({ isOpen }) => (isOpen ? '100vh' : '100vh')};
    margin-bottom: 72px;
  }

  .carousel {
    &-inner {
      height: 100%;
    }

    &-item {
      height: 100%;
      width: 100%;

      img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &-control-prev,
    &-control-next,
    &-indicators {
      background-color: transparent;
      z-index: 9;
    }

    &-control-prev,
    &-control-next {
      width: 8%;
      opacity: 0.7;
    }
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(1, 1, 3, 0.48);
    z-index: 2;
  }
`;

export const HeaderTextWrapper = styled.div`
  position: absolute;
  z-index: 10;
  color: #e8e8e3;
  bottom: 104px;
  //bottom: 50%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  opacity: 0;
  animation: fade 1s ease-in 1s;
  animation-fill-mode: forwards;

  ${({ theme }) => theme.mq.mobile} {
    bottom: 64px;
    display: none;
  }

  svg {
    position: absolute;
    top: -48px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    animation: fadeIcon 2s ease-in 1s;
    animation-fill-mode: forwards;

    path {
      fill: #e8e8e3;
      opacity: 0.9;
    }
  }

  h1 {
    //text-align: center;
    line-height: 1.4em;
    font-family: "Lora", serif;
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    //margin-right: auto;
    //font-size: 36px;
    font-size: 28px;
    position: relative;
    //color: rgba(232, 232, 227, 0.51);

    ${({ theme }) => theme.mq.mobile} {
      font-size: 24px;
      max-width: none;
      width: 100%;
      padding: 0 16px;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeIcon {
    0% {
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const AnimatingHeader = styled('h2')`
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.mq.mobile} {
    padding-left: 24px;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: -100%;
    width: 100%;
    height: 8px;
    background: linear-gradient(to left,
    transparent 50%,
    transparent 0%,
    rgb(255, 255, 255) 50%,
    rgba(255, 255, 255, 0.91) 100%);
    animation: reveal 2s ease-in-out forwards;
    z-index: 10;
    @keyframes reveal {
      from {
        right: 0%;
      }
      to {
        left: 100%;
      }
    }
  }
`;
