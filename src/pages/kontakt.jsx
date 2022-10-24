import * as React from 'react';
import { Link } from 'gatsby';
import { StyledHeading, StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { Box } from '../components/Boxes/Boxes.styles';
import { ContactForm } from '../components/ContactForm/ContactForm';

const IndexPage = () => (
  <>
    <StyledHeading>Contat us</StyledHeading>
    <StyledTitle>Get in touch!</StyledTitle>
    <p>Contact us for more details</p>
    <Box>
      <Box isColumn>
        <p>Ikona</p>
        <p>tel. (33) 86 36 100</p>
      </Box>
      <Box isColumn>
        <p>Ikona</p>
        <p>503 022 377</p>
      </Box>
      <Box isColumn>
        <p>Ikona</p>
        <p>mail: amentel@op.pl</p>
      </Box>

      {/* <Box isColumn> */}
      {/*    <p>Ikona</p> */}
      {/*    <p>Jeleśnia, ul. Jana Kazimierza 213</p> */}
      {/* </Box> */}
      {/* <div className="box"> */}
      {/*    <p>Bernadetta Mentel</p> */}

      {/*    <p>Jeleśnia, ul. Jana Kazimierza 213</p> */}
      {/*    <p>tel. (33) 86 36 100 lub 503 022 377</p> */}
      {/*    <p>mail: amentel@op.pl</p> */}
      {/*    <p> Zakład czynny: */}
      {/*        poniedziałek – piątek 9 – 16 */}
      {/*        sobota 9 – 12 */}
      {/*    </p> */}
      {/* </div> */}
    </Box>
    <Box isColumn>
      <p>Bernadetta Mentel</p>

      <p>Jeleśnia, ul. Jana Kazimierza 213</p>
      <p>tel. (33) 86 36 100 lub 503 022 377</p>
      <p>mail: amentel@op.pl</p>
      <p>
        Zakład czynny:
        poniedziałek – piątek 9 – 16
        sobota 9 – 12
      </p>
    </Box>
    <Box isColumn>
      <h2>Zapraszamy do kontantku</h2>
      <ContactForm />
    </Box>
    {/* <div className="box"> */}
    {/*    <form> */}
    {/*        <label> Imie */}
    {/*            <input/> */}
    {/*        </label> */}
    {/*    </form> */}
    {/* </div> */}
    <Link to="/home">Go home</Link>
  </>
);

export default IndexPage;
