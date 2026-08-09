import React from 'react';
import { StyledMapIframe } from './MapGoogle.styles';

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=49.63387683625645,19.3322348344566&hl=pl&z=14&output=embed';

const MapGoogle = () => (
  <StyledMapIframe
    title="Lokalizacja Janik Mentel Studio na mapie Google"
    src={MAP_EMBED_URL}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);

export default MapGoogle;
