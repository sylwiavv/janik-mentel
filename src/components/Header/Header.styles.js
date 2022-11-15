import styled from 'styled-components';

export const CarouselContainer = styled.div`
  //overflow: hidden;
  //background: url("https://www.janik-mentel.pl/wp-content/uploads/2018/05/A-Sz-0809.jpg");
  //background: url("https://www.janik-mentel.pl/wp-content/uploads/2018/05/A-Sz-0885.jpg");
  ////background: url("https://www.janik-mentel.pl/wp-content/uploads/2018/05/J-D-1006.jpg");
  ////
  ////background: url("https://www.janik-mentel.pl/wp-content/uploads/2018/05/A-Sz-0802.jpg");
  //
  //background-repeat: no-repeat;
  //background-position: top;
  //background-size: cover;
  //background-attachment: fixed;
  //height: auto;
  //min-height: 100vh;
  //filter: brightness(93%) contrast(116%) grayscale(23%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(123%) sepia(18%);
  //mix-blend-mode: none;
  background: #ffffff;
  margin-bottom: 64px;
  position: relative;
  filter: brightness(93%) contrast(116%) grayscale(23%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(123%) sepia(18%);
  mix-blend-mode: unset;
  border: 32px solid #f7fcff;
  display: flex;
  height: 100vh;

  ${({ theme }) => theme.mq.mobile} {
    border-width: 24px;
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
