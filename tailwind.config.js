/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script/script.js*'],
  theme: {
    fontFamily: {
      lobster: ['Lobster', 'cursive'],
    },
    extend: {
      colors: {
        colorNav: 'rgba(173, 55, 29, 0.68)',
      },
    },
  },
  plugins: [],
};
