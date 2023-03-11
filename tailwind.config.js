/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        Basic: '#5268F4',
      },
      backgroundImage: {
        'hero-pattern': '/BG.png',
      }
    },
  },
  plugins: [],
}
