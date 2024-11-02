/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/css/*.{ts,css}", "./*.html", "./dict/ts/*.js", "./src/ts/*.ts"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite-typography'),
    // ...
  ],
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      visibility: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
};