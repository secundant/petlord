const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{css,js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      primary: colors.purple,
      secondary: colors.blue,
      ...colors
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
