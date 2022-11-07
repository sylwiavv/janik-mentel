import * as React from 'react';
import { Link } from 'gatsby';
import { StyledHeading, StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { Box, BoxWithIcon, IconBox } from '../components/Boxes/Boxes.styles';
import { ContactForm } from '../components/ContactForm/ContactForm';
import PhoneIcon from '../components/icons/PhoneIcon';
import MailIcon from '../components/icons/MailIcon';
import LocalizationIcon from '../components/icons/LocalizationIcon';

const IndexPage = () => (
  <>
    <StyledHeading>Contat us</StyledHeading>
    <StyledTitle>Get in touch!</StyledTitle>
    <p>Contact us for more details</p>
    <Box isGap>
      <BoxWithIcon>
        <IconBox><LocalizationIcon /></IconBox>
        <h3>Odwiedź nas</h3>
        <p>Jeleśnia, ul. Jana Kazimierza 213</p>
        <ul>
          <span>Zakład czynny:</span>
          <li>poniedziałek – piątek 9 – 16</li>
          <li>sobota 9 – 12</li>
        </ul>
      </BoxWithIcon>
      <BoxWithIcon>
        <IconBox>
          <PhoneIcon />
        </IconBox>
        <h3>Zadzwoń do nas</h3>
        <Box isCenter className="text-box">
          <span>tel.</span>
          <a href="tel:(33) 86 36 100">(33) 86 36 100</a>
        </Box>
        <Box isCenter className="text-box">
          <span>tel.kom.</span>
          <a href="tel:503 022 377">503 022 377</a>
        </Box>
      </BoxWithIcon>
      <BoxWithIcon>
        <IconBox>
          <MailIcon />
        </IconBox>
        <h3>Napisz do nas</h3>
        <Box isCenter className="text-box">
          <span>mail: </span>
          <a href="mailto:amentel@op.pl">amentel@op.pl</a>
        </Box>
      </BoxWithIcon>
    </Box>
    <BoxWithIcon>
      <IconBox>
        <MailIcon />
      </IconBox>
      <ContactForm />
    </BoxWithIcon>
  </>
);

export default IndexPage;
