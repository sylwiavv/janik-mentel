// import React from 'react';
// import { BoxWithPseudoElement, StepSquareHeader } from '../pages/fotokiosk';
//
// const DESCRIPTION = [
//   {
//     step: '01',
//     title: ' Pobierz aplikacje na telefon za pomocą której złożysz zamówienie.',
//     content: `<Box style={{ gridGap: '16px' }}>
//         <a
//           href="https://apps.apple.com/pl/app/mobile-photo-kiosk/id1212108239?l=pl"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <AppleStoreLogo width={200} height={80} />
//         </a>
//
//         <Box>
//           <a
//             href="https://play.google.com/store/apps/details?id=eu.pixeltech.mobilephotokiosk&hl=pl&gl=US"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <GooglePlayLogo width={200} height={80} />
//           </a>
//         </Box>
//
//       </Box>`,
//   },
//   {
//     step: '02',
//     title: 'Wybierz zdjęcia i złóż zamówienie',
//     content: `<p style={{ marginBottom: '16px' }}>
//         Dzięki prostej w obsłudze aplikacj szybko wybierzesz swoje ulubione zdjęcia i prześlesz je do
//         nas.
//       </p>
//       <p style={{ marginBottom: '32px' }}>
//         Zapłać za zdjęcia online - obsługujemy płatności za pośrednictwem
//         Przelewy24
//       </p>`,
//   },
//   {
//     step: '03',
//     title: 'Odbierz zamówienie',
//     content: `      <p>
//         Zamówienie odbierzesz w naszym zakładzie lub to my wyślemy je do Ciebie.
//         <br></br>
//         Wkrótce w naszej ofercie pojawi się możliwość wysyłki za pomocą paczkomatu InPost.
//       </p>`,
//   },
// ];
//
// export const FotokioskCardsDescription = () => (
//   <BoxWithPseudoElement isColumn>
//     {DESCRIPTION.map(({ step, title, content }) => (
//       <>
//         <StepSquareHeader>{step}</StepSquareHeader>
//         <h2 style={{ marginBottom: '16px' }}>{title}</h2>
//         {content}
//       </>
//     ))}
//   </BoxWithPseudoElement>
// );
