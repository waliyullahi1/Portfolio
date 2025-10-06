/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        advert: ['Advert', 'sans-serif'],
      },
      colors: {
        primary: "#facc15",
        secondary: "#11141b",
        tertiary: "#f55422",
      },
    },
  },
  plugins: [],
}