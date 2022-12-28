import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { Box } from '../components/Boxes/Boxes.styles';
import { HeroImage } from '../assets/styles/pages/homepage.styles';
import { BoxWIthImageStyles } from '../components/BoxWIthImage/BoxWIthImage.styles';
import { ButtonStyles } from '../components/Button/Button.styles';

const IndexPage = ({ data }) => (
  <>
    <Box>
      <Box className="out">
        <Box className="box-image" noMarginBottom>
          <Box className="imaggee" noMarginBottom>
            <HeroImage className="image-abs" imageSource={data.homepage.publicURL} />
          </Box>
          <Box className="text-about" isColumn noMarginBottom>
            <StyledTitle>O nas</StyledTitle>
            <p>
              Zakład został założony przez Karola Janika w 1948 roku. Od 1998 roku zakład prowadzi jego
              córka
              Bernadetta wraz z mężem, Andrzejem.
            </p>
            <br></br>
            <br></br>
            <p>
              Od początku swojego istnienia kładziemy szczególny nacisk na jakość wykonywanych przez nas
              usług.
              Wszystkie zlecenia wykonujemy jak najlepiej i jak najszybciej. O jakości wykonywanych przez
              nas
              zdjęć i filmów przekonało się wielu klientów.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box isColumn>
      <BoxWIthImageStyles>
        <Box isColumn className="text-box">
          <StyledTitle>Oferta</StyledTitle>
          <p>Zapraszamy do zapoznania się z naszą ofertą.</p>
          <ButtonStyles><Link to="/oferta">Zobacz więcej</Link></ButtonStyles>
        </Box>
        <div className="box-wrapper">
          <div className="box-image"></div>
        </div>
      </BoxWIthImageStyles>
    </Box>
    <Box>Zapraszamy do kontaktu</Box>
  </>

);

export const query = graphql`
    query {
        homepage: file(relativePath: {regex: "/homepage\/retro-kadr.jpeg/"}) {
            publicURL
        },
    }`;

export default IndexPage;
