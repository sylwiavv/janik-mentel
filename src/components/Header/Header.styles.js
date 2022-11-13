import styled from 'styled-components';

// export const Header = styled.div`
//   background: url("https://www.janik-mentel.pl/wp-content/uploads/2018/05/Z-M-1008.jpg");
//   background: url("https://www.janik-mentel.pl/wp-content/uploads/2018/05/J-D-1006.jpg");
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   height: auto;
//   min-height: 100vh;
//   position: relative;
//   width: 100%;
//   margin-bottom: 64px;
//
//   &:before {
//     content: '';
//     background-image: linear-gradient(to top, #040e1e, #080e16, #081018, #05080a, #000000);
//     position: absolute;
//     opacity: .6;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 100%;
//   }
// `;

export const ImageContainer = styled.div`
  //display: inline-block;
  //position: relative;
  //line-height: 0;
  //background: #ffffff;
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
  margin-bottom: 64px;
  position: relative;
  filter: brightness(93%) contrast(116%) grayscale(23%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(123%) sepia(18%);
  mix-blend-mode: unset;
  border: 32px solid #f7fcff;
  display: flex;
  height: 100vh;
  
  .carousel-inner {
    height: 100%;
  }
  
  .carousel-item {
    height: 100%;
    width: 100%;


  }
    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
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
  }
`;
