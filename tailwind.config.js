/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    
    extend: {
      
      animation: {
        // 'slow-spin': 'spin 10s linear infinite',
        'fast-spin': 'spin 1s linear infinite',
      },

      backgroundImage: {
        main: "url('./asset/aa.png')",
        bgblur: "url('./asset/hori.png')"
        
      },
     lineHeight:{
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
     },


       colors:{
    "lightGreen":"#00f5d4",
    "darkgray": "#262626",
    "white":"#ffffff",
    "black":"#000000",
    "hote-cinamon":"#cf6c2a",
    "dark-hote-cinemon":"#000000",
    "green-gossamer":"#56b193",
    "electric-violet":"#ede5ff",
    "dark-electric-violet":"#5706ac",
    "cherry-pie":"#c5a7ff"
    },
    
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],  
        pacifico: ['"Pacifico"', 'cursive'],
        lato: ['"Lato"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
   
  },
  plugins: [],
}

