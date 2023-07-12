/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        moon: "url('/img/moon.svg')",
        sun: "url('/img/sun.svg')",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        twitterBlue: "#1da1f2",
        bgDark: "#121214",
      },
      color: "#1da1f2",
    },
  },
  plugins: [],
};
