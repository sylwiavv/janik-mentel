import * as React from 'react';
import { Link } from 'gatsby';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';

// markup
const Home = () => (
  <>
    <title>Oferta</title>
    <StyledTitle>This is oferta</StyledTitle>
    <p>
      Oferujemy usługi w zakresie fotografowania i wideofilmowania:

      zdjęcia do dokumentów (paszport, dowód osobisty, wiza)
      fotografia ślubna:
      reportaż (przygotowania, ceremonia, wesele)
      sesja plenerowa lub studyjna
      sesje dziecięce i rodzinne
      reportaże okolicznościowe (chrzest, komunia itp.)
      pakiety zdjęć szkolnych i studniówkowych
      druk na płótnie (duże formaty)
      przegrywanie kaset VHS na płyty DVD
      spersonalizowane gadżety (kubki z nadrukowaną własną fotografią itp.)
      odnawianie starych, znisczonych fotografii
      Sesje zdjęciowe wykonujemy we własnym studio lub w plenerze. Zdjęcia oprawiamy w tradycyjne albumy lub eleganckie fotoksiążki. Oferujemy również usługi wideo.
    </p>
    <Link to="/">Go home</Link>
  </>
);

export default Home;
