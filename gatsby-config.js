const path = require('path');

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Janik Mentel Studio',
    // siteUrl: '',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        failOnError: false,
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      },
    },
    'gatsby-plugin-styled-components',
    // {
    //     resolve: 'gatsby-plugin-google-analytics',
    //     options: {
    //         trackingId: 'gvkavrag7nip',
    //     },
    // },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/icons-components/favicon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src', 'assets'),
        components: path.join(__dirname, 'src', 'components'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'montserrat\:300,400,500,700',
          'cormorant garamond\:300,500',
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/icons-components/,
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: '@ccalamos/gatsby-source-googlemaps-static',
      options: {
        key: 'AIzaSyDzL_8yovRyqnN_QZdS15Ahwi1JlmnchRo',
        center: 'New York, NY',
      },
    },
    {
      resolve: 'gatsby-plugin-smoothscroll',
    },
  ],
};
