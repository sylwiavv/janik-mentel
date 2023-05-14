import * as React from 'react';
import { useContext, useState } from 'react';
import '../../assets/styles/carousel.css';
import styled from 'styled-components';
import { CarouselContainer } from './Header.styles';
import { NavigationContext } from '../../providers/NavigationProvider';
import { useHeaderStaticQuery } from '../../hooks/useHeaderStaticQuery';
import { Slider } from '../Slider/Slider';
import { Navigation } from '../Navigation/Navigation';
import { ArrowHeartIcon } from '../icons/ArrowHeartIcon';

export const HeaderTextWrapper = styled.div`
  position: absolute;
  z-index: 10;
  color: #e8e8e3;
  bottom: 104px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  opacity: 0;
  animation: fade 1s ease-in 1s;
  animation-fill-mode: forwards;

  ${({ theme }) => theme.mq.mobile} {
    bottom: 64px;
  }

  svg {
    position: absolute;
    top: -48px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    animation: fadeIcon 2s ease-in 1s;
    animation-fill-mode: forwards;

    path {
      fill: #e8e8e3;
      opacity: .9;
    }
  }

  h1 {
    text-align: center;
    line-height: 1.4em;
    font-family: 'Lora', serif;
    max-width: 80%;
    margin: 0 auto;
    font-size: 36px;
    position: relative;

    ${({ theme }) => theme.mq.mobile} {
      font-size: 24px;
      max-width: none;
      width: 100%;
      padding: 0 16px;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeIcon {
    0% {
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

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
      <HeaderTextWrapper>
        <ArrowHeartIcon height="32px" width="32px" />
        <h1>
          Fotografia to historia
          opowiedziana przez
          obraz
          <br></br>
          pozwól
          nam opowiedzieć
          Twoją historię.
        </h1>
      </HeaderTextWrapper>
      <Navigation />
      <Slider fade className="w-100" index={index} slider={slider.slider} handleSelect={handleSelect} />
    </CarouselContainer>
  );
};
