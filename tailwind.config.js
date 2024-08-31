/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      screens: {
        "lg-1300": "1300px",
      },
    },
  },
  plugins: [],
};
