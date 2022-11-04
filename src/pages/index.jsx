import * as React from 'react';
import { Link } from 'gatsby';
import { StyledHeading, StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';

const IndexPage = () => (
  <>
    <StyledHeading>Janik Mentel</StyledHeading>
    <StyledTitle>Janik Mentel</StyledTitle>
    <p>
      Zakład został założony przez Karola Janika w 1948 roku. Od 1998 roku zakład prowadzi jego córka Bernadetta wraz z mężem, Andrzejem.
      Od początku swojego istnienia kładziemy szczególny nacisk na jakość wykonywanych przez nas usług.
      Wszystkie zlecenia wykonujemy jak najlepiej i jak najszybciej. O jakości wykonywanych przez nas zdjęć i filmów przekonało się wielu klientów.
    </p>
    <Link to="/">Go home</Link>
  </>
);

export default IndexPage;
