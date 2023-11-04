/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'],
        'satoshi':['Satoshi', 'sans-serif'],
        'inter':['Inter','sans-serif'],
        'poppins':['Poppins','sans-serif'],
        'clash' : ['Wix Madefor Display', 'sans-serif'],
        'raleway' : ['Raleway','sans-serif']
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}