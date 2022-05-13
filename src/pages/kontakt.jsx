import * as React from 'react';
import { Link } from 'gatsby';
import {StyledTitle} from "../components/HighlightedHeading/HighlightedHeading.styles";

const IndexPage = () => (
  <>
    <title>Kontakt Page</title>
    <StyledTitle>Kontakt</StyledTitle>
      <p>
          Bernadetta Mentel
          Jeleśnia, ul. Jana Kazimierza 213
          tel. (33) 86 36 100 lub 503 022 377
          mail: amentel@op.pl
          Zakład czynny:
          poniedziałek – piątek 9 – 16
          sobota 9 – 12
      </p>
    <Link to="/home">Go home</Link>
  </>
);

export default IndexPage;
