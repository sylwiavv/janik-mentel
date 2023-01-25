import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from '../Navigation/Navigation.styles';

export const navigation = [
  {
    name: 'Home',
    href: '/',
    id: '',
  },
  {
    name: 'Oferta',
    href: '/oferta',
    id: '#oferta',
  },
  {
    name: 'Galeria',
    href: '/galeria',
    id: '#galeria',
  },
  {
    name: 'Foto Kiosk',
    href: '/fotokiosk',
    id: '#fotokiosk',
  },
  {
    name: 'Kontakt',
    href: '/kontakt',
    id: '#kontakt',
  },
];

export const NavigationLinks = ({ header }) => (
  navigation.map(({ href, name, id }) => (
    <StyledLink
      key={name}
      to={(id === '') ? `${href}` : `${href}/${id}`}
      className={header && (((location.pathname.substring(1)).includes(href.substring(1)) && name !== 'Home')
            || (location.pathname.length === 1 && name === 'Home') ? ' active' : null)}
    >
      {name}
    </StyledLink>
  ))
);

NavigationLinks.propTyopes = {
  header: PropTypes.bool,
};
