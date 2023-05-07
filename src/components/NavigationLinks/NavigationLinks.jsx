import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from '../Navigation/Navigation.styles';
import { NavigationContext } from '../../providers/NavigationProvider';

export const navigation = [
  {
    name: 'Home',
    href: '/',
    id: '',
  },
  {
    name: 'Oferta',
    href: '/oferta',
    id: '',
  },
  {
    name: 'Galeria',
    href: '/galeria',
    id: '',
  },
  {
    name: 'Foto Kiosk',
    href: '/fotokiosk',
    id: '',
  },
  {
    name: 'Kontakt',
    href: '/kontakt',
    id: '',
  },
];

export const NavigationLinks = ({ header }) => {
  const { isOpen, toggleNavigation } = useContext(NavigationContext);

  const closeMobileNavigation = () => {
    if (isOpen) {
      toggleNavigation(false);
    }
  };

  return (
    navigation.map(({ href, name, id }) => (
      <StyledLink
        onClick={closeMobileNavigation}
        key={name}
        to={(id === '') ? `${href}` : `${href}/${id}`}
        className={header && (((location.pathname.substring(1)).includes(href.substring(1)) && name !== 'Home')
                || (location.pathname.length === 1 && name === 'Home') ? ' active' : null)}
      >
        {name}
      </StyledLink>
    )));
};

NavigationLinks.propTyopes = {
  header: PropTypes.bool,
};
