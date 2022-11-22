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
      keyframes: {
        'left-to-right': {
          '0%, 100%': {
            left: 0,
            transform: 'translateX(0)',
          },
          '50%': {
            left: '100%',
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'left-to-right': 'left-to-right 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
