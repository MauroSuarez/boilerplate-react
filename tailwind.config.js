const defaultTwTheme = require('./src/themes/default-theme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: defaultTwTheme,
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
