/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#232B2B",
        "secondary": "#DAA06D",
        "tertiary": "#30D5C8",
      },
      screens: {
        'lg': {'max': '2000px'},
        'sm': {'max': '800px'},
      }
    },
  },
  plugins: [],
};