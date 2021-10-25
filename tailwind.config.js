const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#61F0A9',
        primarydarker: '#14d776',
        primarydarkerdarker: '#0b7b43',
        secondary: '#F26B38',
        secondarydarker: '#c33e0c',
        secondarydarkerdarker: '#6f2307',
        graySecondary: '#A2A2A6',
        grayPrimary: '#28282F'

      },
      fontFamily:{
        'text': ['Prompt','serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
        'header': ['Mukta', 'cursive'],
        'subheader': ['"Libre Franklin"','serif'],
      },
      screens: {
              'xs': '475px',
              ...defaultTheme.screens,
      }},
  },
  variants: {
    extend: {
             borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
