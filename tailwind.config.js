/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
    // "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'login-bg': "url('/src/assets/blue.png')"
      }
    },
  },
  plugins: [],
}
