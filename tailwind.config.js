/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:{
          100:'#6D5A73',
          200:'#9A86B3',
          300: '#703C6E',
          400:'#f1e8e8',
          500:'#ee8781'
        },
        green:{
          100:'#B3C79D'
        }
      },
    },
  },
  plugins: [],
}