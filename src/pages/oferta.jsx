import * as React from 'react';
import { Fade } from 'react-awesome-reveal';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { Box } from '../components/Boxes/Boxes.styles';
import { WrapperGrid } from '../components/BoxWIthImage/BoxWIthImage.styles';

const oferta = () => (
  <Box isColumn style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 16px' }}>
    <Box id="oferta" isColumn marginBottom="48px">
      <StyledTitle>Oferta</StyledTitle>
      <p>
        Sesje zdjęciowe wykonujemy we własnym studio lub w plenerze. Zdjęcia oprawiamy w tradycyjne albumy
        lub
        eleganckie fotoksiążki.
        Oferujemy również usługi wideo.
      </p>
    </Box>
    <WrapperGrid>
      <Fade cascade damping={0.1}>
        <Box isColumn className="red">
          <h2>Fotografia ślubna</h2>
          <ul>
            <li>Reportaż (przygotowania, ceremonia, wesele)</li>
            <li>Sesja plenerowa lub studyjna</li>
          </ul>
        </Box>
        <Box isColumn>
          <h2>Zdjęcia do dokumentów</h2>
          <ul>
            <li>Paszportów</li>
            <li>Dowodów osobistych</li>
            <li>Wiz</li>
          </ul>
        </Box>
        <Box isColumn>
          <h2>Sesje dziecięce i rodzinne</h2>
          <ul>
            <li>Zdjęcia świąteczne w studio</li>
            <li>Sesje w plenerze</li>
            <li>Zdjęcia z Mikołajem w przedszkolu</li>
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
          <h2>Spersonalizowane gadżety</h2>
          <ul>
            <li>Kubki</li>
            <li>Kalendarze</li>
          </ul>
        </Box>
        <Box isColumn>
          <h2>Odnawianie starych, znisczonych fotografii</h2>
          <ul>
            <li>Reprodukcja</li>
          </ul>
        </Box>
        <Box isColumn>
          <h2>Przegrywanie kaset VHS na pendrive</h2>
        </Box>
      </Fade>
    </WrapperGrid>
  </Box>
);

export default oferta;
