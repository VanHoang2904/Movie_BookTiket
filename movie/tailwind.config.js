/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackrbga: "rgba(0,0,0,0.5)"
      },
      boxShadow: {
        '4': '0 0 1px 6px rgba(255, 9, 66, 0.5)',
      },
      borderWidth: {
        '20': '20px',
      }
    },
  },
  plugins: [],
});

