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
      colors: {
        primary: '#026583',
        hover: 'rgba(1, 78, 101, 1)',
        lightAsh: '#F7F9F9',
        skyBlue: '#E6F0F3',
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
