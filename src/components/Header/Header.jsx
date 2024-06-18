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
      <div style={{
        backgroundColor: '#fff',
        zIndex: 10,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        right: 0,
        bottom: 0,
        padding: '56px',
      }}
      >
        <h3 style={{
          margin: 0, marginBottom: '16px', fontWeight: 700, fontSize: '24px',
        }}
        >
          Urlop wypoczynkowy
        </h3>
        <p style={{ color: '#343434', padding: 0, margin: 0 }}>
          W dniach
          {' '}
          <b>21.06 - 07.07.2024</b>
          {' '}
          zakład
          <br></br>
          {' '}
          będzie nieczynny.
          {/* <span style={{ marginTop: '8px', display: 'block' }}> */}
          {/*  Zakład będzie nie czynny. */}
          {/* </span> */}
          {/* <span style={{ marginTop: '8px', display: 'block' }}> */}
          {/*  Zakład będzie czynny od godz. 12.00. */}
          {/* </span> */}
          {/* <span style={{ marginTop: '8px', display: 'block' }}> */}
          {/*  Kontakt: */}
          {/* </span> */}
        </p>

        {/* <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}> */}
        {/*  <a href="tel:510097887">510 097 887</a> */}
        {/*  <a href="tel:503022377">503 022 377</a> */}
        {/* </div> */}
        {/* <span style={{ marginTop: '16px', display: 'block' }}> */}
        {/*  Przepraszamy za utrudnienia. */}
        {/* </span> */}
      </div>
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
