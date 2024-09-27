import * as React from 'react';
import { useContext, useState } from 'react';
import '../../assets/styles/carousel.css';
import CookieConsent from 'react-cookie-consent';
import { CarouselContainer, HeaderTextWrapper } from './Header.styles';
import { NavigationContext } from '../../providers/NavigationProvider';
import { useHeaderStaticQuery } from '../../hooks/useHeaderStaticQuery';
import { Slider } from '../Slider/Slider';
import { Navigation } from '../Navigation/Navigation';
import { COOKIES_MESSAGE } from '../../helpers/constans/constans';
import { Box } from '../Boxes/Boxes.styles';
import { ArrowHeartIcon } from '../icons/ArrowHeartIcon';

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
      <Box
        style={{
          backgroundColor: 'rgba(8,11,23,0.32)',
          color: 'rgb(255,255,255)',
          position: 'absolute',
          right: 0,
          left: 0,
          // top: '-100px',
          top: 0,
          zIndex: 10,
          padding: '8px',
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',

          alignItems: 'center',
        }}
        isColumn
      >
      </Box>
      <CookieConsent
        location="bottom"
        buttonText="Rozumiem"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        buttonStyle={{
          color: '#f5eeee',
          borderRadius: '4px',
          backgroundColor: '#00253a',
          fontWeight: 800,
          padding: '16px',
        }}
        style={{
          color: '#00253a',
          backgroundColor: '#f1f2f5',
          padding: '16px 8px',
          display: 'flex',
          alignItems: 'center',
          lineHeight: '1.4em',
        }}
      >
        {COOKIES_MESSAGE}
      </CookieConsent>
      <HeaderTextWrapper>
        <ArrowHeartIcon height="32px" width="32px" />
        <h1>
          Fotografia to historia opowiedziana przez obraz
          <br></br>
          pozwól nam opowiedzieć Twoją historię.
        </h1>
      </HeaderTextWrapper>

      {/* <Announcement /> */}

      <Navigation />
      <Slider
        fade
        className="w-100"
        index={index}
        slider={slider.slider}
        handleSelect={handleSelect}
      />
    </CarouselContainer>
  );
};
