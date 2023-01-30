/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'colorPrimary': '#010F1C',
        'colorSecondary': '#EB0029',
        'colorQuaternary': '#F2C94C',
      },

      fontFamily: {
        'poppins': ['Poppins', 'Arial', 'sans-serif', 'system-ui'],
        'rubik': ['Rubik', 'Poppins', 'Arial', 'sans-serif', 'system-ui'],
        'lobster-two': ['Lobster Two', 'Poppins', 'Arial', 'sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
