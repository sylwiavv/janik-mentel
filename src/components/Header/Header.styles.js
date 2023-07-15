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
      opacity: .7;
    }
  }

  &:after {
    content: '';
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
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  opacity: 0;
  animation: fade 1s ease-in 1s;
  animation-fill-mode: forwards;

  ${({ theme }) => theme.mq.mobile} {
    bottom: 64px;
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
      opacity: .9;
    }
  }

  h1 {
    text-align: center;
    line-height: 1.4em;
    font-family: 'Lora', serif;
    max-width: 80%;
    margin: 0 auto;
    font-size: 36px;
    position: relative;

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
