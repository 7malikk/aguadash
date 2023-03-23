/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#026583',
        hover: 'rgba(1, 78, 101, 1)',
        lightAsh: '#F7F9F9',
        skyBlue: '#E6F0F3',
      },
      fontFamily: {
        play: ['Playfair Display', 'serif'],
        lato: ['Lato', 'serif'],
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/Hero.jpg')",
      },
    },
  },
  plugins: [],
};
