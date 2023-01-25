import * as React from 'react';
import { useContext, useState } from 'react';
import '../../assets/styles/carousel.css';
import { CarouselContainer } from './Header.styles';
import { NavigationContext } from '../../providers/NavigationProvider';
import { useHeaderStaticQuery } from '../../hooks/useHeaderStaticQuery';
import { Slider } from '../Slider/Slider';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  const [index, setIndex] = useState(0);
  const { isOpen } = useContext(NavigationContext);

  const data = useHeaderStaticQuery();
  const [slider] = data;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselContainer isOpen={isOpen}>
      <Navigation />
      <Slider fade className="w-100" index={index} slider={slider.slider} handleSelect={handleSelect} />
    </CarouselContainer>
  );
};
