import * as React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { useLocation } from "@reach/router";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import "assets/styles/normalize.css";
import { Footer } from "../components/Footer/Footer";
import {
  NavigationContext,
  NavigationProvider,
} from "../providers/NavigationProvider";
import { FotokioskHeader } from "../section/FotokioskHeader";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navigation/Navigation";
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import { theme } from "../assets/styles/theme";

export const MainTemplate = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavigationProvider value={NavigationContext}>
          {location.pathname === "/fotokiosk" && <FotokioskHeader />}
          {location.pathname === "/" ? (
            <Header customColor />
          ) : (
            location.pathname !== "/fotokiosk" && <Navigation isNoStandard />
          )}
          <main>{children}</main>
          <Footer />
        </NavigationProvider>
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
