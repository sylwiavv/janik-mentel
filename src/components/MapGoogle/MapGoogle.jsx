import React, { useEffect, useState } from 'react';

const mapPlaceholderStyle = { height: '80vh', width: '100%' };

const MapGoogle = () => {
  const [MapComponent, setMapComponent] = useState(null);

  useEffect(() => {
    import('./MapGoogleInner').then((module) => {
      setMapComponent(() => module.default);
    });
  }, []);

  if (!MapComponent) {
    return <div style={mapPlaceholderStyle} />;
  }

  return <MapComponent />;
};

export default MapGoogle;
