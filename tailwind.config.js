/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
  theme: {
    extend: {
      fontFamily:{
        mt:["Arial Rounded MT", "sans-serif"],
        mtb:["Arial Rounded MT Bold", "sans-serif"],
        noto:["Noto Sans Arabic", "sans-serif"],


      }
    },
    
  },
  plugins: [],
}

