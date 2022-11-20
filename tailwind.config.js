const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        marker: ['var(--font-marker)', ...fontFamily.sans],
      },
      colors: {
        primary: 'var(--color-primary)',
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        muted: 'var(--color-muted)',
      },
    },
  },
  plugins: [],
};
