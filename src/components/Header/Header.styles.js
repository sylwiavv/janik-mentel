import styled from 'styled-components';

export const CarouselContainer = styled.div`
  background: #ffffff;
  position: relative;
  mix-blend-mode: unset;
  display: flex;
  height: 100vh;
  margin-bottom: 124px;

  ${({ theme }) => theme.mq.mobile} {
    height: ${({ isOpen }) => (isOpen ? '100vh' : '80vh')};
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
