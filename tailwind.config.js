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
          200:'#7F507D',
          300:'#703C6E',
          400:'#371723',
          500:'#76417e',
          600:'#5F3445',
          
        },
        green:{
          100:'#2d717d',
          200:'#1e4850'
        },
        pink:{
          100:'#F2D1CE',
          200:'#C69999',
          300:'#D8B9B9',
          400:'#D6A4A0' 
          
        },
        blue:{
          100:'#4689ba'
        },
        white:{
          100:'#E2D9D9'
        }
      },
      fontFamily:{
        
        'title': ['Rajdhani', 'sans-serif']

      },
      borderRadius: {
      'nav': ['10rem','12px'],
      'height': '10px'
      },

    },
    
    
    
  },
  plugins: [],
}