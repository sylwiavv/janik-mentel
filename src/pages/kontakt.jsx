import * as React from 'react';
import styled from 'styled-components';
import { Fade, Zoom } from 'react-awesome-reveal';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { Box, BoxWithIcon, IconBox } from '../components/Boxes/Boxes.styles';
import { ContactForm } from '../components/ContactForm/ContactForm';
import MailIcon from '../components/icons/MailIcon';
import LocalizationIcon from '../components/icons/LocalizationIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import MapGoogle from '../components/MapGoogle/MapGoogle';

export const DarkBox = styled(Box)`
  box-shadow: 0px 0px 20px rgb(76 85 102 / 4%), 0px 40px 40px -32px rgb(76 85 102 / 32%);
  background-color: ${({ theme }) => theme.colors.primaryBgColorDark};
  border-radius: 4px;
  color: #fff;
  color: ${({ theme }) => theme.colors.white};
  padding: 72px 40px;
  position: relative;
  z-index: 2;

  ${({ theme }) => theme.mq.mobile} {
    padding: 64px 24px;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FormBox = styled(Box)`
  border-radius: 4px;
`;

export const ContactBoxInside = styled(Box)`
`;

export const ContactBoxOutside = styled(Box)`
  background-color: #ffffff;
  padding: 40px 0;
  position: relative;

  ${({ theme }) => theme.mq.tablet} {
    height: ${({ isFullHeight }) => (isFullHeight ? '100vh' : 'auto')};
    align-items: ${({ isFullHeight }) => (isFullHeight ? 'center' : '')};
    display: ${({ isFullHeight }) => (isFullHeight ? 'flex' : 'block')};
  }

  ${({ theme }) => theme.mq.tablet} {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.backgroundColor};
      height: 100%;
      width: 15%;
      z-index: 1;
    }
  }
`;

const kontakt = () => (
  <Fade>
    <Box isColumn style={{ maxWidth: '990px', margin: '0 auto', padding: '0 16px' }}>
      <Box id="kontakt" isColumn marginBottom="56px">
        <StyledTitle>Kontakt</StyledTitle>
        <p>Zapraszmy do kontaktu jeśli masz jakieś dodatkowe pytania.</p>
      </Box>
      <ContactBoxOutside alignItems="center" marginBottom="72px">
        <ContactBoxInside gap="64px" alignItems="center">
          <DarkBox isColumn noMarginBottom>
            <h2>Skontaktuj się z nami</h2>
            <BoxWithIcon>
              <Zoom>
                <IconBox>
                  <PhoneIcon />
                </IconBox>
              </Zoom>
              <Box isColumn>
                <h3>Zadzwoń do nas</h3>
                <Box alignItems="center" className="text-box">
                  <span>tel.</span>
                  <a href="tel:(33) 86 36 100">(33) 86 36 100</a>
                </Box>
                <Box alignItems="center" className="text-box">
                  <span>tel.kom.</span>
                  <a href="tel:503 022 377">503 022 377</a>
                </Box>
              </Box>
            </BoxWithIcon>
            <BoxWithIcon>
              <Zoom>
                <IconBox>
                  <MailIcon />
                </IconBox>
              </Zoom>
              <Box isColumn>
                <h3>Napisz do nas</h3>
                <Box alignItems="center" className="text-box">
                  <span>mail: </span>
                  <a href="mailto:amentel@op.pl">amentel@op.pl</a>
                </Box>
              </Box>
            </BoxWithIcon>

            <BoxWithIcon>
              <Zoom>
                <IconBox><LocalizationIcon /></IconBox>
              </Zoom>
              <Box isColumn>
                <h3>Odwiedź nas</h3>
                <p>Jeleśnia, ul. Jana Kazimierza&nbsp;213</p>
              </Box>
            </BoxWithIcon>
            <Box style={{ marginTop: 'auto', paddingTop: '24px' }} noMarginBottom isColumn>
              <span style={{ display: 'block', marginBottom: '8px' }}>Zakład czynny:</span>
              <ul>
                <li>
                  poniedziałek
                  <span>– piątek&nbsp;9&nbsp;–&nbsp;16</span>
                </li>
                <li>sobota 9&nbsp;–&nbsp;12</li>
              </ul>
            </Box>
          </DarkBox>
          <FormBox isColumn noMarginBottom>
            <ContactForm />
          </FormBox>
        </ContactBoxInside>
      </ContactBoxOutside>
    </Box>

    <Box isColumn style={{ maxWidth: '1990px', margin: '72px auto', padding: '0 24px' }}>
      <h2>Znajdź nas na Google Maps</h2>
      <MapGoogle />
    </Box>
  </Fade>
);

export default kontakt;
