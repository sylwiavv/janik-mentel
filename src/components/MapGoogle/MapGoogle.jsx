import React from 'react';
import GoogleMapReact from 'google-map-react';
import Logo from 'assets/icons-components/logo_janik-mentel-dark.svg';
import { LogoWrapper } from './LogoWrapper.styles';
import { styles } from './mapStyles';

export const MapGoogle = () => {
  const defaultProps = {
    center: {
      lat: 49.63387683625645,
      lng: 19.3322348344566,
    },
    zoom: 12,
  };
  return (
    <div style={{ height: '60vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAP_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{ styles }}
      >
        <LogoWrapper
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
        >
          <Logo />
        </LogoWrapper>
      </GoogleMapReact>
    </div>
  );
};

export default MapGoogle;
