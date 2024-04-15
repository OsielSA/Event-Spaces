/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'evsp': {
          '50': '#fef3f2',
          '100': '#fde5e3',
          '200': '#fdd0cb',
          '300': '#faafa7',
          '400': '#f58074',
          '550': '#8C3C34',
          '500': '#ea4d3d',
          '600': '#d83a2a',
          '700': '#b52e20',
          '800': '#96291e',
          '900': '#7d281f',
          '950': '#44100b',
        }
      }
    },
  },
  plugins: [],
}

