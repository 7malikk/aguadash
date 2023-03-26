/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
    // "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens:{
        "mobile":"440px",
  
        "md":"768px",
  
        "lg":"1024px",
  
        "xl":"1280px",
  
      },
      widths:{
          100:"100px",
          40:"40px",
          fouty:"10px",
          70:"70px",
      },
      backgroundImage:{
        'login-bg': "url('/src/assets/blue.png')"
      }
    },
  },
  plugins: [],
}
