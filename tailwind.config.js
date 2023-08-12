/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-cerulean": "#007BA7",
        "soft-peach": "#FFE5B4",
        "sunset-orange": "#FD5E53",
        "deep-cerulean-lighter": "#008BB9",
        "deep-cerulean-dark": "#003344",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
