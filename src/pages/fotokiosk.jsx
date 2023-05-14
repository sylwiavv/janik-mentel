import * as React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { SectionWrapper } from '../components/Conteiner/Conteriner';
import { Box } from '../components/Boxes/Boxes.styles';
import { AppleStoreLogo } from '../components/icons/downloadPlaces/AppleStoreLogo';
import { GooglePlayLogo } from '../components/icons/downloadPlaces/GooglePlayLogo';
import { Przelewy24Logo } from '../components/icons/downloadPlaces/Przelewy24Logo';
import { FotokioskCards } from '../section/FotokioskCards';

export const BannerBox = styled(Box)`
  background-color: #5f9efe;
`;

export const BoxWithPseudoElement = styled(Box)`
  position: relative;
  // borderLeft: '1px solid #0c0804',
  padding: 64px 40px;
  margin-bottom: 56px;
  margin-left: 40px;

  background-color: #f6f8f8;
  max-width: 80%;
  width: 100%;

  ${({ theme }) => theme.mq.mobile} {
    margin-left: 0;
    padding: 64px 24px;
    max-width: 100%;

    &:after {
      display: none
    }
  }


  &:not(:last-child) {
    &:after {
      content: "";
      position: absolute;
      top: 8px;
      left: -36px;
      height: calc(100% - 24px);
      border-left: 1px solid #9e9e9e42;
      z-index: 2;
    }
  }

  &:not(:first-child) {
    &:before {
      content: '';
      width: 100%;
      position: absolute;
      right: 0;
      background: #d9dadd;
      height: 1px;
      top: -26px;
      padding: 0;
    }
  }
`;

export const StepSquareHeader = styled.h3`
  color: #0c0804;
  font-weight: 900;
  margin: 0;
  font-size: 16px;
  position: absolute;
  left: -64px;
  width: 48px;
  height: 48px;
  padding: 8px;
  background-color: #f7b73c;
  top: -56px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.mobile} {
    top: 0;
    left: -24px;
  }
`;

export const FotoKioskContainer = styled.div`
  background: #24494e;
  color: #e8ecf0;
  padding: 0 32px;

  ${({ theme }) => theme.mq.mobile} {
    padding: 0 8px
  }
`;

export const FotoKioskLead = styled(Box)`
  background: #1d3f43;
  display: flex;
  padding: 48px 56px;
  border-radius: 8px;
  font-size: 18px;
  max-width: 1240px;
  margin: auto;
  margin-bottom: 96px;

  ${({ theme }) => theme.mq.mobile} {
    padding: 24px 32px;
    margin-left: -16px;
    margin-right: -16px;
  }
`;

export const SectionWIthBoxes = styled.div`
  background: #edeff3;
  padding-top: 104px;
  padding-bottom: 104px;

  ${({ theme }) => theme.mq.mobile} {
    padding: 0
  }
`;

const fotokiosk = ({ data: { qrCode: { publicURL } } }) => (
  <SectionWrapper isColumn>
    <FotoKioskContainer>
      <FotoKioskLead isColumn>
        <StyledTitle style={{ color: '#ca901e', marginTop: 0 }}>Foto kiosk</StyledTitle>
        <p>
          Foto kiosk to nowość w naszej ofercie – możliwość zamówienia ulubionych zdjęć bez wychodzenia z
          domu.
          Prosta w obsłudze aplikacja umożliwia szybkie i wygodne wybranie zdjęć z telefonu oraz złożenie
          zamówienia.
        </p>
        <br></br>
        <p>
          Nie musisz się martwić o odbiór zamówienia – możesz je odebrać osobiście w naszym zakładzie lub
          skorzystać z
          opcji wysyłki.
          Wkrótce wprowadzimy także możliwość wysyłki za pomocą paczkomatu InPost, aby jeszcze bardziej
          ułatwić proces
          zamawiania.
        </p>
        <br></br>
        <p>
          Nie zwlekaj, już teraz możesz złożyć zamówienie na swoje ulubione zdjęcia!
        </p>
      </FotoKioskLead>
      <Box
        id="see-more"
        style={{
          marginBottom: '0',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          maxWidth: '1240px',
        }}
      >
        <StyledTitle style={{ paddingBottom: '40px' }}>Zobacz jakie to proste!</StyledTitle>

        <FotokioskCards />

      </Box>
    </FotoKioskContainer>
    <SectionWIthBoxes>
      <Box style={{
        paddingTop: '84px',
        paddingLeft: '32px',
        paddingRight: '32px',
        flexDirection: 'column',
        maxWidth: '800px',
        margin: '0 auto',
      }}
      >
        <BoxWithPseudoElement isColumn>
          <StepSquareHeader>01</StepSquareHeader>
          <h2 style={{ marginBottom: '16px' }}>
            Pobierz aplikacje na telefon za pomocą której złożysz
            zamówienie.
          </h2>
          <p style={{ marginBottom: '24px' }}>Alikacje możesz pobrać z AppStore lub Google Play</p>
          <Box style={{ gridGap: '16px' }}>
            <a
              href="https://apps.apple.com/pl/app/mobile-photo-kiosk/id1212108239?l=pl"
              target="_blank"
              rel="noreferrer"
            >
              <AppleStoreLogo width={200} height={80} />
            </a>

            <Box>
              <a
                href="https://play.google.com/store/apps/details?id=eu.pixeltech.mobilephotokiosk&hl=pl&gl=US"
                target="_blank"
                rel="noreferrer"
              >
                <GooglePlayLogo width={200} height={80} />
              </a>
            </Box>

          </Box>
          <Box isColumn gap="16px" noMarginBottom>
            <p style={{ marginBottom: '16px' }}>Aby pobrać aplikacje możesz również użyć kodu QR</p>
            <img
              style={{ height: '160px' }}
              src={publicURL}
              alt="Qr code to download application to order photos"
            />
          </Box>
        </BoxWithPseudoElement>
        <BoxWithPseudoElement isColumn>
          <StepSquareHeader>02</StepSquareHeader>
          <h2 style={{ marginBottom: '16px' }}>
            Wybierz zdjęcia i złóż zamówienie
          </h2>
          <p style={{ marginBottom: '16px' }}>
            Dzięki prostej w obsłudze aplikacj szybko wybierzesz swoje ulubione zdjęcia i prześlesz je do
            nas.
          </p>
          <p style={{ marginBottom: '32px' }}>
            Zapłać za zdjęcia online - obsługujemy płatności za pośrednictwem
            Przelewy24
          </p>
          <Przelewy24Logo width={180} height={60} />
        </BoxWithPseudoElement>
        <BoxWithPseudoElement isColumn>
          <StepSquareHeader>03</StepSquareHeader>
          <h2 style={{ marginBottom: '16px' }}>
            Odbierz zamówienie
          </h2>
          <p>
            Zamówienie odbierzesz w naszym zakładzie lub to my wyślemy je do Ciebie.
            <br></br>
            Wkrótce w naszej ofercie pojawi się możliwość wysyłki za pomocą paczkomatu InPost.
          </p>
        </BoxWithPseudoElement>
      </Box>
      <Box
        isColumn
        style={{
          margin: '32px auto', maxWidth: '800px', padding: '0 24px',
        }}
      >
        <div className="container-with-video" style={{ width: '100%', marginBottom: '24px' }}>
          <h2>Zobacz jak to działa</h2>
          <iframe
            style={{ minHeight: '56px', width: '100%', height: '400px' }}
            src="https://www.youtube.com/embed/bZAjmQ63GBw"
          >
          </iframe>
        </div>
        <Link to="/regulamin" style={{ color: '#000' }}>Zapoznaj się z regulaminem Foto Kiosk</Link>
        <div className="regulation-link">
          <a href="Regulamin_fotokiosk_janik-mentel.pdf" download="" style={{ color: '#000' }}>
            Kliknij, aby pobrać regulamin w wersji
            <b> PDF</b>
          </a>
        </div>
      </Box>
    </SectionWIthBoxes>

  </SectionWrapper>
);

export const query = graphql`
    query {
       qrCode: file(relativePath: {regex: "/qrCode\/9174_QRcode.png/"}) {
            publicURL
        }
    }`;

export default fotokiosk;
