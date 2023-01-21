import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import 'assets/styles/normalize.css';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { NavigationContext, NavigationProvider } from '../providers/NavigationProvider';

export const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <NavigationProvider value={NavigationContext}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </NavigationProvider>
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
