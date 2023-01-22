import * as React from 'react';
import { Fade } from 'react-awesome-reveal';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { Box } from '../components/Boxes/Boxes.styles';
import { WrapperGrid } from '../components/BoxWIthImage/BoxWIthImage.styles';

const Home = () => (
  <>
    <Fade>
      <StyledTitle>Oferta</StyledTitle>
      <Box isColumn>
        <p>
          Sesje zdjęciowe wykonujemy we własnym studio lub w plenerze. Zdjęcia oprawiamy w tradycyjne albumy
          lub
          eleganckie fotoksiążki.
          Oferujemy również usługi wideo.
        </p>
      </Box>
    </Fade>
    <WrapperGrid>
      <Fade cascade damping={0.1}>
        <Box isColumn>
          <h2>Fotografia ślubna</h2>
          <ul>
            <li>Reportaż (przygotowania, ceremonia, wesele)</li>
            <li>Sesja plenerowa lub studyjna</li>
          </ul>
        </Box>
        <Box isColumn>
          <h2>Zdjęcia do dokumentów</h2>
          <p>Wykonujemy zdjęcia do:</p>
          <ul>
            <li>paszportów</li>
            <li>dowodów osobistych</li>
            <li>wiz</li>
          </ul>
        </Box>
        <Box isColumn>
          <h2>Sesje dziecięce i rodzinne</h2>
          <ul>
            <li>zdjęcia świąteczne w studio</li>
            <li>sesje w plenerze</li>
            <li>zdjęcia z Mikołajem w przedszkolu</li>
          </ul>
        </Box>
        <Box isColumn>
          <h2>Fotografia okolicznościowa</h2>
          <ul>
            <li>Chrzest święty</li>
            <li>Komunia święta</li>
          </ul>
        </Box>
        <Box isColumn>
          <h2>Zdjęć szkolne</h2>
          <ul>
            <li>Tablo</li>
            <li>Studniówkowe</li>
          </ul>
        </Box>
        <Box isColumn>
          <h2>Druki zdjęć</h2>
          <ul>
            <li>Druk na płótnie (duże formaty)</li>
          </ul>
        </Box>
        <Box isColumn>
          <h2>Przegrywanie kaset VHS na płyty DVD</h2>
          <ul>
            <li>lorem ipsum</li>
          </ul>
        </Box>
        <Box isColumn>
          <h2>Spersonalizowane gadżety</h2>
          <ul>
            <li>lorem ipsum</li>
          </ul>
        </Box>
        <Box isColumn>
          <h2>Odnawianie starych, znisczonych fotografii</h2>
          <ul>
            <li>lorem ipsum</li>
          </ul>
        </Box>
      </Fade>
    </WrapperGrid>
  </>
);

export default Home;
