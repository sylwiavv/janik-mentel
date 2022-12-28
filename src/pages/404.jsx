import * as React from 'react';
import { Link } from 'gatsby';

// markup
const NotFoundPage = () => (
  <main>
    <title>Strona nieznaleziona</title>
    <h1>Strona nieznaleziona</h1>
    <p>
      Niestety nie znaleziono takiej strony
      <Link to="/">Przejdź do strony głównej</Link>
    </p>
  </main>
);

export default NotFoundPage;
