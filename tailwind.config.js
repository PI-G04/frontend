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
          300:'#703C6E',
          400:'#8C5AA6'
        },
        green:{
          100:'#B3C79D'
        },
        pink:{
          100:'#F2D1CE'
        }
      },
      fontFamily:{
        
        'title': ['Rajdhani', 'sans-serif'],

      },
    },
    
  },
  plugins: [],
}