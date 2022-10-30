import * as React from 'react';
import { Link } from 'gatsby';
import { StyledHeading, StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { Box } from '../components/Boxes/Boxes.styles';

const Home = () => (
  <>
    <StyledHeading>Oferta</StyledHeading>
    <StyledTitle>Oferta</StyledTitle>
    <p>Zapoznaj się naszą ofertą</p>
    <Box isColumn>
      <p>Oferujemy usługi w zakresie fotografowania i wideofilmowania:</p>
      <ul>
        <li>zdjęcia do dokumentów (paszport, dowód osobisty, wiza)</li>
      </ul>
      <p>Fotografia ślubna:</p>
      <ul>
        <li>reportaż (przygotowania, ceremonia, wesele)</li>
        <li> sesja plenerowa lub studyjna</li>
      </ul>
      <ul>
        <li>sesje dziecięce i rodzinne</li>
        <li>reportaże okolicznościowe (chrzest, komunia itp.)</li>
        <li>pakiety zdjęć szkolnych i studniówkowych</li>
        <li>druk na płótnie (duże formaty)</li>
        <li>przegrywanie kaset VHS na płyty DVD</li>
        <li> spersonalizowane gadżety (kubki z nadrukowaną własną fotografią itp.)</li>
        <li>odnawianie starych, znisczonych fotografii</li>
      </ul>
      <p>
        Sesje zdjęciowe wykonujemy we własnym studio lub w plenerze. Zdjęcia oprawiamy w tradycyjne albumy lub eleganckie fotoksiążki.
        Oferujemy również usługi wideo.
      </p>
    </Box>
    <Link to="/">Go home</Link>
  </>
);

export default Home;
