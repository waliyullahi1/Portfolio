/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#facc15",     // yellow
        secondary: "#11141b",   // dark
        tertiary: "#f55422",    // orange/red
      },
      fontFamily: {
        advert: ['Advert', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
