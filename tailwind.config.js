/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat:['Montserrat'],
        sans: ["var(--font-sophia)", ...fontFamily.sans]
      },
    },
  },
  plugins: [],
}

