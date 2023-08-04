/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
  plugins: [],
}