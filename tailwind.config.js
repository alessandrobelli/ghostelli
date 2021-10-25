const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: '#A2A2A6',
      indigo: '#6161F0',
      red: '#F061A8',
      yellow: '#F0F061',
      green: '#61F0A9',
      pink: '#F061A8'
    },
    extend: {
      colors: {
        graySecondary: '#A2A2A6',
        grayPrimary: '#28282F',
        primary: '#61F0A9',
        myblue: '#6161F0',
        mypink: '#F061A8',
        myyellow: '#F0F061'

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
