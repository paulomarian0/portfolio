/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    'xxs': { 'max': '320px', 'min': '0px' },
    'xs': { 'max': '480px', 'min': '320px' },
    'sm': { 'max': '640px', 'min': '480px' },
    'md': { 'max': '768px', 'min': '640px' },
    'lg': { 'max': '1024px', 'min': '768px' },
    'xl': { 'min': '1024px' },
  },
}