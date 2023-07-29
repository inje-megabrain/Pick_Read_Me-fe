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
          primary: '#ddd6fe',
          secondary: '#5b21b6',
          accent: '#F87272',
          neutral: 'white',
          success: '#2b3137',
          'base-100': '#ffffff',
        },
      },
    ],
  },
};
