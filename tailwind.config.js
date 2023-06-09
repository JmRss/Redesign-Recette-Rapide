const purgecss = require('@fullhuman/postcss-purgecss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script/script.js', './recette.html'],
  theme: {
    fontFamily: {
      lobster: ['Lobster', 'cursive'],
    },
    extend: {
      colors: {
        colorNav: 'rgba(173, 55, 29, 0.68)',
        bgFooter: 'rgb(91, 5, 1)',
        textColorFooter: 'rgb(240,248,255)',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    purgecss({
      content: ['./index.html', './recette.html'],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
};
