import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import 'assets/styles/normalize.css';
import { Footer } from '../components/Footer/Footer';
import { NavigationContext, NavigationProvider } from '../providers/NavigationProvider';
import { useLocation } from '@reach/router';
import { FotokioskHeader } from '../section/FotokioskHeader';
import { Header } from '../components/Header/Header';
import { Navigation } from '../components/Navigation/Navigation';

export const MainTemplate = ({ children }) => {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavigationProvider value={NavigationContext}>
        {location.pathname === '/fotokiosk' && (
        <FotokioskHeader />
        )}
        {location.pathname === '/' ? (
          <Header customColor />)
          : (location.pathname !== '/fotokiosk' && <Navigation isNoStandard />)}
        <main>
          {children}
        </main>
        <Footer />
      </NavigationProvider>
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
