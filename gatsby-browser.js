const React = require('react');
const { MainTemplate } = require('./src/templates/MainTemplate');

exports.wrapPageElement = ({ element, props }) => <MainTemplate {...props}>{element}</MainTemplate>;
exports.shouldUpdateScroll = () => true;

// exports.shouldUpdateScroll = ({
//   routerProps: { location },
// }) => {
//   const { pathname } = location;
//
//   const scrollToTopRoutes = [];
//   if (pathname.includes('/galeria/')) {
//     // scrollToTopRoutes.push(pathname);
//     // window.scrollTo(0, 1000);
//     return false;
//   }
//   return !scrollToTopRoutes.includes(pathname);
// };
