// const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer')
    ]
  };