/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(100px)', },
          '100%': { transform: 'translate(0px)' },
        },
        fadeInLeft: {
          '0%': { transform: 'translateX(100px)', },
          '100%': { transform: 'translate(0px)' },
        },
        fadeInRight: {
          '0%': { transform: 'translateX(-100px)', },
          '100%': { transform: 'translate(0px)' },
        }
      }
    },
  },
  plugins: [],
});

