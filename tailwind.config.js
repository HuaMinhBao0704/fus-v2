/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fus-brand': '#1f9b90',
        'fus-brand-dark': '#10565F',
        'main-yellow': '#facd5a',
        'main-white': '#ffffff',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
