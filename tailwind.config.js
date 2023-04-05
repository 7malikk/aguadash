/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // "./public/**/*.{html,js}"
  ],
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1440px',
    },
    extend: {
      backgroundImage: {
        'login-bg': "url('/src/assets/blue.png')",
        'hero-bg': "url('/src/assets/Hero.jpg')",
      },
      colors: {
        primary: '#026583',
        hover: 'rgba(1, 78, 101, 1)',
        lightAsh: '#F7F9F9',
        skyBlue: '#E6F0F3',
        darkAsh: '#6D6D6D',
        processing: '#A86D0248',
        inTransit: '#139A0748',
      },
      fontFamily: {
        play: ['Playfair Display', 'serif'],
        lato: ['Lato', 'serif'],
      },
    },
  },
  plugins: [],
};
