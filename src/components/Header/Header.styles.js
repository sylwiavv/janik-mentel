import styled from 'styled-components';

export const Header = styled.div`
  background: url("https://www.janik-mentel.pl/wp-content/uploads/2018/05/Z-M-1008.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: auto;
  min-height: 100vh;
  position: relative;
  width: 100%;

  &:before {
    content: '';
    background-color: #111e36;
    position: absolute;
    opacity: .4;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;
