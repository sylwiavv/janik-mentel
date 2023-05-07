import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { Fade } from 'react-awesome-reveal';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { Box } from '../components/Boxes/Boxes.styles';
import { HeroImage } from '../assets/styles/pages/homepage.styles';
import { BoxWIthImageStyles } from '../components/BoxWIthImage/BoxWIthImage.styles';
import { ButtonStyled } from '../components/Button/ButtonStyled';
import { SectionWrapper } from '../components/Conteiner/Conteriner';

const IndexPage = ({ data }) => (
  <Box isColumn style={{ maxWidth: '990px', margin: '0 auto' }}>

    <SectionWrapper isFullHeight>
      <Fade>
        <Box className="out">
          <Box
            className="box-image"
            noMarginBottom
          >
            <Box className="imaggee" noMarginBottom>
              <HeroImage className="image-abs" imageSource={data.homepage.publicURL} />
            </Box>
            <Box className="text-about" isColumn noMarginBottom>
              <StyledTitle>O nas</StyledTitle>
              <p>
                Zakład został założony przez Karola Janika w 1948 roku. Od 1998 roku zakład
                prowadzi
                jego
                córka
                Bernadetta wraz z mężem, Andrzejem.
              </p>
              <br></br>
              <br></br>
              <p>
                Od początku swojego istnienia kładziemy szczególny nacisk na jakość
                wykonywanych
                przez nas
                usług.
                Wszystkie zlecenia wykonujemy jak najlepiej i jak najszybciej. O jakości
                wykonywanych przez
                nas
                zdjęć i filmów przekonało się wielu klientów.
              </p>
            </Box>
          </Box>
        </Box>
      </Fade>
    </SectionWrapper>
    <Box isColumn>
      <BoxWIthImageStyles imageSource={data.offer.publicURL}>
        <Box isColumn className="text-box">
          <StyledTitle>Oferta</StyledTitle>
          <p>Zapraszamy do zapoznania się z naszą ofertą.</p>
          <Link to="/oferta/#oferta"><ButtonStyled>Zobacz więcej</ButtonStyled></Link>
        </Box>
        <div className="box-wrapper">
          <div className="box-image first"></div>
          <div className="box-image second"></div>
        </div>
      </BoxWIthImageStyles>
    </Box>
  </Box>
);

export const query = graphql`
    query {
        homepage: file(relativePath: {regex: "/homepage\/retro-kadr.jpeg/"}) {
            publicURL
        },
        offer: file(relativePath: {regex: "/offer\/photo1.jpg/"}) {
            publicURL
        },
    }`;

export default IndexPage;
