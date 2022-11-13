import * as React from 'react';
import { ImageContainer } from './Header.styles';
import Navigation from '../Navigation/Navigation';

export const Header = () => (
  <ImageContainer>
    {/* <img src="https://www.janik-mentel.pl/wp-content/uploads/2018/05/J-D-1006.jpg" alt="" /> */}
    <Navigation />
  </ImageContainer>
);
