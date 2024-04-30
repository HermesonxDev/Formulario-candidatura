/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "charcoal": "#282729",
        "midnight": "#051119",
        "cacau": "#191815"
      }
    },
  },
  plugins: [],
}

