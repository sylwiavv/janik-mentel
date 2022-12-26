import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useContext, useState } from 'react';
import '../../assets/styles/carousel.css';
import { CarouselContainer } from './Header.styles';
import Navigation from '../Navigation/Navigation';
import { NavigationContext } from '../../providers/NavigationProvider';

export const Header = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const { isOpen } = useContext(NavigationContext);

  return (
    <CarouselContainer isOpen={isOpen}>
      <Navigation />
      <Carousel activeIndex={index} onSelect={handleSelect} fade className="w-100">
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  );
  // <ImageContainer>
  //   {/* <img src="https://www.janik-mentel.pl/wp-content/uploads/2018/05/J-D-1006.jpg" alt="" /> */}
  //   <Navigation />
  // </ImageContainer>
};
