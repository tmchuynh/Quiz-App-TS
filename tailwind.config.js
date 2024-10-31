/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/*.{ts,css}", "./*.html", "./dict/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite-typography'),
    // ...
  ],
};