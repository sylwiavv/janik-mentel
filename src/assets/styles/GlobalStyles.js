import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Montserrat", sans-serif;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
    // background: ${({ theme }) => theme.backgroundColor};
    background-color: #f4f7fb;
  }
  
  main {
    padding: 0 40px;
    margin: 0 auto;
    max-width: 1240px;
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    line-height: 1.2;
  }
  
  p, li, a {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }
  ////move
`;
