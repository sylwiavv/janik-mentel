import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { ImageContainer } from './Header.styles';
import Navigation from '../Navigation/Navigation';

export const Header = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src="https://www.janik-mentel.pl/wp-content/uploads/2018/05/A-Sz-0805.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.janik-mentel.pl/wp-content/uploads/2018/05/A-Sz-0883.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  // <ImageContainer>
  //   {/* <img src="https://www.janik-mentel.pl/wp-content/uploads/2018/05/J-D-1006.jpg" alt="" /> */}
  //   <Navigation />
  // </ImageContainer>
};
