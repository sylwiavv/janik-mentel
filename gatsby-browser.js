const React = require('react');
const { MainTemplate } = require('./src/templates/MainTemplate');

exports.wrapPageElement = ({ element, props }) => <MainTemplate {...props}>{element}</MainTemplate>;
// exports.shouldUpdateScroll = () => false;

// exports.shouldUpdateScroll = ({
//   routerProps: { location },
// }) => {
//   const { pathname } = location;
//
//   const scrollToTopRoutes = [];
//   if (pathname.includes('/galeria/')) {
//     scrollToTopRoutes.push(pathname);
//     window.scrollTo(0, 700);
//   }
//   return !scrollToTopRoutes.includes(pathname);
// };
