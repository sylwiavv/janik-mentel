import styled from 'styled-components';

export const CarouselContainer = styled.div`
  background: #ffffff;
  margin-bottom: 64px;
  position: relative;
  mix-blend-mode: unset;
  border: 32px solid #f7fcff;
  display: flex;
  height: 100vh;

  ${({ theme }) => theme.mq.mobile} {
    border-width: 0;
    border: ${({ isOpen }) => (isOpen ? 'none' : '')};
    height: ${({ isOpen }) => (isOpen ? '100vh' : '80vh')};
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
    mix-blend-mode: none;
    //background: #240909;
    background-image: -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);
    opacity: 0.4;
    z-index: 2;
  }
`;
