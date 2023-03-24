/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
    // "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      widths:{
          100:"100px",
          40:"40px",
          fouty:"10px",
          70:"70px",
      },
      colors:{

      },
      backgroundImage:{
        'login-bg': "url('/src/assets/blue.png')"
      }
    },
  },
  plugins: [],
}
