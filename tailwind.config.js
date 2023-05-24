/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#2dba4e',
          secondary: '#2b3137',
          success: '#2b3137',
          'base-100': '#ffffff',
        },
      },
    ],
  },
};
