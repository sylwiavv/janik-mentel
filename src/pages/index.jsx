import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { Box } from '../components/Boxes/Boxes.styles';
import { HeroImage } from '../assets/styles/pages/homepage.styles';

const IndexPage = ({ data }) => (
  <>
    {/* <StyledTitle>Janik Mentel</StyledTitle> */}
    <Box className="out" noMarginBottom>
      <Box className="box-image" noMarginBottom>
        <Box className="imaggee" noMarginBottom>
          <HeroImage className="image-abs" imageSource={data.homepage.publicURL} />
        </Box>
        <Box className="text-about" isColumn noMarginBottom>
          <StyledTitle>O nas</StyledTitle>
          <p>
            Zakład został założony przez Karola Janika w 1948 roku. Od 1998 roku zakład prowadzi jego córka Bernadetta wraz z mężem, Andrzejem.
          </p>
          <p>
            Od początku swojego istnienia kładziemy szczególny nacisk na jakość wykonywanych przez nas usług.
            Wszystkie zlecenia wykonujemy jak najlepiej i jak najszybciej. O jakości wykonywanych przez nas zdjęć i filmów przekonało się wielu klientów.
          </p>
        </Box>
      </Box>
    </Box>
  </>
);

export const query = graphql`
    query {
        homepage: file(relativePath: {regex: "/homepage\/retro-kadr.jpeg/"}) {
            publicURL
        },
    }`;

export default IndexPage;
